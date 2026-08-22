import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import { resource } from  '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {


  constructor(private http:HttpClient) { }
  base_url:string="https://fake-store-api.mock.beeceptor.com"

  // https://fake-store-api.mock.beeceptor.com/api/users

  // getAllData(){
  //   return this.http.get(`${this.base_url}/api/users`);
  // }
  rxResourceData=rxResource({
    //this will return an observable
    loader:()=>this.http.get(`${this.base_url}/api/users`)
  })
  resourceData=resource({
    //fetch(`${this.base_url}/api/users`)-fetch method sends an HTTP request to the specified URL
    //then method is called after the response is received
    //response.json method passes the response data into json format
    //Promise<any> -Promise of type any is a type of assertion that tell us that the past adjacent 
    // data is returned as a promise of type any
    loader:()=>fetch(`${this.base_url}/api/users`).then(res=>res.json() as Promise<any>)
  })
}
