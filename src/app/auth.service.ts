import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = true;
  email: string | undefined;
  password: string | undefined;

  constructor(
    
  ) { }

  logout() {
    this.isLoggedIn = false;
    this.email = '';
    this.password = '';
  }

}
