import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService } from 'src/app/services/account.service';
import { Router, RouterModule, Routes } from '@angular/Router';
import { Account } from 'src/app/classes/account';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private accountService: AccountService,private http:HttpClient,private authService:AuthService,
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
        )}
        onSubmit(): void {
          if (this.loginForm.valid) {
            const email = this.loginForm.value.email;
            const password = this.loginForm.value.password;
      
            this.authservice.login(email, password);
          }
      }
    }