import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PanierService } from '../../services/panier.service';
import { Product } from '../../utils/interfaces/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panierForm!: FormGroup;
  products: Product[] = [];

  private fb = inject(FormBuilder);
  private panierService = inject(PanierService);

  ngOnInit(): void {
    this.panierForm = this.fb.group({
      productId: [0, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });

    this.loadPanier();
  }

  loadPanier(): void {
    this.panierService.getPanier().subscribe((products) => {
      this.products = products;
    });
  }

  onSubmit(): void {
    if (this.panierForm.valid) {
      const productId = this.panierForm.get('productId')?.value;
      const quantity = this.panierForm.get('quantity')?.value;
      this.panierService.addToPanier({ id: productId, quantity } as Product & { quantity: number }).subscribe(() => {
        this.loadPanier();
      });
    }
  }

  removeProduct(product: Product): void {
    this.panierService.removeFromPanier(product).subscribe(() => {
      this.loadPanier();
    });
  }
}
