import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/classes/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.css']
})
export class ListeAdminComponent implements OnInit {
liste:Account[]=[];
all:Account[]=[];
constructor( private accountService:AccountService){
}
  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(data=>{      this.liste = data.filter(account => account.admin)})
    
}
}