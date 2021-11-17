import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-design',
  templateUrl: './login-design.component.html',
  styleUrls: ['./login-design.component.css']
})
export class LoginDesignComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
  }

}
