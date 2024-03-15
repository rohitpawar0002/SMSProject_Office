import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import { SmsContantComponent } from './sms-contant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { ResReportComponent } from './res-report/res-report.component';



@NgModule({
  declarations: [
    SmsContantComponent,
    HomeComponent,
    ReportComponent,
    ResReportComponent
  ],
  imports: [
    CommonModule,
    SmsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class SmsModule { }
