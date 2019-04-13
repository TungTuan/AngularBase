import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './product.service';


@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  providers: [
    ProductService
  ],
  declarations: [ProductListComponent, ProductDetailsComponent]
})
export class ProductModule { }
