import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private backUrl="http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  createProduct(product:Product):Observable<string>{
    return this.httpClient.post(`${this.backUrl}/product`,product,{responseType:"text"});
  }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.backUrl}/products`);
  }

  deleteProductById(id:number):Observable<string>{
    return this.httpClient.delete(`${this.backUrl}/product/${id}`,{responseType:"text"});
  }
}
