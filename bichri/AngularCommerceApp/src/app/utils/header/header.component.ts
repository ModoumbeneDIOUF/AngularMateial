import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Url } from 'src/app/services/url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  uri = new Url()
  imageUri = this.uri.uri

  totalItem:number = 0
  products:any = []
  total:any = []
  categories: any = []

  constructor(private homeService: HomeService, private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {

    this.getCartProduct()
    this.getCartTotalItem()
    this.getAllCategories()

  }


  getAllCategories(){

    this.homeService.getCategorie().
    subscribe(response => {

        this.categories = response


    })
  }

  //nombre de produits dans le panier
  getCartTotalItem(){
    this.shoppingCartService.getProductData()
    .subscribe(res =>{
      this.totalItem = res.length
    })
  }

  //les produits qui sont dans le panier

  getCartProduct(){

    this.shoppingCartService.getProductData()
    .subscribe(res =>{

      this.products = res

      this.total = this.shoppingCartService.getTotalAmount()


    })
  }

  //supprimer  produit

  removeProduct(item:any){

    this.shoppingCartService.removeCartData(item)

  }

  //supprimer  produit

  removeCartProduct(item:any){

    this.shoppingCartService.removeAllCart()

  }

}
