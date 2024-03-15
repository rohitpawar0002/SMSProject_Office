import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsContantComponent } from './sms-contant.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { ResReportComponent } from './res-report/res-report.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'report',component:ReportComponent},
  {path:'Resreport/:id',component:ResReportComponent}, 
  {path:'smssend',pathMatch:'full',component:SmsContantComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsRoutingModule { }
