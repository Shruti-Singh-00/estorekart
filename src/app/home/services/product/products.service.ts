import { Injectable } from '@angular/core';
import { Product } from '../../types/products.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(query?: string): Observable<Product[]> {
    let url: string = 'https://estore-backend-sqni.onrender.com/products';
    if (query) {
      url += '?' + query;
    }
    return this.httpClient.get<Product[]>(url);
  }

  getProduct(id: number): Observable<Product[]> {
    const url: string = 'https://estore-backend-sqni.onrender.com/products/' + id;
    return this.httpClient.get<Product[]>(url);
  }
}
