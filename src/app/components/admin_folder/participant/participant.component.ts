import { Component, Input } from '@angular/core';
import { Participant } from 'src/app/classes/participant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent {
@Input() participant!:Participant;
}
