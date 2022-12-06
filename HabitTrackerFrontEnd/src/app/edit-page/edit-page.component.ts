import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Habit } from '../habit';
import { HabitPageComponent } from '../habit-page/habit-page.component';
import { HabitService } from '../habit.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

 updatedHabit: Habit = {
    id: 0,
    users_id: this.UserSrv.userId,
    title: "", 
    category_id: 0, 
    amount: "",
    startDate: new Date(), 
    endDate: new Date(), 
    description: ""
}
CategoryList: Category[] = [];

  @Output() update: EventEmitter<Habit> = new EventEmitter<Habit>();
  
  constructor(private CatSrv: CategoryService, private UserSrv: UserService) {

    CatSrv.getAllCategory(
      (result: Category[]) => {
        this.CategoryList = result;
      }
    );
  }

  ngOnInit(): void {
  }

  saveIt(){
    
    this.update.emit(this.updatedHabit)
  }

}
