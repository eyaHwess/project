import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnDestroy {
  signupForm: FormGroup;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      CIN: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]], // Fixed the Validators.email placement
      admin: [false],
      password: ['', [Validators.required]],
      phoneNumber: [''],
    });
  }
ngOnInit() {
     }
     
  onSubmit() {
    if (this.signupForm.valid) {
      // Form is valid, proceed with account creation
      const formData = this.signupForm.value;

      this.accountService.addAccount(formData)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          (response) => {
            console.log('Account created successfully:', response);
            // Optionally, you can navigate to a different route after successful account creation
            this.router.navigate(['/login']);
          },
          (error) => {
            console.error('Error creating account:', error);
          }
        );
    } else {
      // Form is invalid, mark fields as touched to show validation errors
      Object.values(this.signupForm.controls).forEach(control => control.markAsTouched());
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}

