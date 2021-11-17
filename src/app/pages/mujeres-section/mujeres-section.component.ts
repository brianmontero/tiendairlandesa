import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/services/api.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-mujeres-section',
  templateUrl: './mujeres-section.component.html',
  styleUrls: ['./mujeres-section.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class MujeresSectionComponent implements OnInit {

  productList: Products[] = [];

  constructor(private api:ApiService) { }

  mujeres = "mujeres";

  ngOnInit(): void {
  }

}
