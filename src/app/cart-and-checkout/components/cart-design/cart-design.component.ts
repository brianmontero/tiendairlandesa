import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-design',
  templateUrl: './cart-design.component.html',
  styleUrls: ['./cart-design.component.css']
})
export class CartDesignComponent implements OnInit {

  list: Products[] = [];
  totalAmount: number = 0;

  constructor(private cart: CartService) { }
  
  ngOnInit() {
    this.cart.getProducts().subscribe((r: Products[]) => {
      this.list = r;
    });
  }

  deleteProduct(prod: Products) {
    this.cart.deleteProduct(prod);
  }

}
