import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Participant } from 'src/app/classes/participant';
import { AccountService } from 'src/app/services/account.service';
import { EventService } from 'src/app/services/event.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/Router';
@Component({
  selector: 'app-participer',
  templateUrl: './participer.component.html',
  styleUrls: ['./participer.component.css']
})
export class ParticiperComponent {

  participerForm!: FormGroup;
  id: any;
 
  constructor(
    private fb:FormBuilder,
    private eventService:EventService,
    private accountServive:AccountService,
    private authservice:AuthService,
    private activatedRoute: ActivatedRoute
  ){}
  ngOnInit(){
    this.id=this.activatedRoute.snapshot.params['idf'];
    this.participerForm=this.fb.group(
      {
        name:[this.authservice.getName()],
        email: [this.authservice.getEmail()],
        niveau: [''],
        phoneNumber: [''],
      }
    );

  }
  
  onSubmit() {
    
    const formValues = this.participerForm.value;
    const memberId = this.authservice.GetUserId();

    if (memberId) {
      
      const participant = { ...formValues, memberId };

      
      this.eventService.addRequestsToEvent(this.id, participant).subscribe(
        (data) => {
          
          console.log('Request added successfully:', data);
        },
        (error) => {
          
          console.error('Error adding request:', error);
        }
      );
    } else {
      
      console.error('User not authenticated');
     
    }
  }

  // this.id=this.activatedRoute.snapshot.params['idf'];

  
 
  
  


  

}


