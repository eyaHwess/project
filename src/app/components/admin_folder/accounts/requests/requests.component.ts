import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { switchMap } from 'rxjs/operators';
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
  // accepter(user:Participant){
     
  //   this.eventService.addParticipantToEvent(this.id,user).subscribe(
  //     (data) => {
  //       alert("Request accepted");
  //       console.log('Request accepted', data);
  //       return this.eventService.deleteRequestFromEvent(this.id, user.id);
  //     },
  //     (error) => {
  //       alert('Error accepting request"');
  //       console.error('Error accepting request:', error);
  //     }
  //   );
  //   // this.refuser(user);
  // }
  accepter(user: Participant) {
    this.eventService.addParticipantToEvent(this.id, user).pipe(
      switchMap((data) => {
        alert('Request accepted');
        console.log('Request accepted', data);
        return this.eventService.deleteRequestFromEvent(this.id, user.id);
        
      })
    ).subscribe(
      () => {
        console.log('Request deleted successfully');
      },
      (error) => {
        console.error('Error deleting request:', error);
      }
    );
  }
  refuser(user:Participant){
    
    this.eventService.deleteRequestFromEvent(this.id, user.id).subscribe(
      () => {
        console.log('Request deleted successfully:', event);
        window.location.reload()
      },
      (error) => {
        console.error('Error deleting request:', error);
      }
    );
    };

 
}
