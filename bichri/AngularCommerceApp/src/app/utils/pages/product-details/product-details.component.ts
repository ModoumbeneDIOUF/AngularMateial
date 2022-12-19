import { ShoppingCartService } from './../../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Url } from 'src/app/services/url';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  uri = new Url()
  imageUri = this.uri.uri

  idProd = 0
  products: any = []
  constructor(private actRoute: ActivatedRoute, private productService: ProductService,private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {

    this.actRoute.params.subscribe(routeParams => {
      this.getProductById(routeParams['idProduit']);
    });

  }

  getProductById(id:number){

    this.productService.getProductById(id)
      .subscribe(data => {

        // console.log(data);

         this.products =  data

         Object.assign(this.products, {quantity:1,total:this.products['products'][0].productPrice})

      })
  }

  addToCart(item:any){


     this.shoppingCartService.addToCart(item)
  }

}
