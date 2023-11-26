import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/classes/event';

import { Participant } from '../classes/participant';
import { Account } from '../classes/account';
import { AuthService } from './auth.service';
import { AccountService } from './account.service';
import { EventInterface } from '../event-interface';
import { Observable, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
// import { switchMap } from 'rxjs/internal/operators/switchMap';

// import { Observable, switchMap, throwError } from 'rxjs'
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
  getParticipantsForEvent(eventId: number): Observable<Participant[]> {
    const participantsUrl = `${URL}/${eventId}/participants`; 
    return this.http.get<Participant[]>(participantsUrl);
  }
  // addParticipantToEvent(eventId: number, participant: Account): Observable<Event> {
  //   const participantUrl = `${URL}/${eventId}/participants`;  // Assuming a route like /event/:eventId/participants
  //   return this.http.post<Event>(participantUrl, participant);
  // }

  getRequestsForEvent(eventId: number): Observable<any> {
  
    return this.http.get<any>(URL+"/"+eventId).pipe(
      map(eventData=>eventData.requests ||[])
    )
  }
  // deleteRequestsForEvent(eventId: number,reqId:number): Observable<any> {
  
  //   return this.http.delete<any>(URL+"/"+eventId+"/"+"requests/"+reqId)
    
  // }
  patchEvent(id:number,data:any):Observable<Event>{
    return this.http.patch<Event>(URL+"/"+id,data)
  }
  addRequestsToEvent(eventId: number, participant: Participant): Observable<Event> {
    const RequestsUrl = `${URL}/${eventId}/requests`;
  
    // Retrieve the current state of the event from the server
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
  addParticipantToEvent(eventId: number, participant: Participant): Observable<Event> {
    const RequestsUrl = `${URL}/${eventId}/requests`;
  
    // Retrieve the current state of the event from the server
    return this.http.get<Event>(`${URL}/${eventId}`).pipe(
      switchMap((event: Event) => {
        if (!event.participants) {
          event.participants = [];
        }
        event.participants.push(participant);
        return this.http.put<Event>(`${URL}/${eventId}`, event);
      })
    );
  }
  // deleteRequestFromEvent(eventId: number, requestId: number): Observable<any> {
  //   const url = `${URL}/${eventId}/requests/${requestId}`;
  //   return this.http.delete(url);
  // }
  searchEventsGetter(searchValue:String):Observable<EventInterface[]>{
    return this.http.get<EventInterface[]>(
      URL+"?name_like="+searchValue
    )
  }
  deleteRequestFromEvent(eventId: number, requestId: number): Observable<Event> {
    const RequestsUrl = `${URL}/${eventId}/requests`;
  
    
    return this.http.get<Event>(`${URL}/${eventId}`).pipe(
      switchMap((event: Event) => {
        if (!event.requests) {
          return throwError('Event requests not found');
        }
        const requestIndex = event.requests.findIndex(req => req.id === requestId);
  
        if (requestIndex === -1) {
          return throwError('Request not found in the event');
        }
        event.requests.splice(requestIndex, 1);
        return this.http.put<Event>(`${URL}/${eventId}`, event);
      })
    );
  }
  
}
