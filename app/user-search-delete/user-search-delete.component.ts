import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-user-search-delete',
  templateUrl: './user-search-delete.component.html',
  styleUrls: ['./user-search-delete.component.css']
})
export class UserSearchDeleteComponent implements OnInit {
  user: any;
  userId: any;
  

  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
    let resp = this.service.getUsers();
    resp.subscribe((data) => this.user = data);

  }

  public deleteUsers(userId : number){
    let resp= this.service.deleteUsers(this.userId);
    resp.subscribe((data) => this.user = data);
   } 

   public findUserById(){
    let resp= this.service.getUserById(this.userId);
    resp.subscribe((data) => this.user = data);
   }

}
