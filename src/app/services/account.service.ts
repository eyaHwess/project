import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Account } from '../classes/account';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
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
    //  return this.http.patch<Account>(URL+"/"+1,pwd);
    const accounts=this.getAccounts().subscribe(
      (user)=>{
        const account = user.find((acc) => acc.email === email);

        if (account) {
          this.http.patch<Account>(`${URL}/${account.id}`, pwd).subscribe(
            (updatedAccount) => {
              alert('Password changed successfully!');
              // You can perform additional actions after the password change here
            },
            (error) => {
              alert('Error changing password');
              // Handle the error, show a message to the user, etc.
            }
          );
        } else {
          alert(`Account not found for email: ${email}`);
          // Handle the case where the account is not found
       
      }
      })
     }
  }
  
  