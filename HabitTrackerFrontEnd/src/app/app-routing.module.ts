import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { HabitPageComponent } from './habit-page/habit-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';

const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'habits', component:HabitPageComponent},
  {path: 'add', component:AddPageComponent},
  {path: 'tracking', component:TrackingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
