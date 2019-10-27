import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.apiURL;
  private CurrentUser: Object=null;

  constructor(
    private httpClient: HttpClient
  ) { }

  loginUser(obj){
    this.httpClient.post(this.baseURL+"/rest-auth/login/",
    {
    "username":  obj.username,
    "password":  obj.password,
    })
    .subscribe(
    data  => {
    localStorage.setItem("Token", data["key"])
    console.log(data)
    this.setCurrentUser();
    },
    error  => {
    console.log("Error", error);  
    }   
    );
  }

  registerUser(obj){
    console.log(obj)
    this.httpClient.post(this.baseURL+"/rest-auth/registration/",
    {
    "username":  obj.username,
    "email":  obj.email,
    "password1":  obj.password1,
    "password2":  obj.password2,
    "first_name":  obj.firstName,
    "last_name":  obj.lastName,
    })
    .subscribe(
    data  => {
    console.log("POST Request is successful ", data);
    },
    error  => {
    console.log("Error", error);  
    }   
    );
  }

  setCurrentUser(){
    
    this.httpClient.get(this.baseURL+"/users/detail/").subscribe(
      data  => {
        this.CurrentUser=data;
      },
      error  => {
      console.log("Error", error);  
      }   
      );
  }

  isLogged(){
    if (localStorage.getItem('Token'))
    {
      if(this.CurrentUser==null){
        
        this.setCurrentUser();
      }
      return true
    }
    else{
      return false
    }
  }

  logout(){
    if(this.getToken()){
    localStorage.removeItem('Token')
    }
    console.log("Logout");
    this.CurrentUser=null;
  }

  getToken(){
    return localStorage.getItem('Token')
  }

  getCurrentUser(){
    return this.CurrentUser
  }

}
