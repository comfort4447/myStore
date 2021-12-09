import { Component, Input, OnInit } from '@angular/core';
import { OrderInfo } from '../model/OrderInfo';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})

/**
 * Confirmation component loaded after a user submits their order.
 */
export class ConfirmationComponent implements OnInit {
  orderInfo!: OrderInfo;

  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.orderInfo = this.cartService.getOrderInfo();
  }

  ngOnDestroy(): void {
    //Clears the orderInfo after you navigate away from the confirmation page.
    this.cartService.setOrderInfo(new OrderInfo());
  }
}