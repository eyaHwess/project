import { Component,OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event:Event[]=[];
  constructor(private eventService:EventService) {}
  ngOnInit() :void{
    this.eventService.getEvents().subscribe(
      (events: Event[]) => {
        this.event = events;
      }
      )
  }
  

}
