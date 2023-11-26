import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { Event } from 'src/app/classes/event';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-selected-event',
  templateUrl: './selected-event.component.html',
  styleUrls: ['./selected-event.component.css']
})
export class SelectedEventComponent implements OnInit {
  item!:Event;
  id:number=0;
  etat:boolean=false;
constructor(private router:Router,
   private activatedRoute:ActivatedRoute,
   private EventService:EventService,
   private authService:AuthService,
  
   ){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getEventById(this.id);
    
  }
  getEventById(id:number){
    this.EventService.getEventById(id).subscribe(
      (data:Event)=>{
        this.item=data
      }
    )
  }
  Redicrect(eventId:number):void{
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/participer',eventId]);
    }else{
      alert("Please log in before registering.");
      this.router.navigate(['/login']);
    }
  }
 

}
