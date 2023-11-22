import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { Event } from 'src/app/classes/event';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-selected-event',
  templateUrl: './selected-event.component.html',
  styleUrls: ['./selected-event.component.css']
})
export class SelectedEventComponent implements OnInit {
  item!:Event;
id:number=0;
constructor(private router:Router,
   private activatedRoute:ActivatedRoute,
   private EventService:EventService,
   private authService:AuthService
   ){}
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
  // request(){
  //   const memberId = this.authService.GetUserId;

  //   // Check if the user is authenticated
  //   if (memberId) {
  //     // Call the service method to add the request
  //     this.EventService.addRequestsToEvent(this.id, memberId).subscribe(
  //       (data: Event) => {
  //         console.log('Request successfully added:', data);
         
  //       },
  //       (error) => {
  //       // Handle error, if needed
  //       }
  //     );
  //   } else {
  //     // Handle the case where the user is not authenticated
  //     console.error('User not authenticated');
  //     // You might want to redirect the user to the login page or handle it accordingly
  //   }
     
  // }

}
