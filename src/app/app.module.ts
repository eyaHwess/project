import { APP_INITIALIZER, NgModule } from '@angular/core';
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

import { ModifierComponent } from './components/admin_folder/events/modifier/modifier.component';
import { ListeComponent } from './components/admin_folder/accounts/liste/liste.component';
import { RequestsComponent } from './components/admin_folder/accounts/requests/requests.component';
import { ParticiperComponent } from './components/participer/participer.component';
import { MenuComponent } from './components/admin_folder/menu/menu.component';
import { AjouterComponent } from './components/admin_folder/events/ajouter/ajouter.component';
import { ListeMembresComponent } from './components/admin_folder/liste-membres/liste-membres.component';
import { ListeAdminComponent } from './components/admin_folder/liste-admin/liste-admin.component';
import { ChangePWDComponent } from './components/change-pwd/change-pwd.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountSettingsComponent } from './components/admin_folder/account-settings/account-settings.component';
import { AccountComponent } from './components/admin_folder/accounts/account/account.component';
// import { ParticipantComponent } from './admin_foloder/participant/participant.component';
import { ParticipantComponent } from './components/admin_folder/participant/participant.component';

// timezone
import { TimezoneComponent } from './components/timezone/timezone.component';
import { DatePipe } from '@angular/common';
import { DtPipe } from './dt.pipe';
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
    FooterComponent,
    ModifierComponent,
    ListeComponent,
    RequestsComponent,
    ParticiperComponent,
    MenuComponent,
    AjouterComponent,
    ListeMembresComponent,
    ListeAdminComponent,
    ChangePWDComponent,
    UserProfileComponent,
    AccountSettingsComponent,
    AccountComponent,
    ParticipantComponent,
    TimezoneComponent,
    DtPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
