import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillingPageComponent } from './pages/billing-page/billing-page.component';
import { CalzadoSectionComponent } from './pages/calzado-section/calzado-section.component';
import { CartComponent } from './pages/cart/cart.component';
import { HombresSectionComponent } from './pages/hombres-section/hombres-section.component';
import { ItemViewComponent } from './pages/item-view/item-view.component';
import { KidsSectionComponent } from './pages/kids-section/kids-section.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { MujeresSectionComponent } from './pages/mujeres-section/mujeres-section.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { UnisexSectionComponent } from './pages/unisex-section/unisex-section.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product/:id', component: ItemViewComponent },
  { path: 'mujeres', component: MujeresSectionComponent },
  { path: 'hombres', component: HombresSectionComponent },
  { path: 'kids', component: KidsSectionComponent },
  { path: 'calzado', component: CalzadoSectionComponent },
  { path: 'unisex', component: UnisexSectionComponent },
  { path: 'cart', component: CartComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'busqueda/:search', component: SearchComponent },
  { path: 'billing', component: BillingPageComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'favorites', component: FavoritesPageComponent }
];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
