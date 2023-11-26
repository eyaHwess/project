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
  
  id:number=0;
  requests:Participant[]=[];
  idreq!:number;
  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
     private eventService:EventService){}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
       this.eventService.getRequestsForEvent(this.id).subscribe(
        data => {
          console.log('data from requests', data);
          this.requests = data;
          
        },
        error => {
          console.error('Error fetching data:', error);
        
        }
   )
  }
  accepter(){
    
    
  }
  refuser(id:number){
    
    this.eventService.deleteRequestsForEvent(this.id,id).subscribe(
      () => {
        console.log('Request removed');
        
      },
      (error) => {
        console.error('Error deleting request:', error);
      }
    );
    
    
    
    };

 
}
