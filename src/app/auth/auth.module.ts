import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';

import { LoginDesignComponent } from './components/login-design/login-design.component';
import { RegisterDesignComponent } from './components/register-design/register-design.component';


@NgModule({
  declarations: [
    LoginDesignComponent,
    RegisterDesignComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    LoginDesignComponent,
    RegisterDesignComponent
  ]
})
export class AuthModule { }
