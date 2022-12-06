import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tracking } from './tracking';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }

  getAllTracking(cb:any){
    this.http.get<Tracking>('https://localhost:7198/tracker').subscribe(cb);
  }

  addTracking(cb:any, track: Tracking){
    this.http.post<Tracking>('https://localhost:7198/tracker', track).subscribe(cb);
  }

  deleteTracking(cb:any, id: any){
    this.http.delete(`https://localhost:7198/tracker/${id}`).subscribe(cb); 
  }
}


