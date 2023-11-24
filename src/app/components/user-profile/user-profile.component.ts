import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/Router';
import { Account } from 'src/app/classes/account';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  id!:number;
  UserAcc!:Account;
  modifierForm!:FormGroup;
  modif:boolean= true;
constructor(private route:Router,
  private activatedRoute: ActivatedRoute,
  private accountService:AccountService,
  private fb:FormBuilder,
  private authService:AuthService
  ){
    this.modifierForm = this.fb.group({
      name: [this.authService.getName(), [Validators.required ,Validators.pattern('^[a-zA-Z]+$')]],
      cin: [this.authService.getcin(), [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(8)],],
      email: [this.authService.getEmail(), [Validators.required, Validators.email]], 

      password: [this.authService.getpass(), [Validators.required,Validators.minLength(8)]],
      phone: [this.authService.getphone(),[Validators.required,Validators.minLength(8)]],
    })
  }
  ngOnInit(){
    this.id=this.activatedRoute.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe(
      data=>this.UserAcc=data
    )

  }

  onsave() {
    
  }
  
  onModif() {
    if (this.modifierForm) {

      const formData = this.modifierForm.value;
      console.log('Form data submitted:', formData);


      this.accountService.patchAccount(this.id, formData).subscribe(
        (result) => {
          console.log('Changes saved successfully:', result);

        },
        (error) => {
          console.error('Error saving changes:', error);
 
        }
      );
    } else {

      console.log('Form is not valid. Please check the fields.');
    }
  }
  }
  

