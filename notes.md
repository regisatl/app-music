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