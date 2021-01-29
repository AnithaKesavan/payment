import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { PaymentService } from 'src/app/service/payment.service';
import { addPayment, Payment } from 'src/app/store/action';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  hide = false;
  submitted = false;

  paymentForm: FormGroup;

  payments$: Observable<any>;
  array;

  constructor(public _formBuilder: FormBuilder, private store: Store<any>, private router: Router,
    private paymentService: PaymentService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.paymentForm = this._formBuilder.group({
      cardHolderName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiry: ['', [Validators.required, ValidateExpiry]],
      cvv: ['', Validators.nullValidator],
      amount: ['', [Validators.required, Validators.min(1)]],
      terms: ['', Validators.required],
    });

  }

  onSubmit() {
    this.submitted = true;
    if (this.paymentForm.invalid) {
      return;
    }
    const customer = new Payment();
    customer.name = this.paymentForm.value.cardHolderName;
    customer.cardnumber = this.paymentForm.value.cardNumber;
    customer.expiry = this.paymentForm.value.expiry;
    customer.cvv = this.paymentForm.value.cvv;
    customer.amount = this.paymentForm.value.amount;
    this.store.dispatch(addPayment(customer));
    console.log(this.paymentForm);
    this.paymentService.postMethod('', this.paymentForm.value).subscribe((data) => {
      this._snackBar.open('Saved Successfully', 'Ok', {
        duration: 2000,
      });
    }, err => {
      console.log(err);
    })

    this.router.navigateByUrl('/display');
  }
}

function ValidateExpiry(control: AbstractControl): { [key: string]: any } | null {
  const { 0: month, 1: year } = control.value.split("/");
  let value = "20" + year;
  if (Number(value) < new Date().getFullYear()) {
    return { 'expiryInvalid': true };
  }
  return null;
}
