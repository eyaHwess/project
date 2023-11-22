import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Admin: string = ''; // Initialize with an empty string or an appropriate default value

  title = 'project';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.Admin = this.authService.getRole();
  }

  get isnotadmin(): boolean {
    return this.Admin !== 'admin';
  }
}

