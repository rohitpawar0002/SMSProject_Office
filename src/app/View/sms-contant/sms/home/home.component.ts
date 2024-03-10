import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/Services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private sidebarservice:SidenavService){}

  show: boolean = true;

  ngOnInit():void{
   this.sidebarservice.showNav$.subscribe({
    next:(res)=>{
      this.show=res;
    }

   }) 

  }

}
