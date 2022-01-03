import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public form: FormGroup;

  constructor(private toastr: ToastrService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.pattern('^[A-Za-z]{0,30}$')]],
      'email': ['', [Validators.required, Validators.email]],
      'message': ['', [Validators.required]]
    })
  }

  submit() {
    this.router.navigate(['/']);
    this.toastr.success('', 'Consulta enviada con éxito');
    this.form.reset();
  }

}
