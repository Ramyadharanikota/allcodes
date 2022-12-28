import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
export interface User {
  orderID: number;
  Date: string;
  Status: string; 
  Total: string;
  Actions: string;
  customer: string;
  Destination:string;
  title: string;
  category:string;
  event:any;
  
  
  expanded: boolean;
  
}



  /*{
    "orderID": 12369,
    "Date": "November 17,2016",
    "Status": "Completed",
    "Total": "9",
    "Actions": "View",
    "Customer": "Oliva Cooper",
    "Destination": "International",
    
    "expanded": false
  },
  {
    "orderID": 34568,
    "Date": "jully 30,2017",
    "Status": "Completed",
    "Total": "15",
    "Actions": "View",
    "Customer": "Beston",
    "Destination": "Domestic",
    
    "expanded": false
    
  },
  {
    "orderID": 67853,
    "Date": "june 23,2018",
    "Status": "Completed",
    "Total": "10",
    "Actions": "View",
    "Customer": "trinite",
    "Destination": "International",
    
    
    "expanded": false
  },
  {
    "orderID": 90134,
    "Date": "May 25,2015",
    "Status": "Pending",
    "Total": "10",
    "Actions": "View",
    "Customer": "richard",
    "Destination": "International",
    
    
    "expanded": false
  },
  {
    "orderID": 91132,
    "Date": "March 19,2020",
    "Status": "Completed",
    "Total": "14",
    "Actions": "View",
    "Customer": "Joan Ross",
    "Destination": "Domestic",
    
    
    "expanded": false
  },
  {
    "orderID": 91223,
    "Date": "September 15,2021",
    "Status": "Completed",
    "Total": "6",
    "Actions": "View",
    "Customer": "Sophie Berry",
    "Destination": "International",
    
   
    "expanded": false
  },
  {
    "orderID": 92410,
    "Date": "August 9,2018",
    "Status": "Pending",
    "Total": "8",
    "Actions": "View",
    "Customer": "Stephanie Berry",
    "Destination": "International",
    
    "expanded": false
  },
  {
    "orderID": 93401,
    "Date": "june 11,2020",
    "Status": "Pending",
    "Total": "4",
    "Actions": "View",
    "Customer": "Frank Reid",
    "Destination": "Domestic",
    
    "expanded": false
  },
  {
    "orderID": 12876,
    "Date": "April 4,2019",
    "Status": "Completed",
    "Total": "11",
    "Actions": "View",
    "Customer": "Kevin Parsons",
    "Destination": "Domestic",
   
    "expanded": false
  }*/



@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AddtocartComponent implements OnInit {
  
  /*title = 'angular-mat-table-example';*/
  searchtext:any;
  data:any;
  finalproducts:any
image:any
description:any
price:any
category:any

  columnsToDisplay = ['orderid', 'date',  'destination','customer', 'status'];
  dataSource: any;
  data7:any;
  alldata:any[]=[];
  ff: any;
  find:any[]=[];
  //const ELEMENT_DATA = [this.data3 ]
  toggleRow(element: { expanded: boolean; }) {
    // Uncommnet to open only single row at once
    // ELEMENT_DATA.forEach(row => {
    //   row.expanded = false;
    // })
    element.expanded = !element.expanded
  }

  /*manageAllRows(flag: boolean) {
    ELEMENT_DATA.forEach(row => {
      row.expanded = flag;
    })
  }*/
  
  constructor() { }
productdata:any[]=[];

/*product1:any=[];*/

  ngOnInit(): void {

   


    /*this.data =JSON.parse(localStorage.getItem('product')|| '{}')//getting the product from order ts  
    console.log(this.data)
    this.productdata.push(this.data)
    console.log(this.productdata)*/
    /*this.product1.push(this.productdata)
    console.log(this.product1)*/
   
    this.data7 =JSON.parse(localStorage.getItem('allproducts')|| '{}')
    console.log(this.data7)
    /*for(let i=0; this.data7.length; i++){
      var alldata=this.data7[i]
    }*/
    this.find.push(this.data7)
    const isdata= localStorage.getItem('proddata') 
    if (isdata==null){
      //const newarray=[]
      //newarray.push(this.data7)
      //console.log(isdata)
      //console.log(newarray)
      localStorage.setItem('proddata',JSON.stringify (this.data7))
    }
    else  {
      const olddata=JSON.parse(isdata)
      console.log(olddata)
      for(let i=0; i<this.data7.length; i++){
        var fordata=this.data7[i]
      }
      
      olddata.push(fordata)
      console.log(olddata)
      localStorage.setItem('proddata',JSON.stringify (olddata))

    }
    const getdata=JSON.parse(localStorage.getItem('proddata') || '{}')
    console.log(getdata)
    /*for(let i=0; i<getdata.length; i++){
      var samedata=getdata[i]

    }
    console.log(samedata)*/
    this.find=getdata
    
    
    console.log(this.find)






//localStorage.setItem()
    this.dataSource=this.data7
    /*this.dataSource = this.data7*/
    
    /*for(let i=0; i<this.data7.length; i++){
      console.log(this.data7[i])
      var data2=this.data7[i]
      for(let i=0;i<data2.product.length;i++){
        this.finalproducts =data2.product[i]
      }
    }
    console.log(data2)*/

    
  
  

    /*for(let i=0; i<data.length; i++){
      this.image =data[i]; //use i instead of 0
      this.price =data[i].price;
      this.description =data[i].description;
      this.category =data[i].category;
      
  }*/
   
  }
  selectFile(data:any){
    /*console.log('data', data);

    if(this.selectedItem.find((row: { id: any; }) => row.id = data.id)){
        this.selectedItem.push(this.dataSource)
    }
    if(this.selectedItem.length === this.dataSource.length){
        console.log('completed'); 
    } else {
        console.log('in progress');
    }*/
    console.log(data);
    this.dataSource.forEach( (myObject: any) =>{
      console.log('myObject', myObject);
      if(myObject.length > 1){
        console.log('completed');
      } else {
        console.log('inprogress');
      }
    });
    console.log('getlast,this.myArray.length > -1');
      
    }
    removeEmptyContent(){
      this.dataSource.forEach( ( myObject: { name: any; },index: any)=>{
        if(!myObject.name){
          this.dataSource.splice(index, 1);
          
        }
      });
    }

  }


