import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsContantComponent } from './sms-contant.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:SmsContantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsRoutingModule { }
