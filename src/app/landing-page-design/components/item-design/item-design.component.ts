import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-item-design',
  templateUrl: './item-design.component.html',
  styleUrls: ['./item-design.component.css']
})
export class ItemDesignComponent implements OnInit {

  item: Products[] = [];
  productList: Products[] = [];
  idUrl: any = this.route.snapshot.paramMap.get('id');
  aState: any;
  userUID: string;
  
  constructor(private route: ActivatedRoute, 
     private api: ApiService,
     private cart: CartService,
     private toastr: ToastrService,
     private routes: Router,
     private auth: AuthService,
     private firebase: CollectionsService) { }

  ngOnInit(): void {
    this.api.showProd(parseInt(this.idUrl)).subscribe(res => this.item = res);
    this.cart.getProducts().subscribe(e => this.productList = e);
    this.auth.authState().subscribe(auth => {
      this.aState = auth
      this.userUID = auth.uid;
    });
  }

  addProduct(prod: Products) {
    if (this.aState == null) {
      this.routes.navigate(['/login']);
      setTimeout(() => {
        this.toastr.error('', 'Tenes que iniciar sesión para usar el carrito');
      }, 300);
    }
    else {
      this.cart.addProduct(prod);
    }
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
