import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/Router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SelectedEventComponent } from './components/selected-event/selected-event.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './components/admin_folder/admin/admin.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home/:id',component:SelectedEventComponent},
  {path:'admin',component:AdminComponent},
  {path:'**',component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
