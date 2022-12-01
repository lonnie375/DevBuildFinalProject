import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trackingresult } from './trackingresult';

@Injectable({
  providedIn: 'root'
})
export class TrackingresultService {

  constructor(private http:HttpClient) { }

  getTrackingResult(cb:any, habID: number){
    this.http.get<Trackingresult>(`https://localhost:7198/tracker/${habID}`).subscribe(cb)
  }

}
