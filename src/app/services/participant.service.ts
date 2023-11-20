import { Injectable } from '@angular/core';
import { Participant } from '../classes/participant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
import { EventService } from './event.service';
const URL=" http://localhost:3001/event";
@Injectable({
  providedIn: 'root'
})

export class ParticipantService {

  constructor(private http:HttpClient,private eventservice:EventService) { }
  getParticipant():Observable<Participant[]>{
    return this.http.get<Participant[]>(URL) ; }

    // addParticipant(p:Participant,id:number):Observable<Participant>{
    //   this.eventservice.getEventById(id).
    // }
}
