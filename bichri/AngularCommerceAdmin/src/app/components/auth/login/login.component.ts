import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = new User()

  passError = false;
  emailError = false;
  is_success = false;
  messageErrorPassword ='';
  messageErreur="";


  constructor( private auth_service:AuthServiceService,
              private router:Router,
              private toast:NgToastService
              ) { }

  ngOnInit(): void {


  }

  emailVerif(email:string){
    let i=0;
    if((email.endsWith("@gmail.com"))||(email.endsWith("@yahoo.com"))||(email.endsWith("@hotmail.com")) ||(email.endsWith("@hotmail.fr"))||(email.endsWith("@yahoo.fr"))){
      this.emailError = false
    }
    else{
      this.emailError = true
    }

  }

  passwordLong(pass1:string){
    if(pass1.length < 6){
      this.passError = true
      this.messageErrorPassword="minimun 6 caractéres"
  }
  else if(pass1.length >= 5){


      setTimeout(
        ()=>{
              this.passError = false
              this.messageErrorPassword=''
        },100
      )
  }
  }


  loginUser(){

    let email = this.user.email;
    let password = this.user.password;

    this.auth_service.loginUser(email,password)

        .subscribe(response => {

          console.log(response)
          if(response == "succefully"){

             this.showSuccess()

            localStorage.setItem('token','logged')
            this.router.navigate(["/home/dashboard"])

          }
          else{


            this.showError()

            // this.toast.error({detail:"Error",summary:"Login et/ou password incorecte",position:"t"})
          }


        })
  }

  showSuccess() {
    alert("sussess")
    this.toast.success({detail:"Success",summary:"This is Success", sticky:true,position:"tr"})
  }

  showError() {

     this.toast.error({detail:"ERROR",summary:'Your Error Message',sticky:true});
  }

}
