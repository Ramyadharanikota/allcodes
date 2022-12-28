import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancelpage',
  templateUrl: './cancelpage.component.html',
  styleUrls: ['./cancelpage.component.css']
})
export class CancelpageComponent implements OnInit {
  data5:any;  //declared variables

  constructor() { }
  cancel: any=[];

  ngOnInit(): void { //reload the data of current page
    this.data5 =JSON.parse(localStorage.getItem('productcal')|| '{}')// here we are getting productcal details and stord in variable data
    this.cancel.push(this.data5)
    console.log(this.data5)
    
  }

   
  
  }
  
    


