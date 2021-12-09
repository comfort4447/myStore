import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from '../model/productModels';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  product! : ProductItem;

  productItemList! : ProductItem[];

  constructor(private http: HttpClient) { }

  getProducts() : Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>('../assets/data.json')
  }

  setProducts(productItemList : ProductItem[]) {
    this.productItemList = productItemList;
  }


}
