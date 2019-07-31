import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { lstPayment } from "./lst-payment";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filterTable: any;

  paymentForm: FormGroup;
  paymentForm_fb() {
    this.paymentForm = this._fb.group({
      customerId: [],
      lstPayments: this._fb.array([])
    });
  };

  get lstPayments(): FormArray { return this.paymentForm.get('lstPayments') as FormArray; };

  addPayments(lstPayments) {
    if (lstPayments && lstPayments.length) {
      for (let i = 0; i < lstPayments.length; i++) {
        const element = lstPayments[i];
        this.lstPayments.push(this._fb.group({
          ptype: element.ptype,
          company: element.company,
          description: element.description,
          amount: element.amount,
          id: element.id,
          donePayment: false
        }));
      };
    };
  };

  constructor(private _fb: FormBuilder) { }
  ngOnInit() { this.paymentForm_fb(); this.addPayments(lstPayment); }
}
