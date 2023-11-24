import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService:AuthService){}
  btn!:boolean;
  ngOnInit(): void {
    this.btn=this.authService.isLoggedIn();
  }
  logout(): void {
    this.authService.logout();
  }
  
}
