import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';
import { AlbumService } from './album.service';

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
      title = 'app-music';
      receivedText: string | undefined;
      timerObservable!: Observable<string>;
      // !: opérateur de confiance | opérateur d'affirmation de non nullité,
      count!: string;
      darkMode: boolean = false;


      constructor(
            private albumService : AlbumService
      ) {
      }

      ngOnInit(): void {
            this.timerObservable = interval(1000).pipe(
                  take(3600 * 12),

                  map(num => {
                        const hours = Math.floor(num / 3600);
                        const minutes = Math.floor(num / 60);
                        return `${this.format(hours)} : ${this.format(minutes - hours * 60)} : ${this.format(num - minutes * 60)} `;
                  })
            );
            this.timerObservable.subscribe(time => {
                  this.count = time;
            });
      }

      format(num: number): string {
            return (num < 10 ? '0' : '') + num;
      }

      parentReceive($event: string) {
            this.receivedText = $event;
      }

      valueAlbums () : void {
           console.log(this.albumService.count());
      }

}
