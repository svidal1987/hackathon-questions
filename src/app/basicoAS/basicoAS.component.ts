import { Component, Input,OnInit,Renderer2,ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as confetti from 'canvas-confetti';
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
  pdf4=environment.segundo_pdf4
  error_gif=environment.errors_gif[Math.floor(Math.random() * 10)]
  password?:string
  verificacion1?:boolean=undefined;
  verificacion2?:boolean=undefined;

  constructor(    
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) { }

  public surprise(): void {
    const canvas = this.renderer2.createElement('canvas');
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
    const myConfetti = confetti.create(canvas, { 
      resize: true, // will fit all screen sizes
    });
    myConfetti({
        particleCount: 200,
        spread: 300,
        origin: { x: 0.3,y:0.45 },
      })
    myConfetti({
        particleCount: 150,
        spread: 300,
        origin: { x: 0.75,y:0.70 },
      })
    myConfetti({
        particleCount: 350,
        spread: 300,
        origin: { x: 0.45,y:0.45 },
      })
    new Promise( resolve => setTimeout(()=>{this.renderer2.setStyle( canvas, 'visibility','hidden');}, 5000) )
  }

  ngOnInit(): void {
  }

  
  verificar1(){
    this.verificacion1 = this.password==this.passwordVerdadero
    if(this.password!=this.passwordVerdadero){
      new Promise( resolve => setTimeout(()=>{window.location.reload();}, 10000) )
    }else{
      this.surprise()
    }

  }
  verificar2(){
    this.verificacion2 =true

  }
}
