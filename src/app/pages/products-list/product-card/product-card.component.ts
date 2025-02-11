import { Component, inject, input } from '@angular/core';
import { Product } from '../../../dtos/dtos.dto';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="relative">
    <img [src]="product().image" alt="product().title" class="w-full"/>
    <div class="flex flex-col space-y-2 p-4 bg-white bottom-0 w-full">
      <h2 class="font-bold text-xl">{{ product().title }}</h2>
      <span> {{ '$' + product().price }} </span>
      <div>
        <app-primary-button label="Add to Cart" (btnClicked)="incrementCart()"/>
      </div>
    </div>
    <span class="absolute top-2 right-3 font-bold text-white"
    [class]="product().stock ? 'text-white' : 'text-red-500'">
      @if (product().stock) {
        {{ product().stock + ' in stock' }}
      } @else {
        Out of stock
      }
    </span>
  </div>  
  `,
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();

  cartService = inject(CartService);

  incrementCart(){
    this.cartService.addToCart(this.product());
  }
}
