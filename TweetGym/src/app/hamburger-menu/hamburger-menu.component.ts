import { Component, OnInit } from '@angular/core';
import {starMe, Cardio, HamburgerMe} from './exercise-detail';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    HamburgerMe();
  }

}
