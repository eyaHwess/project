import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/classes/event';
import {Observable}from 'rxjs'
import { Participant } from '../classes/participant';
import { Account } from '../classes/account';
const URL=" http://localhost:3001/event";
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) {}
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

  getRequestsForEvent(eventId: number): Observable<Account[]> {
    const requestsUrl = `${URL}/${eventId}/Requests`;  // Assuming a route like /event/:eventId/participants
    return this.http.get<Account[]>(requestsUrl);
  }
  addRequestsToEvent(eventId: number, Requests: Account): Observable<Event> {
    const RequestsUrl = `${URL}/${eventId}/Requests`;  // Assuming a route like /event/:eventId/participants
    return this.http.post<Event>(RequestsUrl, Requests);
  }
  // public get lesParticipants(){
  //   return this.productForm.get('pointsVente') as FormArray;
  // }
}
