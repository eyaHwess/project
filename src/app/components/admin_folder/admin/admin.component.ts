import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';
import { Observable } from 'rxjs';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/classes/participant';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  event:Event[]=[];
  requests:Participant[]=[];
  participant:Participant[]=[];
  constructor(private eventService:EventService,
            
    ){}
    ngOnInit(){
      this.eventService.getEvents().subscribe(
        data=>this.event=data
      )
    }

}
