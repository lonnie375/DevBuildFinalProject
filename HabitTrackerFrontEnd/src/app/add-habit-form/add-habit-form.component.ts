import { formatDate } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  newHabit: Habit = {
    id: 0, users_id: this.UserSrv.userId, title: '', category_id: 0, amount: '', startDate: new Date(), endDate: new Date() , description: ''
  };


  TheCategory: Category[] = []; 

  @Output() save: EventEmitter<Habit> = new EventEmitter<Habit>(); 

  constructor(private Categorysrv: CategoryService, private UserSrv: UserService) { 
    Categorysrv.getAllCategory(
      (result: Category[]) => {
        this.TheCategory = result; 
      }
    );
  }

  ngOnInit(): void { 
  }

  saveHabit(){
    this.save.emit(this.newHabit);
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
