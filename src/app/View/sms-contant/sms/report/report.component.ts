import { Component } from '@angular/core';
import { ReposrtService } from 'src/app/Services/reposrt.service';
import * as XLSX from 'xlsx';

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

  OnDownloadReport():void{
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.ArrayReport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    XLSX.writeFile(wb,'report.xlsx');

  }

}
