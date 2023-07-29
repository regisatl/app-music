import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    constructor() { }

    private readonly THEME_KEY = 'theme';
    private readonly DARK_THEME = 'dark';
    private readonly LIGHT_THEME = 'light';

    getPreferredTheme(): string {
        const theme = localStorage.getItem(this.THEME_KEY);
        return theme ? theme : this.LIGHT_THEME;
    }

    setPreferredTheme(theme: string): void {
        localStorage.setItem(this.THEME_KEY, theme);
    }
}
