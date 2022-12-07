import { Component, OnInit, Input, Output } from '@angular/core';
import { TrackingService } from '../tracking.service';
import { Tracking } from '../tracking';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';
import { outputAst } from '@angular/compiler';
import { Trackingresult } from '../trackingresult';
import { TrackingresultService } from '../trackingresult.service';

@Component({
  selector: 'app-tracker-detail',
  templateUrl: './tracker-detail.component.html',
  styleUrls: ['./tracker-detail.component.css']
})

export class TrackerDetailComponent implements OnInit {

 // timeLapse:number = 0;
  currList: Trackingresult[] = [];
  userHabList: Habit[] = [];
  
  @Input() trackingItem: Tracking = {
    id: 0, 
    habit_id: 0, 
    date: new Date()
  };


 @Input() trackedHabit: Habit = {
  id: 0, 
  users_id: 0,
  title: "", 
  category_id: 0,
  amount: "",
  startDate: new Date, 
  endDate: new Date, 
  description: ""
 };

  @Input() trackedResult: Trackingresult  = {
    id: 0,
    habit_id: 0,
    title: "" , 
    startDate: new Date() , 
    endDate: new Date(), 
    date: new Date()
  };



 trackRecord: number = 0;


  constructor(private TrackServ: TrackingresultService) { }

  ngOnInit(): void {
    this.TrackServ.getTrackingResult((result: Trackingresult[])=> this.currList = result, this.trackedHabit.id);
    
  };

  //this will send what percentage of time has passed
  getTimeLapse(aHabit: Habit) {
  let Start = new Date(aHabit.startDate).getTime();
  let End = new Date(aHabit.endDate).getTime();
  let current = new Date().getTime();

  let timeSpan = End - Start;
  current = current - Start;
  let timeDiff = current/timeSpan;
  timeDiff = Math.floor(timeDiff * 100);
  if(timeDiff < 100){
  return timeDiff;
  }else{return 100;}
  };

  getDaysLeft(aHabit: Habit){
    let Start = new Date(aHabit.startDate).getTime();
    let End = new Date(aHabit.endDate).getTime();
    let current = new Date().getTime();

    let timeSpan = End - Start;
    current = current - Start;

    let daysLeft = timeSpan - current;
    daysLeft = Math.floor(daysLeft/(1000*60*60*24));

    if (daysLeft >= 0){
      return daysLeft;
    }else{ return 0;}
  };

getSuccessRate(aHabit: Habit, aList: Trackingresult[]){
  let Start = new Date(aHabit.startDate).getTime();
  let current = new Date().getTime();
  current = current - Start;
  current = Math.floor(current/(1000*60*60*24));
  let totalRecords = aList.length;
  let percent = 0;
  if (current > 0){
  percent = totalRecords/current;
  percent =  Math.floor(percent * 10000);
  percent = percent/100;
  }
  return percent;
}

getSuccessDays(aList: Trackingresult[]){
  let totalRecords = aList.length;
  return totalRecords;
}

getDaysSoFar(aHabit: Habit){
  let Start = new Date(aHabit.startDate).getTime();
  let current = new Date().getTime();
  current = current - Start;
  current = Math.floor(current/(1000*60*60*24));

  return current;
}

getTrackbar(aHabit: Habit, aList: Trackingresult[]){
 let width: number = this.getSuccessRate(aHabit, aList);
 let outPut: string = width+"% " + "100% " ;
 return outPut;
}

}


