import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';
import { Observable } from 'rxjs';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/classes/participant';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/classes/account';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent{
  
}
