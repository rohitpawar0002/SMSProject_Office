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
show:boolean=true;
show2:boolean=true;
submitted:boolean=false;

  constructor(private service:ServicesService,private formbuilder:FormBuilder){}

  


  ngOnInit(){
    this.smsForm=this.formbuilder.group({
      username:["demotr"],
      password:["tr@1234"],
      sender:['',Validators.required],
      templateid:['',Validators.required],
      mob:['',Validators.required],
      msg:['',Validators.required],
      coding:['1']
  
    });   
  
  }

  
    senderArray=['NUEVAS','TRKZIA']

    templateArray=[
      {key:'Your My SMS verification Code id . Do not share this code with others Team Nuevas',value:'1707161891201501738'},
      {key:'Dear User your OTP is  Kindly use OTP to validate your Registration. Team Trackzia',value:'1707161855199873979'},
      {key:'Dear 1234 , Your Complaint with Complaint Id: 1234 has Been Resolve Kindly Share OTP, The OTP is 1234 \n From Nuevas',value:'1707161899992775140'}
    ]




  changevalue(){
      this.smsForm.patchValue({
        // msg:'Your My SMS verification Code id . Do not share this code with others Team Nuevas',
        templateid:this.templateArray[0].value,
        msg:this.templateArray[0].key

        // msg:'Dear User your OTP is {#var#} Kindly use OTP to validate your Registration. Team Trackzia'

        // msg:'Dear {#var#} , Your Complaint with Complaint Id: {#var#} has Been Resolve Kindly Share OTP, The OTP is {#var#} \n From Nuevas'
      })
      // this.smsForm.controls['templateid'].value
    }
  



  onSubmit(){
    this.submitted=true;
    if(this.smsForm.invalid){
      alert('Please check all fileds')
      return;
    }
      this.service.getsms(this.smsForm.value).subscribe((res:any)=>{
        console.log(res);
        alert("Message send successfully!")
        console.log(this.smsForm.value);        
      });
    }

    showOption(){
      this.show=!this.show
          
    }

    
    showOption2(){
      this.show2=!this.show2
          
    }
}


