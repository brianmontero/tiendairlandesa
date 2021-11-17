import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { FilterMessengerService } from 'src/app/services/filter-messenger.service';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {
  
  @Input() category: string = "";
  productList: Products[] = [];
  backUpProductList: Products[] = [];
  
  constructor(private api: ApiService, 
  private router: Router,
  private filter: FilterMessengerService) { }
    
ngOnInit(): void {
  if (this.category == "mujeres") {
    this.getMujeres();
  }
  else if (this.category == "hombres") {
    this.getHombres();
  }
  else if (this.category == "kids") {
    this.getKids();
  }
  else if (this.category == "unisex") {
    this.getUnisex();
  }
  else if (this.category == "calzado") {
    this.getCalzado();
  }
  else {
    this.getGeneral();
  }
  
  this.filters();
}

  filters() {
    this.filter.getFilters().subscribe(r => {
      if (r.color == 'null') {
        this.productList = this.productList.filter(
          x => x.price >= r.range1 && x.price <= r.range2
          )
        }
      else if (r.range1 === 0 && r.range2 === 0) {
        this.productList = this.productList.filter(
          x => x.features.color == r.color
          )
        }
      });
  }
    
  refreshFunction() {
    this.ngOnInit();
  }
  
  getGeneral() {
    return this.api.getProducts().subscribe((res: any) => {
      this.productList = res;
    });
  }
  
  showItem(value: Products) {
    this.router.navigate(['/product', value.id]);
  }
  
  getMujeres() {
    return this.api.getMujeresSection().subscribe(
      x => this.productList = x
  )
  }

  getHombres() {
    return this.api.getHombresSection().subscribe(
      x => this.productList = x
    )
  }  

  getKids() {
    return this.api.getKidsSection().subscribe(
      x => this.productList = x
    )
  }

  getUnisex() {
    return this.api.getUnisexSection().subscribe(
      x => this.productList = x
    )
  }

  getCalzado() {
    return this.api.getCalzadoSection().subscribe(
      x => this.productList = x
    )
  }

}
