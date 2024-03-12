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
  UserName: any;
  show: boolean = false;
  count: any;

  constructor( private smsservice: ServicesService,  private sideNavService: SidenavService
  ) {
    setInterval(() => {
      this.CurrentDate = new Date();
    }, 1000);
  }

  ngOnInit() {
    this.smsservice.localdata();
    this.loadcount()
  }
  
  loadcount(){
    this.UserName=this.smsservice.userName
    // this.UserName='demotr'
    this.smsservice.getBalance(this.UserName).subscribe({
      next:((res:any)=>{
        this.count=res.SMSBalance
      })
     
    })
    console.log('count',this.UserName);

   }


  toggelNav() {
    this.show = !this.show;
    this.sideNavService.showNav.next(this.show);
  }

}
