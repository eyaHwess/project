import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/Router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SelectedEventComponent } from './components/selected-event/selected-event.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './components/admin_folder/admin/admin.component';

import { MenuComponent } from './components/admin_folder/menu/menu.component';
import { EventComponent } from './components/event/event.component';
import { ModifierComponent } from './components/admin_folder/events/modifier/modifier.component';
import { AjouterComponent } from './components/admin_folder/events/ajouter/ajouter.component';
import { ListeAdminComponent } from './components/admin_folder/liste-admin/liste-admin.component';
import { ListeMembresComponent } from './components/admin_folder/liste-membres/liste-membres.component';

import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home/:id',component:SelectedEventComponent},
  {path:'admin',component:AdminComponent,canActivate:[authGuard],
children:[
  {path:'admin/menu',component:MenuComponent},
  {path:'admin/event',component:EventComponent},
  {path:'admin/modifier',component:ModifierComponent},
  {path:'admin/ajouter',component:AjouterComponent},
  {path:'admin/listeAdmin',component:ListeAdminComponent},
  {path:'admin/listeMenmbre',component:ListeMembresComponent}
]},
  {path:'**',component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
