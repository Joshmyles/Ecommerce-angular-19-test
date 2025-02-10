import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
  <button 
    (click)="handleClick()" 
    class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow-md">
      {{label()}}
  </button>
  `,
  styles: ''
})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();

  handleClick() {
    this.btnClicked.emit();
  }
}
