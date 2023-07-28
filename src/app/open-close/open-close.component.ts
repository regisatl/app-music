import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable, Observer } from 'rxjs';

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
export class OpenCloseComponent implements OnInit {



      ngOnInit(): void {
            // on s'abonne à l'observable

            this.myObservable.subscribe((album) => {
                  console.log(album);
            });
      }

      // Observable: produit | objet | message qui sera diffusé
      // Obsever : l'élément qui souscrit pour un produit | objet | message donné

      // new Observable ((observer) => {})

      myObservable = new Observable((observer: Observer<string>) => {
            // le code à exécuter quand on récupèrela donnée

            setTimeout(() => {  observer.next("album1") }, 1000);
            setTimeout(() => {  observer.next("album2") }, 2000);

      });






      isOpen: boolean = true;

      toggle() {
            this.isOpen = !this.isOpen;
      }

}
