import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product.constant';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listProduct: IProduct[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductList();
  }
  getProductList() {
    this.productService.getProductList().subscribe(res => {
      this.listProduct = res;
    });
  }
}
