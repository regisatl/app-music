import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { fadeInAnimation } from './animation.module';
import { AuthService } from './auth.service';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      providers: [DatePipe],
      animations: [fadeInAnimation]
})
export class AppComponent implements OnInit {
      title = 'ATL Music';
      formattedDate: string | null;
      darkMode: boolean = false;
      receivedText: string | undefined;
      timerObservable!: Observable<string>;
      time!: string;

      constructor(
            private datePipe: DatePipe,
            private authService: AuthService,
      ) {
            const maDate = new Date();
            this.formattedDate = this.datePipe.transform(maDate, 'HH:mm:ss');
      }

      ngOnInit(): void {

            this.timerObservable = interval(1000).pipe(
                  take( 3600 * 12 ),
                  map(num => {
                        const hours = Math.floor(num / 3600);
                        const minutes = Math.floor(num / 60);

                        return `${this.format(hours)} : ${this.format(minutes - hours * 60)} : ${this.format(num - minutes * 60)}`;
                  })
            );

            this.timerObservable.subscribe(timers => {
                  this.time = timers
            });
      };

      format(num: number): string {
            return (num < 10 ? '0' : '') + num;
      }

      parentReceive($event: string) {
            this.receivedText = $event;
      }

      logout() {
            this.authService.logout();
      };

}



