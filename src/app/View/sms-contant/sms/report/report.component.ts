import { Component, OnInit, booleanAttribute } from '@angular/core';
import { ReposrtService } from 'src/app/Services/reposrt.service';
import * as XLSX from 'xlsx';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  ArrayReport: any = [];
  isContainer2Visible: boolean = false;
  selectedItemIndex: number | null = null;
  selectedRow: any;

  numberToSplit: any;

  constructor(private reportService: ReposrtService) {}

  ngOnInit() {

    this.getReportData();
    this.reportService.getReportAPI();
  }

  getReportData() {
    this.reportService.getReportAPI().subscribe({
      next: (res: any) => {
        this.ArrayReport = res;
        console.log('resresres', res);
      },
      error: (error) => {
        console.error('Error fetching report data: ', error);
      },
    });
  }

  OnDownloadReport(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.ArrayReport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'report.xlsx');
  }

  showTable: boolean = false;
  hideTable: boolean = true;

  toggleVisibility(item: number | null) {
    if (item) {
      this.selectedItemIndex = item;
      this.selectedRow = item
      this.numberToSplit = this.selectedRow.MobileNo.split(',');
    } else {
      this.selectedItemIndex = null;
      this.isContainer2Visible = false;
    }
  }
}
