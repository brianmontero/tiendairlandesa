import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private cart: CartService, private toastr: ToastrService, private route: Router) { }

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
  
  send(totalPrice: string) {
    if (this.totalPrice.length === 0) {
      this.toastr.error('No hay ningún producto en el carrito', 'Error', {
        positionClass: 'toast-bottom-left',
      });
    }
    else {
      let total = parseInt(totalPrice.slice(2, -4).split(',').join(''));
      let amount = this.totalPrice.length;
      let location = this.location
      this.cart.cartProductSent({total, amount, location});
      this.route.navigate(['/billing']);
    } 
  }
}
