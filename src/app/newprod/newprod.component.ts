import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newprod',
  templateUrl: './newprod.component.html',
  styleUrls: ['./newprod.component.css']
})
export class NewprodComponent implements OnInit {
  prod:any[]=[];
  producttitle:any;
  productprice:any;
  productdescription:any;
  productimage:any;
  product:any;
  
  


  constructor( private activatedroute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedroute.params.subscribe(data=>{
      this.product=data['data']
      console.log (this.product)
      var prods=JSON.parse(this.product)
      console.log(prods)
      this.prod.push(prods)
      

      //this.prod=JSON.parse(product)
      
      console.log (this.prod)
      for(var i=0; i<this.prod.length; i++){
        console.log('data')
        this. producttitle= this.prod[i].title
         this.productprice= this.prod[i].price
         this. productdescription= this.prod[i].description
         this.productimage= this.prod[i].image
         
         
         
       }
       console.log(this.producttitle)
       console.log(this.productprice)
       console.log(this.productdescription)
       console.log(this.productimage)
   

    } )
    

  }
  ////////////////////////////////////
  
 
    
  }
  
  
  
    


