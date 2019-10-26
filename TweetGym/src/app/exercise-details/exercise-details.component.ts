import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../models/exercise';
import { ComunicationService } from '../comunication.service';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})

export class ExerciseDetailsComponent implements OnInit {

  film: Film;
  baseURL = environment.apiURL;

  constructor(
    private route: ActivatedRoute, 
    private fs:FilmyService,
    private location: Location
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fs.getFilm(Number(id)).subscribe(
      (dane) =>{
        this.film = dane;
      },
      (error) =>{
        console.log(error);
      }
      );
  }
  
  back(){
    this.location.back();
  }

}
