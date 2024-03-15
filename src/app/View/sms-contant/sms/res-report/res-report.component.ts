import { Component } from '@angular/core';
import { ReposrtService } from 'src/app/Services/reposrt.service';

@Component({
  selector: 'app-res-report',
  templateUrl: './res-report.component.html',
  styleUrls: ['./res-report.component.css']
})
export class ResReportComponent {


  ResArrayReport:any=[];

  constructor(private reportService:ReposrtService){}

  ngOnInit(){
    this.getReportData()
  }

  getReportData(){
    this.reportService.getReportAPI().subscribe({
      
      next:(res:any)=>{
        this.ResArrayReport=res
        console.log('resr',res);
      }
     
      
    })
  }

}
