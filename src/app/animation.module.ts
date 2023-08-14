import { trigger, style, animate, transition } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
      transition(':enter', [
            style({
                  // transform: 'scale(0)',
                  opacity: 0,
            }),
            animate('3s ease', style({
                  // transform: 'scale(1)',
                  opacity: 1,
            })),
      ]),
])