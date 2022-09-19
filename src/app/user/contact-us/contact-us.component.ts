import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
   contactForm!:FormGroup; 
   msg:boolean=true;
   message="";

  constructor(private formbuilder:FormBuilder , private apiService:ApiserviceService) { }
  contact :any
  ngOnInit(): void {
   this.contactForm = this.formbuilder.group({
     name : new FormControl('',[Validators.required]),
     email : new FormControl('',[Validators.required]),
     phone : new FormControl('',[Validators.required]),
     subject : new FormControl('',[Validators.required]),
     message : new FormControl('',[Validators.required]),
   })

  }
  getAllData(){
    if(this.contactForm.valid) {
      this.msg=true;
   this.apiService.creatContact(this.contactForm.value)
   .subscribe({
      next: (res)=>{
        console.log(res);
        alert("message send succesffully");
        this.contactForm.reset();
      },
      error: (err)=>{
        console.log(err);
      }
    })
   
  }
else{

  this.msg=false;
    this.message=" Formfield should not be blank "
}
  
  }
}
