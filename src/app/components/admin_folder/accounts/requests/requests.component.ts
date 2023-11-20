import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { Account } from 'src/app/classes/account';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  idfE:number=0;
  request:Account[]=[];
  constructor(private activatedRoute:ActivatedRoute,private router:Router, private eventService:EventService){}
  ngOnInit(): void {
    this.eventService.getRequestsForEvent(this.idfE).subscribe(data=>{this.request=data})
  }
}
