import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/classes/event';
import {Observable, switchMap, throwError}from 'rxjs'
import { Participant } from '../classes/participant';
import { Account } from '../classes/account';
import { AuthService } from './auth.service';
import { AccountService } from './account.service';
const URL=" http://localhost:3001/event";
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient,
    private authService:AuthService,
    private accountService:AccountService
    ) {}
  getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(URL) ; }
    getEventById(id:number):Observable<Event>{
      return this.http.get<Event>(URL+"/"+id)
    }
  addEvent(event:Event):Observable<Event>{
    return this.http.post<Event>(URL,event);
  }
  deleteEvent(id:number){
    return this.http.delete(URL+"/"+id)
  }
  getParticipantsForEvent(eventId: number): Observable<Account[]> {
    const participantsUrl = `${URL}/${eventId}/participants`;  // Assuming a route like /event/:eventId/participants
    return this.http.get<Account[]>(participantsUrl);
  }
  addParticipantToEvent(eventId: number, participant: Account): Observable<Event> {
    const participantUrl = `${URL}/${eventId}/participants`;  // Assuming a route like /event/:eventId/participants
    return this.http.post<Event>(participantUrl, participant);
  }

 
  getRequestsForEvent(eventId: number): Observable<Participant[]> {
    const requestsUrl = `${URL}/events/${eventId}/requests`; 
    return this.http.get<Participant[]>(requestsUrl);
  }

  addRequestsToEvent(eventId: number, participant: Participant): Observable<Event> {
    const RequestsUrl = `${URL}/${eventId}/Requests`;
    return this.http.get<Event>(`${URL}/${eventId}`).pipe(
      switchMap((event: Event) => {
        if (!event.requests) {
          event.requests = [];
        }
        event.requests.push(participant);
        return this.http.put<Event>(`${URL}/${eventId}`, event);
      })
    );
  }
  
}
