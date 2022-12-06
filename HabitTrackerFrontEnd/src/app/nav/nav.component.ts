import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    //userString: any = localStorage.getItem('userId');
    
    // userId = parseInt(this.userString);

    userId:number = 0;

  constructor(private UserSrv: UserService) { 
        this.userId = this.UserSrv.userId
  }

  ngOnInit(): void {
    
  }

  logOut(){
    localStorage.setItem('userId', '0');
    this.UserSrv.userId = 0;
  }
}
