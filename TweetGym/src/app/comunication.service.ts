<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { User } from "./models/user";
import { Exercise } from "./models/exercise";
import { HttpClient } from "selenium-webdriver/http";
import { Observable } from "rxjs";
=======
import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Exercise } from './models/exercise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> 9c05a1e8c7350353a1927953b2b5ef102c3a1496

@Injectable({
  providedIn: "root"
})
export class ComunicationService {
  constructor(private http: HttpClient) {}

<<<<<<< HEAD
  // getExercises(): Observable<any> {
  //   // const exercises = this.http.get('');
  //   // return exercises;
  // }
=======
  constructor(
    private http: HttpClient
  ) { }

  getExercises(): Observable<any>{
    const exercises = this.http.get('http://192.168.0.66:8000/exercises/');
    return exercises
  }
>>>>>>> 9c05a1e8c7350353a1927953b2b5ef102c3a1496
}
