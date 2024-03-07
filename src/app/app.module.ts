import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdown, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { NavbarComponent } from './Layouts/dashboard-layout/Header/navbar/navbar.component';
import { SideNavComponent } from './Layouts/dashboard-layout/side-nav/side-nav/side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './Layouts/dashboard-layout/test/test.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    NavbarComponent,
    SideNavComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
