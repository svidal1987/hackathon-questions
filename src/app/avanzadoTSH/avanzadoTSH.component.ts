import { Component, Input,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-avanzado-TSH',
  templateUrl: './avanzadoTSH.component.html',
  styleUrls: ['./avanzadoTSH.component.css']
})
export class AvanzadoTSHComponent implements OnInit {
  //Actualizar estas variables
  passwordVerdadero:string=environment.avanzado_password
  pdf1=environment.avanzado_pdf1
  pdf2=environment.avanzado_pdf2

  password?:string
  verificacion?:boolean=undefined;

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
