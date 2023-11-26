import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Participant } from 'src/app/classes/participant';
import { AccountService } from 'src/app/services/account.service';
import { EventService } from 'src/app/services/event.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/Router';
@Component({
  selector: 'app-participer',
  templateUrl: './participer.component.html',
  styleUrls: ['./participer.component.css']
})
export class ParticiperComponent {

  participerForm!: FormGroup;
  userId: number = parseInt(localStorage.getItem('userId') || '0', 10);
  
  eventId!:number;
  part!:Participant;
  etat:boolean=false;

  constructor(
    private fb:FormBuilder,
    private eventService:EventService,
    private accountServive:AccountService,
    private authservice:AuthService,
    private activatedRoute: ActivatedRoute,
    private router :Router
  ){}
  ngOnInit(){
    // this.name=localStorage.getItem('name');
    this.eventId=this.activatedRoute.snapshot.params['id'];
    this.participerForm=this.fb.group(
      {
        name:[this.authservice.getName()],
        email: [this.authservice.getEmail()],
        niveau: [''],
        phoneNumber: [this.authservice.getphone()],
      }
    );

  }
  
  onSubmit() {
    
    const formValues = this.participerForm.value;
    const memberId = this.userId;
    
    if (memberId) {
      
      const participant = { ...formValues };

      
      this.eventService.addRequestsToEvent(this.eventId, participant).subscribe(
        (data) => {
          
          alert("Request added successfully, We will Send an email for the result ");
          console.log('Request added successfully:', data);
          this.router.navigate(['home/',this.eventId]);
          this.etat=true;
        },
        (error) => {
          alert('Error adding request"');
          console.error('Error adding request:', error);
        }
      );
    } else {
      
      console.error('User not authenticated');
     
    }
  }

  // this.id=this.activatedRoute.snapshot.params['idf'];

  
 
  
  


  

}


