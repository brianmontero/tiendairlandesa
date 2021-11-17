import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hombres-section',
  templateUrl: './hombres-section.component.html',
  styleUrls: ['./hombres-section.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class HombresSectionComponent implements OnInit {

  hombres: string = "hombres";

  constructor() { }

  ngOnInit(): void {
  }

}
