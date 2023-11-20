import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService } from 'src/app/services/account.service';
import { Router, RouterModule, Routes } from '@angular/Router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private accountService: AccountService,private http:HttpClient,private authService:AuthService,
    private router: Router,
    private formBuilder: FormBuilder){
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    }
    
    onSubmit() {
      const { email, password } = this.loginForm.value;
      this.accountService.authenticate(email, password).subscribe(
        (response) => {
          if (response &&response.admin === true) {
            // this.router.navigate(['/admin']);
            
            console.log("admin")
            
          } else {
            // this.router.navigate(['/home']);
            console.log("not admin")

          }
        },
        (error) => {
          console.error(error);
        }
      );

    }
    // onSubmit(){
    //   this.http.get<any>("http://localhost:3000/account").subscribe(
    //     res=>{
    //       const user=res.find((a:any)=>{
    //         return a.email ===this.loginForm.value.email && a.email ===this.loginForm.value.email 
    //       });
    //       if (user && user.admin){
    //         // localStorage.setItem('token', user.id);
    //         this.router.navigate(['/admin']);
    //       }
    //       else{
    //         // localStorage.setItem('token', user.id);
    //         this.router.navigate(['/home']);
    //       }
    //     },err=>{
    //       alert("something went wrong")
    //     }
    //   )
    // }
} 


