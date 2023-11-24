import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/classes/event';
import {Observable, catchError, switchMap, throwError}from 'rxjs'
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
    const RequestsUrl = `${URL}/${eventId}/requests`;  
    return this.http.get<Participant[]>(RequestsUrl);
  }
  patchEvent(id:number,data:any):Observable<Event>{
    return this.http.patch<Event>(URL+"/"+id,data)
  }
  addRequestsToEvent(eventId: number, participant: Participant): Observable<Event> {
    const RequestsUrl = `${URL}/${eventId}/requests`;
  
    // Retrieve the current state of the event from the server
    return this.http.get<Event>(`${URL}/${eventId}`).pipe(
      switchMap((event: Event) => {
        // Check if the 'requests' array is undefined, and initialize it if necessary
        if (!event.requests) {
          event.requests = [];
        }
  
        // Update the 'requests' property with the new participant
        event.requests.push(participant);
  
        // Send a PUT request to update the event on the server
        return this.http.put<Event>(`${URL}/${eventId}`, event);
      })
    );
  }
  
}
