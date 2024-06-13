import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductsService, private router: Router) { }
  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe({
        next: (products) => {
          this.products = products;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }
}
