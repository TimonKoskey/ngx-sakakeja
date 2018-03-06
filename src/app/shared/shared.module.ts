import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactFormComponent} from '../contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactFormComponent
  ],
  exports: [
    ContactFormComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
