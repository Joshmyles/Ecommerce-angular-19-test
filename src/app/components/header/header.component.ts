import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: 
  `
  <div class="bg-slate-100 px-4 shadow-md py-3 flex justify-between items-center">
    <button class="text-xl font-bold hover:cursor-pointer" routerLink="/"> {{ title() }} </button>
    <app-primary-button 
    [label]="'Cart (' + cartService.cart().length + ')'" 
    (btnClicked)="showButtonClicked()"
    routerLink="/cart"/> 
  </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  title = signal('Ecommerce-Angular-19-Test');
  cartService = inject(CartService);

  showButtonClicked() {
    console.log('Button clicked');
  }
}
