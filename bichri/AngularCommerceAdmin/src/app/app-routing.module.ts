import { NewProduitComponent } from './components/admin/pages/new-produit/new-produit.component';
import { NewCategorieComponent } from './components/admin/pages/new-categorie/new-categorie.component';
import { ProductsComponent } from './components/admin/pages/products/products.component';
import { CategoriesComponent } from './components/admin/pages/categories/categories.component';
import { CommandesComponent } from './components/admin/pages/commandes/commandes.component';
import { HomeComponent } from './components/admin/home/home.component';
import { DashbordComponent } from './components/admin/dashbord/dashbord.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},

  {path:'home',component:HomeComponent,

      children:[

        {path:'dashboard',component:DashbordComponent},
        {path:'categories',component:CategoriesComponent},
        {path:'newcategorie',component:NewCategorieComponent},
        {path:'products',component:ProductsComponent},
        {path:'newproduct',component:NewProduitComponent},
        {path:'orders',component:CommandesComponent},

      ],canActivate:[AuthGuard]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
