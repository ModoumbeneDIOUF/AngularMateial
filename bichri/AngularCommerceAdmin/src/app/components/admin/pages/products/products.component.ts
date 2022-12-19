import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Url } from 'src/app/services/url';
import { ProductService } from './../../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  uri = new Url()
  imageUri = this.uri.uri

  products: any = []

  // pour les updates
  product: any = []
  idProd = 0
  productQty!: 0
  productPrice!: 0
  status!: string
  qtyError!: false
  priceError!:false
  statusError!: false


  constructor(private product_s: ProductService,private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {


    this.getAllProduct()
  }




  open(content:any, id:number) {

     this.idProd = id
      this.getOneProduct(this.idProd)

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

    }, (reason) => {

    });
  }


  getOneProduct(id:number){

    this.product_s.getOneProduct(id)
    .subscribe(response => {

      console.log(response)
      this.product = response
      this.productQty = this.product.products[0]['productQty']
      this.productPrice = this.product.products[0]['productPrice']
      this.status = this.product.products[0]['status']

    })
  }


  getAllProduct(){

    this.product_s.getProduct().
    subscribe(response => {

        this.products = response


    })
  }

  updateProduct(){

    this.product_s.updateProduct(this.idProd, this.productQty, this.productPrice, this.status)
      .subscribe(data => {

          console.log(data);

      })
  }


  deleteProd(id:number){

    this.product_s.deleteProduct(id)
    .subscribe(response => {

      //  this.router.navigate(["/home/product"]).then(()=>window.location.reload())
      if(response == "successfully"){

      console.log(response)

    }
    })
  }

}
