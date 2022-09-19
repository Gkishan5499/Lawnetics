import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!:string;
  password!:string;
  message!:string;



  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  adminLogin(){
    if(this.username=="lawnetics@123" && this.password=="123456"){
      this.router.navigateByUrl('admin/dashboard');
    }
    else{
      this.message="Please fill the right credentials";
    }
  }

}
