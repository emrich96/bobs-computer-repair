/**
 * Title: about.module.ts
 * Author: Emily Richter
 * Date: 6 September 2020
 * Description: About Module
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, matDialogAnimations } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { OrderFormComponent } from './order-form/order-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxCurrencyModule } from 'ngx-currency';
import { InvoiceDialogComponent } from './invoice-dialog/invoice-dialog.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    InvoiceDialogComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    NgxCurrencyModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
