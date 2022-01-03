import { Injectable } from '@angular/core';
import { Products } from '../models/products.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CheckoutProduct } from '../models/checkout-product';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productList: Products[] = [];
  public totalOfProducts: CheckoutProduct[] = [];
  public cartProductsList: any[] = [];
  public product$ = new BehaviorSubject<Products[]>([]);
  public total$ = new BehaviorSubject<CheckoutProduct[]>([]);
  public cartProducts$ = new BehaviorSubject<any[]>([]);
  
  
  constructor() { }

  getProducts(): Observable<Products[]> {
    return this.product$.asObservable();
  }

  addProduct(product: Products) {
    if (!this.productList.some(e => e.id === product.id)) {
      let id = product.id;
      let quantity = 1;
      let price = product.price;
      
      this.productList.push(product);
      this.totalOfProducts.push({id, quantity, price});
      this.total$.next(this.totalOfProducts);
      this.product$.next(this.productList);
    }
  } 

  totalPrice(obj: CheckoutProduct) {
    
    if (this.totalOfProducts.length === 0) {
      this.totalOfProducts.push(obj);
      this.total$.next(this.totalOfProducts);
    }

    else {
      let a = this.totalOfProducts.filter(e => e.id === obj.id);
      let i = this.totalOfProducts.indexOf(a[0]);
      if (a.length === 0) {
        this.totalOfProducts.push(obj);
        this.total$.next(this.totalOfProducts);          
      }
      else {
        this.totalOfProducts[i] = obj;
        this.total$.next(this.totalOfProducts);
      }
    }
  }

  getTotalPrice(): Observable<CheckoutProduct[]> {
    return this.total$.asObservable();
  }

  deleteCheckoutProduct(id: number) {
    let b = this.totalOfProducts.filter(e => e.id === id);
    let i = this.totalOfProducts.indexOf(b[0]);
    this.totalOfProducts.splice(i, 1);
    this.total$.next(this.totalOfProducts);
  }

  deleteProduct(product: Products) {
    let index = product.id;
    let position = this.productList.indexOf(product);
    this.productList.splice(position, 1);
    this.deleteCheckoutProduct(index);
  }

  getCartProducts(): Observable<any[]> {
    return this.cartProducts$.asObservable();
  }

  cartProductSent(obj: any) {
    this.cartProductsList.push(obj);
    this.cartProducts$.next(this.cartProductsList);
  }

}
