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
      formattedDate: string | null;
      darkMode: boolean = false;
      private readonly THEME_KEY = 'theme';
      private readonly DARK_THEME = 'dark';
      private readonly LIGHT_THEME = 'light';

      constructor(
            private datePipe: DatePipe,
            private authService: AuthService,

      ) {
            const maDate = new Date();
            this.formattedDate = this.datePipe.transform(maDate, 'HH:mm:ss');
      };

      logout() {
            this.authService.logout();
      };

      toggleDarkMode(): void {
            const currentTheme = this.getPreferredTheme();
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            this.setPreferredTheme(newTheme);
            this.applyTheme(newTheme);
      }

      applyTheme(theme: string): void {
            document.documentElement.setAttribute('data-theme', theme);
      }


      getPreferredTheme(): string {
            const theme = localStorage.getItem(this.THEME_KEY);
            return theme ? theme : this.LIGHT_THEME;
      }

      setPreferredTheme(theme: string): void {
            localStorage.setItem(this.THEME_KEY, theme);
      }

      // constructor() { }

      // receivedText: string |undefined;

      // parentReceived($event: string) {
      //      this.receivedText = $event;
      // }

}



