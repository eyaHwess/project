import { Router } from '@angular/Router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePWDComponent {
  changePwdForm:FormGroup;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.changePwdForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required,Validators.minLength(8)]],
    });
  }
    public get email(){
    return this.changePwdForm.get('email');
   }
   public get pwd(){
    return this.changePwdForm.get('password');
   }
  
   changePWD(){
    const email=this.email!.value;
    const pwd=this.pwd!.value;
    this.accountService.changePWD(email,{password:pwd});
    this.router.navigate(['/login']);
   }
}

