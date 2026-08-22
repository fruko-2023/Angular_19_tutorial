import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService  {
  //start of code for consuming API

API_URL="https://jsonplaceholder.typicode.com/users";
//Inject the Httpclient into constructor in order to send HTTP request to the database
  constructor(private _http:HttpClient) { }

  getUserData()
  {
    return this._http.get(this.API_URL);
  }
  //END of it
userData={
  id:1,
  name:'John',
  username:'john',
  email:'john@gmail.com',
  subscription:'basic'
 }
 isEligibleForSubscription(){
  if(this.userData.subscription=='basic' && this.userData.email.endsWith('@gmail.com')){
    return true;
  }
  else
  {
    return false;
  }
 }
}
