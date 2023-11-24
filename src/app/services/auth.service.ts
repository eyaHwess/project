import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { Router } from '@angular/Router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated= false;
  private userId: number =0;
  private email:String='';
  private name:String='';
  private role:string='';
constructor(private http:HttpClient,private accountservice:AccountService,private router:Router){
  const isAuthenticatedValue = localStorage.getItem('isAuthenticated');

  if (isAuthenticatedValue !== null) {
    // 'isAuthenticated' is already set in localStorage
    this.isAuthenticated = isAuthenticatedValue === 'true';
  } else {
    // 'isAuthenticated' is not set in localStorage, set it to 'false'
    localStorage.setItem('isAuthenticated', 'false');
  }}

login(email: string, password: string): void {
  this.accountservice.getAccounts().subscribe(
    (account) => {
      const authenticatedUser = account.find(
        (account) => account.email === email && account.password === password 
      );
      if (authenticatedUser) {
        this.isAuthenticated = true;
        localStorage.setItem('isAuthenticated','true')
        localStorage.setItem('userId', authenticatedUser.id.toString());
        // this.userId=authenticatedUser.id;
        // this.email=authenticatedUser.email;
        // this.name=authenticatedUser.name;
        //adminTest
        if(authenticatedUser.admin){
          this.role="admin";
          console.log(this.role);
          console.log(this.name);
          console.log("Admin connected");
          // this.admin=true;
          this.router.navigate(['/admin/account']);
        }else{
          console.log("user connected");
          // this.admin=false;
          this.router.navigate(['/home']);
        }
       
      } 
      else {
        alert('Incorrect email or password.');
        this.isAuthenticated = false;
        localStorage.setItem('isAuthenticated','false')
        localStorage.removeItem('userId');
        // this.admin=false;
        console.log('User not found');
    }
  },
  (error)=>{
    console.error('Error fetching accounts' ,error);}
)
}
//Retourner l'authentication
isLoggedIn(): boolean {
  return this.isAuthenticated;
} 

logout(): void {
  this.isAuthenticated = false;
  localStorage.clear()
  this.router.navigate(['/login']);
}
GetUserId(){
  return this.userId;
}
getEmail(){
 return this.email;
}
getName(){
  return this.name;
 }
 getRole(){
  return this.role;
 }
}