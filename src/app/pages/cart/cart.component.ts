import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000)
      ])
    ])
  ]
})
export class CartComponent implements OnInit {

  a: number = 0;
  constructor() { }

  ngOnInit(): void {

  }

}
