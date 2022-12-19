import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit {

  categories: any = []

  product = new Product()

  productNameError = false;
  descError = false;
  qtyError = false;
  priceError = false;
  priceMinError = false;
  is_success = false;
  messageErrorLenght ='';
  message: any;
  messageErreur="";
  save = false;
  saveMessage = "";

  constructor(private product_s: ProductService) { }

  ngOnInit(): void {

    this.getAllCategories()
  }

  getAllCategories(){

    this.product_s.getCategorie().
    subscribe(response => {

        this.categories = response

        console.log(this.categories)
    })
  }

  onFileChange(event:any) {

    this.product.fileName = event.target.files[0];

  }


  productNameLong(name:string){
    if(name.length < 6){
      this.productNameError = true

  }
  else if(name.length >= 5){
      setTimeout(
        ()=>{
              this.productNameError = false

        },100
      )
  }
  }

  descLong(name:string){
    if(name.length < 10){

      this.descError = true

  }

  else if(name.length >= 9){
      setTimeout(
        ()=>{
              this.descError = false

        },100
      )
  }
  }

  priceVerify(price:number){
    if(price <= 0 ){

      this.priceError = true

  }
  else if(price < 99){

    this.priceMinError = true
  }

  else if(price >= 100){
      setTimeout(
        ()=>{
              this.priceError = false
              this.priceMinError = false

        },100
      )
  }
  }

  qtyVerify(qty:number){
    if(qty <= 0 ){

      this.qtyError = true

  }

  else if(qty >= 1){
      setTimeout(
        ()=>{
              this.qtyError = false

        },100
      )
  }
  }

  submitProduct() {

    let idCat = this.product.idCat
    let productName = this.product.productName
    let productDesc = this.product.productDesc
    let productPrice = this.product.productPrice
    let productQty = this.product.productQty

    this.product_s.addProduct(
       idCat,
       productName,
       productDesc,
       productPrice,
       productQty,
       this.product.fileName

    ).subscribe(response => {

      //console.log(response.status)
      if(response.status == 200){

        this.save = true;
        this.saveMessage ="Produit ajouté avec success";

        //  this.showSuccessMessage("Success","Produit ajouté avec success","success")

         this.product.productName = ""
         this.product.productDesc = ""
         this.product.productPrice = ""
         this.product.productQty = ""


      }




    }
    )
  }

}
