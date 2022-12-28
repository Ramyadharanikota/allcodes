import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  hidden:boolean = false  
  candata:any=[]
orders: any;
id: any;
title: any;
price: any;
category: any;
image: any;
description:any;     //these all are declared variables
total: any=[];
array:any[]=[];
data3: any=[];  // declared variables
prod:any=[];
inprogress:any=[];
productarray:any[]=[];
inprogressarray:any[]=[];

  

  constructor() { }
  products:any =[];

  ngOnInit(): void {
    this.Orders()
    this.data3 =JSON.parse(localStorage.getItem('product')|| '{}')//getting the product from order ts  
    console.log(this.data3)
  }
  Orders(){
    fetch("https://fakestoreapi.com/products/",{ // this fetch call used to get the data from database
        method:"GET" ,
        headers:{
          "access-Control-Allow-Origin":"*",
        },
      })
      .then(response => response.json()) // JSON is astandard file format used to interchange the data,json data is the language of database
      .then(result =>{
        console.log(result),
        this.orders =  result //here we storing get result into orders array
        console.log(this.orders)
      }
      ).catch(err =>
        console.log(err))
    }
    moveproduct1(text:any){ //this function is used to declaring the local storage product details
      console.log(text)
      var data=text
      this.productarray.push (data)
      localStorage.setItem('product',JSON.stringify(this.productarray)) // var data=localStorage.getItem('product')
      console.log(this.productarray)
     // window.location.reload()
      //for (let i=0; i< this.productarray.length;i++){
        
       // if(this.productarray[i].id == data.id) {
          
      //  }
     // }
      //ocalStorage.setItem('product',JSON.stringify(this.productarray))
      }
      



moveproduct(data:any){ // moving the product
  var text=data           // here we are getting product details and stored in variable data
  this.inprogressarray.push(text) 
  localStorage.setItem('inprogressarray',JSON.stringify(this.inprogressarray))//we storing the product data into inprogressarray
  console.log(this.inprogressarray)
  //window.location.reload()
 // this.prod =JSON.parse(localStorage.getItem('product')|| '{}')

  for (let i=0; i< this.data3.length;i++){
        
    if(this.data3[i].id == text.id) {
     var deleted= this.data3.splice( i,1);
     console.log(deleted)
      console.log(this.data3)
      
    }
  }
  localStorage.setItem('product',JSON.stringify(this.data3))
  
  
}

movetocancel(data:any){   // moving the product to cancel page
 
  
  this.candata=JSON.parse(localStorage.getItem('product')|| '{}') 
  console.log(data)
  localStorage.setItem('productcal',JSON.stringify(this.candata))
  console.log(data)
  
  for (let i=0; i< this.candata.length;i++){
        
    if(this.candata[i].id == data.id) {
     var deleted= this.candata.splice( i,1);
     console.log(deleted)
      console.log(this.candata)
      
    }
  }
  localStorage.setItem('product',JSON.stringify(this.candata))
  }

  


}
