import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {

  private baseURL = environment.apiURL;

  constructor(
    private as: AuthService
  ) {}

  register = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password1: new FormControl(''),
    password2: new FormControl(''),
  });

  submit(){
    this.as.registerUser(this.register.value)
  }

  ngOnInit() {}
}
