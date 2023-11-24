import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/Router';
import { Account } from 'src/app/classes/account';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  signupForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required ,Validators.pattern('^[a-zA-Z]+$')]],
      CIN: ['', [Validators.required],Validators.pattern('^[0-9]+$'),Validators.maxLength(8)],
      email: ['', [Validators.required, Validators.email]], 
      admin: [false],
      password: ['', [Validators.required,Validators.minLength(8)]],
      phoneNumber: ['',[Validators.required,Validators.minLength(8)]],
    });
  }
  formvalues: Account[]=[];

  
  onSubmit(){
    if(this.signupForm.valid){
      const values=this.signupForm.value;
      this.accountService.addAccount(values).subscribe(
        data =>console.log(data)
      )
      this.router.navigate(['/login']);
    }
  }
 
  
  
     }
  // onSubmit() {
    // if (this.signupForm.valid) {
    //   // Form is valid, proceed with account creation
    //   const formData = this.signupForm.value;

    //   this.accountService.addAccount(formData)
    //     .pipe(takeUntil(this.unsubscribe$))
    //     .subscribe(
    //       (response) => {
    //         console.log('Account created successfully:', response);
    //         // Optionally, you can navigate to a different route after successful account creation
    //         this.router.navigate(['/login']);
    //       },
    //       (error) => {
    //         console.error('Error creating account:', error);
    //       }
    //     );
    // } else {
    //   // Form is invalid, mark fields as touched to show validation errors
    //   Object.values(this.signupForm.controls).forEach(control => control.markAsTouched());
    // }
 // }

  // ngOnDestroy() {
  //   this.unsubscribe$.next();
  //   this.unsubscribe$.complete();
  // }




