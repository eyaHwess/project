import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../classes/account';
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
    return this.http.get<Account>(`${URL},${accountId}`);
  
  }
  }
  