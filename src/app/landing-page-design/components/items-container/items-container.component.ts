import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterMessengerService } from 'src/app/services/filter-messenger.service';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {
  
  @Input() category: string = "";
  productList: Products[] = [];
  searchValue: string;
  
  constructor(private api: ApiService, 
  private router: Router,
  private filter: FilterMessengerService,
  private route: ActivatedRoute) { }
    
  ngOnInit() {
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
    else if (this.category == "busqueda") {
      // this.searchValue = this.route.snapshot.paramMap.get('search');
      this.route.params.subscribe(params => {
        this.searchValue = params['search'];
        this.getSearchResults(this.searchValue);
      })
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

  getSearchResults(search: string) {
    return this.api.getSearch(search).subscribe(
      s => this.productList = s
    )
  }

}
