import { Url } from './url';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url = new Url()
  baseUrl = this.url.url

  constructor(private http:HttpClient) { }


  loginUser(email:String,password:String) {

    return this.http.post(this.baseUrl+'login',{email,password},{responseType:'text'});


  }

  RegisterUser(prenom:String,nom:String,adresse:String,phone:String,email:String,password:String) {


    return this.http.post<string>(this.baseUrl+'auth/signup',{prenom,nom,adresse,phone,email,password},{ observe: 'response' });
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }


}
