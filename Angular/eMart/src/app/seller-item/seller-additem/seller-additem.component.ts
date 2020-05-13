import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddItem } from '../model/addItem';
import { AddItemService } from '../services/addItem.service';

@Component({
  selector: 'app-seller-additem',
  templateUrl: './seller-additem.component.html',
  styleUrls: ['./seller-additem.component.css']
})
export class SellerAdditemComponent implements OnInit {
  categoryOptions:any;
  subcategoryOptions:any;
  addItem:AddItem;
  msg:string;
  isNew:boolean;
  seller:any;
  
  constructor(private apService:AddItemService ,
    private actRoute:ActivatedRoute,
    private router:Router
    ){
       this.categoryOptions={
        id: 0,
        name: '',
        brief: ''
       }
       this.subcategoryOptions={
        id: 0,
        name: '',
        brief: '',
        gstPercent: 0
       }



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
        contact: ''
      }


     }

  ngOnInit() {
    this.apService.getAllCategories().subscribe(
      (response: any) => {
        this.categoryOptions = response;
      }
    );



    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.apService.getById(id).subscribe(
        (data)=>{
         this.addItem=data;
       }
     );
   }else{
     this.isNew=true;
  //    this.addItem={
  //      id:0,
  //  name:"",
  //  category:"",
  //  discount:0,

  //    };
   }
 }

  objectKeys(obj) { 
    return Object.keys(obj); 
  } 

  getSubCategoryOptions(categoryId:number) {
    this.apService.getSubCategorys(categoryId).subscribe(
      (response: any) => {
        this.subcategoryOptions = response;
      }
    );
  }
  
 save() {
   let ob: Observable<AddItem>;

   if (this.isNew) {
     ob = this.apService.add(this.addItem);
   }
   ob.subscribe(
     (data) => {
       
       this.router.navigateByUrl("");
     },
     (errResponse) => {
       this.msg = errResponse.error;

     }
   );
   console.log('product added');
 }

}
