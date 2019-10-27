import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Exercise } from '../models/exercise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})

export class ExerciseService{

  private baseURL = environment.apiURL;
  
  constructor(
    private http: HttpClient
  ) { }

  getExercises(): Observable<any>{
    const exercises = this.http.get(`${this.baseURL}/exercises/`);
    return exercises
  }

  getExerciseDetail(id: number): Observable<any>
  {
    const exercises = this.http.get(`${this.baseURL}/exercises/${id}/`);
    return exercises
  }

}