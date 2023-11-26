import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/classes/account';
import { AccountService } from 'src/app/services/account.service';

import { FormBuilder } from '@angular/forms';
import { AccountInterface } from 'src/app/account-interface';

@Component({
  selector: 'app-liste-membres',
  templateUrl: './liste-membres.component.html',
  styleUrls: ['./liste-membres.component.css']
})
export class ListeMembresComponent implements OnInit {
  liste:AccountInterface[]=[];
  searchValue = '';
  // account:AccountInterface[]=[];
  warning ='';
  
  searchForm = this.fb.group({
    searchValue: '',
  });

  constructor(
    private accountService:AccountService,
    private fb:FormBuilder,
    ){}
  ngOnInit(): void {
    this.fetchdata();
    this.accountService.getAccounts().subscribe(data=>{      this.liste = data.filter(account => !account.admin);
    })
  }
  fetchdata(){
    this.accountService.searchMembersGetter(this.searchValue).subscribe(
      (response) => {
        this.liste = response;
        if (this.liste.length === 0) {
          console.log('No results found for:', this.searchValue);
          alert('No results found');
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    )
  }
  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchdata();
    console.log(this.searchValue);
  }
  
}
