import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {

  private baseURL = environment.apiURL;

  constructor(
    private httpClient: HttpClient
  ) {}

  register = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
  });

  submit(){
    this.httpClient.post(this.baseURL+"/rest-auth/registration/",
    {
    "username":  this.register.value.username,
    "email":  this.register.value.email,
    "password1":  this.register.value.password,
    "password2":  this.register.value.password2,
    "first_name":  this.register.value.firstName,
    "last_name":  this.register.value.lastName,
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

  ngOnInit() {}
}
