import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  @Input() item: any;
  prodQuant: number = 1;
  products: any[] = [];

  constructor(private cart: CartService) { }

  ngOnInit() {
    return this.cart.getTotalPrice().subscribe(r => {
      this.products = r;
    });
  }

  deleteProduct(item: Products) {
    this.cart.deleteProduct(item);
  }

  quantity(item: Products, event: any) {
    let id = item.id;
    let quantity = parseInt(event.target.value);
    this.prodQuant = item.price * quantity;
    let price = this.prodQuant;
    this.cart.totalPrice({id, quantity, price});
  }
  
}
