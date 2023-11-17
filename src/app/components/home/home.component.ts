import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
events:Event[]=[];
constructor(private eventService:EventService){}
ngOnInit(): void {
  this.eventService.getEvents().subscribe(
    data=>{
      this.events=data
    }
  )
  
  }
}
