import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { SidenavService } from 'src/app/Services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
 
  CurrentDate=new Date();
  constructor(){
    setInterval(() => {
      this.CurrentDate = new Date()
    }, 1000)
  }

  ngOnInit(){
  }

}
