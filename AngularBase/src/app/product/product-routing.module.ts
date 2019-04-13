import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [{
  path: 'product',
  component: ProductListComponent
},
{
  path: 'product/:id',
  component: ProductDetailsComponent
}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
      RouterModule
  ] 
})
export class ProductRoutingModule { }