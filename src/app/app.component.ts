import { Component } from '@angular/core';
import { DatePipe } from "@angular/common";
import { fadeInAnimation } from './animation.module';
import { AuthService } from './auth.service';

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      animations: [fadeInAnimation],
      providers: [DatePipe],
})
export class AppComponent {
      title = 'ATL Music';
      darkLight : boolean = true;
      formattedDate: string | null;

      constructor(
            private datePipe: DatePipe,
            private authService: AuthService

      ) {
            const maDate = new Date();
            this.formattedDate = this.datePipe.transform(maDate, 'HH:mm:ss');
      };

      logout() {
            this.authService.logout();
      };
      
      // constructor() { }

      // receivedText: string |undefined;

      // parentReceived($event: string) {
      //      this.receivedText = $event;
      // }

}



