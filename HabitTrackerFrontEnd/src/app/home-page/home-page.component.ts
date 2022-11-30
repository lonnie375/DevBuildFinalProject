import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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
  
  user: User = {
    id: 0,
    username: ''
  }

  @Output() sendId:EventEmitter<number> = new EventEmitter<number>();
  constructor(private UserSrv: UserService) {
    this.UserSrv.getAllUsers(
      (result: User[]) => {
        this.UserList = result;
      }
    )
   }


  ngOnInit(): void {

  }

  logIn(){
    this.sendId.emit(this.selectedId);
    
  }
}
