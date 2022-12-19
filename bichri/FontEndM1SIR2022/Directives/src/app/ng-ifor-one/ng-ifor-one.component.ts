import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ifor-one',
  templateUrl: './ng-ifor-one.component.html',
  styleUrls: ['./ng-ifor-one.component.css']
})
export class NgIForOneComponent implements OnInit {

title='Top 5 films'

  films: Film[] = [

    {titre:"L'homme du nord", desription:"Conte viking sombre et violent", principal:"Alexander", date:"Avril 2022"},
    {titre:"Inexploré", desription:"Chasseur de fortune ", principal:"Tom Holland", date:"Fevier 2022"},
    {titre:"Quart de jour", desription:"Chasse aux vampires", principal:"Jamie Foxx", date:"Juin 2022"},
    {titre:"L'homme de Toronto", desription:"Assassin international", principal:"Woody Harrelson", date:" Mars 2022"},
    {titre:"Train à grande vitesse ", desription:"Assassins mortels", principal:"Brad Pitt", date:"Janvier 2022"},

  ]
  constructor() { }

  ngOnInit(): void {
  }



}

class  Film {
  titre!: string
  desription!:string
  principal!: string
  date!:string
 }
