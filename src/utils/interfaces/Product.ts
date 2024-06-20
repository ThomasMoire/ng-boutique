export interface Product {
    [x: string]: any;
    id: number;
    name: string;
    price: number;
    description: string;
    CategoryId: number;
    Categorytitle?: string;
    quantity?: number;  // Ajout de la quantité pour le panier
  }
  