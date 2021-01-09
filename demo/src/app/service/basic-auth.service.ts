import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) {
  }

  executeAuthService(username, password) {
    let basicHeaderString = 'Basic ' + window.btoa(username + ":" + password);
    let headers = new HttpHeaders({
      Authorization: basicHeaderString
    })
    return this.http.get<AuthBean>(`http://localhost:8080/userLogin`,{headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('AuthenticatedUser',username);
          return data;
        }
      )
    );

  }

 userLogged(){
    let user = sessionStorage.getItem('AuthenticatedUser');
    return !(user==null);
 }
}

export class AuthBean {
  constructor(public message: String) {
  }
}
