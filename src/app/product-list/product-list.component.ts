import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../model/productModels';
import { CartServiceService } from '../service/cart-service.service';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title : string = "Welcome to Storefront";
  productPage: ProductItem[] = [];

  constructor(
    private productServiceService : ProductServiceService,
    private CartServiceService : CartServiceService
  ) { }

  ngOnInit(): void {
    this.productServiceService.getProducts().subscribe((res) =>{
      for (let num= 0; num<res.length; num++){
        const product = res[num];
        product['quantity'] = 1;
      }
      this.productPage = res;
      this.productServiceService.setProducts(res);
    });
  }

  //* @param productItem
  addToCart(productItem: ProductItem) {
    //this.products.push();
    this.CartServiceService.addToCart(productItem);
  }

}
