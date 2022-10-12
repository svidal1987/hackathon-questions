import { Component, Input,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-avanzado-AS',
  templateUrl: './avanzadoAS.component.html',
  styleUrls: ['./avanzadoAS.component.css']
})
export class AvanzadoASComponent implements OnInit {
  //Actualizar estas variables
  passwordVerdadero:string=environment.tercero_password
  pdf1=environment.tercero_pdf1
  pdf2=environment.tercero_pdf2
  

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
