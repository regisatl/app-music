import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
      selector: 'app-open-close',
      templateUrl: './open-close.component.html',
      styleUrls: ['./open-close.component.css'],

      animations: [

            trigger('openClose', [
                  state('open', style({
                      opacity: 0,
                  })),

                  state('close', style({
                      opacity: 1,
                  })),

                  transition('open => close', animate('2s')),
                  transition('close => open', animate('1s')),

            ]),
      ]
})
export class OpenCloseComponent {

      isOpen: boolean = true;

      toggle() {
            this.isOpen = !this.isOpen;
      }

}
