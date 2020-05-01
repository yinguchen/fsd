import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string;
  image:string;

  constructor() {
    this.title="EMART";
    this.image="C:\Users\Alchemy\Desktop\emart2\src\assets\images.png"
   
   }

  ngOnInit() {
  }

}
