import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '@angular/router';
import {Observable}from 'rxjs'
const URL=" http://localhost:3000/event";
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) {}
  getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(URL)  }
  addEvent(event:Event):Observable<Event>{
    return this.http.post<Event>(URL,event);
  }
  deleteEvent(id:number){
    return this.http.delete(URL+"/"+id)
  }
}
