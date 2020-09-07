/**
 * Title: invoice-dialog.component.ts
 * Author: Emily Richter
 * Date: 6 September 2020
 * Description: Invoice dialog Component
 */

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Invoice } from '../invoice.interface';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {

  invoice: Invoice;
  total: number = 0;

  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.invoice = data.invoice
  }

  calculateInvoice() {

    var totalServices = this.invoice.lineitems.reduce(function(accumulator, item) {
      return accumulator + item.price;
    }, 0)

    this.total = this.invoice.laborAmount + this.invoice.partsAmount + totalServices

    //Math.round(this.total)
    //this.total.toFixed(2)

    console.log(this.total)
  }

  ngOnInit(): void {
    this.calculateInvoice()
  }

}
