import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false, 
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }



  ourClient:any=[
    {
     Id:1,
     title:"Bharat Enterprises",
     imageurl:"../../assets/image/logo/bharat-enterprises.jpg"
    },
    {
      Id:2,
      title:"Delhi-Diamond",
      imageurl:"../../assets/image/logo/delhi-diamond.jpg"
     },
     {
      Id:3,
      title:"RGeno",
      imageurl:"../../assets/image/logo/rgeno.jpg"
     },
     {
      Id:4,
      title:"Three Best",
      imageurl:"../../assets/image/logo/three-best.png"
     },
     {
      Id:5,
      title:"APSZONE",
      imageurl:"../../assets/image/apszone.jpg"
     },
     {
      Id:6,
      title:"CORFLO",
      imageurl:"../../assets/image/corefi.jpg"
     },
     {
      Id:7,
      title:"DWC",
      imageurl:"../../assets/image/dwc.jpg"
     },
     {
      Id:8,
      title:"Dayal Eye Center",
      imageurl:"../../assets/image/eyecenter.jpg"
     },
     {
      Id:9,
      title:"FRILLS",
      imageurl:"../../assets/image/frills.jpg"
     },
     {
      Id:10,
      title:"KRYSTAL MOVIES",
      imageurl:"../../assets/image/KM.jpg"
     },
     {
      Id:11,
      title:"Shubhkamna",
      imageurl:"../../assets/image/shubhkamnaye.jpg"
     }
   
  ]



  
  ngOnInit(): void {

  }

}
