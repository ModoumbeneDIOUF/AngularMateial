import { Injectable } from '@angular/core';
import { Url } from './url';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  url = new Url()
  baseUrl = this.url.url

  constructor(private http:HttpClient) { }


  addCategorie(libelle:String) {

    return this.http.post(this.baseUrl+'addCategory',{libelle},{responseType:'text'});

  }

  getCategorie() {

    return this.http.get(this.baseUrl+'allCategory');

  }

  getOnCategory(id:number) {

    return this.http.get(this.baseUrl+'getOnCategory/'+id);

  }



  updateCategory(libelle:String,id:number){

    return this.http.put(this.baseUrl+"updateCategory/"+id,{libelle})
  }

  deleteCategory(id:number){

    return this.http.delete<any>(this.baseUrl+"deleteCategory/"+id)
  }
}
