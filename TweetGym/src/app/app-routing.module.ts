import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LogInComponent } from "./log-in/log-in.component";
import { TESTComponent } from "./test/test.component";
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';

const routes: Routes = [
  { path: "", component: LogInComponent },
  { path: "test", component: TESTComponent },
  { path: "test/:id", component: ExerciseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
