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
  authenticate(email: string, password: string): Observable<Account> {
    const params = new HttpParams()
    .set('email', email)
    .set('password', password);

  return this.http.get<Account>(URL, { params: params });
  }
  getAccounts():Observable<Account[]>{
    return this.http.get<Account[]>(`${URL}`);
  }
  addAccount(newaccount: Account): Observable<Account> {
    return this.http.post<Account>(`${URL}/add`, newaccount);
  }
  getAccountById(accountId: number):Observable<Account>{
    return this.http.get<Account>(`${URL},${accountId}`);
  }
  getListAdmin():Observable<Account[]>{
    return this.http.get<Account[]>(URL+"?admin=true")
  }
  }
  