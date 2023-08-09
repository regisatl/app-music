# Service

Un service est une classe qui regroupe les propriétés partagés.

# Les principes SOLID

Les principes SOLID  sont un ensemble de cinq principes de conception de logiciels qui ont été popularisés par Martin C. Robert. Ces principes vises à améliorer la qualité du code, la maintenabilité et la flexibilité d'une application en favorisant une conception orientée objet solide et en évitant les dépendances indésirables entre les différents parties du code.

Les principes SOLID sont: 

1. Principe de Responsabilité Unique (Single Responsability Principale)

2. Principe d'Ouverture / Fermeture (Open / Close Principe)

3. Principe de Substiution de Liskov (Liskov Substitution)

4. Principe de Ségrégation d'Interfaces (Interface Segregation)

5. Principe d'Inversion de Dépendance (Dependency Inversion  Principale)

La fonction de comparaison Array.sort();

```js
arr.sort()
arr.sort(fonctionComparaison)
```


La fonction de comparaison est une fonction qui prend en général deux  arguments (souvent appelés a et b).

Le tableau sera classé:

- par ordre croissant, si la fonction retourne un nombre négatif.
- par ordre décroissant, si la fonction retourne un nombre positif.

Sinon, le tableau rest inchangé.

## Exemple

```js
let arr = [2, 5, 30, 50, 15];
let sortedArray = arr.sort((a, b));
```

# ngFor

Lorsque nous utiliserons la directive `ngFor`, Angular cré un ensemble de variables pour chaque itération. Les variables créés sont:

- index : variable qui stock l'indice de l'élément actuel.
- first : variable booléenne qui indique si l'élément est le premier dans la liste.
- last : variable booléenne qui indique si l'élément est le dernier dans la liste.
- even : variable booléenne qui indique si l'élement actuel est pair.
- odd: variable booléenne qui indique si l'élément actuel est impair.

# Les Formulaires Angular

Un formulaire avec Angular se gère suivant deux approches : 
- les réactifs (en : reactive forms) et les modèles (en : template-driven forms)

# Observable : Intention
# Observable : Le problème
# Observable : La solution


# paginate 

- Etape 1: 
  Tapez dans la console la ligne de commande : `ng generate component paginate`
- Etape 2:  
      Créez la méthode qui renvoi le nombre d'album qu'on aura par page.
      créez dans le dossier src/app/ un dossier nommé `environment/environment.ts`


      ```js
      paginateNumberPage(): number  {
            return environment.numberPage;
      }
      ```

      

      ```js

      /**
       * Méthode qui signale à tous les composants la page actuelle 
       @params numberPage numéro de la page actuelle 
       @returns Retourne la liste de tous les albums
       */

      currentPage (numberPage: number) {

      }

      ```
      ```js

      environment.ts
      export { 

      }

      Bien sûr ! Voici une liste de fonctions couramment utilisées pour manipuler les tableaux en JavaScript, accompagnées d'explications pour chacune d'entre elles :

1. `push()`: Ajoute un ou plusieurs éléments à la fin du tableau.
   Exemple : `monTableau.push(42)` ajoute la valeur 42 à la fin de monTableau.

2. `pop()`: Supprime le dernier élément du tableau et le retourne.
   Exemple : `let dernierElement = monTableau.pop()` supprime et récupère le dernier élément du tableau monTableau.

3. `shift()`: Supprime le premier élément du tableau et le retourne.
   Exemple : `let premierElement = monTableau.shift()` supprime et récupère le premier élément du tableau monTableau.

4. `unshift()`: Ajoute un ou plusieurs éléments au début du tableau et décale les éléments existants vers la droite.
   Exemple : `monTableau.unshift(10)` ajoute la valeur 10 au début du tableau monTableau.

5. `splice()`: Permet d'ajouter, supprimer ou remplacer des éléments à une position spécifique du tableau.
   Exemple : `monTableau.splice(2, 0, "nouvelElement")` insère "nouvelElement" à l'index 2 du tableau monTableau sans supprimer d'éléments.

6. `slice()`: Renvoie une copie superficielle d'une partie du tableau, spécifiée par des indices de début et de fin.
   Exemple : `let sousTableau = monTableau.slice(1, 4)` renverra les éléments du tableau monTableau de l'index 1 à l'index 3 (non inclus).

7. `concat()`: Combine deux tableaux (ou plus) en renvoyant un nouveau tableau résultant de cette combinaison.
   Exemple : `let nouveauTableau = monTableau.concat(autreTableau)` combine monTableau et autreTableau en un seul tableau nouveauTableau.

8. `reverse()`: Inverse l'ordre des éléments du tableau.
   Exemple : `monTableau.reverse()` inverse l'ordre des éléments dans monTableau.

9. `sort()`: Trie les éléments du tableau dans l'ordre lexicographique ou en utilisant une fonction de comparaison.
   Exemple : `monTableau.sort()` trie les éléments de monTableau en ordre lexicographique.

10. `indexOf()`: Renvoie l'index de la première occurrence d'un élément spécifié dans le tableau, ou -1 s'il n'est pas présent.
    Exemple : `let index = monTableau.indexOf(42)` renverra l'index de la première occurrence de la valeur 42 dans monTableau.

11. `lastIndexOf()`: Renvoie l'index de la dernière occurrence d'un élément spécifié dans le tableau, ou -1 s'il n'est pas présent.
    Exemple : `let dernierIndex = monTableau.lastIndexOf(42)` renverra l'index de la dernière occurrence de la valeur 42 dans monTableau.

12. `includes()`: Vérifie si le tableau contient une valeur spécifiée, renvoie true ou false.
    Exemple : `let contientValeur = monTableau.includes(42)` renverra true si 42 est présent dans monTableau, sinon false.

13. `join()`: Crée une chaîne de caractères en concaténant tous les éléments du tableau à l'aide d'un séparateur.
    Exemple : `let chaine = monTableau.join(", ")` renverra une chaîne avec tous les éléments de monTableau séparés par une virgule suivie d'un espace.

14. `filter()`: Crée un nouveau tableau avec tous les éléments du tableau qui passent un test spécifié par une fonction.
    Exemple : `let nouveauTableau = monTableau.filter(element => element > 5)` renverra un tableau contenant les éléments de monTableau supérieurs à 5.

15. `map()`: Crée un nouveau tableau en appliquant une fonction à tous les éléments du tableau.
    Exemple : `let nouveauTableau = monTableau.map(element => element * 2)` renverra un tableau où chaque élément est multiplié par 2.

16. `reduce()`: Réduit les éléments du tableau à une seule valeur en appliquant une fonction de gauche à droite.
    Exemple : `let somme = monTableau.reduce((acc, curr) => acc + curr, 0)` renverra la somme de tous les éléments de monTableau.

17. `forEach()`: Exécute une fonction donnée sur chaque élément du tableau.
    Exemple : `monTableau.forEach(element => console.log(element))` affiche chaque élément de monTableau dans la console.

Ces fonctions sont très utiles pour manipuler et transformer les données stockées dans les tableaux en JavaScript. Elles vous permettront de gérer efficacement les collections d'éléments dans vos applications web.

Pour créer un service d'authentification sécurisé dans Angular, nous allons suivre ces étapes :

1. Créez le service d'authentification :
   - Exécutez la commande `ng generate service auth` pour générer le service d'authentification.
   - Cela créera un fichier `auth.service.ts` dans le dossier `src/app`.

2. Mettez en place les méthodes de login et logout dans le service `auth.service.ts`.

Voici comment vous pouvez implémenter le service d'authentification :

**auth.service.ts**
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  login(email: string, password: string): boolean {
    // Ici, vous devriez effectuer une vérification de l'email et du mot de passe par rapport à votre backend ou une source de données sécurisée.
    // Pour cet exemple, nous simulons simplement une authentification réussie avec un email et un mot de passe.
    if (email === 'user@example.com' && password === 'password') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
```

3. Maintenant, mettez à jour le composant `login.component.ts` pour utiliser le service d'authentification :

**login.component.ts**
```typescript
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  login(): void {
    const isLoginSuccessful = this.authService.login(this.email, this.password);
    if (isLoginSuccessful) {
      // Rediriger vers la page principale ou une autre page sécurisée après l'authentification réussie.
    } else {
      // Afficher un message d'erreur si l'authentification a échoué.
    }
  }
}
```

4. Enfin, mettez à jour le composant `app.component.ts` pour gérer la déconnexion à l'aide du service d'authentification :

**app.component.ts**
```typescript
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Injectez le service d'authentification dans le composant racine pour gérer la déconnexion.
  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
    // Rediriger vers la page de connexion ou une autre page après la déconnexion.
  }
}
```

Assurez-vous que le service d'authentification est fourni au niveau racine (root) du module dans le fichier `app.module.ts` :

**app.module.ts**
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule],
  providers: [AuthService], // Fournir le service d'authentification au niveau racine.
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Avec ces modifications, vous devriez avoir un système d'authentification de base dans votre application Angular. Notez que ce code est une version simplifiée à des fins d'illustration, et dans un environnement de production réel, vous devez mettre en place des mesures de sécurité appropriées et un backend pour gérer l'authentification de manière sécurisée.

Pour supprimer un service ou un composant créé dans un projet Angular, vous pouvez utiliser la commande `ng generate` en lui passant l'option `--force` ou l'option `--dry-run`. Ces options permettent de supprimer les fichiers générés sans avoir à les supprimer manuellement.

Voici comment utiliser ces options pour supprimer un service ou un composant :

1. Supprimer un service :
   Pour supprimer un service, vous devez également retirer manuellement les références au service dans d'autres fichiers où il est utilisé.

   Utilisez la commande `ng generate service` avec l'option `--force` :
   ```
   ng generate service service-name --force
   ```

   Utilisez l'option `--dry-run` pour afficher les fichiers qui seront supprimés sans effectuer la suppression réelle :
   ```
   ng generate service service-name --dry-run
   ```

2. Supprimer un composant :
   Si le composant est utilisé dans d'autres fichiers, vous devrez également retirer manuellement les références au composant.

   Utilisez la commande `ng generate component` avec l'option `--force` :
   ```
   ng generate component component-name --force
   ```

   Utilisez l'option `--dry-run` pour afficher les fichiers qui seront supprimés sans effectuer la suppression réelle :
   ```
   ng generate component component-name --dry-run
   ```

Veuillez noter que ces commandes supprimeront les fichiers générés par Angular pour le service ou le composant spécifié. Cependant, assurez-vous de vérifier les autres fichiers de votre projet pour retirer manuellement les références au service ou au composant que vous supprimez.

Pour mettre en place un Dark Mode dans une application Angular, vous pouvez utiliser des classes CSS conditionnelles et le stockage local pour enregistrer les préférences de l'utilisateur. Voici un exemple simple de la mise en œuvre d'un Dark Mode :

1. Créez un service pour gérer les préférences de thème (Dark ou Light) :

**theme.service.ts**
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
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
```

2. Mettez en place un composant pour le commutateur Dark/Light :

**dark-mode-toggle.component.ts**
```typescript
import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `
    <button (click)="toggleDarkMode()">Toggle Dark Mode</button>
  `
})
export class DarkModeToggleComponent {
  constructor(private themeService: ThemeService) { }

  toggleDarkMode(): void {
    const currentTheme = this.themeService.getPreferredTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.themeService.setPreferredTheme(newTheme);
    this.applyTheme(newTheme);
  }

  applyTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
```

3. Dans votre fichier CSS global (styles.css), définissez les styles pour le thème Dark et Light :

**styles.css**
```css
/* Styles for the Light theme */
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

/* Styles for the Dark theme */
[data-theme="dark"] {
  --bg-color: #000000;
  --text-color: #ffffff;
}

/* Apply common styles for both themes */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

4. Utilisez le composant et le service du Dark Mode Toggle dans votre application :

**app.component.html**
```html
<div class="container-fluid" [ngClass]="themeService.getPreferredTheme()">
  <!-- Your app content goes here -->
  <app-dark-mode-toggle></app-dark-mode-toggle>
</div>
```

Assurez-vous que le composant `DarkModeToggleComponent` est déclaré dans le module principal (`AppModule`).

Avec cette mise en œuvre, vous pouvez maintenant utiliser le bouton "Toggle Dark Mode" pour activer ou désactiver le thème Dark/Light dans votre application. L'état du thème sera également enregistré localement à l'aide du service `ThemeService`, de sorte que le thème préféré de l'utilisateur sera conservé lorsqu'il quitte et revient sur la page.

Bien sûr ! Je vais expliquer chaque ligne de code pour le Dark Mode avec Angular :

**theme.service.ts**
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
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
```

- `import { Injectable } from '@angular/core';`: Nous importons le décorateur `Injectable` depuis le module `@angular/core`, ce qui nous permet de créer un service injectable dans notre application.

- `@Injectable({ providedIn: 'root' })`: Ce décorateur est utilisé pour enregistrer le service au niveau racine, ce qui signifie qu'il est disponible pour toute l'application.

- `private readonly THEME_KEY = 'theme';`: Cela définit une clé pour stocker le thème préféré dans le stockage local du navigateur.

- `private readonly DARK_THEME = 'dark';` et `private readonly LIGHT_THEME = 'light';`: Ces constantes définissent les valeurs des thèmes Dark et Light que nous utiliserons pour définir et récupérer le thème préféré.

- `getPreferredTheme(): string { ... }`: Cette méthode récupère le thème préféré à partir du stockage local du navigateur en utilisant la clé `THEME_KEY`. Si aucune préférence n'est enregistrée, elle renvoie le thème par défaut, qui est `LIGHT_THEME`.

- `setPreferredTheme(theme: string): void { ... }`: Cette méthode permet de définir le thème préféré en le stockant dans le stockage local du navigateur en utilisant la clé `THEME_KEY`.

**dark-mode-toggle.component.ts**
```typescript
import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `
    <button (click)="toggleDarkMode()">Toggle Dark Mode</button>
  `
})
export class DarkModeToggleComponent {
  constructor(private themeService: ThemeService) { }

  toggleDarkMode(): void {
    const currentTheme = this.themeService.getPreferredTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.themeService.setPreferredTheme(newTheme);
    this.applyTheme(newTheme);
  }

  applyTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
```

- `import { Component } from '@angular/core';`: Nous importons le décorateur `Component` depuis le module `@angular/core`, ce qui nous permet de créer un composant.

- `import { ThemeService } from '../theme.service';`: Nous importons le service `ThemeService` que nous avons créé précédemment pour gérer les préférences de thème.

- `@Component({ ... })`: Ce décorateur est utilisé pour définir les métadonnées du composant, comme le sélecteur (`selector`) et le template (`template`).

- `selector: 'app-dark-mode-toggle'`: Définit le sélecteur du composant, ce qui signifie que ce composant sera utilisé avec l'élément `<app-dark-mode-toggle>` dans les templates.

- `template: `...``: Définit le template du composant, qui contient le bouton "Toggle Dark Mode".

- `constructor(private themeService: ThemeService) { ... }`: Le constructeur du composant injecte le service `ThemeService` pour que nous puissions l'utiliser dans le composant.

- `toggleDarkMode(): void { ... }`: Cette méthode est appelée lorsque l'utilisateur clique sur le bouton "Toggle Dark Mode". Elle récupère le thème préféré actuel à l'aide du `ThemeService`, change le thème en conséquence (dark devient light, et vice versa) et applique ce nouveau thème en appelant la méthode `applyTheme()`.

- `applyTheme(theme: string): void { ... }`: Cette méthode applique le thème en définissant l'attribut `data-theme` de l'élément racine (`document.documentElement`) du DOM avec la valeur du thème spécifié. Cela appliquera les styles correspondants définis dans le fichier CSS global (`styles.css`) pour le thème sélectionné.

**styles.css**
```css
/* Styles for the Light theme */
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

/* Styles for the Dark theme */
[data-theme="dark"] {
  --bg-color: #000000;
  --text-color: #ffffff;
}

/* Apply common styles for both themes */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

- `:root { ... }`: Ici, nous définissons les variables CSS pour les styles du thème Light, en utilisant le sélecteur `:root`, qui cible l'élément racine du document (l'élément `<html>`).

- `[data-theme="dark"] { ... }`: Nous définissons ici les variables CSS pour les styles du thème Dark, en utilisant un attribut `data-theme` de valeur "dark".

- `body { ... }`: Les styles définis ici seront appliqués à l'élément `<body>` pour les deux thèmes (Light et Dark), car ils sont en dehors de tout sélecteur spécifique au thème.

En utilisant ces lignes de code, nous créons un service d'authentification simple et un commutateur Dark/Light qui permet à l'utilisateur de basculer entre les deux thèmes en cliquant sur un bouton. Les styles correspondants sont appliqués dynamiquement en fonction du thème préféré de l'utilisateur.

Pour créer un composant de force en Angular à l'aide de la CLI (Command Line Interface), vous pouvez utiliser la commande `ng generate component` avec l'option `--force`. Cela vous permettra de générer un composant même s'il porte le même nom qu'un composant existant. Voici comment procéder :

Ouvrez votre terminal (ou invite de commande) à l'emplacement de votre projet Angular, puis utilisez la commande suivante :

```bash
ng generate component nom-du-composant --force
```

Remplacez `nom-du-composant` par le nom souhaité pour votre nouveau composant. Assurez-vous d'utiliser un nom significatif et en minuscules, comme vous le feriez normalement lors de la création d'un composant.

La CLI va alors créer un nouveau répertoire pour votre composant avec le nom spécifié, même si un composant du même nom existe déjà.

Veuillez noter que l'utilisation de l'option `--force` peut entraîner la suppression du composant existant s'il porte le même nom que le composant que vous souhaitez créer de force. Veillez donc à sauvegarder vos fichiers importants avant de lancer cette commande. Utilisez cette option avec prudence et vérifiez bien votre intention avant de procéder.

Lorsque vous générez un composant avec la commande `ng generate component`, l'option `--skip-import` permet de sauter l'étape d'importation automatique du composant dans le module du composant parent. Cela signifie que le composant ne sera pas automatiquement ajouté aux déclarations du module.

L'option `--skip-import` est utile dans certains cas particuliers :

1. Composant de style global :
   Si vous créez un composant qui est conçu pour être utilisé de manière globale, comme un composant de mise en page ou un composant d'en-tête, vous ne voudrez peut-être pas qu'il soit automatiquement importé dans un module spécifique, car il sera utilisé partout dans l'application. Dans ce cas, vous pouvez utiliser `--skip-import`.

2. Composant non directement lié à un module :
   Il peut arriver que vous souhaitiez générer un composant qui n'est pas directement lié à un module spécifique de l'application, mais que vous l'utiliserez dynamiquement à un moment donné ou que vous le chargerez via le système de routage. Dans ce cas, vous pouvez éviter l'importation automatique du composant dans le module en utilisant `--skip-import`.

3. Custom workflow :
   Certains projets Angular ont des workflows personnalisés où l'ajout manuel des importations de composants est préféré. Dans de tels cas, `--skip-import` peut être utilisé pour respecter cette approche personnalisée.

Dans la plupart des cas, l'option `--skip-import` n'est pas nécessaire, car Angular gère automatiquement l'importation des composants dans le module parent pour que vous puissiez les utiliser directement dans les templates. Cependant, dans des cas spécifiques comme ceux mentionnés ci-dessus, cette option peut s'avérer utile pour adapter le comportement de la génération de composants selon les besoins du projet.

Bien sûr ! Voici la ligne de commande pour générer un composant en Angular en utilisant l'option `--skip-import` :

```bash
ng generate component nom-du-composant --skip-import
```

Remplacez `nom-du-composant` par le nom souhaité pour votre nouveau composant. Cette commande générera le composant sans ajouter automatiquement l'importation du composant dans le module du composant parent.

Encore une fois, veuillez noter que l'utilisation de `--skip-import` signifie que vous devrez ajouter manuellement l'importation du composant dans le module parent si vous souhaitez l'utiliser dans les templates de ce module.

Bien sûr! Voici le CSS approprié pour les styles dans le mode sombre et le mode clair, basé sur l'HTML et le code TypeScript fournis :

Assumons que votre fichier `styles.css` ressemble à ceci :

```css
/* styles.css */
body {
  background-color: #ffffff; /* Couleur de fond pour le mode clair */
  color: #000000; /* Couleur du texte pour le mode clair */
}

.dark-theme {
  background-color: #1f1f1f; /* Couleur de fond pour le mode sombre */
  color: #ffffff; /* Couleur du texte pour le mode sombre */
}
```

Les styles définis dans le fichier `styles.css` correspondent aux deux modes : clair et sombre. Lorsque le mode sombre est activé, le corps de la page (`body`) aura la classe `dark-theme` appliquée, ce qui modifiera les couleurs en conséquence.

Si vous souhaitez personnaliser davantage les styles pour chaque mode, vous pouvez ajuster les propriétés CSS en conséquence dans le fichier `styles.css`.

D'accord, nous allons combiner les deux codes TypeScript dans le fichier `app.component.ts`, et nous utiliserons l'HTML et le CSS global fournis. Voici le code résultant :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fuild principal mb-5">
      <button class="nav-link text-white" (click)="toggleDarkMode()">
        <span class="fas fa-toggle-on fw-bold mx-2" *ngIf="darkMode">Dark Mode</span>
        <span class="fas fa-toggle-off fw-bold mx-2" *ngIf="!darkMode">Light Mode</span>
      </button>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkMode = false;

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = this.darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
```

Assurez-vous que le code HTML dans `app.component.ts` correspond au contenu de votre fichier HTML fourni, et le code CSS global dans le fichier `styles.css` correspond au contenu de votre fichier `style.css` fourni.

Cela combinera les deux composants en un seul `AppComponent`, avec la logique de basculement entre les modes sombre et clair gérée directement dans ce composant, sans utiliser de services.

Pour implémenter le basculement entre le mode sombre (Dark Mode) et le mode clair (Light Mode) sans utiliser les services, nous pouvons directement manipuler les classes du document body pour appliquer les styles associés aux thèmes. Voici le code TypeScript correspondant :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `
    <button (click)="toggleDarkMode()">Toggle Dark Mode</button>
  `
})
export class DarkModeToggleComponent {
  darkMode = false;

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = this.darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
```

Dans ce cas, nous avons directement incorporé la logique de gestion du thème dans le composant `DarkModeToggleComponent`. La propriété `darkMode` indique l'état actuel du mode, et la méthode `toggleDarkMode` est utilisée pour basculer entre les modes sombre et clair. Lorsque l'utilisateur clique sur le bouton, nous mettons à jour la propriété `darkMode` et appliquons le thème correspondant en manipulant les classes du document.

Si vous préférez utiliser des méthodes séparées pour chaque thème (light et dark), vous pouvez modifier le code comme suit :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `
    <button (click)="toggleDarkMode()">Toggle Dark Mode</button>
  `
})
export class DarkModeToggleComponent {
  darkMode = false;

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.darkMode) {
      this.applyDarkTheme();
    } else {
      this.applyLightTheme();
    }
  }

  private applyDarkTheme(): void {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  private applyLightTheme(): void {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
```

Ici, nous avons séparé la logique d'application des thèmes sombre et clair en méthodes distinctes pour une meilleure lisibilité et maintenabilité du code. Le résultat final est similaire à la version précédente, mais sans l'utilisation explicite de services.

Les décorateurs `@Input` et `@Output` sont des fonctionnalités clés d'Angular, un framework JavaScript populaire pour le développement d'applications web. Ils sont utilisés pour la communication entre composants, permettant ainsi de transmettre des données entre les composants parents et enfants. Voici des explications détaillées et des exemples d'utilisation pour chacun de ces décorateurs :

## Le décorateur @Input :

Le décorateur `@Input` est utilisé pour permettre à un composant parent de transmettre des données à un composant enfant. En définissant une propriété avec le décorateur `@Input`, le composant enfant peut recevoir les données de son composant parent. Les changements dans la propriété du composant parent sont automatiquement détectés et propagés au composant enfant.

### Exemple d'utilisation :

Supposons que nous ayons un composant parent appelé `ParentComponent` qui souhaite transmettre des données à un composant enfant `ChildComponent`.

Dans `ChildComponent`, nous déclarons une propriété avec le décorateur `@Input` :

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>{{ dataFromParent }}</p>'
})
export class ChildComponent {
  @Input() dataFromParent: string;
}
```

Dans `ParentComponent`, nous utilisons `ChildComponent` en l'incluant dans son propre template, et nous passons les données via la propriété `dataFromParent` :

```html
<app-child [dataFromParent]="dataToSend"></app-child>
```

Ici, `dataToSend` est une propriété du `ParentComponent` qui contient les données que nous voulons transmettre au composant enfant. Dès que `dataToSend` change dans `ParentComponent`, la valeur de `dataFromParent` dans `ChildComponent` sera également mise à jour automatiquement.

## Le décorateur @Output :

Le décorateur `@Output` est utilisé pour permettre à un composant enfant d'émettre des événements vers son composant parent. Cela permet au composant parent de réagir aux événements émis par le composant enfant.

### Exemple d'utilisation :

Supposons que nous ayons à nouveau le composant parent `ParentComponent` et le composant enfant `ChildComponent`. Cette fois, nous voulons que `ChildComponent` émette un événement lorsque l'utilisateur clique sur un bouton, et que le composant parent réagisse à cet événement.

Dans `ChildComponent`, nous déclarons une propriété avec le décorateur `@Output` et nous utilisons un `EventEmitter` pour émettre l'événement :

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<button (click)="emitEvent()">Cliquez ici</button>'
})
export class ChildComponent {
  @Output() customEvent: EventEmitter<void> = new EventEmitter<void>();

  emitEvent() {
    this.customEvent.emit();
  }
}
```

Dans `ParentComponent`, nous utilisons `ChildComponent` et nous écoutons l'événement `customEvent` :

```html
<app-child (customEvent)="handleCustomEvent()"></app-child>
```

Lorsque l'utilisateur clique sur le bouton dans `ChildComponent`, l'événement `customEvent` est émis. `ParentComponent` détecte cet événement grâce à l'écouteur `(customEvent)="handleCustomEvent()"` et exécute la méthode `handleCustomEvent()` définie dans le composant parent.

Ces deux décorateurs, `@Input` et `@Output`, permettent de faciliter la communication entre composants dans une application Angular. Ils offrent une solution élégante pour échanger des données et des actions entre les différentes parties d'une application, améliorant ainsi la modularité et la réutilisabilité du code.

Les directives `ngClass`, `ngSwitchCase` et `ngStyle` sont des fonctionnalités clés d'Angular qui permettent de manipuler la présentation visuelle des éléments HTML en fonction de certaines conditions ou états. Voici des explications détaillées et des exemples d'utilisation pour chacune de ces directives :

## La directive ngClass :

La directive `ngClass` permet d'ajouter ou de supprimer dynamiquement des classes CSS à un élément HTML en fonction d'une ou plusieurs conditions.

### Exemple d'utilisation :

Supposons que nous ayons une liste d'éléments avec un état et que nous souhaitons appliquer différentes couleurs en fonction de cet état. Nous pouvons utiliser `ngClass` pour accomplir cela.

```html
<ul>
  <li *ngFor="let item of items" [ngClass]="{ 'active': item.status === 'active', 'inactive': item.status === 'inactive' }">
    {{ item.name }}
  </li>
</ul>
```

Dans cet exemple, nous utilisons `ngClass` pour appliquer la classe CSS `active` lorsque l'état de l'élément est "actif" et la classe `inactive` lorsque l'état est "inactif". Ainsi, la couleur des éléments de la liste sera mise à jour en fonction de leur état.

## La directive ngSwitchCase :

La directive `ngSwitchCase` est utilisée en conjonction avec la directive `ngSwitch` pour effectuer un rendu conditionnel basé sur une valeur donnée.

### Exemple d'utilisation :

Supposons que nous ayons une variable `role` et que nous voulions afficher un message différent en fonction de la valeur de cette variable.

```html
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Bienvenue, Administrateur !</p>
  <p *ngSwitchCase="'user'">Bienvenue, Utilisateur !</p>
  <p *ngSwitchDefault>Connectez-vous pour accéder au contenu.</p>
</div>
```

Dans cet exemple, nous utilisons `ngSwitch` pour définir la valeur à comparer (`role` dans ce cas). Ensuite, nous utilisons `ngSwitchCase` pour définir les différents cas possibles avec les messages correspondants qui seront affichés en fonction de la valeur de `role`.

## La directive ngStyle :

La directive `ngStyle` permet de définir dynamiquement des styles en ligne (CSS) pour un élément HTML en fonction de conditions ou de valeurs.

### Exemple d'utilisation :

Supposons que nous ayons une variable `fontSize` qui définit la taille de la police à appliquer à un élément.

```html
<p [ngStyle]="{ 'font-size.px': fontSize }">Ce texte a une taille de police dynamique.</p>
```

Dans cet exemple, nous utilisons `ngStyle` pour définir dynamiquement la taille de la police du paragraphe en fonction de la valeur de `fontSize`. La propriété `'font-size.px'` signifie que la valeur de `fontSize` sera interprétée en pixels.

Ces directives, `ngClass`, `ngSwitchCase` et `ngStyle`, sont très utiles pour manipuler la présentation visuelle des éléments HTML en fonction de conditions dynamiques dans une application Angular. Elles permettent de rendre le code plus lisible, maintenable et flexible lorsqu'il s'agit de gérer la présentation des composants en fonction de l'état et des valeurs de l'application.

Bien sûr ! Dans cet exemple, nous allons utiliser la directive `ngStyle` pour animer un bouton en fonction d'une valeur booléenne (vraie ou fausse). Lorsque la valeur est vraie, nous appliquerons un style CSS pour animer le bouton, et lorsque la valeur est fausse, nous le rétablirons à son style initial.

Supposons que nous ayons une variable `isButtonAnimated` qui détermine si nous devons animer le bouton ou non. Lorsque `isButtonAnimated` est vrai, nous souhaitons ajouter une animation au bouton, et lorsque c'est faux, nous voulons supprimer cette animation.

Voici comment nous pouvons le faire avec la directive `ngStyle` :

```html
<button [ngStyle]="{ 'animation': isButtonAnimated ? 'pulse 2s infinite' : 'none' }" (click)="toggleAnimation()">Cliquez pour animer le bouton</button>
```

Dans cet exemple, nous utilisons `ngStyle` pour appliquer un style d'animation CSS au bouton. Lorsque `isButtonAnimated` est vrai, la propriété `'animation'` sera définie avec la valeur `'pulse 2s infinite'`, qui est le nom de l'animation CSS (pulse) suivie de sa durée (2 secondes) et du nombre d'itérations (infini). Cela créera une animation de pulsation infinie sur le bouton.

Lorsque `isButtonAnimated` est faux, nous définissons la propriété `'animation'` à `'none'`, ce qui supprime toute animation du bouton.

Pour que cela fonctionne, nous devons également définir l'animation CSS "pulse" dans notre feuille de style globale (style.css ou app.component.css) :

```css
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
```

Enfin, nous devons définir la logique pour activer/désactiver l'animation en changeant la valeur de `isButtonAnimated` dans le composant :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-animation',
  templateUrl: './button-animation.component.html',
  styleUrls: ['./button-animation.component.css']
})
export class ButtonAnimationComponent {
  isButtonAnimated: boolean = false;

  toggleAnimation() {
    this.isButtonAnimated = !this.isButtonAnimated;
  }
}
```

Maintenant, lorsque nous cliquons sur le bouton, l'animation pulse sera activée si `isButtonAnimated` est vrai et désactivée si c'est faux, offrant ainsi une animation visuelle lorsque la valeur change entre vraie et fausse.

Les Observables sont un concept clé de la programmation réactive, et ils sont utilisés dans de nombreux frameworks et bibliothèques JavaScript tels qu'Angular, RxJS, etc. Un Observable est une séquence de valeurs diffusées au fil du temps. Il permet de gérer facilement les flux de données asynchrones, les événements, et les opérations asynchrones telles que les requêtes HTTP.

Voici quelques points importants à connaître sur les Observables :

1. **Séquence de valeurs diffusées :** Un Observable émet des valeurs successivement au fil du temps. Ces valeurs peuvent être de n'importe quel type (nombres, objets, tableaux, etc.).

2. **Gestion de l'asynchronisme :** Les Observables sont parfaits pour gérer les opérations asynchrones comme les appels HTTP, les timers, les interactions avec l'utilisateur, etc. Ils permettent de réagir aux événements lorsqu'ils se produisent et d'exécuter du code en réponse.

3. **Traitement des erreurs :** Les Observables peuvent émettre des erreurs, et vous pouvez les gérer à l'aide de méthodes spécifiques. Cela permet de gérer les erreurs de manière centralisée plutôt que d'utiliser les blocs try-catch à plusieurs endroits du code.

4. **Abonnement :** Pour commencer à recevoir les valeurs émises par un Observable, vous devez vous abonner à lui. L'abonnement est généralement réalisé dans les composants Angular, et il peut être nettoyé automatiquement lorsque le composant est détruit.

5. **Opérations de transformation et de manipulation des données :** RxJS, une bibliothèque de programmation réactive utilisée dans Angular, fournit une multitude d'opérateurs pour transformer, filtrer, combiner, et manipuler les données émises par les Observables.

Voici un exemple simple d'utilisation d'un Observable dans Angular pour effectuer une requête HTTP à une API et traiter les données :

```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-fetch',
  template: '<div *ngIf="data$ | async as data">{{ data | json }}</div>'
})
export class DataFetchComponent implements OnInit {
  data$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.data$ = this.http.get<any>('https://api.example.com/data');
  }
}
```

Dans cet exemple, nous utilisons l'Observable `data$` pour effectuer une requête HTTP en utilisant le service `HttpClient` d'Angular. L'opérateur `async` est utilisé dans le template pour s'abonner automatiquement à `data$` et afficher les données dès qu'elles sont disponibles.

En utilisant les Observables, Angular offre une approche élégante pour gérer les flux de données asynchrones de manière réactive. Cela rend le code plus lisible, maintenable et facilite la gestion des événements et des opérations asynchrones dans les applications Angular.

Le décorateur `@Input` et le décorateur `@Output` sont tous les deux des fonctionnalités d'Angular permettant de faciliter la communication entre composants, mais ils sont utilisés dans des directions différentes :

1. **@Input :**

Le décorateur `@Input` est utilisé pour permettre à un composant parent de transmettre des données à un composant enfant. En définissant une propriété avec le décorateur `@Input`, le composant enfant peut recevoir les données de son composant parent. Les données sont passées du composant parent vers le composant enfant.

Exemple d'utilisation :
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>{{ dataFromParent }}</p>'
})
export class ChildComponent {
  @Input() dataFromParent: string;
}
```

Dans cet exemple, `dataFromParent` est une propriété du composant enfant `ChildComponent`, et elle peut recevoir des données du composant parent en utilisant l'attribut `[dataFromParent]="someData"` lors de l'utilisation du composant enfant dans le template du composant parent.

2. **@Output :**

Le décorateur `@Output` est utilisé pour permettre à un composant enfant d'émettre des événements vers son composant parent. Cela permet au composant enfant de communiquer avec son composant parent en émettant des événements personnalisés. Les données sont passées du composant enfant vers le composant parent.

Exemple d'utilisation :
```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<button (click)="emitEvent()">Cliquez ici</button>'
})
export class ChildComponent {
  @Output() customEvent: EventEmitter<void> = new EventEmitter<void>();

  emitEvent() {
    this.customEvent.emit();
  }
}
```

Dans cet exemple, le composant enfant `ChildComponent` émet un événement personnalisé `customEvent` lorsqu'un bouton est cliqué. Le composant parent peut écouter cet événement en utilisant `(customEvent)="handleCustomEvent()"` lors de l'utilisation du composant enfant dans son propre template.

En résumé, `@Input` est utilisé pour transmettre des données du composant parent vers le composant enfant, tandis que `@Output` est utilisé pour permettre au composant enfant d'émettre des événements vers son composant parent. Ils constituent une approche puissante pour communiquer entre composants dans une application Angular et facilitent le partage de données et d'actions entre différentes parties de l'application.

Les Observables sont une partie centrale de la programmation réactive en JavaScript, et ils sont souvent utilisés dans le contexte des appels réseau, comme les requêtes HTTP. Angular, par exemple, utilise des Observables pour gérer les appels HTTP via son service `HttpClient`.

Voici comment vous pourriez utiliser des Observables pour lancer des requêtes HTTP avec `HttpClient` dans Angular :

1. **Importez les modules nécessaires :** Tout d'abord, assurez-vous que vous avez importé les modules nécessaires dans votre fichier. Habituellement, vous aurez besoin d'importer le service `HttpClientModule` depuis `@angular/common/http`.

```typescript
import { HttpClientModule } from '@angular/common/http';
```

2. **Injectez le service `HttpClient` :** Dans votre composant ou service où vous souhaitez effectuer des requêtes HTTP, injectez le service `HttpClient`.

```typescript
import { HttpClient } from '@angular/common/http';
// ...
constructor(private http: HttpClient) { }
```

3. **Utilisez des Observables pour les requêtes HTTP :** Vous pouvez utiliser des Observables pour les appels HTTP. Les méthodes du service `HttpClient` renvoient des Observables qui émettent des données lorsque la requête est terminée.

```typescript
// Exemple d'appel GET
this.http.get('https://api.example.com/data').subscribe(
  (response) => {
    console.log('Réponse reçue :', response);
  },
  (error) => {
    console.error('Erreur lors de la requête :', error);
  }
);

// Exemple d'appel POST
const postData = { name: 'John', age: 30 };
this.http.post('https://api.example.com/save', postData).subscribe(
  (response) => {
    console.log('Réponse reçue :', response);
  },
  (error) => {
    console.error('Erreur lors de la requête :', error);
  }
);
```

4. **Gérer les données émises par l'Observable :** Les Observables renvoient des données sous forme d'événements. Vous pouvez les traiter en utilisant les fonctions de rappel fournies dans la méthode `subscribe()`. La première fonction est appelée lorsque des données sont émises, et la deuxième fonction est appelée en cas d'erreur.

C'est ainsi que vous pouvez utiliser des Observables pour gérer les requêtes HTTP avec le service `HttpClient` dans Angular. La programmation réactive offre des avantages en termes de gestion asynchrone et de manipulation des données, ce qui peut rendre le code plus propre et plus maintenable.

<!-- app Music observables -->

Pour utiliser les Observables avec les requêtes HTTP via le service `HttpClient` dans Angular pour accéder aux données à partir d'un serveur local (par exemple, `db.json`), vous pouvez suivre les étapes suivantes :

1. **Importez les modules nécessaires :** Assurez-vous d'importer les modules requis, y compris `HttpClientModule` dans le module principal de votre application.

```typescript
import { HttpClientModule } from '@angular/common/http';
```

2. **Mettez à jour le service pour utiliser HttpClient et les Observables :** Modifiez votre service `AlbumService` pour qu'il utilise `HttpClient` pour effectuer des appels HTTP.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album, List, SortAlbumCallback } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://localhost:3000'; // Mettez à jour l'URL du serveur local

  constructor(private http: HttpClient) { }

  // ...

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getAlbum(id: string): Observable<Album | undefined> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
      map(albums => albums.find(album => album.id === id))
    );
  }

  // ...

  order(callback: SortAlbumCallback): Observable<Album[]> {
    return this.getAlbums().pipe(
      map(albums => albums.sort((a: Album, b: Album) => b.duration - a.duration))
    );
  }

  limit(start: number, end: number): Observable<Album[]> {
    return this.getAlbums().pipe(
      map(albums => albums.slice(start, end))
    );
  }

  paginate(start: number, end: number): Observable<Album[]> {
    return this.getAlbums().pipe(
      map(albums => albums.slice(start, end))
    );
  }

}
```

3. **Utilisez le service dans vos composants :** Dans vos composants, vous pouvez maintenant utiliser les méthodes du service `AlbumService` comme des Observables.

```typescript
import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { Album } from './album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(
      albums => this.albums = albums,
      error => console.error('Erreur lors de la récupération des albums :', error)
    );
  }

  // ...

}
```

Assurez-vous d'ajuster l'URL de l'API (`apiUrl`) pour correspondre à votre serveur local. Cela suppose que vous avez un fichier `db.json` qui expose des endpoints pour les données d'albums.

N'oubliez pas d'importer les modules nécessaires (`HttpClientModule`, `HttpClient`, `Observable`, `map`) et d'ajouter les gestionnaires d'erreurs appropriés pour vos abonnements.

<!-- Albums.component -->

Pour réécrire le code en utilisant les Observables et les fonctions dérivées, vous devez ajuster les méthodes du composant `AlbumsComponent` pour prendre en compte les Observables retournés par le service `AlbumService`. Voici comment vous pourriez faire cela :

```typescript
import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumsComponent implements OnInit {
  private start = 0;
  private end = 2; // Nombre d'albums par page
  titlePage: string = "Page principale Albums Music";
  albums: Album[] = [];
  selectedAlbum!: Album;
  filteredAlbums: Album[] = [];
  paginatedAlbums: Album[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  messageAlert: string = "Aucun album de ce nom trouvé....";
  seen: boolean = true;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
      this.totalPages = this.getTotalPages();
      this.paginatedAlbums = this.paginateAlbums(this.currentPage);
    });
  }

  onSelect(album: Album): void {
    this.seen = true;
    this.albumService.getAlbum(album.id).subscribe(selectedAlbum => this.selectedAlbum = selectedAlbum);
  }

  playParent(album: Album): void {
    this.albums.forEach(a => a.status = a.id === album.id ? 'on' : 'off');
    this.albumService.getAlbumList(album.id).subscribe(albumList => albumList);
  }

  onSearchChanged($event: Album[]): void {
    if ($event.length > 0) {
      this.paginatedAlbums = $event;
      this.messageAlert = "";
    } else {
      this.paginatedAlbums = [];
      this.messageAlert = "Aucun album de ce nom trouvé....";
    }
  }

  onPageChange(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.paginatedAlbums = this.paginateAlbums(pageNumber);
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.albums.length / this.end);
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  toggleRandomList($event: boolean): void {
    this.seen = false;
  }

  private paginateAlbums(pageNumber: number): Album[] {
    const start = (pageNumber - 1) * this.end;
    const end = start + this.end;
    return this.albums.slice(start, end);
  }
}
```

Il est important de noter que toutes les opérations asynchrones, comme les appels HTTP, doivent être gérées via des Observables. Vous devez donc vous abonner aux Observables renvoyés par les méthodes du service `AlbumService` et mettre à jour les propriétés du composant en conséquence lorsque les données sont disponibles.

<!-- search.ts -->

Pour réécrire le code en utilisant les Observables et les fonctions dérivées, vous devez ajuster les méthodes du composant `SearchComponent` pour utiliser les Observables retournés par le service `AlbumService`. Voici comment vous pourriez le faire :

```typescript
import { Component, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album';
import { NgForm } from '@angular/forms';
import { fadeInAnimation } from '../animation.module';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [fadeInAnimation]
})
export class SearchComponent {
  search = 'Search Albums';
  searchKeyword: string = '';
  searchResults: Album[] = [];
  word: string = '';
  
  constructor(private albumService: AlbumService) { }
  
  @Output() searchChanged: EventEmitter<Album[]> = new EventEmitter();

  // Utilisation d'un Observable pour gérer les événements de recherche
  searchAlbums$: Observable<Album[]>;

  ngOnInit(): void {
    this.searchAlbums$ = this.albumService.searchAlbums$;
  }

  searchAlbums() {
    this.albumService.searchAlbums(this.searchKeyword);
  }

  onSubmit(form: NgForm): void {
    const keyword = form.value['word'];
    this.albumService.searchAlbums(keyword);
  }

  onChangedEmit($event: string) {
    this.albumService.searchAlbums($event);
  }
}
```

Dans le service `AlbumService`, ajoutez les modifications nécessaires pour introduire l'Observable et les opérateurs de RxJS :

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album, List, SortAlbumCallback } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://localhost:3000';
  private albums$ = new BehaviorSubject<Album[]>([]);
  searchAlbums$ = this.albums$.asObservable();

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
      map(albums => {
        this.albums$.next(albums);
        return albums;
      })
    );
  }

  getAlbum(id: string): Observable<Album | undefined> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
      map(albums => albums.find(album => album.id === id))
    );
  }

  // ...

  searchAlbums(keyword: string): void {
    const filteredAlbums = this.albums$.getValue().filter(album =>
      album.ref.toLowerCase().includes(keyword.trim().toLowerCase())
    );
    this.albums$.next(filteredAlbums);
  }
}
```

Dans cette version réécrite, nous utilisons un `BehaviorSubject` nommé `albums$` pour stocker les albums actuellement disponibles. Chaque fois que nous avons de nouvelles données d'albums, nous les émettons avec la méthode `next()`. Le composant `SearchComponent` utilise l'Observable `searchAlbums$` pour être notifié des changements dans les albums filtrés. Lorsque l'utilisateur effectue une recherche, le service `AlbumService` met à jour les albums filtrés en fonction du critère de recherche, ce qui déclenche automatiquement la mise à jour dans le composant.

<!-- albums details -->

Pour réécrire le code en utilisant les Observables et les fonctions dérivées, vous devez ajuster les méthodes du composant `AlbumDetailsComponent` pour utiliser les Observables retournés par le service `AlbumService`. Voici comment vous pourriez le faire :

```typescript
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumDetailsComponent implements OnInit, OnChanges {

  @Input() album!: Album;
  lists$: Observable<List[]> | undefined;
  randomList: string[] = [];
  albumsLists$: Observable<string[] | undefined> | undefined;
  seen: boolean = true;
  isPlaying: boolean = false;

  constructor(
    private albumService: AlbumService,
  ) { }

  ngOnInit() {
    this.album;
  }

  ngOnChanges(): void {
    if (this.album !== undefined) {
      this.albumsLists$ = this.albumService.getAlbumList(this.album.id);
    }
  }

  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  @Output() toggleDetails: EventEmitter<boolean> = new EventEmitter();

  play(album: Album) {
    this.onPlay.emit(album);
    this.isPlaying = !this.isPlaying;
  }

  shuffleAlbumsLists() {
    if (this.albumsLists$) {
      this.albumsLists$.subscribe(albumsLists => {
        if (albumsLists && albumsLists.length > 1) {
          for (let i = albumsLists.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [albumsLists[i], albumsLists[j]] = [albumsLists[j], albumsLists[i]];
          }
        }
      });
    }
  }

  toggleList() {
    this.toggleDetails.emit(this.seen);
  }
}
```

Dans le service `AlbumService`, assurez-vous que les méthodes renvoient des Observables :

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album, List, SortAlbumCallback } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://localhost:3000';
  private albums$ = new BehaviorSubject<Album[]>([]);
  searchAlbums$ = this.albums$.asObservable();

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
      map(albums => {
        this.albums$.next(albums);
        return albums;
      })
    );
  }

  getAlbum(id: string): Observable<Album | undefined> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
      map(albums => albums.find(album => album.id === id))
    );
  }

  getAlbumList(id: string): Observable<List | undefined> {
    return this.http.get<List[]>(`${this.apiUrl}/lists`).pipe(
      map(lists => lists.find(list => list.id === id))
    );
  }

  // ...

  searchAlbums(keyword: string): void {
    const filteredAlbums = this.albums$.getValue().filter(album =>
      album.ref.toLowerCase().includes(keyword.trim().toLowerCase())
    );
    this.albums$.next(filteredAlbums);
  }
}
```

En utilisant cette structure, les Observables sont correctement intégrés dans le composant `AlbumDetailsComponent`, ce qui lui permet de réagir aux changements de données du service `AlbumService` et de mettre à jour les informations affichées en conséquence.

<!-- albums description -->
Pour réécrire le code en utilisant les Observables et les fonctions dérivées, vous pouvez utiliser les Observables fournis par le service `AlbumService`. Voici comment vous pourriez le faire :

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumDescriptionComponent implements OnInit {
  album$: Observable<Album | undefined>;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.album$ = this.route.params.pipe(
      switchMap(params => {
        const albumId = params['id'];
        return this.albumService.getAlbum(albumId);
      })
    );
  }
}
```

Dans le service `AlbumService`, assurez-vous que la méthode `getAlbum` renvoie un Observable :

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album, List, SortAlbumCallback } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://localhost:3000';
  private albums$ = new BehaviorSubject<Album[]>([]);
  searchAlbums$ = this.albums$.asObservable();

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
      map(albums => {
        this.albums$.next(albums);
        return albums;
      })
    );
  }

  getAlbum(id: string): Observable<Album | undefined> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
      map(albums => albums.find(album => album.id === id))
    );
  }

  // ...

  searchAlbums(keyword: string): void {
    const filteredAlbums = this.albums$.getValue().filter(album =>
      album.ref.toLowerCase().includes(keyword.trim().toLowerCase())
    );
    this.albums$.next(filteredAlbums);
  }
}
```

Avec cette structure, le composant `AlbumDescriptionComponent` utilise l'Observable renvoyé par la méthode `getAlbum` pour réagir aux changements des paramètres de l'URL et récupérer les informations de l'album à afficher.