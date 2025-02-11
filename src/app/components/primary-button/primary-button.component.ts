import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
  <button 
    (click)="handleClick()" 
    class="text-white px-4 py-2 rounded shadow-md hover:cursor-pointer"
    [class]="(label() !== 'Remove') ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'"
    >
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
