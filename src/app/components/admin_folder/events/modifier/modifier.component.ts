import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/Router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
idfE:number=0;
event!:Event;
modifyForm: FormGroup;

constructor(
  private eventService: EventService,
  private router: Router,
  private formBuilder: FormBuilder,
  private activatedRoute:ActivatedRoute
) {
  this.modifyForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    nbMax: [, [Validators.required]],
    date: ['', [Validators.required]], 
    dateL: [, [Validators.required]],
    prize: [,[Validators.required]],
    disponible: [false,[Validators.required]],
    detail: ['',[Validators.required]],
  });
}
  ngOnInit() {
    this.idfE=this.activatedRoute.snapshot.params['id'];
    this.eventService.getEventById(this.idfE).subscribe(data => {
      this.event = data;
      this.populateForm();
    });
  }

  populateForm(): void {
    if (this.event) {
      // Populate the form controls with the existing event data
      this.modifyForm.setValue({
        name: this.event.name,
        nbMax: this.event.nbMax,
        date: this.event.date,
        dateL: this.event.dateL,
        prize: this.event.prize,
        disponible: this.event.disponible,
        detail: this.event.detail,
      });
    }
  }
  annuler(){
    this.router.navigate(['/admin/liste'])
   }
  
  onSubmit(){
    if (this.modifyForm.valid) {
      const updatedFields = this.modifyForm.value;
      updatedFields.disponible = updatedFields.disponible === 'true';
      // Call the patchEvent method to update the event
      this.eventService.patchEvent(this.idfE, updatedFields).subscribe(updatedEvent => {
        console.log('Event updated:', updatedEvent);
       this.router.navigate(['/admin/event']);
     });
  }
  }
}
