import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-new-categorie',
  templateUrl: './new-categorie.component.html',
  styleUrls: ['./new-categorie.component.css']
})
export class NewCategorieComponent implements OnInit {

  categorieError = false
  messageErreur="";
  messageSuccess="";

  libelle!: string

  constructor(private catService:CategorieService) { }

  ngOnInit(): void {
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

  saveCategorie(){

    this.catService.addCategorie(this.libelle)
      .subscribe(response => {
        console.log(response)
          if(response == "successfully"){

            this.messageSuccess = "Categorie ajoutée avec success"
          }
          else{
            this.messageErreur = "Une erreur est intervenue"
          }
      })
  }

}
