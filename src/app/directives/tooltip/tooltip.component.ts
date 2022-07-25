import {Component, Input} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-tooltip',
  template: `
    <div class="p-2 bg-gray-300 rounded-md max-w-md">{{ text }}</div>`,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({opacity: 0}),
        animate(300, style({opacity: 1})),
      ]),
      transition(':leave', [
        animate(300, style({opacity: 0})),
      ]),
    ]),
  ],
})
export class TooltipComponent {
  @Input() text = '';
}
