import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/Services/sidenav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  thimShow: boolean = true;

  constructor(private sidenavService: SidenavService) {}

  show: boolean = true;
  ngOnInit(): void {
    this.sidenavService.showNav$.subscribe({
      next:(res)=>{
        this.show = res;
      }
    })
  }

  thimChange(sh:any) {
    this.thimShow = sh;
  }

  // brightFun(){
  //   this.brightShow=true
  //   this.darkShow = false;

  //   console.log('bright',this.brightShow);
    
  // }
}
