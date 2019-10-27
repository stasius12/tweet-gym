import { Component, OnInit } from '@angular/core';
import {starMe, Cardio, HamburgerMe} from './exercise-detail';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent{

  logged: Boolean;
  Nick: String;

  constructor(
    private as: AuthService
  ) { }

  ngOnInit() {
    HamburgerMe();
      this.reloadUserData()
    }

  reloadUserData(){
    this.logged = this.as.isLogged();
    let user = this.as.getCurrentUser();
    if(user){
      this.Nick = user["user"]["username"];
    }
    else{
      this.Nick = null;
    }
  }

  logout(){
      this.as.logout();
    }
}
