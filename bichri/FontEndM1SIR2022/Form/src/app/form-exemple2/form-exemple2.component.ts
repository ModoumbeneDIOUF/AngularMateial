import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-exemple2',
  templateUrl: './form-exemple2.component.html',
  styleUrls: ['./form-exemple2.component.css']
})
export class FormExemple2Component implements OnInit {

  title = 'Template driven forms';


  cityList: any[] = [

    {id:"1", name:'Dakar'},
    {id:"2", name:'Thies'},
    {id:"3", name:'Mbour'},
  ];

  contact!: Contact;

  ngOnInit() {

    this.contact = {
      firstname: "Saliou",
      lastname: "Faye",
      email: "saliou@gmail.com",
      gender: "male",
      isMarried: true,
      city: "2",
      address: { quartier: "Diaxao", rue: "Sans solel", pincode: "400050" }
    };

  }

  onSubmitForm() {
    console.log(this.contact);
  }


  setDefaults() {
    this.contact = {
      firstname: "Toto",
      lastname: "Toto",
      email: "toto@gmail.com",
      gender: "male",
      isMarried: true,
      city: "1",
      address: { quartier: "Medina", rue: "rue 26 ", pincode: "400051" }
    };
  }


  reset(contactForm :any) {
    contactForm.resetForm();
  }

}

export class Contact {
  firstname!: string
  lastname!: string
  email!: string
  gender!: string
  isMarried!: boolean
  city!: string
  address!: {
    quartier: string
    rue: string
    pincode: string
  }
}


