import { Component, OnInit } from '@angular/core';
import { EmartService } from '../emart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-signup',
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.css']
})
export class BuyerSignupComponent implements OnInit {
buyer: any;
  constructor(protected emartService:EmartService , protected route: Router) {
    this.buyer={
      id:0,
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      email:'',
      mobile:'',
      date: new Date()
    }
   }

  ngOnInit(): void {
  }
  
  bsignup(){
  this.buyer.username = this.buyer.firstname + this.buyer.lastname;
  this.emartService.bsignup(this.buyer).subscribe(
    (response:any)=>{
      alert('Buyer is registered successfully!');
      this.route.navigate(['/login']);
    }
  )

}
}
