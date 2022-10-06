import { Component, Input,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-basico-AS',
  templateUrl: './basicoAS.component.html',
  styleUrls: ['./basicoAS.component.css']
})
export class BasicoASComponent implements OnInit {
  //Actualizar estas variables
  passwordVerdadero:string=environment.segundo_password
  pdf1=environment.segundo_pdf1
  pdf2=environment.segundo_pdf2
  pdf3=environment.segundo_pdf3

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
