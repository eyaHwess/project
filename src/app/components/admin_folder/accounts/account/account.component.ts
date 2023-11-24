import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/classes/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  userId: number = parseInt(localStorage.getItem('userId') || '0', 10);
  account!:Account;
  constructor( private accoutService:AccountService){}
  ngOnInit(): void {
    this.accoutService.getAccountById(this.userId).subscribe(
      (data)=>{
        this.account=data
      }
    )
  }
}
