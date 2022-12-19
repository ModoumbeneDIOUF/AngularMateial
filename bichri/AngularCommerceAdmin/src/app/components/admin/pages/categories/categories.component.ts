import { CategorieService } from 'src/app/services/categorie.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any = []
  closeResult: string = '';

  idCat = 0
  categorie: any = []
  libelle!: string
  categorieError = false
  messageErreur="";
  messageSuccess="";

  constructor(private catService:CategorieService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllCategories()

    // this.router.navigate(["/dashboard"]).then(()=>window.location.reload())
  }

  getAllCategories(){

    this.catService.getCategorie().
    subscribe(response => {

        this.categories = response

        console.log(this.categories)
    })
  }



  open(content:any, id:number) {

    this.idCat = id
    this.getOneCategory(this.idCat)

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getOneCategory(id:number){

    this.catService.getOnCategory(id)
    .subscribe(response => {

      this.categorie = response
      this.libelle = this.categorie.categories[0]['libelle']


    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  categorieLong(libelle:string){
    if(libelle.length < 6){
      this.categorieError = true

  }
  else if(libelle.length >= 5){


      setTimeout(
        ()=>{
              this.categorieError = false
              this.messageErreur=''
        },100
      )
  }
  }

  updateCategory(){

    this.catService.updateCategory(this.libelle,this.idCat)
      .subscribe(response => {

      if(response == "successfully"){

        console.log(response)
      }
      })
  }

  deleteCat(id:number){

    this.catService.deleteCategory(id)
    .subscribe(response => {

    if(response == "successfully"){

      console.log(response)
    }
    })
  }

}
