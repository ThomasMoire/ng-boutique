import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../../app/app.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [AppComponent,RouterLink],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

  @Input() searchedProducts: any;

  @Output() searchedProductsChange = new EventEmitter<any>();
  changeVariable() {
    this.searchedProductsChange.emit('Nouvelle valeur');
  }
}
