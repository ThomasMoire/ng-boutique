import { Routes } from '@angular/router';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { CategoriesListComponent } from '../components/categories-list/categories-list.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { SearchResultsComponent } from '../components/search-results/search-results.component';

export const routes: Routes = [
    {path : "products",component:ProductsListComponent},
    {path : "categories",component:CategoriesListComponent},
    {path : "product/:id",component:ProductCardComponent},
    {path : "search-results",component:SearchResultsComponent}
];