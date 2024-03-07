import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

smsForm!:FormGroup;
display:any

  constructor(private service:ServicesService,private formbuilder:FormBuilder){}

  ngOnInit(){
    this.smsForm=this.formbuilder.group({
      username:["demotr"],
      password:["tr@1234"],
      sender:[''],
      templateid:[''],
      mob:[''],
      msg:[''],
      coding:['1']
  
    });   
  
  }

    chnagevalue(){
      this.smsForm.patchValue({
        msg:'Your My SMS verification Code id . Do not share this code with others Team Nuevas'
      })
      // this.smsForm.controls['templateid'].value
    }
  


  onSubmit(){
    debugger;
      this.service.getsms(this.smsForm.value).subscribe((res:any)=>{
        console.log(res);
        console.log(this.smsForm.value);        
      });
    }
}


