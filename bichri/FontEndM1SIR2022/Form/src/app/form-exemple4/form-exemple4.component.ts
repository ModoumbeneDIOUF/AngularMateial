import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-form-exemple4',
  templateUrl: './form-exemple4.component.html',
  styleUrls: ['./form-exemple4.component.css']
})
export class FormExemple4Component implements OnInit {

  title = 'Angular Reactive forms';

  contactForm:any;
  formBuilder: FormBuilder = new FormBuilder;

  constructor() {


    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email,]],
      gender: ['', [Validators.required]],
      isMarried: [''],
      country: ['', [Validators.required]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required,Validators.maxLength(4)]],
      })
    });
  }
  ngOnInit(): void {

  }


  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get city() {
    return this.contactForm.get("address")!.get('city');
  }

  get street() {
    return this.contactForm.get("address")!.get('street');
  }

  get pincode() {
    return this.contactForm.get("address")!.get('pincode');
  }


  countryList: any[] = [
    {id:"1", name:'Senegal'},
    {id:"2", name:'Mali'},
    {id:"3", name:'Gambie'},
  ];

  onSubmit() {
    console.log(this.contactForm.value);
  }

}


