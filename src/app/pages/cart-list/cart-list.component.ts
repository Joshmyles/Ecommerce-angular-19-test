import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  imports: [CartListComponent],
  template: `
  <div class="p-6 flex flex-col gap-4">
    <h2 class="text-xl">Shopping Cart</h2>
    @for (item of cartService.cart(); track item.id) {
      <div class="flex">
        <app-cart-list [item]="cartService.cart()" />
      </div>
    }
  </div>  
  `,
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {

  cartService = inject(CartService);
}
