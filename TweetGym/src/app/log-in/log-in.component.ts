import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private baseURL = environment.apiURL;
  constructor(
    private as: AuthService
  ) {}

  login = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit(){
    this.as.loginUser(this.login.value);
  }

  ngOnInit() {
  }

}
