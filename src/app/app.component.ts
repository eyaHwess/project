import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private Admin!: string;
  
  title = 'project';
  constructor(private authService:AuthService){}
  
  ngOnInit(){
    this.Admin = this.authService.getRole();
  }
  get admin(): string {
    return this.Admin;
  }
}
