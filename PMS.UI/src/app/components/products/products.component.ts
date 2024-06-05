import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'T-shirt',
      type: 'Clothing',
      color: 'White',
      price: 15
    },
    {
      id: 2,
      name: 'Sneakers',
      type: 'Footwear',
      color: 'Black',
      price: 50
    },

  ];
}
