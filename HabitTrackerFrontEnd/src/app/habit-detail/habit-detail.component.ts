import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Habit } from '../habit';
import { Tracking } from '../tracking';
import { TrackingService } from '../tracking.service';
import { UserService } from '../user.service';
import { formatDate } from '@angular/common';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-habit-detail',
  templateUrl: './habit-detail.component.html',
  styleUrls: ['./habit-detail.component.css']
})
export class HabitDetailComponent implements OnInit {

  CategoryList: Category[] = [];
  TrackerList: Tracking[] = [];
  





  // Edit habit form variables 
  editMode: boolean = false;
  editTitle: string = "";
  editCategory_id: number = 0;
  editAmount: string = ""; 
  editStartDate: Date = new Date;
  editEndDate: Date = new Date;
  editDescription: string = "";
  editCompleteHabit: boolean = true;

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

    // Pre-Pop date value fix
    prePopStartDate: string = '';
    prePopEndDate: string = '';

    
//   editHabitObj: Habit = {
//     id: 0,
//     users_id: 0,
//     title: "", 
//     category_id: 0, 
//     amount: "",
//     startDate: new Date(), 
//     endDate: new Date(), 
//     description: ""
// }




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
      }
    );
  }

  editHabit(){
    // Pre-Pop date value fix
    this.prePopStartDate = this.habit.startDate.toString().substring(0,10);

    this.prePopEndDate = this.habit.endDate.toString().substring(0,10);
    
    this.editTitle = this.habit.title;
    this.editCategory_id = this.habit.category_id;
    this.editAmount = this.habit.amount; 
    this.editDescription = this.habit.description;
    // this.editCompleteHabit = true;
    
    this.editMode = true


  }

 deleteHabit(){
  // if(confirm("Are you sure you want to do that?")){
    
  //   this.delete.emit(this.habit.id);
  // }

  this.delete.emit(this.habit.id);
 }

 cancelEdit(){
  this.editMode = false;

  this.editTitle = "";
  this.editCategory_id = 0;
  this.editAmount = ""; 

  this.editStartDate = new Date();
  this.editEndDate = new Date();
  this.editDescription = "";
  this.editCompleteHabit = true;
}

saveEdit(){
let changedHabit: Habit = {
  id: this.habit.id,
  users_id: this.habit.users_id,
  title: this.editTitle, 
  category_id: this.editCategory_id, 
  amount: this.editAmount,
  startDate: this.editStartDate, 
  endDate: this.editEndDate, 
  description: this.editDescription
}

// this.editHabitObj.id = this.habit.id;
// this.editHabitObj.users_id = this.habit.users_id
  this.update.emit(changedHabit);
  //this.cancelEdit();
  this.editMode = false;

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

  let foundId = this.findId(this.TrackerList, this.habit.id)

// PART 2 
// If a tracking result was found for todays date remove it from the DB 
// Otherwise add a new tracking to the DB

  if(foundId > 0) {
    console.log('made it to if statement for the delete')
    this.TrackSrv.deleteTracking(
      
      () => {
         this.refresh();
         
      }, 
      foundId);
  }
  else {
    console.log('about to add one tracker')
    this.TrackSrv.addTracking(
      () => {
        this.refresh();
      }, newTracking
    )

  } 

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