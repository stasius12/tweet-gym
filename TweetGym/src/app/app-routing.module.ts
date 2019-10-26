import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LogInComponent } from "./log-in/log-in.component";
import { TESTComponent } from "./test/test.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ExerciseDetailComponent } from "./exercise-detail/exercise-detail.component";
import { ExcOptionsComponent } from "./Components/exc-options/exc-options.component";

const routes: Routes = [
  { path: "", component: SignUpComponent },
  { path: "test", component: TESTComponent },
  { path: "signup", component: SignUpComponent },
  { path: "login", component: LogInComponent },
  { path: "userprofile/:id", component: UserProfileComponent },
  { path: "exercise/:id", component: ExerciseDetailComponent },
  { path: "excoptions", component: ExcOptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
