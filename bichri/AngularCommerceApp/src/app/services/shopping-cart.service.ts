import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Item, ShoppingCart } from './cart.service';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartDataList:any = []

  productList = new BehaviorSubject<any>([]);

  constructor( private httpClient: HttpClient) {

 }

 getProductData(){

   return this.productList.asObservable()

  }

  setProduct(product:any){

    this.cartDataList.push(...product)
    this.productList.next(product)
  }

  addToCart(product:any){


    this.cartDataList.push(product)
    this.productList.next(this.cartDataList)

    this.getTotalAmount()

    // console.log(this.cartDataList);

  }

  getTotalAmount(){

    let grandTotal: number = 0
    this.cartDataList.map((a:any)=>{

      grandTotal = grandTotal + Number(a.productPrice)


    })

    return grandTotal
  }

  // remove by one
  removeCartData(product:any){

    this.cartDataList.map((a:any, index:any)=>{

        if(product.id === a.id){
          this.cartDataList.splice(index,1)
        }
    })

    this.productList.next(this.cartDataList)
  }

  removeAllCart(){
    this.cartDataList = []
    this.productList.next(this.cartDataList)
  }
}
