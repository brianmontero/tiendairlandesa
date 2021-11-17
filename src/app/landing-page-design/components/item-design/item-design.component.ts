import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { filter, map } from 'rxjs/operators';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-design',
  templateUrl: './item-design.component.html',
  styleUrls: ['./item-design.component.css']
})
export class ItemDesignComponent implements OnInit {

  item: Products[] = [];
  idUrl: any = this.route.snapshot.paramMap.get('id');
  
  constructor(private route: ActivatedRoute, private api: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.api.showProd(parseInt(this.idUrl)).subscribe(res => this.item = res);
  }

  addProduct(prod: Products) {
    this.cart.addProduct(prod);
  }

}
