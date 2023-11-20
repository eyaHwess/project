import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { Router } from '@angular/Router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private http:HttpClient,private accountservice:AccountService,private router:Router){}
private isAuthenticated = false;
login(email: string, password: string): void {
  this.accountservice.getAccounts().subscribe(
    (account) => {
    const authenticatedUser = account.find(
      (account) => account.email === email && account.password === password 
    );
    if (authenticatedUser) {
      this.isAuthenticated = true;
      if(authenticatedUser.admin){
        this.router.navigate(['admin']);
      }else{
        this.router.navigate(['/home']);
      }
     
    } else {
      this.isAuthenticated = false;
      console.log('User not found');
    }
  }
    )
  }
  // Method to check if the user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Method to simulate logout
  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/loginpage']);
  }  
}
