import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Exercise } from '../models/exercise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})

export class UserService {

  private baseURL = environment.apiURL;
  
  constructor(
    private http: HttpClient
  ) { }

  getallUsers(): Observable<any>{
    const users = this.http.get(this.baseURL+'users/');
    return users
  }

  getExerciseDetail(id: number): Observable<any>
  {
    const user = this.http.get(`${this.baseURL}/users/${id}/`);
    return user
  }
}
