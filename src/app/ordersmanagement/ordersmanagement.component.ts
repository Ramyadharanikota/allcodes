import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';



@Component({
  selector: 'app-ordersmanagement',
  templateUrl: './ordersmanagement.component.html',
  styleUrls: ['./ordersmanagement.component.css']
})
export class OrdersmanagementComponent implements OnInit {
  [x: string]: any; //these all are declared variables
orders: any;
id: any;
title: any;
price: any;
category: any;
image: any;
description:any;
total: any=[];
searchtext:any;
productarray:any[]=[];

  constructor() {  }

  
  products:any =[];

  ngOnInit(): void { //reload the data of current page 
    this.Orders()

  }
  
  
  //fetching api
  Orders(){
    fetch("http://localhost:9000/orderRoutes/orders",{ // this fetch call used to get the data from database
        method:"GET",
        headers:{
          "access-Control-Allow-Origin":"*",
        },
      })
      .then(response => response.json()) // JSON is astandard file format used to interchange the data,json data is the language of database
      .then(result =>{
        console.log(result),
        this.orders =  result.order//here we storing get result into orders array
        console.log(this.orders)
      }
      ).catch(err =>
        console.log(err))
    }


    moveproduct(text:any){ //this function is used to declaring the local storage product details
      
      
      localStorage.setItem('product',JSON.stringify(text)) //here we are setting the product details into product key in localstorage
      // we are using stringify to convert the data into string to store the data in localstorage 
      
      }
      displayproduct(product:any){
        //this.router.navigate (['new',{data:JSON.stringify (product)}])
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
      
}


