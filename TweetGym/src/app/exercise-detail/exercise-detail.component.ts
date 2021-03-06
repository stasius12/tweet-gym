import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../models/exercise';
import { ComunicationService } from '../comunication.service';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';
import {starMe, Cardio, HamburgerMe} from './exercise-detail';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {

  exercise: Exercise;
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
        this.exercise = dane;
        console.log(dane);
        setTimeout(() => {
          console.log('xD');
          starMe(dane.difficulty);
          Cardio(dane.cardio);
          //HamburgerMe();
  
        }, 100);

      },
      (error) =>{
        console.log(error);

      }
      );

     

  }

}
