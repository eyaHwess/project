import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService } from 'src/app/services/account.service';
import { Router, RouterModule, Routes } from '@angular/Router';
import { Account } from 'src/app/classes/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder){
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
    Admin:boolean=false;
    onSubmit() {
      const { email, password } = this.loginForm.value;
      let accountExists = false;
      let i:number=0;
      

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
    while(i<this.lesaccounts.length && this.lesaccounts[i].email != email){
      i++;
      
    }
    if(i==this.lesaccounts.length){
      console.log("this email doesnt exist");
    }else 
    if(this.lesaccounts[i].email == email && this.lesaccounts[i].password == password ){
      if(this.lesaccounts[i].admin){
        this.Admin=true;
        this.router.navigate(['/admin']);
        
      }
      else{
        this.router.navigate(['/home']);
      }
    }
    else{console.log("wrong")}

} }


