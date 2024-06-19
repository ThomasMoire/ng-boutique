import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../utils/interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: Product[] = [];

  getPanier(): Observable<Product[]> {
    return of(this.panier);
  }

  addToPanier(product: Product): Observable<void> {
    const existingProduct = this.panier.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.price += product.price;
    } else {
      this.panier.push(product);
    }
    return of();
  }

  removeFromPanier(product: Product): Observable<void> {
    this.panier = this.panier.filter(p => p.id !== product.id);
    return of();
  }
}
