import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-kids-section',
  templateUrl: './kids-section.component.html',
  styleUrls: ['./kids-section.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class KidsSectionComponent implements OnInit {

  kids: string = "kids";

  constructor() { }

  ngOnInit(): void {
  }

}
