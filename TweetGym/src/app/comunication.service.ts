import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Exercise } from './models/exercise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: "root"
})

export class ComunicationService {

  private baseURL = environment.apiURL;
  
  constructor(
    private http: HttpClient
  ) { }

  getExercises(): Observable<any>{
    const exercises = this.http.get('http://192.168.0.66:8000/exercises/');
    return exercises
  }

  getExerciseDetail(id: number): Observable<any>
  {
    const exercises = this.http.get(`${this.baseURL}/exercises/${id}/`);
    return exercises
  }

}
