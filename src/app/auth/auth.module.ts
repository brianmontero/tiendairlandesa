import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginDesignComponent } from './components/login-design/login-design.component';
import { RegisterDesignComponent } from './components/register-design/register-design.component';


@NgModule({
  declarations: [
    LoginDesignComponent,
    RegisterDesignComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginDesignComponent,
    RegisterDesignComponent
  ]
})
export class AuthModule { }
