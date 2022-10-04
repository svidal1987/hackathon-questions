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
  verificacion?:boolean=undefined;
  verificar(){
    if(this.pregunta1=='F'
      && this.pregunta2=='V'
      && this.pregunta3=='F'
      && this.pregunta4=='F'
      && this.pregunta5=='F'
      && this.pregunta6=='V'
    ){
      this.verificacion=true
    }else{
      this.verificacion=false
      new Promise( resolve => setTimeout(()=>{window.location.reload();}, 10000) )
    }
  }
}
