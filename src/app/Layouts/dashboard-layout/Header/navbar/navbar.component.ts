import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';
import { SidenavService } from 'src/app/Services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  CurrentDate = new Date();
  count: any;
  show: boolean = false;
  count2: any;

  constructor( private smsservice: ServicesService,  private sideNavService: SidenavService
  ) {
    setInterval(() => {
      this.CurrentDate = new Date();
    }, 1000);
  }

  ngOnInit() {
    this.smsservice.localdata();

    
      // this.count = new Promise((resolve, reject) => {
    //   resolve(this.smsservice.balanceCount);
    // });
  }
  loadcount(){
    this.count=this.smsservice.balanceCount
    console.log('count',this.count);
    }


  toggelNav() {
    this.show = !this.show;
    this.sideNavService.showNav.next(this.show);
  }

}
