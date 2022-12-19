import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Url } from './url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = new Url()
  baseUrl = this.url.url

  constructor(private http:HttpClient) { }

  getProductByCategory(idCat:number) {

    return this.http.get(this.baseUrl+'productByCategory/'+idCat);

  }


  getProductById(idProd:number) {

    return this.http.get(this.baseUrl+'productById/'+idProd);

  }


}
