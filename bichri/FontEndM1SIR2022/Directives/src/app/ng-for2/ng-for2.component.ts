import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for2',
  templateUrl: './ng-for2.component.html',
  styleUrls: ['./ng-for2.component.css']
})
export class NgFor2Component implements OnInit {


  title = "Notes des étudiants"

  etudiants = [
    {
      name:"Saliou Faye", email:"saliou@gmail.com",
      notes:[{ matier: "Java", note: 15},  { matier: "JSP", note: 5}, { matier: "Php", note: 10},  ],
    },

    {
      name:"Fatou Diop", email:"fatou@gmail.com",
      notes:[{ matier: "Java", note: 7},  { matier: "JSP", note: 5}, { matier: "Php", note: 13}, ],
    },

    {
      name:"Sidy Fall", email:"sidy@gmail.com",
      notes:[{ matier: "Java", note: 15},  { matier: "JSP", note: 15}, { matier: "Php", note: 6}, ],
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
