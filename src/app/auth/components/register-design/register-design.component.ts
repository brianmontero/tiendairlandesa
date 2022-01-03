import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-register-design',
  templateUrl: './register-design.component.html',
  styleUrls: ['./register-design.component.css']
})
export class RegisterDesignComponent implements OnInit {

  public formRegister: FormGroup;
  hide: boolean = true;
  
  constructor(private auth: AuthService,
     private form: FormBuilder,
     private toastr: ToastrService,
     private router: Router,
     private firebase: CollectionsService ) { }

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
      await this.auth.getCurrentUser().then(async (user) => {
        let username = user.email.split("@")[0];
        await user.updateProfile({displayName: username});
      })
      this.toastr.success('', 'Usuario registrado exitosamente', { positionClass: 'toast-bottom-right' });

      setTimeout(async () => {
        await this.router.navigate(['/']);
        window.location.reload();
      }, 1000);
    }
    catch (error: any) {
      alert(error.message);
    }
  }

  send() {
    let email = this.formRegister.value.email,
        password = this.formRegister.value.password;
    this.register(email, password);
  }

  passwordVisible() {
    this.hide = !this.hide;
  }

}
