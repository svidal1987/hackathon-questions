import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  paso:string='0';
  carrera:string="";
  dificultad:string="";


  constructor(){
  }
}
