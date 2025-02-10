import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: 
  `
  <div class="bg-slate-100 px-4 shadow-md py-3 flex justify-between items-center">
    <span> {{ title() }} </span>
    <app-primary-button label="Cart" (btnClicked)="showButtonClicked()"/> 
  </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  title = signal('Ecommerce-Angular-19-Test');

  showButtonClicked() {
    console.log('Button clicked');
  }
}
