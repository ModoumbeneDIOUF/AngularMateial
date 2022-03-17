import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postProducts(product:any){
      return this.http.post<any>("http://localhost:3000/productList",product)
  }


  getProducts(){
    return this.http.get<any>("http://localhost:3000/productList")
}

putProducts(product:any,id:number){
  return this.http.put<any>("http://localhost:3000/productList/"+id,product)
}

deleteProducts(id:number){
  return this.http.delete<any>("http://localhost:3000/productList/"+id)
}

}
