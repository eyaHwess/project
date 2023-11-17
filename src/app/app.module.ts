import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SelectedEventComponent } from './components/selected-event/selected-event.component';
import{HttpClientModule} from '@angular/common/http';
import { EventComponent } from './components/event/event.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './components/admin_folder/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SupprimerComponent } from './components/admin_folder/events/supprimer/supprimer.component';
import { ModifierComponent } from './components/admin_folder/events/modifier/modifier.component';
import { ListeComponent } from './components/admin_folder/accounts/liste/liste.component';
import { RequestsComponent } from './components/admin_folder/accounts/requests/requests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    SelectedEventComponent,
    EventComponent,
    HeaderComponent,
    SignupComponent,
    AdminComponent,
    SupprimerComponent,
    ModifierComponent,
    ListeComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
