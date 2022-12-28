import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress', 
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit { 
  datad:any=[]; //declared variables
  hidden:boolean=false;
  
  
  data1:any;
  completedarray:any[]=[];
  

  constructor() { }
  progress: any=[];

  ngOnInit(): void { //reload the data of current page
    this.datad =JSON.parse(localStorage.getItem('inprogressarray')|| '{}') //getting inprogressarray from submmited ts
    this.progress.push(this.datad)
    console.log(this.datad)
    
  }
 /* toggole(){  // it can be acess the data and closing the data
    this.data3=!this.data3
  }*/
  

  
  moveproduct(data:any){ //these product can move to completed
    var text=data
  this.completedarray.push(text) 
  localStorage.setItem('completedarray',JSON.stringify(this.completedarray))//we storing the product data into completedarray
  console.log(this.completedarray)// here we are getting product5 details and stord in variable data
 // window.location.reload()

 for (let i=0; i< this.datad.length;i++){
        
  if(this.datad[i].id == text.id) {
   var deleted= this.datad.splice( i,1);
   console.log(deleted)
    console.log(this.datad)
    
  }
}
localStorage.setItem('inprogressarray',JSON.stringify(this.datad)) 
    }
    //movetocancel(){  //these product can move to completed
     // var data=JSON.parse(localStorage.getItem('product5')|| '{}')// here we are getting product5 details and stord in variable data
      //console.log(data) // here we are using parse is storing the string values in key
      //localStorage.setItem('productcal',JSON.stringify(data))//we storing the product5 into  productcal
      //console.log(data)
      //localStorage.removeItem('product5'); //here  we are removing product5 from localstorage
    //}
   
  
    
}
