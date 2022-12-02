import { Component, OnInit, Input, Output } from '@angular/core';
import { TrackingresultService } from '../trackingresult.service';
import { Trackingresult } from '../trackingresult';
import { HabitService } from '../habit.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Habit } from '../habit';

@Component({
  selector: 'app-tracker-list',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.css']
})
export class TrackerListComponent implements OnInit {

@Output() HabIDList: Habit[] = [];


  //get list of Habit IDs by User ID

  //for each Habit ID send to Details for Tracking to pull list based on Habit ID


  constructor(private HabServ: HabitService, private UserSrv: UserService) { }

  ngOnInit(): void {
    this.HabServ.getUserHabits(
      (result: Habit[]) => {this.HabIDList = result}, this.UserSrv.userId)
  };
}
