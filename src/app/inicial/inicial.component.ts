import { Component,Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  //Actualizar estas variables
  passwordVerdadero:string=environment.primero_password
  pdf1=environment.primero_pdf1
  pdf2=environment.primero_pdf2

  password?:string


  pregunta1?:string
  pregunta2?:string
  pregunta3?:string
  pregunta4?:string
  pregunta5?:string
  pregunta6?:string

  verificacion1?:boolean=undefined;
  verificacion2?:boolean=undefined;
  constructor() { }

  ngOnInit(): void {
  }


  verificar1(){
    console.log(this.password,this.passwordVerdadero)
    this.verificacion1 = this.password==this.passwordVerdadero
    if(this.password!=this.passwordVerdadero){
      new Promise( resolve => setTimeout(()=>{window.location.reload();}, 10000) )
    }
  }
  verificar2(){
    if(this.pregunta1=='F'
      && this.pregunta2=='F'
      && this.pregunta3=='V'
      && this.pregunta4=='F'
      && this.pregunta5=='V'
      && this.pregunta6=='V'
    ){
      this.verificacion2=true
    }else{
      this.verificacion2=false
      new Promise( resolve => setTimeout(()=>{window.location.reload();}, 10000) )
    }
  }
}
