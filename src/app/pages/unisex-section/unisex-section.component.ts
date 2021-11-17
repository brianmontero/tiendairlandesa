import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-unisex-section',
  templateUrl: './unisex-section.component.html',
  styleUrls: ['./unisex-section.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class UnisexSectionComponent implements OnInit {

  unisex: string = "unisex"

  constructor() { }

  ngOnInit(): void {
  }

}
