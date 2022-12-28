import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  data4:any; //declared variables

  constructor() { }
  complete: any=[];

  ngOnInit(): void { //reload the data of current page
    this.data4 =JSON.parse(localStorage.getItem('completedarray')|| '{}') //getting the completedaaray from progress ts
    this.complete.push(this.data4) // here we are using parse is storing the string values in key
    console.log(this.data4)
    
  }
  
  get2(){ 

  //var data=JSON.parse(localStorage.getItem('product6')|| '{}')// here we are getting product6 details and stored in variable data
   // console.log(data) // here we are using parse is storing the string values in key
    //localStorage.setItem('product7',JSON.stringify(data))//we storing the product7 data into product6
    //console.log(data)
    //localStorage.removeItem('product6');// here we are removing product6 from localstorage
    }

    }
    


