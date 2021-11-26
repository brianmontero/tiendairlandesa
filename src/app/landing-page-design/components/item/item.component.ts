import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() productItem: any
  @Input() searchProducts: Products[];
  products: Products[] = [];

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.cart.getProducts().subscribe(r => this.products = r);
  }

  addProductToCart(prod: Products) {
    if (!this.products.includes(prod)) {
      this.cart.addProduct(prod);
    }
  }

  stop(e: any) {
    e.stopPropagation();
  }

}
