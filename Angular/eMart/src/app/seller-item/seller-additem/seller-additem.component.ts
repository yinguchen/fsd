import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmartService } from '../../emart/emart.service';
import { AddItem } from '../model/addItem';
import { AddItemService } from '../services/addItem.service';
import { MutipleuploadService } from '../services/mutipleupload.service';

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
  item:any;
  pciturePaths:any;
  videoPaths:any;
  visitingdemandid:any;

  public uploader: MutipleuploadService = new MutipleuploadService({
    url: 'http://localhost:8083/login-service/emart/upload',
    method: "POST",
    itemAlias: "files",
  });

  constructor(protected emartService: EmartService,
    private apService:AddItemService ,
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

      this.item={
        subCategoryId:{
          id : 0
        },
        name: '',
        image: '',
        description: '',
        price: 0,
        stock: 0,
        sellerId: {
          id: this.emartService.getCurrenttSeller().id
        }
      }

     }

  ngOnInit() {
    this.apService.getAllCategories().subscribe(
      (response: any) => {
        this.categoryOptions = response;
      }
    );
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
   this.item.subCategoryId.id = this.subcategoryOptions.id;
   let ob: Observable<AddItem>;
   ob = this.apService.add(this.item);
   ob.subscribe(
     (data) => {
       alert('The new Item has been added successfully!');
       this.router.navigate(['/seller-itemlist']);
     },
     (errResponse) => {
       this.msg = errResponse.error;

     }
   );
   console.log('Item added');

 }

 uploadPicture() {
  this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
    form.append('visitingdemandid', this.visitingdemandid);
    form.append('type', "PICTURE");
  };
  var that=this;
  this.uploader.uploadAllFiles().onreadystatechange = function () {
    if(this.readyState==4){
      if(this.status==200){
        that.pciturePaths=JSON.parse(this.response).response;
        console.log(JSON.parse(this.response).response);
      }
    }
  }
}

uploadVideo(){
  this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
    form.append('visitingdemandid', this.visitingdemandid);
    form.append('type', "VIDEO");
  };
  var that=this;
  this.uploader.uploadAllFiles().onreadystatechange = function () {
    if(this.readyState==4){
      if(this.status==200){
        that.videoPaths=JSON.parse(this.response).response;
        console.log(JSON.parse(this.response).response);
      }
    }
  }
}

}