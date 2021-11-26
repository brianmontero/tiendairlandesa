import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _url: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this._url);
  }

  showProd(id: any): Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
    .pipe(
      map(val => val.filter(v => v.id === id))
    );
  }

  getMujeresSection(): Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
    .pipe(
      map(val => val.filter(v => v.category == "Femenina"))
    );
  }

  getHombresSection(): Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
    .pipe(
      map(val => val.filter(v => v.category == "Masculina"))
    );
  }

  getKidsSection(): Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
    .pipe(
      map(val => val.filter(v => v.category == "Kids"))
    );
  }

  getUnisexSection(): Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
    .pipe(
      map(val => val.filter(v => v.category == "Femenina" || v.category == "Masculina"))
    );
  }

  getCalzadoSection(): Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
    .pipe(
      map(val => val.filter(v => v.features.calzado == true))
    );
  }
  
  getByFilterColor(color: string): Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
    .pipe(
      map(val => val.filter(v => v.features.color == color))
    );
  }

  getByFilterRange(range1: number, range2: number): Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
    .pipe(
      map(val => val.filter(v => v.price >= range1 && v.price <= range2))
    )
  }

  getSearch(value: string): Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
    .pipe(
      map(val => val
        .filter(v => v.title.toLowerCase().startsWith(value)))
    );
  }
}
