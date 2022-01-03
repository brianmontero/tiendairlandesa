import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/models/products.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() productItem: any
  @Input() searchProducts: Products[];
  products: Products[] = [];
  aState: any;
  userUID: string;

  constructor(private cart: CartService, private toastr: ToastrService,
              private auth: AuthService, private routes: Router, private firebase: CollectionsService ) { }

  ngOnInit() {
    this.cart.getProducts().subscribe(r => this.products = r);
    this.auth.authState().subscribe(auth => {
      this.aState = auth;
      this.userUID = auth.uid;
    });
  }

  addProductToCart(prod: Products) {
    if (this.aState == null) {
      this.routes.navigate(['/login'])
      setTimeout(() => {
        this.toastr.error('', 'Tenes que iniciar sesión para usar el carrito');
      }, 300);
    }
    else {
      this.cart.addProduct(prod);
    }
  }

  stop(e: any) {
    e.stopPropagation();
  }

  addToFavorites(e: any, item: any) {
    if (this.aState == null) {
      this.routes.navigate(['/login']);
      this.toastr.error('', 'Sólo usuarios pueden tener favoritos');
    }
    else {
      e.stopPropagation();
      this.firebase.addId(this.userUID, item);
    }
  }

}
