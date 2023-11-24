import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/Router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SelectedEventComponent } from './components/selected-event/selected-event.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './components/admin_folder/admin/admin.component';

import { EventComponent } from './components/event/event.component';
import { ModifierComponent } from './components/admin_folder/events/modifier/modifier.component';
import { AjouterComponent } from './components/admin_folder/events/ajouter/ajouter.component';
import { ListeAdminComponent } from './components/admin_folder/liste-admin/liste-admin.component';
import { ListeMembresComponent } from './components/admin_folder/liste-membres/liste-membres.component';

import { authGuard } from './guard/auth.guard';
import { ParticiperComponent } from './components/participer/participer.component';
import { ChangePWDComponent } from './components/change-pwd/change-pwd.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'pwd',component:ChangePWDComponent},
  {path:'signup',component:SignupComponent},
  {path:'home/:id',component:SelectedEventComponent},
  {path:'admin',component:AdminComponent,canActivate:[authGuard],
children:[
  {path:'event',component:EventComponent},
  {path:'modifier/:idfE',component:ModifierComponent},
  {path:'ajouter',component:AjouterComponent},
  {path:'listeAdmin',component:ListeAdminComponent},
  //{path:'participer/:id',component:ParticiperComponent},
  
  {path:'**',component:ErrorComponent}
]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
