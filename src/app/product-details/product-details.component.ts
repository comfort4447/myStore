import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItem } from '../model/productModels';
import { CartServiceService } from '../service/cart-service.service';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productItem!: ProductItem;
  quantity: any = 1;
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(
    private route: ActivatedRoute,
    private CartServiceService : CartServiceService,
    private productServiceService : ProductServiceService,
  ) { }

  ngOnInit(): void {
    try{
      this.route.params.subscribe((params) => {
        this.productServiceService.getProducts().subscribe((res) => {
          this.productItem = res.find(
            (item) => item.id == params["id"]
          ) as ProductItem;
          if (this.productItem){
            this.productItem.quantity = 1;
          }
        });
      } )
    }catch(error){
      throw new Error("Unable to find product");
    }
  }
  

  submitAddToCart(item: ProductItem) : void {
    item.quantity = this.quantity;
    this.CartServiceService.addToCart(item);
    alert(
      `Added to your cart: ${this.productItem.quantity} x ${this.productItem.name}`
    );
    this.quantity = 1;
  }

}
