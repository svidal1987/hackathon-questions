import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent implements OnInit {
  @Input() carrera!:string;

  pregunta1?:string
  pregunta2?:string
  pregunta3?:string
  pregunta4?:string
  pregunta5?:string
  pregunta6?:string

  constructor() { }

  ngOnInit(): void {
  }
  verificar(){
    
  }
}
