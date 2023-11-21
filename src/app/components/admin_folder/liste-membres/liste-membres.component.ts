import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/classes/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-liste-membres',
  templateUrl: './liste-membres.component.html',
  styleUrls: ['./liste-membres.component.css']
})
export class ListeMembresComponent implements OnInit {
  liste:Account[]=[];
  all:Account[]=[];

  constructor(private accountService:AccountService){}
  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(data=>{this.all=data})
    for(let i=0;i<this.all.length;i++){
      if (this.all[i].admin==false){
        this.liste.push(this.all[i])
    }
  }
  }
  
}
