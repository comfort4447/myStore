import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from '../model/productModels';
import { OrderInfo } from '../model/OrderInfo';
import { CartServiceService } from '../service/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

/**
 * Component that handles the customer's shopping cart.
 */
export class CartComponent implements OnInit {
  @Input() productsInCart: ProductItem[] = [];

  id! : number;
  fullName!: string;
  address!: string;
  ccNum!: string;
  totalPrice: number = 0;
  orderInfo!: OrderInfo;

  constructor(private cartService: CartServiceService, private router: Router) {}

  ngOnInit(): void {
    this.productsInCart = this.cartService.getCart();

    for (let int = 0; int < this.productsInCart.length; int++) {
      let quantity = this.productsInCart[int].quantity;
      if (!quantity) {
        quantity = 1;
      }
      this.totalPrice += this.productsInCart[int].price * quantity;
    }
    console.log(this.totalPrice);
  }

  /**
   * Updates the cart with the newly added item. If item is already in the cart, the quantity of the first instance will be updated instead.
   * @param cartItem - the desired ProductItem to add
   */
  updateCart(cartItem: ProductItem) {
    //Removes the cartItem if it's quantity goes to zero.
    if (cartItem.quantity == 0) {
      this.removeFromCart(cartItem);
    }

    //Allows the total price to update as the user changes it in the cart.
    this.totalPrice = 0;
    for (let int = 0; int < this.productsInCart.length; int++) {
      let quantity = this.productsInCart[int].quantity;
      if (!quantity) {
        quantity = 1;
      }
      this.totalPrice += this.productsInCart[int].price * quantity;
    }
  }

  removeFromCart(cartItem: ProductItem) {
    this.productsInCart = this.productsInCart.filter(
      (item) => item.id != cartItem.id
    );
    this.cartService.setCart(this.productsInCart);
    alert(`${cartItem.name} has been removed from your cart.`);
  }

  /**
   * Updates orderInfo in cartService and navigates to the confirmation page.
   */
  onSubmitOrder() {
    const orderInfo: OrderInfo = {
      id: this.id,
      fullname: this.fullName,
      totalPrice: this.totalPrice,
      ccNum: this.ccNum,
    };

    this.cartService.setOrderInfo(orderInfo);
    this.router.navigate(['/confirmation']);

    this.productsInCart = this.cartService.setCartToEmpty();
    this.id = 1;
    this.fullName = '';
    this.address = '';
    this.ccNum = '';
    this.totalPrice = 0;
  }
}