import { Injectable } from '@angular/core';
import { Url } from './url';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = new Url()
  baseUrl = this.url.url

  constructor(private http:HttpClient) { }

  getCategorie() {

    return this.http.get(this.baseUrl+'allCategory');

  }

  addProduct(idCat:number, productName:string, productDesc:string, productPrice: string,productQty:string, image:string):Observable<any>{

    var formData: any = new FormData();
    formData.append("idCat", idCat);
    formData.append("productName", productName);
    formData.append("productDesc", productDesc);
    formData.append("productPrice", productPrice);
    formData.append("fileName", image);
    formData.append("productQty", productQty);


    return this.http.post<string>(this.baseUrl+'addProduct', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    )

  } errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getProduct() {

    return this.http.get(this.baseUrl+'products');

  }

  getOneProduct(id:number) {

    return this.http.get(this.baseUrl+'getOneProduct/'+id);

  }



  updateProduct(id:number, productQty:number, productPrice:number, status:string){

    return this.http.put(this.baseUrl+"updateProduct/"+id,{productQty,productPrice,status})
  }

  deleteProduct(id:number){

    return this.http.delete<any>(this.baseUrl+"deleteProduct/"+id)
  }

}



