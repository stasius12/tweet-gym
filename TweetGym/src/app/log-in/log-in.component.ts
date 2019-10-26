import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private baseURL = environment.apiURL;
  constructor(
    private httpClient: HttpClient
  ) {}

  login = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit(){
    this.httpClient.post(this.baseURL+"/rest-auth/login/",
    {
    "username":  this.login.value.username,
    "password":  this.login.value.password,
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
  ngOnInit() {
  }

}
