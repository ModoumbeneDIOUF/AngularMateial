import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-tp',
  templateUrl: './first-tp.component.html',
  styleUrls: ['./first-tp.component.css']
})
export class FirstTpComponent implements OnInit {



  films: any[] = []
  titre:string="";
  desciption:string="";

  ngOnInit() {
    this.Refresh();
  }

  remove(i:any) {
    this.films.splice(i,1);
  }

  addFilm() {

    this.films.push({ titre: this.titre, desciption: this.desciption})
    this.titre=""
    this.desciption=""

  }


  Refresh() {
    console.log("refresh")

    this.films = [
      { titre: "Titre 1", desciption: 'Description 1'},
      { titre: "Titre 2", desciption: 'Description 2'},
      { titre: 'Titre 3', desciption: 'Description 3'},

    ]
  }
}
