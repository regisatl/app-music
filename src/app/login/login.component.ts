import { Component } from '@angular/core';

@Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
})
export class LoginComponent {

      email!: string;
      password!: string;
      isLoggedIn: boolean = false;

      constructor() { }

      login() {
            if (this.email === 'admin' && this.password === 'password') {
                  this.isLoggedIn = true;
                  // Vous pouvez également effectuer une redirection vers une autre page après la connexion réussie.
            } else {
                  alert('Nom d\'utilisateur ou mot de passe incorrect.');
            }
      }

      logout() {
            this.isLoggedIn = false;
            this.email = '';
            this.password = '';
      }

}
