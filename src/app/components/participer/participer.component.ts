import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Participant } from 'src/app/classes/participant';

@Component({
  selector: 'app-participer',
  templateUrl: './participer.component.html',
  styleUrls: ['./participer.component.css']
})
export class ParticiperComponent {
  participerForm!: FormGroup;

  constructor(
    private fb:FormBuilder
  ){
    this.participerForm=this.fb.group(
      {
        name:[''],
        CIN: [''],
        email: [''],
        niveau: [''],
        phoneNumber: [''],
      }
    );
  }
  formValues: Participant[]=[];
  

  

}
