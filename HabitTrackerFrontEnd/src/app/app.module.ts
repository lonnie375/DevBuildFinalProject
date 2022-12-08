import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPageComponent } from './add-page/add-page.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { HabitPageComponent } from './habit-page/habit-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';
import { TrackerListComponent } from './tracker-list/tracker-list.component';
import { TrackerDetailComponent } from './tracker-detail/tracker-detail.component';
import { AddHabitFormComponent } from './add-habit-form/add-habit-form.component';
import { NavComponent } from './nav/nav.component';
import { HabitCalendarBarComponent } from './habit-calendar-bar/habit-calendar-bar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    AddPageComponent,
    TrackingPageComponent,
    HabitPageComponent,
    HomePageComponent,
    HabitListComponent,
    HabitDetailComponent,
    TrackerListComponent,
    TrackerDetailComponent,
    AddHabitFormComponent,
    NavComponent,
    AddHabitFormComponent,
    HabitCalendarBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, FontAwesomeModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
