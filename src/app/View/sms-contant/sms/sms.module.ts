import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import { SmsContantComponent } from './sms-contant.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SmsContantComponent
  ],
  imports: [
    CommonModule,
    SmsRoutingModule,
    HttpClientModule

  ]
})
export class SmsModule { }
