import { Component, OnInit } from '@angular/core';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  constructor(private Habitsrv: HabitService) { }

  ngOnInit(): void {
  }

  save(habit: Habit){
    this.Habitsrv.addHabit(
      () => {
      }, 
      habit
    );
  }

}
