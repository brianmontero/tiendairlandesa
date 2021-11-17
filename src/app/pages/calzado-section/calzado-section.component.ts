import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-calzado-section',
  templateUrl: './calzado-section.component.html',
  styleUrls: ['./calzado-section.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class CalzadoSectionComponent implements OnInit {

  calzado: string = "calzado";

  constructor() { }

  ngOnInit(): void {
  }

}
