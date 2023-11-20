import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService } from 'src/app/services/account.service';
import { Router, RouterModule, Routes } from '@angular/Router';
import { Account } from 'src/app/classes/account';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authservice:AuthService){
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    }
    lesaccounts:Account[]=[];
    ngOnInit(){
      this.accountService.getAccounts().subscribe(
        data=>this.lesaccounts=data
      )
    }
    onSubmit(): void {
      if (this.loginForm.valid) {
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
  
        this.authservice.login(email, password);
      }
    }
    // onSubmit() {
      
    //   const { email, password } = this.loginForm.value;
    //   this.accountService.authenticate(email, password).subscribe(
    //     (response) => {
    //       if (response && response.admin === true) {
    //         this.router.navigate(['/admin']);
            
    //       } else {
    //         this.router.navigate(['/home']);
    //       }
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );}
    //Admin:boolean=false;
    // onSubmit() {
    //   const { email, password } = this.loginForm.value;
    //   let accountExists = false;
    //   let i:number=0;
      

    //   for (let i = 0; i < this.lesaccounts.length; i++) {
    //     if (this.lesaccounts[i].email == email && this.lesaccounts[i].password == password) {
    //       accountExists = true;
    //       break; 
    //   }
    
    //   if (accountExists) {
    //     console.log("Account exists");
    //   } else {
    //     console.log("Account not found");
    //   }
    // }
//     
 }


