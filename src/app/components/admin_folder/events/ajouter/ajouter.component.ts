import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Route, Router } from '@angular/Router';
import { Robot } from 'src/app/classes/robot';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit{
  addForm!:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private eventService:EventService
  ){
    this.addForm = this.formBuilder.group({
      picture: [''],
      name: ['', [Validators.required]],
      nbMax: [, [Validators.required]],
      date: ['', [Validators.required]],
      dateL: ['', [Validators.required]],
      prize: ['', [Validators.required]],
      disponible: [true, [Validators.required]],
      detail: ['', [Validators.required]],
      participant:[[{}]],
      requests:[[{}]]
    });
  }
  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['/admin/liste'])
   }
   onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const imagePath = '/assets/events/' + file.name;
      this.addForm.patchValue({ picture: imagePath });
    }
  }
  onSubmit(){
    if(this.addForm.valid){
      const formValues=this.addForm.value;
      formValues.disponible = formValues.disponible === 'true';
      this.eventService.addEvent(formValues).subscribe(
        (response) => {
          console.log('Event added successfully:', response);
          // Optionally, you can redirect to the event list page or any other page
          this.router.navigate(['/admin/liste']);
        },
        (error) => {
          console.error('Error adding event:', error);
          // Handle errors as needed
        }
      )
    }
  }
}
