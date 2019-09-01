import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor() { }

  addToCart(product):void
  {
    this.items.push(product);
    console.log(this.items);
  }

  getProducts():any[]
  {
    return this.items;
  }

  clearCart():any[]
  {
    this.items = [];
    return this.items;
  }

}
