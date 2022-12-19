import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-exemple3',
  templateUrl: './form-exemple3.component.html',
  styleUrls: ['./form-exemple3.component.css']
})
export class FormExemple3Component implements OnInit {

  cityList: any[] = [

    {id:"1", name:'Dakar'},
    {id:"2", name:'Thies'},
    {id:"3", name:'Mbour'},
  ];


  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    city: new FormControl()
  })


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }


}
