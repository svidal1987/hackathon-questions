import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-avanzado',
  templateUrl: './avanzado.component.html',
  styleUrls: ['./avanzado.component.css']
})
export class AvanzadoComponent implements OnInit {
  @Input() carrera!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
