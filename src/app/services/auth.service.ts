import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  // Method to check if the user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Method to simulate login
  login(): void {
    this.isAuthenticated = true;
  }

  // Method to simulate logout
  logout(): void {
    this.isAuthenticated = false;
  }  
}
