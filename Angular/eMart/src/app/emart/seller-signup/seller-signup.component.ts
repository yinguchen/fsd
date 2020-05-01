import { Component, OnInit } from '@angular/core';
import { EmartService } from '../emart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {
seller:any;
  constructor(protected emartService:EmartService , protected route: Router) {
this.seller={
  id: 0,
  username: '',
  password: '',
  company: '',
  brief: '',
  gst: 0,
  address: '',
  email: '',
  website: '',
  contact: 0
}
   }

  ngOnInit(): void {
  }
sellersignup()
{
  this.emartService.ssignup(this.seller).subscribe(
    (response:any)=>{
      this.route.navigate(['/login']);
    }
  )

}
}

