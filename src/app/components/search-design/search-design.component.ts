import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-design',
  templateUrl: './search-design.component.html',
  styleUrls: ['./search-design.component.css']
})
export class SearchDesignComponent implements OnInit {
  
  busqueda = "busqueda";
  productList: Products[];
  search: string

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.data();
  }

  data() {
    this.route.params.subscribe(params => {
      this.search = params['search'];
      this.api.getSearch(this.search).subscribe(s => this.productList = s);
    });
  }

}
