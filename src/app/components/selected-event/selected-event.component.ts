import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { Event } from 'src/app/classes/event';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-selected-event',
  templateUrl: './selected-event.component.html',
  styleUrls: ['./selected-event.component.css']
})
export class SelectedEventComponent implements OnInit {
  item!:Event;
id:number=0;
constructor(private router:Router, private activatedRoute:ActivatedRoute,private EventService:EventService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getEventById(this.id);
  }
  getEventById(id:number){
    this.EventService.getEventById(id).subscribe(
      (data:Event)=>{
        this.item=data
      }
    )
  }

}
