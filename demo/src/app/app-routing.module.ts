import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path:'welcome/:username' , component : WelcomeComponent},
  {path:'login', component : LoginComponent},
  {path:'logout',component : LoginComponent},
  {path:'', component : LoginComponent},
  {path:'**', component : ErrorComponent} //En altta olucak her zaman yoksa sürekli istekleri alır

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
