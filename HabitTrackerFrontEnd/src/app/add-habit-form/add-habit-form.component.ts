import { formatDate } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-add-habit-form',
  templateUrl: './add-habit-form.component.html',
  styleUrls: ['./add-habit-form.component.css']
})
export class AddHabitFormComponent implements OnInit {

categoryValidation: string = "Please provide a category";
  
  newHabit: Habit = {
    id: 0, users_id: this.UserSrv.userId, title: '', category_id: 0, amount: '', startDate: new Date(), endDate: new Date() , description: ''
  };




  TheCategory: Category[] = []; 

  @Output() save: EventEmitter<Habit> = new EventEmitter<Habit>(); 
 

  constructor(private Categorysrv: CategoryService, private UserSrv: UserService, public fb: FormBuilder, public route: Router) { 
    Categorysrv.getAllCategory(
      (result: Category[]) => {
        this.TheCategory = result; 
      }
    );
  }


  ngOnInit(): void { 
  }

  saveHabit(){

    var now = new Date();

    if (this.newHabit.category_id == 0){
      alert("Please provide a category");
    }
    else if(this.newHabit.startDate < now || this.newHabit.endDate < now)
    {
      alert("Please provide a date");
    }
    else {
      this.save.emit(this.newHabit);
      this.route.navigate(['/habits']);
    }

  }

  clear(){
    this.newHabit.title = ''; 
    this.newHabit.category_id = 0; 
    this.newHabit.amount = ''; 
    this.newHabit.description = ''; 
    this.newHabit.startDate = new Date(); 
    this.newHabit.endDate = new Date();
  }

}
