import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './utils/header/header.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HomePageComponent } from './utils/pages/home-page/home-page.component';
import { ProductsComponent } from './utils/pages/products/products.component';
import { ProductDetailsComponent } from './utils/pages/product-details/product-details.component';
import { CartComponent } from './utils/pages/cart/cart.component';
import { CheckoutComponent } from './utils/pages/checkout/checkout.component';
import { LoginComponent } from './utils/pages/auth/login/login.component';
import { RegisterComponent } from './utils/pages/auth/register/register.component';
import { NotFoundComponent } from './utils/pages/not-found/not-found.component';
import { ContactComponent } from './utils/pages/contact/contact.component';
import { AboutComponent } from './utils/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
