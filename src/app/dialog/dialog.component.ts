import { ApiService } from './../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList =  ["Brand new", "Second hand", "Refurbished"];
  productFormGroup !: FormGroup
  actionBtn : string = "Save"
  constructor(
            private formBuilder: FormBuilder,
            private api: ApiService,
            @Inject(MAT_DIALOG_DATA) public editData : any,
            private dialogRef: MatDialogRef<DialogComponent>,
           ) { }

  ngOnInit(): void {
      this.productFormGroup = this.formBuilder.group({

        productName : ['',Validators.required],
        category : ['',Validators.required],
        freshness : ['',Validators.required],
        price : ['',Validators.required],
        comment : ['',Validators.required],
        date : ['',Validators.required],

      })

      if(this.editData){
        this.productFormGroup.controls['productName'].setValue(this.editData.productName)
        this.productFormGroup.controls['category'].setValue(this.editData.category)
        this.productFormGroup.controls['freshness'].setValue(this.editData.freshness)
        this.productFormGroup.controls['price'].setValue(this.editData.price)
        this.productFormGroup.controls['date'].setValue(this.editData.date)

        this.actionBtn = "Update"
      }
  }

  addProduct(){

     if (!this.editData) {

      if (this.productFormGroup.valid) {

        this.api.postProducts((this.productFormGroup.value))

          .subscribe({
            next: (res)=>{
                alert("Product added successfully")
                this.productFormGroup.reset()
                this.dialogRef.close("save")
            },
            error:()=>{
              alert("Error while adding product")

            }
          })


      }

     } else {

      this.updateProduct()

     }

  }

    updateProduct(){


      this.api.putProducts(this.productFormGroup.value,this.editData.id)

      .subscribe({
        next: (res)=>{
            alert("Product updated successfully")
            this.productFormGroup.reset()
            this.dialogRef.close("save")
        },
        error:()=>{
          alert("Error while updating product")

        }
      })
    }






}
