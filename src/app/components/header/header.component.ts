import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
[x: string]: any;
  constructor(private authService:AuthService){}
  
  btn=this.authService.isLoggedIn();

}
