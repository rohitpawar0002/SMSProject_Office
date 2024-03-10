import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  balanceCount:any=100; 

  
localcount:any;


localdata(){
  this.balanceCount=(localStorage.getItem('count')  || 100);
  return
}

getsms(data:any){
   return this.http.get('http://api.sms123.in/api/QuickSend/QuickSend?username='+data.username+'&password='+data.password+
   '&mob='+data.mob+'&msg='+data.msg+'&sender='+data.sender+'&templateid='+data.templateid+'&coding='+data.coding,data)

  }
}
