import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

//  smsForm!:FormGroup;

  constructor(private service:ServicesService,private formbuilder:FormBuilder){}

  smsForm=this.formbuilder.group({
    username:["demotr"],
    password:["tr@1234"],
    sender:["NUEVAS"],
    templateid:["1707161891201501738"],
    mob:["9730023006"],
    msg:["Your My SMS verification Code id . Do not share this code with others Team Nuevas"],
    coding:["1"]

  });
 

  onSubmit(){
    debugger;
      this.service.getsms(this.smsForm.value).subscribe((res:any)=>{
        console.log(res);
      });
    }
}


