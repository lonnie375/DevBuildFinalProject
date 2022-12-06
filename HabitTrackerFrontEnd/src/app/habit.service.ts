import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private http: HttpClient) { }

  getAllHabits(cb:any){
    this.http.get<Habit>('https://localhost:7198/habit').subscribe(cb);
  }

  getHabit(cb:any, id: any){
    this.http.get<Habit>(`https://localhost:7198/habit/${id}`).subscribe(cb); 
  }

  deleteHabit(cb: any, id: any){
    this.http.delete(`https://localhost:7198/habit/${id}`).subscribe(cb);
  }

  updateHabit(cb:any, hab: Habit){
    this.http.put<Habit>('https://localhost:7198/habit', hab).subscribe(cb);
  }

  addHabit(cb: any, hab: Habit){
    this.http.post<Habit>('https://localhost:7198/habit', hab).subscribe(cb);
  }

  getUserHabits(cb: any, id: number){
    this.http.get<Habit>(`https://localhost:7198/habit/all/${id}`).subscribe(cb); 
  }
}
