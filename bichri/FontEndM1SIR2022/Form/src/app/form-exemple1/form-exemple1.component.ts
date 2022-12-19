import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-exemple1',
  templateUrl: './form-exemple1.component.html',
  styleUrls: ['./form-exemple1.component.css']
})
export class FormExemple1Component implements OnInit {

  listCity: any[] = [

    {id:"1", name:"Dakar"},
    {id:"2", name:"Thies"},
    {id:"3", name:"Bambey"},

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm:any) {
    console.log(contactForm.value);
  }


}


