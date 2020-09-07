/**
 * Title: order-form.component.ts
 * Author: Emily Richter
 * Date: 6 September 2020
 * Description: Order form Component
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepairServices } from '../repair-services.interface';
import { Invoice } from '../invoice.interface';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  //@Output() createInvoice = new EventEmitter<Invoice>();

  services: Array<IRepairServices> = [
    {
      id: 101,
      title: 'Password reset',
      price: 39.99,
    },
    {
      id: 102,
      title: 'Spyware removal',
      price: 99.99,
    },
    {
      id: 103,
      title: 'RAM upgrade',
      price: 129.99,
    },
    {
      id: 104,
      title: 'Software installation',
      price: 49.99,
    },
    {
      id: 105,
      title: 'Tune-up',
      price: 89.99,
    },
    {
      id: 106,
      title: 'Keyboard cleaning',
      price: 45.00,
    },
    {
      id: 107,
      title: 'Disk clean-up',
      price: 149.99,
    }
  ];

  service: IRepairServices;
  serviceRepairForm: FormGroup;
  selectedServices: Array<IRepairServices>
  invoice: Invoice;

  get servicesFormArray(): FormArray {
    return this.serviceRepairForm.controls.serviceRepairOptions as FormArray
  }

  private addServiceRepairCheckboxes(): void {
    this.services.forEach(() => this.servicesFormArray.push(new FormControl(false)))
  }

  constructor(private Dialog: MatDialog, private fb: FormBuilder) {
  }

  createInvoice(invoice: Invoice) {

    const dialogRef = this.Dialog.open(InvoiceDialogComponent, {
      data: {
        invoice: invoice
      },
      disableClose: true,
      width: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.invoice = null;
      }
    })
  }

  ngOnInit(): void {
    this.serviceRepairForm = this.fb.group({
      serviceRepairOptions: new FormArray([]),
      parts: [ null, Validators.compose([Validators.required])],
      labor: [ null, Validators.compose([Validators.required])]
    })



    this.addServiceRepairCheckboxes()
  }

  onSubmit(event) {
    this.selectedServices = this.serviceRepairForm.value.serviceRepairOptions
    .map((checked, index) => checked ? this.services[index] : null)
    .filter(v => v !== null);

    console.log(this.selectedServices)

    const invoice = {} as Invoice

    invoice.lineitems = this.selectedServices

    invoice.partsAmount = this.serviceRepairForm.value.parts

    invoice.laborAmount = this.serviceRepairForm.value.labor

    invoice.orderDate = new Date().toDateString()

    console.log(this.invoice)

    this.createInvoice(invoice);

    event.currentTarget.reset();

  }

}
