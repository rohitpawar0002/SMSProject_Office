import { Component } from '@angular/core';
import { SidenavService } from 'src/app/Services/sidenav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {


  constructor(private sidenavService:SidenavService){}
  
  show: boolean = true;
  toggelNav() {
    this.show = !this.show;
    this.sidenavService.sideNavClosed= this.show;
    }


}
