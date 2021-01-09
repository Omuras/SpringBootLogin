import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class helloBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(
    private http: HttpClient
  ) {
  }

  getUserCredsBean(username, password) {
    let basicAuthHeaderString = this.createBasicAuthHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
        return this.http.get<helloBean>(`http://localhost:8080/user/${username}`,{headers });
    //console.log("user here")
  }

  createBasicAuthHeader() {
    let username = "root"
    let password = "root"
    let basicHeaderString = 'Basic ' + window.btoa(username + ":" + password);
    return basicHeaderString;
  }
}

