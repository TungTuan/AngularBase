import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.activeRoute.paramMap.pipe(map(param => param.get('id')),
    switchMap(id => this.productService.findProduct(Number(id))))
    .subscribe(res => {
      console.log(res);
    })
  }
}
