import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: User=new User("","","","","","","",""); //this user obj needs to pass in REST API call
  message:any;

  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
    
  }
  public registerNow(){
    let resp=this.service.addUser(this.user)
    resp.subscribe((data: any)=>this.message=data);

  }

}



