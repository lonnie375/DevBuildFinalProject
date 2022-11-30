import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {

  TheList: Habit[] = [];

  constructor(private habitsrv: HabitService) { }

  ngOnInit(): void {
    this.refresh();
    
  }

  refresh() {
    this.habitsrv.getAllHabits(
      (result: Habit[]) => {
        this.TheList = result;
      }
    )
  }

}
