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
