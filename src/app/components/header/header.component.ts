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
  id!:number;
  ngOnInit(): void {
    this.btn=this.authService.isLoggedIn();
    this.id=this.authService.GetUserId();
  }
  logout(): void {
    this.authService.logout();
  }
  
}
