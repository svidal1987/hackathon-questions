import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-avanzado-TSH',
  templateUrl: './avanzadoTSH.component.html',
  styleUrls: ['./avanzadoTSH.component.css']
})
export class AvanzadoTSHComponent implements OnInit {
  @Input() carrera!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
