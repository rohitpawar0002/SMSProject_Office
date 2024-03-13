import { DeclarationListEmitMode, Lexer } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReposrtService } from 'src/app/Services/reposrt.service';
import { ServicesService } from 'src/app/Services/services.service';
import { SidenavService } from 'src/app/Services/sidenav.service';

@Component({
  selector: 'app-sms-contant',
  templateUrl: './sms-contant.component.html',
  styleUrls: ['./sms-contant.component.css']
})
export class SmsContantComponent {


  smsForm!:FormGroup;
display:any
show:boolean=true;
show2:boolean=true;
mediaShow:boolean=true;
submitted:boolean=false;
updatecount:any;
localcount:any;
msglength:any;
checkBoxClr:boolean=false;
checkpoo:boolean=false;
textlength:any;
limit:any=0;
validMobCount=0;
invalidMobCount=0; 
creditcount:any;   
mobcount:any;
pooArray:any=[];

allselect:boolean=false;


fileoptionshow:boolean=false;
groupOptionShow:boolean=true;
mdediaVideoshow:boolean=true;
mediaImgShow:boolean=false;


constructor(private service:ServicesService,private formbuilder:FormBuilder,
  private sidebarService:SidenavService,private reposrtService:ReposrtService,
  private router:Router
  ){}

  
showMain: boolean = true;


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


  this.sidebarService.showNav$.subscribe({
    next:(res)=>{
      this.showMain=res;
    }
  })
  
   this.limit=''
  


  
}


mobileNoCount(){
  const mobileNumbers = this.smsForm.controls['mob'].value.split(',').map((number:any) => number.trim());
    
  this.validMobCount = 0;
  this.invalidMobCount = 0;

  mobileNumbers.forEach((number:any) => {
    if (number.length === 10 && /^\d+$/.test(number)) {
      this.validMobCount++;
    } else {
      this.invalidMobCount++;
    }
  });

  this.creditcount=this.validMobCount*this.limit;


  
//  this.mobcount=this.smsForm.controls['mob'].value
//  let splitcount=this.mobcount.split('\n').map((number:any)=>number.trim());
// // const mob = splitcount.join(',');

// console.log('splicoiunt',splitcount);

// let fixmobilecount=new Set<string>(splitcount)
// const tempArray:any=[]
// const mobileArray=Array.from(fixmobilecount);
// let result = mobileArray.filter(
//   (element,index,mobileArray)=>{

//     if(element)
   
//       tempArray.push(element)
      
    
//     return ;
//   }
// );

// const lastmobilenumber=tempArray[tempArray.length -1];




// if(this.validMobileNumbers(lastmobilenumber)){
//   this.validMobCount++
// }
// else{
//   this.invalidMobCount++
//   this.smsForm.patchValue({
//     mob:''
//   })
// }
// }

// validMobileNumbers(lastumber:any):boolean{
//   if(lastumber.length==10){
//     return true;
//   }
//   else{
//     return false;
//   }
}

// clear(){
//   debugger;
//   for(let i=0;i<this.smsForm.controls['mob'].value.length-1;i++){
//     if(this.smsForm.controls['mob'].value[i]=="\n"){
//       this.validMobCount--
//     }
//   }
// }

messageCount(){
  debugger;
  // this.msglength=this.smsForm.controls['msg']
  // console.log(this.msglength.value.length);
  // this.textlength=this.msglength.value.length
  this.smsForm.get('msg')!.valueChanges.subscribe(value=>{
    this.textlength=value.length;

    if(this.textlength<160)
    {
      this.limit=1;
    }
    else if(this.textlength %160==0){
      let temp=this.textlength/160
      this.limit=Math.floor(temp);
    }
    else{
      let temp=this.textlength/160
      this.limit=Math.floor(temp)+1;
    }
    this.creditcount=this.validMobCount*this.limit;

  
      
  })
  
  }



  openfileupload(){
    this.fileoptionshow=true;
    this.groupOptionShow=false

  }

  OngropOption(){
    this.groupOptionShow=true
    this.fileoptionshow=false;
  }

  OnmediaImg(){
    this.mdediaVideoshow=false;
    this.mediaImgShow=true;

  }
  Onmeidavideo(){
    this.mdediaVideoshow=true;
    this.mediaImgShow=false;
  }


checkBoxFun(){
  this.checkBoxClr=true
  this.smsForm.patchValue({
    mob:''
  })
  }

  onAllselect(e:any){
    if(e.target.checked==true){
      this.allselect=true
      this.smsForm.patchValue({
        mob:['9730023006,\n7219550690,\n9168266868']
      })
    }
    else if(e.target.checked==false){
      this.allselect=false
      this.smsForm.patchValue({
        mob:''
      })
    }
  }

  Onpoo(e:any){
    // this.pooArray=;

    if(e.target.checked==true){
      this.smsForm.patchValue({
        mob:['9730023006,\n7219550690']
      })
    }
    else if(e.target.checked==false){
      this.smsForm.patchValue({
        mob:''
      })
    }
  }

    test(e:any){
      if(e.target.checked==true){
        this.smsForm.patchValue({
          mob:['9168266868']
        })
      }
      else if(e.target.checked==false){
        this.smsForm.patchValue({
          mob:''
        })
      }
    }


  //  if(this.checkpoo=true){
  //   this.smsForm.patchValue({
  //     mob:'9730023006'
  //   })
  //  }
  //  else if(this.checkpoo=false){
  //   this.smsForm.patchValue({
  //     mob:''
  //   })
  //  }

 



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
    debugger;
    this.textlength=key?.key.length;
    this.limit=1

    this.messageCount()
  }


onSubmit(){
 

  this.submitted=true;
  if(this.smsForm.invalid){
    alert('Please check all fileds')
    return;
  }
    this.service.getsms(this.smsForm.value).subscribe((res:any)=>{
      if(res.Success==true){      
        alert("Message send successfully!")
        console.log(this.smsForm.value); 
        console.log(res);
        this.service.userName=this.smsForm.value.username;
        localStorage.setItem('count',JSON.stringify( this.service.userName));
        this.reposrtService.ResArray=res;
        this.reposrtService.postReportAPI(res).subscribe({
          next:(res:any)=>{
            this.router.navigate(['report'])   
            console.log(res);    

          }
        })
        // localStorage.setItem('report',JSON.stringify(this.reposrtService.ResArray))
      }
      else{
        alert('Somwthing went wrong');
        console.log(res);
        
      }
                 
    });
  }



  showOption(){
    this.show=!this.show          
  }

  showOptionMedia(){
    this.mediaShow=!this.mediaShow
  }
  showOption2(){
    this.show2=!this.show2          
  }
}




