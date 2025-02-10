import { Component, signal } from '@angular/core';
import { Product } from '../../dtos/dtos.dto';

@Component({
  selector: 'app-products-list',
  imports: [],
  template: `
  <div class="p-8 grid grid-cols-2 gap-4">
    @for (product of products(); track product.id) {
      <div class="bg-white rounded shadow-md p-4">
        <h2>{{ product.title }}</h2>
        <img [src]="product.image" alt="product.title" class="w-full"/>
      </div>
    }

  </div>

  `,
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Product 1',
      image: 'https://via.placeholder.com/150',
      price: 100,
      stock: 10
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://via.placeholder.com/150',
      price: 200,
      stock: 20
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'https://via.placeholder.com/150',
      price: 300,
      stock: 30
    }
  ])
}
