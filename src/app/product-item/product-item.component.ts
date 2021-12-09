import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItem } from '../model/productModels';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  quantity : any = 1;
  quantities : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  @Input() productItem! : ProductItem;
  @Output() addToCart: EventEmitter<ProductItem> = new EventEmitter();

  constructor(private ProductServiceService : ProductServiceService) { }

  ngOnInit(): void {
  }

  submitAddToCart(item : ProductItem) : void{
    item.quantity = this.quantity;
    this.addToCart.emit(item);
    alert(`Added to your cart: ${this.productItem.quantity} x ${this.productItem.name} `);
    this.quantity = 1;
  };
  
}
