import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../utils/interfaces/Product';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-post-product',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './post-product.component.html',
  styleUrl: './post-product.component.css'
})
export class PostProductComponent {

  private api = inject(ApiService);

  product: Product = {
    name: "",
    id: 0,
    price: 0,
    description: "",
    CategoryId: 0,
    Categorytitle: ""
  }

  productGroup = new FormGroup({
    name : new FormControl<string>(""),
    price : new FormControl<number>(0),
    description : new FormControl<string>(""),
    CategoryId : new FormControl<string>(""),
    Categorytitle : new FormControl<string>("")
  });

  onSubmit(){

    if(this.product){
      this.product.name = String(this.productGroup.value.name);
      this.product.price = Number(this.productGroup.value.price);
      this.product.description = String(this.productGroup.value.description);
      this.product.CategoryId = Number(this.productGroup.value.CategoryId);

      this.api.addProduct(this.product).subscribe(response=>{
      console.log("produit ajoutée"+ response);
      })
    }
  }
}


