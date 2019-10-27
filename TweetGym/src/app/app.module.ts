import { AlertModule } from "ngx-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TESTComponent } from "./test/test.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ExerciseDetailComponent } from "./exercise-detail/exercise-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { ExcOptionsComponent } from "./Components/exc-options/exc-options.component";
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TESTComponent,
    LogInComponent,
    ExerciseDetailComponent,
    SignUpComponent,
    UserProfileComponent,
    ExcOptionsComponent,
    HamburgerMenuComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
