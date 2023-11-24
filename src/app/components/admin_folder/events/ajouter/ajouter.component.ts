import { Component } from '@angular/core';
import { Route, Router } from '@angular/Router';
import { Robot } from 'src/app/classes/robot';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  constructor( private router:Router){}
  annuler(){
    this.router.navigate(['/admin/liste'])
   }
}
