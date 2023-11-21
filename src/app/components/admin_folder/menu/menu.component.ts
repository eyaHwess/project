import { Component } from '@angular/core';
import { Router } from '@angular/Router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private route:Router,private authService:AuthService){}
  logout(){
    this.authService.logout()
  }
}

