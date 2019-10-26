import { AlertModule } from "ngx-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TESTComponent } from "./test/test.component";

import { LogInComponent } from "./log-in/log-in.component";

import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TESTComponent,
    LogInComponent,
    ExerciseDetailComponent,
    SignUpComponent,
    UserProfileComponent
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
export class AppModule {}
