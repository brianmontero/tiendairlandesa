import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { FiltersComponent } from './components/filters/filters.component';
import { ItemsContainerComponent } from './components/items-container/items-container.component';
import { ItemComponent } from './components/item/item.component';
import { ItemDesignComponent } from './components/item-design/item-design.component';
import { FilterMessengerService } from '../services/filter-messenger.service';

@NgModule({
  declarations: [
    FiltersComponent,
    ItemsContainerComponent,
    ItemComponent,
    ItemDesignComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [FilterMessengerService],
  exports: [
    FiltersComponent,
    ItemsContainerComponent,
    ItemComponent,
    ItemDesignComponent
  ]
})
export class LandingPageDesignModule { }
