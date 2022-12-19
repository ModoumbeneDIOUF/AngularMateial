import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Url } from './url';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = new Url()
  baseUrl = this.url.url

  constructor(private http:HttpClient) { }

  getCategorie() {

    return this.http.get(this.baseUrl+'allCategory');

  }

  getFeaturedProduct() {

    return this.http.get(this.baseUrl+'featuredProducts');

  }

  getTrendingProducts() {

    return this.http.get(this.baseUrl+'trendingProducts');

  }

  getspecialOffreProducts() {

    return this.http.get(this.baseUrl+'specialOffreProducts');

  }

  getflashProducts() {

    return this.http.get(this.baseUrl+'flashProducts');

  }




}
