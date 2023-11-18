import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../classes/account';
const URL="http://localhost:3000/account";
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private http:HttpClient) { }
  authenticate(email: string, password: string): Observable<any> {
    return this.http.get<any>(`${URL}?email=${email}&password=${password}`);
    }
  getAccounts():Observable<Account[]>{
    return this.http.get<Account[]>(`${URL}`);
  }
  addAccount(newaccount: Account): Observable<Account> {
    return this.http.post<Account>(`${URL}/add`, newaccount);
  }
  deleteAccount(accountId: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${accountId}`);
  }

  modifyAccount(accountId: number, modifiedAccount: Account): Observable<Account> {
    return this.http.put<Account>(`${URL}/${accountId}`, modifiedAccount);
  }
  getAccountById(accountId: number):Observable<Account>{
    return this.http.get<Account>(`${URL},${accountId}`);
  
  }}