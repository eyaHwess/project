import { Component } from '@angular/core';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private route:Router){}
    
}

