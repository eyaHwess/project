import { Injectable } from '@angular/core';
import { Account } from '../classes/account';
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
  login(account:Account,email:string,password:string): void {
    if (account.email===email && account.password===password){
      this.isAuthenticated = true;
    }

    
  }
  

  // Method to simulate logout
  logout(): void {
    this.isAuthenticated = false;
  }  
}
