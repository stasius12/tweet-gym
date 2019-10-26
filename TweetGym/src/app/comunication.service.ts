import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Exercise } from './models/exercise';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ComunicationService {

  constructor(
    private http: HttpClient
  ) { }

  getExercises(): Observable<any>{
    //const exercises = this.http.get('');
    return exercises
  }
}
