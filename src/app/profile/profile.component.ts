import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  orders:any;
  id:any;
  email:any;
  username:any;
  password:any;
  address:any;
 ord:any=[];

  constructor() { }

  ngOnInit(): void {
    this.Orders()
    
    
    console.log(this.ord)
    
  }
  Orders(){
    fetch("https://fakestoreapi.com/users/1",{ // this fetch call used to get the data from database
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
        this.ord.push(this.orders)
      }
      ).catch(err =>
        console.log(err))
    }
}
