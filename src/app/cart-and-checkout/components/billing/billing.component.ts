import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  public formBilling: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formBilling = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'surname': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'postal': ['', [Validators.required, Validators.pattern('^[0-9]{5}$'), Validators.min(5)]],
      'phone': ['', [Validators.required, Validators.pattern('^[0-9]{7,10}$')]]
    });
  }

  send() {
    let name = this.formBilling.get('name').value,
        surname = this.formBilling.get('surname').value,
        address = this.formBilling.get('address').value,
        city = this.formBilling.get('city').value,
        postal = this.formBilling.get('postal').value,
        phone = this.formBilling.get('phone').value;

    console.log({name, surname, address, city, postal, phone});

    this.router.navigate(['/payment']);
  }

  goBack() {
    this.router.navigate(['/cart']);
  }
}
