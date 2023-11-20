import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Participant } from 'src/app/classes/participant';
import { AccountService } from 'src/app/services/account.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-participer',
  templateUrl: './participer.component.html',
  styleUrls: ['./participer.component.css']
})
export class ParticiperComponent {
  // participerForm!: FormGroup;
  
  // constructor(
  //   private fb:FormBuilder,
  //   private eventService:EventService,
  //   private accountServive:AccountService
  // ){
  //   this.participerForm=this.fb.group(
  //     {
  //       name:[''],
  //       CIN: [''],
  //       email: [''],
  //       niveau: [''],
  //       phoneNumber: [''],
  //     }
  //   );
  // }
  // this.id=this.activatedRoute.snapshot.params['idf'];
 
  // formValues: Participant[]=[];
  // ngOnInit() {
  //   this.eventService.selectedEvent$.subscribe((event) => {
  //     if (event) {
  //       this.eventId = event.id; // or whatever property represents the event ID
  //     }
  //   });
  // }
  
  


  

}
