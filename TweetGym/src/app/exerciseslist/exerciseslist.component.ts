import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise'

@Component({
  selector: 'app-exerciseslist',
  templateUrl: './exerciseslist.component.html',
  styleUrls: ['./exerciseslist.component.css']
})
export class ExerciseslistComponent implements OnInit {

  exercises: Exercise[];
  constructor(
    private es: ExerciseService
  ) { }

  ngOnInit() {
    this.es.getExercises().subscribe(
      (dane) =>{
        this.exercises = dane;
        console.log(dane);
        },
      (error) =>{
        console.log(error);

      }
      );

  }

}
