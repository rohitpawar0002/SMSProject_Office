import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import { SmsContantComponent } from './sms-contant.component';


@NgModule({
  declarations: [
    SmsContantComponent
  ],
  imports: [
    CommonModule,
    SmsRoutingModule
  ]
})
export class SmsModule { }
