import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { Account } from 'src/app/classes/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  id!:number;
  UserAcc!:Account;
constructor(private route:Router,
  private activatedRoute: ActivatedRoute,
  private accountService:AccountService
  ){}
  ngOnInit(){
    this.id=this.activatedRoute.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe(
      data=>this.UserAcc=data
    )
  }
  
}
