import { Component } from '@angular/core';
import { ReposrtService } from 'src/app/Services/reposrt.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  ArrayReport:any=[];


  constructor(private reportService:ReposrtService){}


  ngOnInit(){
    // this.ArrayReport=JSON.parse(localStorage.getItem('report') || '');
    // console.log('report',this.ArrayReport);
    this.getReportData();    
       
  }

  getReportData(){
    this.reportService.getReportAPI().subscribe({
      next:(res:any)=>{
        this.ArrayReport=res
        console.log('resresres',res);
      }
     
      
    })
  }

}
