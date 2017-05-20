import { Component } from '@angular/core';

import { AuthHttp, AuthConfig, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PHP JWT!';
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http:Http) {
    
  }

  getToken(){
    this.http.get("http://localhost:80/jwt").toPromise()
    .then((response:Response)=>{
      console.log(response["_body"]);
      let token = JSON.parse(response["_body"]);
      localStorage.setItem("token",token["token"]);
    }).catch(error=>console.log(error));
    
  }


  checkToken(){
    console.log(tokenNotExpired());
  }

  public getExpirationDate()
  {
    
    try {
      console.log('getExpirationDate', this.jwtHelper.getTokenExpirationDate(localStorage.getItem("token")))
      return this.jwtHelper.getTokenExpirationDate(localStorage.getItem("token"));
    } catch (error) {
      return null;
    }
  }
}
