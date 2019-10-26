import { Component, OnInit } from '@angular/core';
import { Exercise } from '../models/exercise'
import { ComunicationService } from '../comunication.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TESTComponent implements OnInit {

  exercises: Exercise[];

  constructor(
    private es:ComunicationService
  ) { }

  ngOnInit() {
    this.fs.wszystkieFilmy().subscribe(
      (dane) =>{
        this.filmy = dane;
      },
      (error) =>{
        this.wiadomosc = "Wystąpił błąd połączenia z serwerem. Spróbuj później."
        console.log(error);
      }
      );
  }

}
