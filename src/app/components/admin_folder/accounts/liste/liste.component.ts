import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';
import { Account } from 'src/app/classes/account';
import { Participant } from 'src/app/classes/participant';
import { Route, Router } from '@angular/Router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  constructor(private eventService:EventService,private router:Router){}
event:Event[]=[];
// participants:Account[]=[];
ngOnInit(): void {
  this.eventService.getEvents().subscribe(
    data=>{
      this.event=data
    }
  )
}

deleteEvent(id:number){
  this.eventService.deleteEvent(id).subscribe()
  window.location.reload()
}

}
