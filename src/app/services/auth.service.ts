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
constructor(private http:HttpClient,private accountservice:AccountService,private router:Router){}

login(email: string, password: string): void {
  this.accountservice.getAccounts().subscribe(
    (account) => {
      const authenticatedUser = account.find(
        (account) => account.email === email && account.password === password 
      );
      if (authenticatedUser) {
        this.isAuthenticated = true;
        this.userId=authenticatedUser.id;
        this.email=authenticatedUser.email;
        this.name=authenticatedUser.name;
        //adminTest
        if(authenticatedUser.admin){
          this.role="admin";
          console.log(this.role);
          console.log(this.name);
          console.log("Admin connected");
          // this.admin=true;
          this.router.navigate(['/admin']);
        }else{
          console.log("user connected");
          // this.admin=false;
          this.router.navigate(['/home']);
        }
       
      } 
      else {
        this.isAuthenticated = false;
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
// isAdmin():boolean{
//   return this.admin;
// }git push

logout(): void {
  this.isAuthenticated = false;
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
    
  // Method to simulate logout
  // logout(): void {
  //   this.isAuthenticated = false;
  //   this.router.navigate(['/loginpage']);
  // }  

