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
  selectedUsername: string = '';

  enteredUserName: string = '';

  loginError: boolean = false;
    
  user: User = {
    id: 0,
    username: ''
  }

  @Output() sendId:EventEmitter<number> = new EventEmitter<number>();
  
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
      }
      else {
        this.loginError = true;
      }
    }
    
    if (this.loginError == false){
      this.sendId.emit(this.selectedId);
      this.router.navigate(['habits']);
    }
    else {
      this.router.navigate(['']);
    }
  }
}
