import { Component } from '@angular/core';

@Component({
  selector: 'icon-alert',
  template: `
  <div class="text-red-500 hover:text-red-500">
    <span class="sr-only">Alerting</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
    </svg>
  </div>`
})
export class AlertIconComponent{
}
