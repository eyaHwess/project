import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { Account } from 'src/app/classes/account';
import { Participant } from 'src/app/classes/participant';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  idfE:number=0;
  request:Event[]=[];
  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
     private eventService:EventService){}
  ngOnInit(): void {
    // this.idfE = this.activatedRoute.snapshot.params['id'];
    // this.eventService.getEvents().subscribe(
    //   data=>this.request=data;
    //)
    ;
    
  }
  

  // ngOnInit(): void {
  //   this.eventService.getRequestsForEvent(this.idfE).subscribe(data=>{this.request=data})
  // }
}
