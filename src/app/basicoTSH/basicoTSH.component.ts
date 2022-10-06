import { Component, Input,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-basico-TSH',
  templateUrl: './basicoTSH.component.html',
  styleUrls: ['./basicoTSH.component.css']
})
export class BasicoTSHComponent implements OnInit {
  //Actualizar estas variables
  passwordVerdadero:string=environment.basico_password
  pdf1=environment.basico_pdf1
  pdf2=environment.basico_pdf2


  password?:string

  pregunta1?:string
  pregunta2?:string
  pregunta3?:string
  pregunta4?:string
  pregunta5?:string
  pregunta6?:string

  constructor() { }

  ngOnInit(): void {
  }
  verificacion1?:boolean=undefined;
  verificacion2?:boolean=undefined;
  
  verificar1(){
    this.verificacion1 = this.password==this.passwordVerdadero
    if(this.password!=this.passwordVerdadero){
      new Promise( resolve => setTimeout(()=>{window.location.reload();}, 10000) )
    }

  }
  verificar2(){
    if(this.pregunta1=='F'
      && this.pregunta2=='V'
      && this.pregunta3=='F'
      && this.pregunta4=='F'
      && this.pregunta5=='F'
      && this.pregunta6=='V'
    ){
      this.verificacion2=true
    }else{
      this.verificacion2=false
      new Promise( resolve => setTimeout(()=>{window.location.reload();}, 10000) )
    }
  }
}
