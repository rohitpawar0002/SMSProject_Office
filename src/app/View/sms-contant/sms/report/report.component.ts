import { Component, OnInit, booleanAttribute } from '@angular/core';
import { ReposrtService } from 'src/app/Services/reposrt.service';
import * as XLSX from 'xlsx';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit  {



  ArrayReport:any=[];
  isContainer2Visible:boolean=false;
  selectedItemIndex:number | null=null;

  numberToSplit: any;


  constructor(private reportService:ReposrtService){

  }


  ngOnInit(){
    // this.ArrayReport=JSON.parse(localStorage.getItem('report') || '');
    // console.log('report',this.ArrayReport);
    this.getReportData();    
    this.reportService.getReportAPI();
       
  }

  getReportData(){
    this.reportService.getReportAPI().subscribe({
      next:(res:any)=>{
        this.ArrayReport=res
        console.log(this.ArrayReport);
        

        if('Message' in res){
          this.numberToSplit=res.MobileNo;
          console.log('ssss',this.numberToSplit);
          
          this.splitNumber();
        }
        else{
          console.log('errrrrrorr');
                    
        }
        console.log('resresres',res);
       
      },
      error: (error) => {
        console.error('Error fetching report data: ', error);
      }
    })
  }

  splitNumber() {
    this.ArrayReport = this.numberToSplit.toString().split('').map(Number);
    console.log('nnnnnnnn',this.ArrayReport);
    
  }

  OnDownloadReport():void{
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.ArrayReport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    XLSX.writeFile(wb,'report.xlsx');

  }

showTable:boolean=false;
hideTable:boolean=true;

  // OnshowSubTable(){
  //   this.showTable=true;
  //   this.hideTable=false

  // }
  // OnBackTable(){
  //   this.showTable=false;
  //   this.hideTable=true;
  // }

  toggleVisibility(index:number | null){
    this.selectedItemIndex=index;
    this.isContainer2Visible=!this.isContainer2Visible;
  }

}
