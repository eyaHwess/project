import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { Router } from '@angular/Router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
constructor(private http:HttpClient,private accountservice:AccountService,private router:Router){}

login(email: string, password: string): void {
  this.accountservice.getAccounts().subscribe(
    (account) => {
    const authenticatedUser = account.find(
      (account) => account.email === email && account.password === password 
    );
    if (authenticatedUser) {
      this.isAuthenticated = true;
      //adminTest
      if(authenticatedUser.admin){
        console.log("Admin connected");
        this.router.navigate(['admin']);
      }else{
        console.log("user connected");
        this.router.navigate(['/home']);
      }
     
    } 
    else {
      this.isAuthenticated = false;
      console.log('User not found');
    }
  },
  (error)=>{
    console.error('Error fetching accounts' ,error);}
    )
  } 
  }
  // Method to check if the user is authenticated
  // isLoggedIn(): boolean {
  //   return this.isAuthenticated;
  // }

  // Method to simulate logout
  // logout(): void {
  //   this.isAuthenticated = false;
  //   this.router.navigate(['/loginpage']);
  // }  

