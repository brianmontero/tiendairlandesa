import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  credit: string = '';

  cards: string[] = [
    'VISA',
    'BROU',
    'MasterCard',
    'OCA'
  ];

  months: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  creditSelected() {
    this.credit = 'card';
  }

}
