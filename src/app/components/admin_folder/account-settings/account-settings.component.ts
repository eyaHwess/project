import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/Router';
import { Account } from 'src/app/classes/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit{
  userId: number = parseInt(localStorage.getItem('userId') || '0', 10);
  account!:Account;
  modifyForm: FormGroup;

  constructor( private accoutService:AccountService,
    private formBuilder:FormBuilder,private router:Router){
    this.modifyForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      CIN: ['', [Validators.required]], 
      phoneNumber: [, [Validators.required]],
      password: [,[Validators.required]]
    });
  }
  ngOnInit(): void {
    this.accoutService.getAccountById(this.userId).subscribe(
      (data)=>{
        this.account=data
        this.populateForm();
      }
    )
  }
  populateForm(): void {
    if (this.account) {
      // Populate the form controls with the existing account data
      this.modifyForm.setValue({
        name: this.account.name,
        CIN: this.account.CIN,
        email: this.account.email,
        phoneNumber: this.account.phoneNumber,
        password: this.account.password
      });
    }
  }
  onSubmit(){
    if (this.modifyForm.valid){
      const updatedFields = this.modifyForm.value;
      this.accoutService.patchAccount(this.userId,updatedFields).subscribe(updatedAccount => {
        console.log('Account updated:', updatedAccount);
       this.router.navigate(['/admin/account']);
     });
    }
  }
}
