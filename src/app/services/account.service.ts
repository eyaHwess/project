import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Account } from '../classes/account';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AccountInterface } from '../account-interface';
const URL=" http://localhost:3000/account";
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private http:HttpClient) { }
  getAccounts():Observable<Account[]>{
    return this.http.get<Account[]>(`${URL}`);
  }
  addAccount(newaccount: Account): Observable<Account> {
    return this.http.post<Account>(URL, newaccount);
    
  }
  getAccountById(accountId: number):Observable<Account>{
    return this.http.get<Account>(`${URL}/${accountId}`);
  }
  patchAccount(id:number,data:any):Observable<Account>{
    return this.http.patch<Account>(URL+"/"+id,data)
  }

  changePWD(email:string,pwd:any){
    const accounts=this.getAccounts().subscribe(
      (user)=>{
        const account = user.find((acc) => acc.email === email);

        if (account) {
          this.http.patch<Account>(`${URL}/${account.id}`, pwd).subscribe(
            (updatedAccount) => {
              alert('Password changed successfully!');
            },
            (error) => {
              alert('Error changing password');
            }
          );
        } else {
          alert(`Account not found for email: ${email}`);
      }
      })
     }
     
     searchMembersGetter(searchValue:String):Observable<AccountInterface[]>{
      return this.http.get<AccountInterface[]>(URL+"?name_like="+searchValue)
    }
  }
  
  