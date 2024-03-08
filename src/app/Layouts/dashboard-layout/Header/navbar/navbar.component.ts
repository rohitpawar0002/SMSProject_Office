import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';
import { SidenavService } from 'src/app/Services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
 
  CurrentDate=new Date();
  constructor(private smsservice:ServicesService)
  {
    setInterval(() => {
      this.CurrentDate = new Date()
    }, 1000)
  }

  count:any=this.smsservice.balanceCount
  ngOnInit(){
  }

}
