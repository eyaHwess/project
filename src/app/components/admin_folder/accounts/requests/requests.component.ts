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
  accepter(user:Participant){
     
    this.eventService.addParticipantToEvent(this.id,user).subscribe(
      (data) => {
        alert("Request accepted");
        console.log('Request accepted', data);
      },
      (error) => {
        alert('Error accepting request"');
        console.error('Error accepting request:', error);
      }
    );
    this.refuser(user.id);
  }
  refuser(id:number){
    
    this.eventService.deleteRequestFromEvent(this.id, id).subscribe(
      () => {
        console.log('Request deleted successfully:', event);
      },
      (error) => {
        console.error('Error deleting request:', error);
      }
    );
    };

 
}
