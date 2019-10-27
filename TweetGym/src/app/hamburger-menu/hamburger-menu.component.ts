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
  Nick: Object;

  constructor(
    private as: AuthService
  ) { }

  ngOnInit() {
    HamburgerMe();
    this.logged = this.as.isLogged();
    this.Nick = this.as.getCurrentUser();
    }

  logout(){
    this.as.logout();
  }

}
