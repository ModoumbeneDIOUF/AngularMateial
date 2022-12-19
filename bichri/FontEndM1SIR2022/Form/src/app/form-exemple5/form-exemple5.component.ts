import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-exemple5',
  templateUrl: './form-exemple5.component.html',
  styleUrls: ['./form-exemple5.component.css']
})
export class FormExemple5Component implements OnInit {

  user = new User();

  passError!: boolean ;

  passConfirmError!: boolean ;

  emailError!: boolean;

  is_success!: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  emailVerif(email:string){

    if((email.endsWith("@gmail.com"))||(email.endsWith("@yahoo.com"))||(email.endsWith("@hotmail.com")) ||(email.endsWith("@hotmail.fr"))||(email.endsWith("@yahoo.fr"))){
      this.emailError = false
    }
    else{
      this.emailError = true
    }

  }
  passwordLong(pass1:string){


    if(pass1.length < 6){
      this.passError =  true

  }
  else if(pass1.length >= 5){
      setTimeout(
        ()=>{
              this.passError =  false

        },100
      )
  }


  if((this.user.passwordConfirmation != undefined) && (this.user.passwordConfirmation != pass1)){


        this.passConfirmError =  true
      }
      else{
        this.passConfirmError =  false
      }




  }


  passwordToConfirm(pass1:string, pass2:string){
    if(pass1 != pass2){
      this.passConfirmError=true
    }else{
      this.passConfirmError=false
    }

  }

  loginMy()
  {
     let email = this.user.email;
     let password = this.user.password;
     console.log(email, password)
}

}

export class User{


  email!:String;
  password!:String;
  passwordConfirmation!:string

}

