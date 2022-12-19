import { AboutComponent } from './utils/pages/about/about.component';
import { ContactComponent } from './utils/pages/contact/contact.component';
import { NotFoundComponent } from './utils/pages/not-found/not-found.component';
import { RegisterComponent } from './utils/pages/auth/register/register.component';
import { LoginComponent } from './utils/pages/auth/login/login.component';
import { CheckoutComponent } from './utils/pages/checkout/checkout.component';
import { CartComponent } from './utils/pages/cart/cart.component';
import { ProductDetailsComponent } from './utils/pages/product-details/product-details.component';
import { ProductsComponent } from './utils/pages/products/products.component';
import { HomePageComponent } from './utils/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"", component:HomePageComponent},
  {path:"products/:idCategory", component:ProductsComponent},
  {path:"product-details/:idProduit", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"contact", component:ContactComponent},
  {path:"about", component:AboutComponent},
  {path:"**", component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
