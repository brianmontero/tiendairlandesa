import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/services/api.service';
import { FilterMessengerService } from 'src/app/services/filter-messenger.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  productList: Products[] = [];
  infinity: number = Infinity;

  constructor(private api: ApiService, private filter: FilterMessengerService) { }

  ngOnInit(): void {
  }

  applyFilters(r1: number, r2: number, c: string) {
    this.filter.executeFilters({range1: r1, range2: r2, color: c});
  }

  refresh() {
    window.location.reload();
  }
}
