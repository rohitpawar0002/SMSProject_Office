import { UnaryOperator, UnaryOperatorExpr } from '@angular/compiler';
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
updatecount:any;
localcount:any;
msglength:any;
checkBoxClr:boolean=false;
kk:any;
limit:any;

  constructor(private service:ServicesService,private formbuilder:FormBuilder){}

  


  ngOnInit(){
    this.smsForm=this.formbuilder.group({
      username:["demotr"],
      password:["tr@1234"],
      sender:['',Validators.required],
      templateid:['',Validators.required],
      mob:['',Validators.required],
      msg:['',Validators.required],
      coding:['1'],
      clearChekBox:[false]
  
    }); 
    
    
    this.limit=''
    
    
  }
  // const kk= this.templateArray.find((k)=>k.key)
  // this.msglength=kk?.key.length
  // console.log('keykeykey',this.msglength);
  onMouseOver(){
    this.msglength=this.smsForm.controls['msg']
    console.log(this.msglength.value.length);
    this.kk=this.msglength.value.length
    
    // this.kk=this.templateArray.find((m)=>m.key)
    // console.log(this.kk.key.length);
    // this.msglength=this.kk.upp.key.length

    // if(this.kk>10){
      //   this.limit
      //   console.log('looop',this.limit);      
      // }
      
      let i=this.kk

      if(this.kk>10)
      {
        for(i=1;i<3;i++)
        {
          this.limit=i++
       console.log('looop',this.limit); 

      }
      }

  
      
    
    
    }

  checkBoxFun(){
    this.checkBoxClr=true
    this.smsForm.patchValue({
      mob:''
    })
    }
  
  
  senderArray=['NUEVAS','TRKZIA']
  
  templateArray=[
    {key:'Your My SMS verification Code id 1234. Do not share this code with others Team Nuevas',value:'1707161891201501738'},
    {key:'Dear User your OTP is  Kindly use OTP to validate your Registration. Team Trackzia',value:'1707161855199873979'},
    {key:'Dear 1234 , Your Complaint with Complaint Id: 1234 has Been Resolve Kindly Share OTP, The OTP is 1234 \n From Nuevas',value:'1707161899992775140'}
  ]
  
  changevalue(data:any){
    // console.log(data.target.value);
    const key=this.templateArray.find((t)=>t.value==data.target.value)
      
    
      this.smsForm.patchValue({
        // msg:'Your My SMS verification Code id . Do not share this code with others Team Nuevas',
        msg:key?.key      
        // msg:'Dear User your OTP is {#var#} Kindly use OTP to validate your Registration. Team Trackzia'
        // msg:'Dear {#var#} , Your Complaint with Complaint Id: {#var#} has Been Resolve Kindly Share OTP, The OTP is {#var#} \n From Nuevas'
      })
    }


  onSubmit(){
    this.submitted=true;
    if(this.smsForm.invalid){
      alert('Please check all fileds')
      return;
    }
      this.service.getsms(this.smsForm.value).subscribe((res:any)=>{
        if(res.Success=true){
          alert("Message send successfully!")
          console.log(this.smsForm.value); 
          this.updatecount=this.service.balanceCount--;

          console.log(this.updatecount);
          
        }
        else{
          alert("Something Went Wrong")
        }
        console.log(res);
           
      });
    }

    showOption(){
      this.show=!this.show          
    }

    showOption2(){
      this.show2=!this.show2          
    }
}


