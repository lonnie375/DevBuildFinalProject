import { Component, OnInit, } from '@angular/core';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-habit-page',
  templateUrl: './habit-page.component.html',
  styleUrls: ['./habit-page.component.css']
})
export class HabitPageComponent implements OnInit {

  
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
  constructor(private HabitSrv: HabitService, private UserSrv: UserService) { }

  ngOnInit(): void {
  }


  updateHabit(habit: Habit){
    this.HabitSrv.updateHabit(
      () => {
        alert('Saved!')
      }, habit
    );
}

}
