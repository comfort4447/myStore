import { Injectable } from '@angular/core';
import { ProductItem } from '../model/productModels';
import { OrderInfo } from '../model/OrderInfo';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  
  items : ProductItem[] = [];
  orderInfo! : OrderInfo;

  constructor() { }

  addToCart(productItem : ProductItem) {
    const cartProduct = this.items.find(
      (item) => item.id == productItem.id
    );
    if (cartProduct?.quantity && productItem?.quantity){
      cartProduct.quantity += productItem.quantity;
    }else{
      this.items.push(productItem)
    }
  }

  getCart() : ProductItem[] {
    return this.items;
  }

  setCart(items : ProductItem[]) {
     this.items = items;
  }

  setCartToEmpty() : ProductItem[]{
    this.items = [];
    return this.items;
  }

  setOrderInfo(orderInfo : OrderInfo) : void{
    this.orderInfo = orderInfo;
  } 

  getOrderInfo() : OrderInfo{
    return this.orderInfo;
  }
}
