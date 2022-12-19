import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormExemple1Component } from './form-exemple1/form-exemple1.component';
import { FormExemple2Component } from './form-exemple2/form-exemple2.component';
import { FormExemple3Component } from './form-exemple3/form-exemple3.component';
import { FormExemple4Component } from './form-exemple4/form-exemple4.component';
import { FormExemple5Component } from './form-exemple5/form-exemple5.component';

@NgModule({
  declarations: [
    AppComponent,
    FormExemple1Component,
    FormExemple2Component,
    FormExemple3Component,
    FormExemple4Component,
    FormExemple5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
