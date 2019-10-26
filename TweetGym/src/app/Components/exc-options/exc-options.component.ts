import { Component, OnInit } from '@angular/core';
import { displayArr } from './exc-options-component';


@Component({
  selector: 'app-exc-options',
  templateUrl: './exc-options.component.html',
  styleUrls: ['./exc-options.component.css']
})
export class ExcOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    displayArr();
    }

}

