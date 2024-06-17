import { Injectable } from '@angular/core';
import { Product } from '../utils/interfaces/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../utils/interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /*   public async getProducts() : Promise<Product[]>{
      // Ma fonction asyncrone renvoie une promesse de Product[]
      return fetch("http://localhost:8066/products")
      .then(res=>res.json());
    } */

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8066/products");
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:8066/categories");
  }

/*   public getProductById(id : number | string): Observable<Product> {
    return this.http.get<Product>("http://localhost:8066/product/1");
  } */

  public async getProductById(id : number) : Promise<Product> {
    return fetch("http://localhost:8066/product/" + id)
    .then(res=>res.json());
  }

  private searchUrl = 'http://localhost:8066/products/search';
  searchProducts(text: string): Observable<any> {
    return this.http.get<any>(`${this.searchUrl}/${text}`);
  }
  

}
