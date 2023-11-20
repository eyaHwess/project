import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/Router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  accountId!: number;
  modifyForm: any;
  constructor(
    private eventService: EventService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {};
  
idfE:number=0;
event!:Event;
  ngOnInit() {
    this.idfE=this.activatedRoute.snapshot.params['idf'];
    this.eventService.getEventById(this.idfE);
  }
  annuler(){
    this.router.navigate(['/admin/event'])
   }
}
