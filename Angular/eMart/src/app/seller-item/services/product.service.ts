import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[];
  constructor() {
    this.products = [
      { id: 'p1', name: 'Samsung s9', price: 50000, photo: 'assets/samsung1.jpg'},
      { id: 'p2', name: 'Lenova Laptop', price: 45500, photo: 'assets/len1.jpg' },
      { id: 'p3', name: 'Mac Laptop', price: 90000, photo: 'assets/lap2.jpg' },
      { id: 'p4', name: 'Formals', price:9999 , photo: 'assets/dress7.jpg' },
      { id: 'p5', name: 'LG tv', price: 110000, photo: 'assets/lg1.jpg' },
      { id: 'p6', name: 'Samsung', price: 55000, photo: 'assets/sam1.jpg' },
      { id: 'p7', name: 'Kurthies ', price: 2000, photo: 'assets/dress2.jpg' },
      { id: 'p8', name: 'Tops', price: 1000, photo: 'assets/dress3.jpg' },
      { id: 'p9', name: 'Mens Tees ', price: 4500, photo: 'assets/mens3.jpg' },
      { id: 'p10', name: 'Capsicum', price: 5500, photo: 'assets/v3.jpg' },
      { id: 'p12', name: 'Tomato ', price: 100, photo: 'assets/v2.jpg' },
      { id: 'p13', name: 'Strawberry', price: 300, photo: 'assets/fr2.jpg' },
      { id: 'p14', name: 'Cherry', price: 200, photo: 'assets/fr3.jpg' },
      { id: 'p15', name: 'womens belt watch', price: 1500, photo: 'assets/wat3.jpg' },
      { id: 'p16', name: 'womens fastrack watch', price: 2500, photo: 'assets/wat4.jpg' },
      { id: 'p17', name: 'Mens Watch', price: 5500, photo: 'assets/fast1.png' },
      { id: 'p18', name: 'Mens stainless watch', price: 2500, photo: 'assets/wat2.jpg' },
      { id: 'p19', name: 'Mens Trousers', price: 1500, photo: 'assets/mens6.jpg' },
      { id: 'p20', name: 'Casual Shoes for mens', price: 2500, photo: 'assets/sa1.jpg' },
      { id: 'p20', name: 'Casual Shoes for mens', price: 1500, photo: 'assets/sa2.jpg' },
      { id: 'p21', name: 'Sports Wear', price: 2000, photo: 'assets/spo1.jpg' },
      { id: 'p22', name: 'Tracks', price: 1500, photo: 'assets/spo2.jpg' },
      { id: 'p23', name: 'Fashion Shoes', price: 500, photo: 'assets/shoe1.jpg' },
      { id: 'p24', name: 'Flat', price: 500, photo: 'assets/sho6.jpg' },
      { id: 'p25', name: 'Necklase', price: 3500, photo: 'assets/n1.jpg' },
      { id: 'p26', name: 'Neckalse', price: 5000, photo: 'assets/n2.jpg' },
      { id: 'p27', name: 'Rings', price: 9000, photo: 'assets/r1.jpg' },
      { id: 'p28', name: 'Rings', price: 12000, photo: 'assets/r2.jpg' },
      { id: 'p29', name: 'Rings', price: 15000, photo: 'assets/r3.jpg' },
      { id: 'p30', name: 'Basmathi Rice ', price: 50000, photo: 'assets/gro4.jpg' },
      { id: 'p31', name: 'Coffee Beans', price: 19999, photo: 'assets/gro3.jpg' },
      { id: 'p32', name: 'Leather Bag', price: 4000, photo: 'assets/bag1.jpg'},
      { id: 'p33', name: 'Leather Bag', price: 7000, photo: 'assets/bag4.jpg'},
      { id: 'p34', name: 'Leather Bag', price: 2999, photo: 'assets/bag6.jpg'},
   

    ];

}


findAll(): Product[] {
  return this.products;
}

find(id: string): Product {
  return this.products[this.getSelectedIndex(id)];
}

public getSelectedIndex(id: string) {
  for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
          return i;
      }
  }
  return -1;
}

}


   
  

  

  



