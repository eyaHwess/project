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
    this.accountService.getAccounts().subscribe(data=>{this.all=data})
    for(let i=0;i<this.all.length;i++){
      if (this.all[i].admin){
        this.liste.push(this.all[i])
    }
  }
}
}