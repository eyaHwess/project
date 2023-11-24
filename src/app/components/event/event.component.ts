import { Component,OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';
import { HeaderComponent } from '../header/header.component';
import { EventInterface } from 'src/app/event-interface';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventlist:Event[]=[];
  searchValue = '';
  events: EventInterface[] = [];
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });
  constructor(private EventService:EventService,private fb:FormBuilder) {}
  ngOnInit() :void{
    this.fetchData();
    this.EventService.getEvents().subscribe(
      (data:Event[])=>{
        this.eventlist=data;
      }
      )
  }
  fetchData():void{
    this.EventService.searchEventsGetter(this.searchValue).subscribe(
      (events)=>{this.events=events}
    )
  }
  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
  

}
