import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ItemViewComponent } from './pages/item-view/item-view.component';
import { MujeresSectionComponent } from './pages/mujeres-section/mujeres-section.component';
import { HombresSectionComponent } from './pages/hombres-section/hombres-section.component';
import { KidsSectionComponent } from './pages/kids-section/kids-section.component';
import { UnisexSectionComponent } from './pages/unisex-section/unisex-section.component';
import { CalzadoSectionComponent } from './pages/calzado-section/calzado-section.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TermsComponent } from './components/terms/terms.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchDesignComponent } from './components/search-design/search-design.component';
// Módulos
import { AppRoutingModule } from './app-routing.module';
import { LandingPageDesignModule } from './landing-page-design/landing-page-design.module';
import { AuthModule } from './auth/auth.module';
import { CartAndCheckoutModule } from './cart-and-checkout/cart-and-checkout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { FavoritesDesignComponent } from './components/favorites-design/favorites-design.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { FavoritesItemComponent } from './components/favorites-item/favorites-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    ItemViewComponent,
    MujeresSectionComponent,
    HombresSectionComponent,
    KidsSectionComponent,
    UnisexSectionComponent,
    CalzadoSectionComponent,
    CartComponent,
    TermsComponent,
    TermsAndConditionsComponent,
    SearchDesignComponent,
    SearchComponent,
    BillingPageComponent,
    PaymentPageComponent,
    FavoritesDesignComponent,
    FavoritesPageComponent,
    FavoritesItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    LandingPageDesignModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    CartAndCheckoutModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
