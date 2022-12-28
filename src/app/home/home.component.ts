import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orders:any;
  searchtext: any
  
    
    role: Number;
    public selectedindex: number = 0;
    public images = ['../../assets/fashion.jpg', '../../assets/men.png', '../../assets/purp.jpg'];
    
    selectImage(index: number) {
      console.log("Index: " + index);
      this.selectedindex = index;
      console.log("Selected Index: " + this.selectedindex);
    }
  
    showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
       // (<HTMLElement>slides[i]).style.display = "none";
      }
      this.selectedindex++;
      if (this.selectedindex > slides.length) { this.selectedindex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      (<HTMLElement>slides[this.selectedindex - 1]).style.display = "block";
      dots[this.selectedindex - 1].className += " active";
      setTimeout(this.showSlides, 2000);
    }
  
  
  
  

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { 
      this.role = 1;
    }

  ngOnInit(): void {
    this.Orders()
    this.showSlides();
   
    
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
        this.orders =  result.order//here we storing get result into orders array
        console.log(this.orders)
      }
      ).catch(err =>
        console.log(err))
    }
    


}
