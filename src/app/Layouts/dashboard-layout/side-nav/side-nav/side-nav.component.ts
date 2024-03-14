import { Component, OnInit } from '@angular/core';
import { ShowThimeService } from 'src/app/Services/show-thime.service';
import { SidenavService } from 'src/app/Services/sidenav.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  thimShow: boolean = true;

  constructor(private sidenavService: SidenavService,private showthimeService:ShowThimeService) {}

  show: boolean = true;
  ngOnInit(): void {
    this.sidenavService.showNav$.subscribe({
      next:(res)=>{
        this.show = res;
      }
    })
  }

  thimeChange(sh:any) {
    this.thimShow = sh;
    this.showthimeService.showThime.next(this.thimShow=sh);

  }

  // brightFun(){
  //   this.brightShow=true
  //   this.darkShow = false;

  //   console.log('bright',this.brightShow);
    
  // }
}
