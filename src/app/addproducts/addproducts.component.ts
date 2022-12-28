import { Component, OnInit } from '@angular/core';
import {v1 as uuidv1} from 'uuid';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  [x: string]: any;
  hidden:boolean = false
  jjjj:any[]=[];
  orders: any;
  productarray:any;
  inprogressarray:any;
  data3:any;
  val:any;
  orderid:any;
  date:any;
  destination:any;
  description:any;
  customer:any;
  status:any;
  data2:any;
  data5:any[]=[];
  productArray:any=[];

  
  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');
 

  constructor() { }
  OrdersArray:any;

  ngOnInit(): void {
    let myuuid = uuidv1();

console.log('Your UUID is: ' + myuuid);
this.val = Math.floor(1000 + Math.random() * 9000);
console.log(this.val);
console.log(this.today)


    
    this.Orders()
    this.data3 =JSON.parse(localStorage.getItem('product')|| '{}')//getting the product from order ts  
    console.log(this.data3)
    
  }
  Orders(){
    fetch("http://localhost:9000/orderRoutes/orders",{ // this fetch call used to get the data from database
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

}
toggleOrders(){
  this.orders=!this.orders
}
tabkey:any=[];
tabValue: any=[];
getData(){
  this.OrdersArray.array.forEach((element: any) => {
    this.tabkey=Object.keys(element);
    this.tabValue?.push(Object.values(element));
    
  });
}
moveproduct(data:any){ // moving the product
  var text=data           // here we are getting product details and stored in variable data
  this.inprogressarray.push(text) 
  localStorage.setItem('inprogressarray',JSON.stringify(this.inprogressarray))//we storing the product data into inprogressarray
  console.log(this.inprogressarray)
  for (let i=0; i< this.data3.length;i++){
        
    if(this.data3[i].id == text.id) {
     var deleted= this.data3.splice( i,1);
     console.log(deleted)
      console.log(this.data3)
      
    }
  }
  localStorage.setItem('product',JSON.stringify(this.data3))
  
  
}
remove(text:any){
  this.hidden=true;
}

checkout(){
  /*this.data5=this.data3
  for(let i=0; i<this.data5.length; i++){
    console.log('product')
    this.data2=this.data5[i]
  }
  console.log(this.data2)*/
  var data3 = JSON.parse(localStorage.getItem('product') || '{}')
  this.productArray=[{
    orderid: this.val,
   date: this.today,
    status:'inprogress',
    destination:'ongole',
    customer:'olev',
    title:'womens clothing',

    description: 'wdbcjhgcuyibuowdhduyw',
    
    product: data3
    
   
  }]


  
  localStorage.setItem('allproducts',JSON.stringify(this.productArray))


}
}
  


