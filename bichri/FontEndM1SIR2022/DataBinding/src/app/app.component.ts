import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBinding';

  firstName = "Saliou"
  lastName = "Diop"

  isDisabled = true

  action(){

    console.log("hello world");
    alert("Hello world !!!")

  }

}
