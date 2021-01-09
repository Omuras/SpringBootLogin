import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BasicAuthService} from "../service/basic-auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'randomThing';
  password = '';
  message = '';
  errorMessage = 'invalid login';
  invalidUser = false;
  currUser = ''


  constructor(private router: Router,
              private basicAuthService: BasicAuthService
  ) {
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  CheckLogin() {

    this.basicAuthService.executeAuthService(this.username, this.password).subscribe(
      data => {
        console.log("Data");
        this.router.navigate(['welcome', this.username]);
        sessionStorage.setItem('AuthenticatedUser', this.username);
        this.invalidUser = false;
      },
      error => {
        console.log("error");
        this.invalidUser = true;
      }
    )

  }


}
