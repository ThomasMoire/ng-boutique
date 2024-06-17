import { Component, Input, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../utils/interfaces/Product';
import { RouterLink } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [RouterLink,AdminComponent],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  private api = inject(ApiService);

  product : Product | null = null;


  @Input() set id(productId : number){
    this.api.getProductById(productId).then(product=>this.product = product)
    .catch(error=>console.log(error));
  }

  ngOnInit(): void {
    console.log(this.product);
  }

}
