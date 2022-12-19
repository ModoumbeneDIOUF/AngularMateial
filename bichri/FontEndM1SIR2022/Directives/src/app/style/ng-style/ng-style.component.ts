import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  color: string= 'black';

  status: boolean = false

  styleClass: StyleClass = new StyleClass();


  constructor() { }

  ngOnInit(): void {
  }

}


class StyleClass {
   'color': string= 'blue';
   'font-size.px': number= 20;
   'font-weight': string= 'bold';
}
