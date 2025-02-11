import { Component, signal } from '@angular/core';
import { Product } from '../../dtos/dtos.dto';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
  <div class="p-8 grid grid-cols-2 gap-4">
    @for (product of products(); track product.id) {
      <div class="bg-white rounded shadow-md p-4">
        <app-product-card [product]="product"/>
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
      image: 'https://thumbs.dreamstime.com/b/colorful-flowers-wallpaper-available-free-download-beautiful-flower-ai-generated-illustration-vibrant-floral-313585096.jpg',
      price: 100,
      stock: 10
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Lb9Ng3B7RdGFVWMP7k8bzozis9XHj1b8Nw&s',
      price: 200,
      stock: 20
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'https://free-3dtextureshd.com/wp-content/uploads/2024/04/12.jpg.webp',
      price: 300,
      stock: 0
    }
  ])
}
