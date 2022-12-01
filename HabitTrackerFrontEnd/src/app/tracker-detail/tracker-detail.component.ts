import { Component, OnInit, Input, Output } from '@angular/core';
import { TrackingService } from '../tracking.service';
import { Tracking } from '../tracking';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';
import { outputAst } from '@angular/compiler';
import { Trackingresult } from '../trackingresult';



function getTimeLapse(tDate: Date) {
  let startDate: Date = tDate;
  let rightNow: Date = new Date();
  let timeDiff: number = Math.floor(startDate.getTime() - rightNow.getTime()) / (1000 * 3600 * 24);
  return timeDiff;
}



@Component({
  selector: 'app-tracker-detail',
  templateUrl: './tracker-detail.component.html',
  styleUrls: ['./tracker-detail.component.css']
})



export class TrackerDetailComponent implements OnInit {

  currList: Trackingresult[] = [];
  
  @Input() trackingItem: Tracking = {
    id: 0, 
    habit_id: 0, 
    date: new Date()
  };

  @Input() trackedHabit: Trackingresult = {
    id: 0,
    habit_id: 0,
    title: "" , 
    startDate: new Date, 
    endDate: new Date, 
    date: new Date
  };

  



  @Output() timeLapse: number = ((getTimeLapse(this.trackedHabit.startDate))/(( this.trackedHabit.endDate.getTime() - this.trackedHabit.startDate.getTime()) / (1000 * 3600 * 24) ) *100); //since beginning 

  @Output() trackRecord: number = 0;



 

  constructor() { }

  ngOnInit(): void {
  }

}
