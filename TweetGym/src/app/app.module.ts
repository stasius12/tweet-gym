import{AlertModule} from 'ngx-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TESTComponent } from './test/test.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TESTComponent,
    ExerciseDetailsComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
