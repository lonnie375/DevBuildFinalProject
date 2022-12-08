import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Habit } from '../habit';
import { Tracking } from '../tracking';
import { TrackingService } from '../tracking.service';
import { UserService } from '../user.service';
import { formatDate } from '@angular/common';

// Font Awesome additions
import { faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { faTrashCan} from '@fortawesome/free-regular-svg-icons';
import { faEdit} from '@fortawesome/free-regular-svg-icons';
import { faFloppyDisk} from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle} from '@fortawesome/free-regular-svg-icons';
import { faCaretSquareDown, faCaretSquareUp} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-habit-detail',
  templateUrl: './habit-detail.component.html',
  styleUrls: ['./habit-detail.component.css']
})
export class HabitDetailComponent implements OnInit {


  // Using FontAwesome 
faCheckCircle = faCheckCircle;
faTrashCan = faTrashCan;
faEdit = faEdit;
faFloppyDisk = faFloppyDisk;
faXmarkCircle = faXmarkCircle;
faCircleCheck = faCircleCheck
faCaretSquareDown = faCaretSquareDown;
faCaretSquareUp = faCaretSquareUp;



  CategoryList: Category[] = [];
  TrackerList: Tracking[] = [];
  

  // Edit habit form variables 
  editMode: boolean = false;
  editTitle: string = "";
  editCategory_id: number = 0;
  editAmount: string = ""; 
  editStartDate: string= '';
  editEndDate: string= '';
  editDescription: string = "";

  theFoundId: number = 0;

  detailsVisible: boolean = false;

  @Input() habit: Habit = {
      id: 0,
      users_id: 0,
      title: "", 
      category_id: 0, 
      amount: "",
      startDate: new Date(), 
      endDate: new Date(), 
      description: ""
  }

  // trying to get a boolean to control the checkmark icon on html page
  // checkmarkStatus: boolean = this.checkMark(this.TrackerList, this.habit.id);
  checkmarkStatus: boolean = false;

    

  @Output() update: EventEmitter<Habit> = new EventEmitter<Habit>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();


  constructor(private catSrv: CategoryService, private UserSrv: UserService, private TrackSrv: TrackingService) {

   }

  ngOnInit(): void {
    this.refresh();
  }

 

  refresh() {
    this.catSrv.getAllCategory(
      (result: Category[]) => {
        this.CategoryList = result;
      }
    );

    this.TrackSrv.getAllTracking(
      (result: Tracking []) => {
        this.TrackerList = result;
        this.checkMark(this.TrackerList, this.habit.id);
      }
    );
  }

  checkMark(theList: Tracking[], habitId: number) {
    let todaysDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    let theMark: boolean = false;

    for (let index = 0; index < theList.length; index++) {
      if (theList[index].habit_id == habitId){
          if ( theList[index].date.toString().substring(0,10) == todaysDate.toString().substring(0,10))
          {
          theMark = true;
        }else { 
          theMark = false;
        }
      }
    }
    console.log(theMark);
  this.checkmarkStatus = theMark;
  
}

  viewDetails(){
    if (this.detailsVisible == true){
      this.detailsVisible = false;
    }
    else{
      this.detailsVisible = true;
    }
  }

  editHabit(){
    this.editTitle = this.habit.title;
    this.editCategory_id = this.habit.category_id;
    this.editAmount = this.habit.amount; 
    this.editStartDate =  this.habit.startDate.toString().substring(0,10);
    this.editEndDate = this.habit.endDate.toString().substring(0,10);
    this.editDescription = this.habit.description;

    this.editMode = true
  }

 deleteHabit(){
  if(confirm("Are you sure you want to do that?")){
    this.delete.emit(this.habit.id);
  }
 }

 cancelEdit(){
  this.editMode = false;

  this.editTitle = "";
  this.editCategory_id = 0;
  this.editAmount = ""; 
  this.editStartDate = '';
  this.editEndDate = '';
  this.editDescription = "";
}

saveEdit(){
let changedHabit: Habit = {
  id: this.habit.id,
  users_id: this.habit.users_id,
  title: this.editTitle, 
  category_id: this.editCategory_id, 
  amount: this.editAmount,
  startDate: new Date(this.editStartDate), // this was our fix for pre-populating this into the date input box. CASTING so it can go back to the SQL database
  endDate: new Date(this.editEndDate), 
  description: this.editDescription
}
  this.update.emit(changedHabit);
  this.cancelEdit();

}

deleteTracker(id: number){
  this.TrackSrv.deleteTracking(
    () => {
    }, id
  );
}


updateTracker(){
 let newTracking = {
    id: 0,
    habit_id: this.habit.id,
    date: new Date
  }

  this.theFoundId = this.findId(this.TrackerList, this.habit.id)

// PART 2 
// If a tracking result was found for todays date remove it from the DB 
// Otherwise add a new tracking to the DB

  if(this.theFoundId > 0) {
    console.log('made it to if statement for the delete')
    
    this.TrackSrv.deleteTracking(
      () => {
        this.refresh
      }, 
      this.theFoundId);
      this.checkmarkStatus = false;
  }
  else if(this.theFoundId == null || this.theFoundId <= 0){
    console.log('about to add one tracker')
    
    this.TrackSrv.addTracking(
      () => {
        this.refresh();
      }, newTracking
    )                               
    this.checkmarkStatus = true;
    
  } 
  window.location.reload(); // needed to reload the list because foundId was holding on to the last index after delete
}


  findId(theList: Tracking[], habitId: number): number {
      let todaysDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
      let foundId: number = 0;
      // PART 1 search all tracking results for the current habit_id 
      // when tracking date matches todays date return the tracking id 
      // if no matching date is found add the current habit ID to a new tracking object for it to be added to the DB

      for (let index = 0; index < theList.length; index++) {
        if (theList[index].habit_id == habitId){
            if ( theList[index].date.toString().substring(0,10) == todaysDate.toString().substring(0,10)){
            foundId = theList[index].id;
            console.log(foundId)
          }

        }
      }
    return foundId;
  }
}