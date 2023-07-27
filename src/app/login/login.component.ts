import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation.module';

@Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css'],
      animations: [fadeInAnimation]
})
export class LoginComponent {

      email!: string;
      password!: string;
      isLoggedIn: boolean = false;

      constructor() { }

      login() {
            if (this.email === 'regisattolou21@outlook.fr' && this.password === 'regis21atl') {
                  this.isLoggedIn = true;
                  // Vous pouvez également effectuer une redirection vers une autre page après la connexion réussie.
            } else {
                  this.alertMessage ();
            }
      };

      alertMessage () {
            alert("Nom d'utilisateur ou mot de passe incorrect.");
      }

      logout() {
            this.isLoggedIn = false;
            this.email = '';
            this.password = '';
      };

}
