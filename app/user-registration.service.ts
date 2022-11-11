import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  
  constructor(private http:HttpClient) { }//injecting httpClient to access the rest api
  public addUser(user : User){
    return this.http.post("http://localhost:8080/api/user/users",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/api/user/users");
  }

  public getUserById(user_id : number){
    return this.http.get("http://localhost:8080/api/user/users/"+user_id);
  }

  public putUser(user : User){
    return this.http.put("http://localhost:8080/api/user/users",user,{responseType:'text' as 'json'});
  }

  public deleteUsers(user_id : any){
    return this.http.delete("http://localhost:8080/api/user/users/"+user_id)
  }
  
}
