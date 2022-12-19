import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup'


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/admin/home/home.component';
import { DashbordComponent } from './components/admin/dashbord/dashbord.component';
import { SidebarComponent } from './components/utils/sidebar/sidebar.component';
import { HeaderComponent } from './components/utils/header/header.component';
import { CommandesComponent } from './components/admin/pages/commandes/commandes.component';
import { CategoriesComponent } from './components/admin/pages/categories/categories.component';
import { ProductsComponent } from './components/admin/pages/products/products.component';
import { FooterComponent } from './components/utils/footer/footer.component';
import { NewCategorieComponent } from './components/admin/pages/new-categorie/new-categorie.component';
import { NewProduitComponent } from './components/admin/pages/new-produit/new-produit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashbordComponent,
    SidebarComponent,
    HeaderComponent,
    CommandesComponent,
    CategoriesComponent,
    ProductsComponent,
    FooterComponent,
    NewCategorieComponent,
    NewProduitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    BrowserAnimationsModule,
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
