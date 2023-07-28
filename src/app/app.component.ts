import { Component } from '@angular/core';
import { DatePipe } from "@angular/common";
import { fadeInAnimation } from './animation.module';
import { AuthService } from './auth.service';
import { LoginComponent } from "./login/login.component";

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
        private datePipe: DatePipe,
        private authService: AuthService
       
    ) {
        const maDate = new Date();
        this.formattedDate = this.datePipe.transform(maDate, 'HH:mm:ss');
    }

    logout() {
        this.authService.logout();
      }

}



