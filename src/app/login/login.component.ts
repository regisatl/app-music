import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../animation.module';
import { AuthService } from '../auth.service';

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
      alertMessage: string = 'Nom d\'utilisateur ou mot de passe incorrect.';

      constructor(
            private router: Router,
            private authService: AuthService
      ) { }

      login() {

            if (this.email === undefined && this.password === undefined) {

                  alert("S'il vous plaît veuillez remplir tous les champs");

            }
            else

                  if (this.email === 'regisattolou21@outlook.fr' && this.password === 'regis21atl') {
                        this.isLoggedIn = true;
                        this.router.navigate(['/albums']);
                  } else {
                        this.router.navigate(['/login']);
                        alert('Nom d\'utilisateur ou mot de passe incorrect.');
                  }
      }

      logout() {
            this.authService.logout();
          }


}



