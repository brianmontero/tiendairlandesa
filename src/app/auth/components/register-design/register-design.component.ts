import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-design',
  templateUrl: './register-design.component.html',
  styleUrls: ['./register-design.component.css']
})
export class RegisterDesignComponent implements OnInit {

  public formRegister: FormGroup;

  constructor(private auth: AuthService, private form: FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      check: [false, [Validators.requiredTrue]]
    });
  }

  async register(user: string, password: string) {
    try {
      await this.auth.register(user, password);
    }
    catch (error: any) {
      alert(error.message);
    }
  }

  send() {
    let email = this.formRegister.value.email,
        repeatedPassword = this.formRegister.value.requiredPassword;
    this.register(email, repeatedPassword);
  }

}
