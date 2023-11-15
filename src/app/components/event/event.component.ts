import { Component,OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventlist:Event[]=[];
  constructor(private EventService:EventService) {}
  ngOnInit() :void{
    this.EventService.getEvents().subscribe(
      (data:Event[])=>{
        this.eventlist=data;
      }
      )
  }
  

}
