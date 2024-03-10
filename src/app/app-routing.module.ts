import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Layouts/dashboard-layout/Header/navbar/navbar.component';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { SideNavComponent } from './Layouts/dashboard-layout/side-nav/side-nav/side-nav.component';
import { SmsContantComponent } from './View/sms-contant/sms/sms-contant.component';

const routes: Routes = [
  {path:'',component:DashboardLayoutComponent,
  children:[
    {
      path:'',
      loadChildren:()=>
      import('./View/sms-contant/sms/sms.module').then((m)=>m.SmsModule),
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
