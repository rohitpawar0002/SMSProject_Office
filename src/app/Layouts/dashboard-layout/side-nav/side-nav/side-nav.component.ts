import { Component, OnInit } from '@angular/core';
import { ShowThimeService } from 'src/app/Services/show-thime.service';
import { SidenavService } from 'src/app/Services/sidenav.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  themeShow: boolean = true;

  constructor(private sidenavService: SidenavService,private showthimeService:ShowThimeService) {}

  show: boolean = true;
  ngOnInit(): void {
    this.sidenavService.showNav$.subscribe({
      next:(res)=>{
        this.show = res;
        // console.log(this.show, this.thimShow);
        
      }
    })
  }

  themeChange(sh:any) {
    
    this.themeShow = sh;
    console.log(this.themeShow);
    this.showthimeService.showTheme.next(this.themeShow=sh);

  }

  // brightFun(){
  //   this.brightShow=true
  //   this.darkShow = false;

  //   console.log('bright',this.brightShow);
    
  // }
}
