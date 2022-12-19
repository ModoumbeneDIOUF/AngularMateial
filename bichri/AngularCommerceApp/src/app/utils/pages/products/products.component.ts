import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Url } from 'src/app/services/url';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  uri = new Url()
  imageUri = this.uri.uri

  idCat = 0
  products: any = []

  constructor(private actRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    // this.actRoute.params.subscribe((params: Params) => this.idCat = params['idCategory']);
    this.actRoute.params.subscribe(routeParams => {
      this.getProductByCat(routeParams['idCategory']);
    });

  }

getProductByCat(id:number){

  this.productService.getProductByCategory(id)
    .subscribe(data => {

      this.products =  data
    })
}
}
