import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../models/exercise';
import { UserService } from '../services/user.service';
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
    private us:UserService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.us.getUserDetail(Number(id)).subscribe(
      (dane) =>{
        this.user = dane;
      },
      (error) =>{
        console.log(error);
      }
      );

  }

  


}
