import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-design',
  templateUrl: './login-design.component.html',
  styleUrls: ['./login-design.component.css']
})
export class LoginDesignComponent implements OnInit {
  
  public formLogin: FormGroup;
  username: string;

  constructor(private auth: AuthService,
     private formBuilder: FormBuilder,
     private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  async login(user: string, password: string) {
    try {
      await this.auth.login(user, password);
      await this.router.navigate(['/']);
      window.location.reload();
    }
    catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('El usuario no existe');
          break;
        case 'auth/wrong-password':
          alert('La contraseña es incorrecta');
          break;
      }
    }
  }
  
  send() {
    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;
    this.login(email, password);
  }

  logout() {
    return this.auth.logout();
  }

}
