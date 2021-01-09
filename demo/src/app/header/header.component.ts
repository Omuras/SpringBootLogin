import { Component, OnInit } from '@angular/core';
import {BasicAuthService} from "../service/basic-auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLogged : boolean= false;

  constructor(public basicAuth : BasicAuthService) { }

  ngOnInit(): void {
    this.isUserLogged = this.basicAuth.userLogged();
  }

}
