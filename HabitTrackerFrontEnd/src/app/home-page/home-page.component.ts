import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  UserList: User[] = [];

  selectedId: number = 0;
  enteredUserName: string = '';

  loginError: boolean = true;
    
  user: User = {
    id: 0,
    username: ''
  }
  
  constructor(private UserSrv: UserService, private router: Router) {

   }


  ngOnInit(): void {
    this.refresh()
  }

  refresh(){
    this.UserSrv.getAllUsers(
      (result: User[]) => {
        this.UserList = result;
      }
    )
  }


  logIn(){
    for(let index: number = 0; index < this.UserList.length; index++){
      if (this.UserList[index].username == this.enteredUserName){
        this.selectedId = this.UserList[index].id
        this.loginError = false;
      }
    }

    if (this.loginError == false){
      localStorage.setItem('userId', this.selectedId.toString());
      this.UserSrv.userId = this.selectedId;
      this.router.navigate(['habits'])
      .then(() => {
        window.location.reload();
      });
    }
    else {
      this.router.navigate(['']);
      this.enteredUserName = '';
    }
  }

}
