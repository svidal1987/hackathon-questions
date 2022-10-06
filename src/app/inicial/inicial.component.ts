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

  verificacion?:boolean
  constructor() { }

  ngOnInit(): void {
  }


  verificar(){
    this.verificacion = this.password==this.passwordVerdadero
    if(this.password!=this.passwordVerdadero){
      new Promise( resolve => setTimeout(()=>{window.location.reload();}, 10000) )
    }
  }



}
