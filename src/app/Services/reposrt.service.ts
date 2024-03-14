import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReposrtService {

  constructor(private http:HttpClient) { }
  ResArray:any=[]=[];

 ngOnInit(){
  console.log(this.ResArray);

 }


  postReportAPI(data:any){
   
    return this.http.post('http://localhost:3000/report',data)
  }

  getReportAPI(){
return this.http.get('http://localhost:3000/report')
  }

}