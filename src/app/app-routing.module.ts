import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalzadoSectionComponent } from './pages/calzado-section/calzado-section.component';
import { CartComponent } from './pages/cart/cart.component';
import { HombresSectionComponent } from './pages/hombres-section/hombres-section.component';
import { ItemViewComponent } from './pages/item-view/item-view.component';
import { KidsSectionComponent } from './pages/kids-section/kids-section.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { MujeresSectionComponent } from './pages/mujeres-section/mujeres-section.component';
import { RegisterComponent } from './pages/register/register.component';
import { UnisexSectionComponent } from './pages/unisex-section/unisex-section.component';

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
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
