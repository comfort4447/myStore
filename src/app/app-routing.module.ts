import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path : '', component : ProductListComponent },
  { path : 'product-details', component : ProductDetailsComponent},
  { path : 'cart', component : CartComponent },
  { path : 'product/:id', component : ProductDetailsComponent },
  { path : 'confirmation', component : ConfirmationComponent}, 
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
