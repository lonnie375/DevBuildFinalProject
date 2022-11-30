import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-detail',
  templateUrl: './habit-detail.component.html',
  styleUrls: ['./habit-detail.component.css']
})
export class HabitDetailComponent implements OnInit {

  @Input() habit: Habit = {
      id: 0,
      users_id: 0,
      title: "test habit", 
      category_id: 2, 
      amount: "30 min",
      startDate: new Date(), 
      endDate: new Date(), 
      description: "have no idea how this category is going to display text from the database"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
