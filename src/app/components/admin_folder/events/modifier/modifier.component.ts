import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/Router';
import { Account } from 'src/app/classes/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent {
  accountId!: number;
  modifyForm: any;
  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.modifyForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      CIN: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      admin: [false, [Validators.required]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // Get the account ID from the route parameters
    this.route.params.subscribe((params) => {
      this.accountId = +params['id']; // Assuming 'id' is the route parameter
    });

    // Fetch the account details and populate the form with default values
    this.accountService.getAccountById(this.accountId).subscribe(
      (accountToModify) => {
        if (accountToModify) {
          // Use patchValue to set default values for the form controls based on retrieved data
          this.modifyForm.patchValue({
            name: accountToModify.name,
            CIN: accountToModify.CIN,
            email: accountToModify.email,
            admin: accountToModify.admin,
            password: accountToModify.password,
            phoneNumber: accountToModify.phoneNumber,
          });
        }
      },
      (error) => {
        console.error('Error fetching account details:', error);
      }
    );
  }
}
