import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userString: any = localStorage.getItem('userId');
  
  userId: number = parseInt(this.userString);

  constructor(private http: HttpClient) { }

  getAllUsers(cb: any){
    this.http.get<User>('https://localhost:7198/user').subscribe(cb); 
  }

  getOneUser(cb: any, id:any){
    this.http.get<User>(`https://localhost:7198/user/${id}`).subscribe(cb);
  }

}
