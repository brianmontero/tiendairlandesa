import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartDesignComponent } from './components/cart-design/cart-design.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { BillingComponent } from './components/billing/billing.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    CartDesignComponent,
    CartItemsComponent,
    CartDetailsComponent,
    BillingComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CartDesignComponent,
    BillingComponent,
    PaymentComponent
  ]
})
export class CartAndCheckoutModule { }
