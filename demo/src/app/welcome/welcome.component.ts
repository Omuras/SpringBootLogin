import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  cUser = this.route.snapshot.params['username']
  message = 'Welcome back '
  constructor(private route : ActivatedRoute,private routeBack : Router) { }

  ngOnInit(): void {
  }

}
