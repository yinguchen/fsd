import { Injectable } from '@angular/core';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Item } from './item';
import { Bill } from './bill';
import { Buyer } from './buyer';
import { Seller } from './seller';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({   
  providedIn: 'root'
})
export class EmartService {

  allItems: Item[];
  cartItems: Item[];
  allBills: any;
  allSellers: Seller[];
  currentBuyer: any;
  currentSeller: any;
  constructor(protected http: HttpClient) {
    this.cartItems = [];
    this.allBills = [];
  }

//------------Retrieving all Items---------//
  getAllItems() {
    return this.http.get("http://localhost:8083/buyer-item-service/emart/item/all");
  }

  getAllSItems()
  {

    return this.http.get("http://localhost:8083/login-service/emart/seller/"+this.currentSeller?.id);
  }

//------------Retrieving AllBills----------//
  getAllBills(): any {
    return this.allBills;
  }

  bsignup(buyer)
  {
    return this.http.post("http://localhost:8083/login-service/emart/postbuyer",buyer);
  }

    ssignup(seller){
      return this.http.post("http://localhost:8083/login-service/emart/postseller",seller);
    }
//-----------storing Buyer and Bill details-------//
  setBuyerAndBills(currentBuyer) {
    this.currentBuyer = currentBuyer;
    this.allBills = currentBuyer.allBills;
  }
  setSellerAndBills(currentSeller){
    this.currentSeller= currentSeller;
   
  }

//----------Retrieving CurrentBuyer------------//
  getCurrentBuyer() {
    return this.currentBuyer;
  }

//-------------Retrieving particular Item from Database--------//
  getItem(itemId) {
    return this.http.get("http://localhost:8083/buyer-item-service/emart/item/" + itemId);
  }
  updateItem(item){
    return this.http.put("http://localhost:8083/buyer-item-service/emart/item/updateItem",item);
  }
 //-----------Adding an Item  to CartList-----//
  addToCart(item: any) {
    this.cartItems.push(item);
  }

  //-----------Retrieving CartListItems------//
  getAllCart() {
    return [].concat(this.cartItems);
  }

//---------Deleting Item from CartList--------//
  deleteCartItem(itemNo: number) {
    let size = this.cartItems.length;
    for (let i = 0; i < size; i++) {
      if (this.cartItems[i].id == itemNo) {
        this.cartItems.splice(i, 1);
        break;
      }
    }
  }

  existBuyer()
  {
    return this.currentBuyer;
  }

//----------Storing BillDetails------//
  addBill(todayDate: Date, total: number) {
    let allBillDetails: any = [];
    for (let i = 0; i < this.cartItems.length; i++) {
      allBillDetails.push({
        id: 0,
        billId: null,
        itemId: this.cartItems[i]

      });
    }
    let bill: any = {
      id: 0,
      type: 'Debit',
      date: todayDate,
      remarks: 'paid',
      amount: total,
      buyerId: {
        id: this.currentBuyer.id
      },
      allBillDetails: allBillDetails
    }
    this.cartItems = [];
    return this.http.post("http://localhost:8083/buyer-item-service/emart/bitem", bill);
  }

//----------Retrieving CurrentBuyer Data-------//
  getBuyer() {
    return this.http.get("http://localhost:8083/login-service/emart/buyer/" + this.currentBuyer.id);
  }

//----------Buyer validation----------//
  validateBuyer(user: string, password: string) {
    let credentials = user + ":" + password;
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", credentials);
    return this.http.get("http://localhost:8083/login-service/emart/validate", { headers });
  }

//----------Seller Validation--------//
  validateSeller(user: string, password: string) {
    let credentials = user + ":" + password;
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", credentials);
    return this.http.get("http://localhost:8083/login-service/emart/validateseller", { headers });
  }

}
