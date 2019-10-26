import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LogInComponent } from "./log-in/log-in.component";
import { TESTComponent } from "./test/test.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
  { path: "", component: SignUpComponent },
  { path: "test", component: TESTComponent },
  { path: "signup", component: SignUpComponent },
  { path: "login", component: LogInComponent },
  { path: "userprofile", component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
