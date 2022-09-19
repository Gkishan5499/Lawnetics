import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/user/service/apiservice.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  listdata:any;
  
  constructor(private service:ApiserviceService) { }
   
  ngOnInit(): void {
    this.adminGet();
  }

  adminGet(){
    this.service.getData()
    .subscribe({
      next:(res)=>{
        this.listdata=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  ondelete(_id:any){
 if(confirm("Are you sure to delete??")){
  this.service.deleteData(_id)
  .subscribe({
    next:(res:any)=>{
        this.adminGet();
    }
  })


  

  }
}
}