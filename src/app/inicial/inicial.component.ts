import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {
  @Input() carrera!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
