import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgISwitchComponent } from './ng-iswitch/ng-iswitch.component';
import { NgIForOneComponent } from './ng-ifor-one/ng-ifor-one.component';
import { NgFor2Component } from './ng-for2/ng-for2.component';
import { NgStyleComponent } from './style/ng-style/ng-style.component';
import { FirstTpComponent } from './first-tp/first-tp.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgISwitchComponent,
    NgIForOneComponent,
    NgFor2Component,
    NgStyleComponent,
    FirstTpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
