import { Injectable } from '@angular/core';
import { IProduct } from './product.constant';
import { Observable} from 'rxjs';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
@Injectable()
export class ProductService {
  private product: IProduct[] = [
    {
      id: 1,
      name: 'product 1',
    },
    {
      id: 2,
      name: 'product 2'
    },
    {
      id: 3,
      name: 'product 3'
    }
  ]
  constructor() { }
  getProductList(): Observable<IProduct[]> {
    return of(this.product).pipe(delay(50));
  }
  findProduct(id: number): Observable<any> {
    const product = this.product.find(item => item.id === id);
    if (product) {
      return of(product).pipe(delay(50));
    } else {
      throw "404 not found";
    }
  }
}
