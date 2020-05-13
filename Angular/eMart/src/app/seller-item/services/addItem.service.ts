import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddItem } from '../model/addItem';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  baseUrl:string;


  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:9009/addp";
   }
   getAll() : Observable<AddItem []>{
    return this.httpClient.get<AddItem []>(this.baseUrl);
   }
   getById(id:number) : Observable<AddItem >{ 
    return this.httpClient.get<AddItem>(`${this.baseUrl}/${id}`);
   }
   add(id:AddItem) : Observable<AddItem >{
     return this.httpClient.post<AddItem >(this.baseUrl,id);
   }

   getAllCategories() {
    return this.httpClient.get("http://localhost:8083/login-service/emart/category/all");
  }
  getSubCategorys(categoryId:number) {
    return this.httpClient.get("http://localhost:8083/login-service/emart/subcategory/"+categoryId);
  }
}
