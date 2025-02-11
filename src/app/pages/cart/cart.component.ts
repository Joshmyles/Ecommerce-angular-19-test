import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartListComponent } from '../cart-list/cart-list.component';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { Product } from '../../dtos/dtos.dto';

@Component({
  selector: 'app-cart',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="flex justify-between items-center w-full p-4 bg-white shadow-md rounded-lg">
    <div class="flex gap-4">
      <img class="w-16 h-16 object-cover rounded-lg" [src]="product().image" alt="item().title"/>
      <div>
        <p class="font-bold text-lg">{{product().title}}</p>
        <p class="text-gray-500 text-sm">{{product().price}}</p>
      </div>
      <div class="flex-1">
          <app-primary-button label="Remove" (btnClicked)="decrementCart()"/>
        </div>
    </div>
  </div>
  `,
  styles: ''
})
export class CartComponent {

  product = input.required<Product>();

  cartService = inject(CartService);

  decrementCart(){
    this.cartService.deleteFromCart(this.product());
  }
}
