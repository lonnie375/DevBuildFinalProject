import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { CalendarLog } from '../calendar-log';
import { Habit } from '../habit';
import { Tracking } from '../tracking';
import { TrackingService } from '../tracking.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-habit-calendar-bar',
  templateUrl: './habit-calendar-bar.component.html',
  styleUrls: ['./habit-calendar-bar.component.css']
})
export class HabitCalendarBarComponent implements OnInit {

  // Import the specific habit 
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

  // List of all tracking results
  TrackerList: Tracking[] = [];

  // List of the past 7 calendar days
  CalendarDays: Date[] = [      
    new Date(new Date().setDate(new Date().getDate()-6)),
    new Date(new Date().setDate(new Date().getDate()-5)),
    new Date(new Date().setDate(new Date().getDate()-4)),
    new Date(new Date().setDate(new Date().getDate()-3)),
    new Date(new Date().setDate(new Date().getDate()-2)),
    new Date(new Date().setDate(new Date().getDate()-1))
  ];

  //Tracking Logs for the past 7 days
  WeekLog: CalendarLog[] = [];
  
 constructor(private TrackSrv: TrackingService) { 

 }

  ngOnInit(): void {
    this.refresh();
  }


  refresh() {

    //  Import the list of all tracking 
    this.TrackSrv.getAllTracking(
      (result: Tracking []) => {
        let newTrackerList = result;
        
        // adding tracking results to TrackerList based on habit id
        for (let index = 0; index < newTrackerList.length; index++) {
          if (newTrackerList[index].habit_id == this.habit.id){
              this.TrackerList.push(newTrackerList[index]);
            }
          }

          // looping through the past 7 days to identify if a Tracker exists matching that current day
          for (let i: number = 0; i < this.CalendarDays.length; i++){
            let newLog: CalendarLog = {
              day: this.CalendarDays[i],
              logged: false
            }
            let formattedDate: string = formatDate(this.CalendarDays[i], 'yyyy-MM-dd', 'en');

            // looping through the specific tracking results for designated habit to 
            // confirm if one exists for the specific day 
            for (let index: number = 0; index < this.TrackerList.length; index++){
              if (this.TrackerList[index].date.toString().substring(0,10) == formattedDate){
                newLog.logged = true;
              }
            }           

        this.WeekLog.push(newLog)      
        }
      }
    );  
  }
}
