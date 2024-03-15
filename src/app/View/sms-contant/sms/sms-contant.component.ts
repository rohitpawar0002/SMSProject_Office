import { DeclarationListEmitMode, Lexer } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReposrtService } from 'src/app/Services/reposrt.service';
import { ServicesService } from 'src/app/Services/services.service';
import { ShowThimeService } from 'src/app/Services/show-thime.service';
import { SidenavService } from 'src/app/Services/sidenav.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-sms-contant',
  templateUrl: './sms-contant.component.html',
  styleUrls: ['./sms-contant.component.css']
})
export class SmsContantComponent {



  smsForm!: FormGroup;
  display: any
  showThim: boolean = true;
  show: boolean = true;
  show2: boolean = true;
  mediaShow: boolean = true;
  submitted: boolean = false;
  updatecount: any;
  localcount: any;
  msglength: any;
  checkBoxClr: boolean = false;
  checkpoo: boolean = false;
  textlength: any;
  limit: any = 0;
  validMobCount = 0;
  invalidMobCount = 0;
  creditcount: any;
  mobcount: any;
  pooArray: any = [];

  poolMobile: any = '9730023006,\n7219550690';
  testMobile: any = '9168266868'

  allselect: boolean = false;

  allnumbers: string = '';

  fileoptionshow: boolean = false;
  groupOptionShow: boolean = true;
  mdediaVideoshow: boolean = false;
  mediaImgShow: boolean = true;


  constructor(private service: ServicesService, private formbuilder: FormBuilder,
    private sidebarService: SidenavService, private reposrtService: ReposrtService,
    private router: Router, private showThimeservice: ShowThimeService
  ) { }


  showMain: boolean = true;


  ngOnInit() {
    this.smsForm = this.formbuilder.group({
      username: ["demotr"],
      password: ["tr@1234"],
      sender: ['', Validators.required],
      templateid: ['', Validators.required],
      mob: ['', Validators.required],
      msg: ['', Validators.required],
      coding: ['1'],
      clearChekBox: [false]

    });

    this.showThimeservice.showThime$.subscribe({
      next: (res: any) => {
        this.showThim = res;
      }
    })


    this.sidebarService.showNav$.subscribe({
      next: (res) => {
        this.showMain = res;
      }
    })

    this.limit = ''

    this.smsForm.get('mob')!.valueChanges.subscribe(value => {
      this.mobileNoCount(value)
    })
  }
  datee = new Date();

  mobileNoCount(value: string): void {

    const mobileNumbers = value.split(',').map((number: any) => number.trim());

    this.validMobCount = 0;
    this.invalidMobCount = 0;

    mobileNumbers.forEach((number: any) => {
      if (number.length === 10 && /^\d+$/.test(number)) {
        this.validMobCount++;
      } else {
        this.invalidMobCount++;
      }
    });

    this.creditcount = this.validMobCount * this.limit;

  }

  messageCount() {
    // this.msglength=this.smsForm.controls['msg']
    // console.log(this.msglength.value.length);
    // this.textlength=this.msglength.value.length
    this.smsForm.get('msg')!.valueChanges.subscribe(value => {
      this.textlength = value.length;

      if (this.textlength < 160) {
        this.limit = 1;
      }
      else if (this.textlength % 160 == 0) {
        let temp = this.textlength / 160
        this.limit = Math.floor(temp);
      }
      else {
        let temp = this.textlength / 160
        this.limit = Math.floor(temp) + 1;
      }
      this.creditcount = this.validMobCount * this.limit;
    })
  }

  openfileupload() {
    this.fileoptionshow = true;
    this.groupOptionShow = false

  }

  OngropOption() {
    this.groupOptionShow = true
    this.fileoptionshow = false;
  }

  OnmediaImg() {
    this.mdediaVideoshow = false;
    this.mediaImgShow = true;

  }
  Onmeidavideo() {
    this.mdediaVideoshow = true;
    this.mediaImgShow = false;
  }


  checkBoxFun(e: any) {
    if (e.target.checked == true) {
      this.checkBoxClr = true
      this.smsForm.patchValue({
        mob: ''
      })
      this.allselect = false
      this.invalidMobCount = 0

    }

  }

  onAllselect(e: any) {
    if (e.target.checked) {
      this.allselect = true;
      let selectedNumbers = this.poolMobile + ',\n' + this.testMobile;
      this.smsForm.patchValue({
        mob: selectedNumbers
      });
      this.mobileNoCount(selectedNumbers);
      this.checkBoxClr = false;
    }
    else {

      this.smsForm.patchValue({
        mob: ''
      });
      this.allselect = false;
      this.invalidMobCount = 0;
    }
  }

  Onpoo(e: any) {

    if (e.target.checked == true) {
      let currentNumbers = this.smsForm.get('mob')?.value;

      if (!currentNumbers.includes(this.poolMobile)) {
        currentNumbers ? currentNumbers += ',\n' + this.poolMobile : currentNumbers += this.poolMobile;

        // currentNumbers += this.poolMobile;
        this.smsForm.patchValue({
          mob: currentNumbers
        });
        this.mobileNoCount(currentNumbers);
        this.checkBoxClr = false;
      }
    }
    else {
      const regex = new RegExp('(,\\n)?' + this.poolMobile + '(,\\n)?', 'g');
      let replaceVar = this.smsForm.controls['mob'].value.replace(regex, '');

      this.smsForm.patchValue({
        mob: replaceVar
      });
      this.invalidMobCount = 0

    }

  }

  test(e: any) {
    if (e.target.checked) {
      let currentNumbers = this.smsForm.get('mob')?.value || '';
      if (!currentNumbers.includes(this.testMobile)) {
        currentNumbers ? currentNumbers += ',\n' + this.testMobile : currentNumbers += this.testMobile;
        this.smsForm.patchValue({
          mob: currentNumbers
        });
        this.mobileNoCount(currentNumbers);
        this.checkBoxClr = false;
      }
    } else {
      const regex = new RegExp('(,\\n)?' + this.testMobile + '(,\\n)?', 'g');

      let replaceVar = this.smsForm.controls['mob'].value.replace(regex, '');
      this.smsForm.patchValue({
        mob: replaceVar
      });
      this.invalidMobCount = 0
    }
  }

  selectedImage: any = ''

  onOptionImageSelected(e: any) {
    let imageValue = e.target.value
    this.selectedImage = `http://localhost:4200/assets/${imageValue}`

    console.log('valueeee', this.selectedImage);

    this.templateArray = this.templateArray.map(template => {
      template.key = template.key.replace('{var}', this.selectedImage);
      return template;
    });
  }

  selectedVideo: any = ''
  videoAvalable: boolean = false;

  onOptionVideoSelected(e: any) {

    let videoValue = e.target.value
    this.selectedVideo = `../../../../assets/${videoValue}`


    if (videoValue == "") {
      this.videoAvalable = false;
    }
    else {
      this.videoAvalable = true;
    }

  }

  senderArray = ['NUEVAS', 'TRKZIA']

  templateArray = [
    { key: `Your My SMS verification Code id {var}. Do not share this code with others Team Nuevas`, value: '1707161891201501738' },
    { key: 'Dear User your OTP is {var} Kindly use OTP to validate your Registration. Team Trackzia', value: '1707161855199873979' },
    { key: 'Dear 1234 , Your Complaint with Complaint Id: {var} has Been Resolve Kindly Share OTP, The OTP is 1234 \n From Nuevas', value: '1707161899992775140' }
  ]

  changevalue(data: any) {
    // debugger;

    // console.log(data.target.value);
    const key = this.templateArray.find((t) => t.value == data.target.value)

    this.smsForm.patchValue({
      // msg:'Your My SMS verification Code id . Do not share this code with others Team Nuevas',
      msg: key?.key
      // msg:'Dear User your OTP is {#var#} Kindly use OTP to validate your Registration. Team Trackzia'
      // msg:'Dear {#var#} , Your Complaint with Complaint Id: {#var#} has Been Resolve Kindly Share OTP, The OTP is {#var#} \n From Nuevas'
    })
    this.textlength = key?.key.length;
    this.limit = 1

    this.messageCount()
  }


  onsubmit() {

    this.submitted = true;
    if (this.smsForm.invalid) {
      alert('Please check all fileds')
      return;
    }
    this.service.getsms(this.smsForm.value).subscribe((res: any) => {
      if (res.Success == true) {
        alert("Message send successfully!")
        console.log(this.smsForm.value);
        console.log(res);
        this.service.userName = this.smsForm.value.username;
        localStorage.setItem('count', JSON.stringify(this.service.userName));
        this.reposrtService.ResArray = res;
        res['senderId']=this.smsForm.controls['sender'].value;
        res['credit']=this.creditcount;
        res['mobilecount']=this.validMobCount;
        res['Date'] = this.datee;
        res['msg'] = this.smsForm.controls['msg'].value;
        this.reposrtService.postReportAPI(res).subscribe({
          next: (res: any) => {
            this.router.navigate(['report'])
            console.log(res);

          }
        })
      }
      else {
        alert('Somwthing went wrong');
        console.log(res);

      }

    });
  }

  showOption() {
    this.show = !this.show
  }

  showOptionMedia() {
    this.mediaShow = !this.mediaShow
  }
  showOption2() {
    this.show2 = !this.show2
  }



  allExcelNumbers: any;

  onFileSelected(event: any): void {
    
  const file: File = event.target.files[0];
  const reader: FileReader = new FileReader();

  reader.onload = (e: any) => {  
  const binaryString: string = e.target.result;
  const workbook: XLSX.WorkBook = XLSX.read(binaryString, {type: 'binary'});
  const sheetName: string = workbook.SheetNames[0];
  const worksheet: XLSX.WorkSheet =workbook.Sheets[sheetName]; 
  const contacts: any[]=XLSX.utils.sheet_to_json(worksheet, {header: 1});
 const mobileNumbers: string[] =contacts.map(row => row[0]); 


 const mobileNumbersString:string=mobileNumbers.join('\n');

this.allExcelNumbers=mobileNumbersString
};
reader.readAsBinaryString(file);
}

importContacts():void{
  this.smsForm.patchValue({mob:this.allExcelNumbers});
}


}

