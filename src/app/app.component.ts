import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../utils/interfaces/Product';
import { SearchResultsComponent } from '../components/search-results/search-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule,SearchResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private api: ApiService) { }

  title = 'app-boutique';

  text: string = "";
  searchedProducts: Product[] = [];


  ngOnInit(): void {
    if (this.text) {
      this.api.searchProducts(this.text).subscribe((searchedProducts) => {
        this.searchedProducts = searchedProducts
      })
    }
  }

  onSharedVariableChange(newValue: any) {
    this.searchedProducts = newValue;
  }

  router = inject(Router)
  onKeydown(event: any){
    this.router.navigateByUrl("/search-results");
}

}
