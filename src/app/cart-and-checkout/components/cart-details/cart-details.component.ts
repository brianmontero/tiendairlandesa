import { Component, OnInit } from '@angular/core';
import { CheckoutProduct } from 'src/app/models/checkout-product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  totalPrice: CheckoutProduct[] = [];
  location: string = 'Montevideo - $200';
  locationArr: any[] = ['Montevideo', 200];
  departamentos = [
    'Artigas - $233',
    'Canelones - $200',
    'Cerro Largo - $221',
    'Colonia - $219',
    'Durazno - $221',
    'Flores - $210',
    'Florida - $208',
    'Lavalleja - $219',
    'Maldonado - $208',
    'Montevideo - $200',
    'Paysandú - $227',
    'Río Negro - $213',
    'Rivera - $230',
    'Rocha - $221',
    'Salto - $227',
    'San José - $200',
    'Soriano - $213',
    'Tacuarembó - $230',
    'Treinta y Tres - $208',
  ];

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.cart.getTotalPrice().subscribe(r => {
      this.totalPrice = r;
    });
  }

  value(event: any) {
    let lista = event.split(' - $');
    lista[1] = parseInt(lista[1]);
    this.locationArr = lista;
  }

  total() {
    let total = 0;
    this.totalPrice.forEach(e => {
      total = total += e.price;
    })
    return total;
  }

  iva() {
    let acc = this.totalPrice.map(p => {
      return (p.price * 22) / 100;
    });
    return acc.reduce((ant, act) => {
      return ant + act;
    });
  }
  


}
