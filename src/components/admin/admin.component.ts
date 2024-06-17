import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../utils/interfaces/Product';
import { ApiService } from '../../services/api.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PostProductComponent } from '../post-product/post-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink,ProductCardComponent,PostProductComponent,UpdateProductComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  products: Product[] = [];
  private api = inject(ApiService);

  ngOnInit(): void {
    this.api.getProducts().subscribe((products) => {
      this.products = products;
    })
  }

}
