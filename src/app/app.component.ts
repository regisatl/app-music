import { Component } from '@angular/core';
import { DatePipe } from "@angular/common";
import { fadeInAnimation } from './animation.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fadeInAnimation],
    providers: [DatePipe]
})
export class AppComponent {
    title = 'App-music';
    formattedDate: string | null;

    constructor(
        private datePipe: DatePipe
    ) {
        const maDate = new Date();
        this.formattedDate = this.datePipe.transform(maDate, 'HH:mm:ss');
    }

}



