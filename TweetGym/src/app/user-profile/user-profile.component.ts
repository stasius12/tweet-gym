import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../models/exercise';
import { ComunicationService } from '../comunication.service';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {

  user: User;

  baseURL = environment.apiURL;

  constructor(
    private route: ActivatedRoute, 
    private es:ComunicationService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.es.getExerciseDetail(Number(id)).subscribe(
      (dane) =>{
        this.user = dane;
      },
      (error) =>{
        console.log(error);
      }
      );

  }

}
