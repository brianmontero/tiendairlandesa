import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  credit: boolean = false;
  public formPayment : FormGroup;

  selectedCard: string;

  cards: string[] = [
    'VISA',
    'BROU',
    'MasterCard',
    'OCA'
  ];

  selected: string = 'VISA';

  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formPayment = this.formBuilder.group({
      cardNumber: [null, [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      month: [null, [Validators.required, Validators.pattern('^[0-9]{2}$'), 
                     Validators.min(1),Validators.max(12)]],
      year: [null, [Validators.required, Validators.pattern('^[0-9]{2}$'), 
                    Validators.min(1), Validators.max(29)]],
      verificationNumber: [null, [Validators.required, Validators.pattern('^[0-9]{3}$')]]
    });
  }

  creditSelected() {
    this.credit = !this.credit;
  }

  value() {
    console.log(this.selected);
  }

  cardDone() {
    this.router.navigate(['/']);
    this.toastr.success('', 'Compra realizada con éxito');
  }

  goBack() {
    this.router.navigate(['/billing']);
  }
}
