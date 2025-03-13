# Mon Portfolio Next.js

Ce projet est un portfolio réalisé avec [Next.js](https://nextjs.org/).  
Il est déployé sur [GitHub Pages](https://arnaud-dec.github.io/portfolio/).

---

## Prérequis

- **Node.js** (version 18 ou supérieure recommandée)
- **npm** (fourni avec Node.js)

## Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/Arnaud-Dec/portfolio.git
   ```

2. **Se déplacer dans le dossier du projet** :
   ```bash
   cd portfolio
   ```

3. **Installer les dépendances** :
   ```bash
   npm install
   ```

## Lancement en local

### Mode développement

Pour lancer l'application en mode développement (avec hot-reload) :
```bash
npm run dev
```

Le site sera accessible à l'adresse http://localhost:3000.

### Mode production (optionnel)

1. Construire le projet :
   ```bash
   npm run build
   ```

2. Lancer Next.js en production :
   ```bash
   npm run start
   ```

Accéder au site sur http://localhost:3000.

## Déploiement sur GitHub Pages

Ce projet est configuré pour être déployé sur GitHub Pages via GitHub Actions.

### 1. Déploiement automatique (Workflow GitHub Actions)

À chaque push sur la branche main, le workflow `.github/workflows/deploy.yaml` construit le site et déploie le contenu du dossier `out` sur la branche gh-pages.

Dans Settings → Pages du dépôt, la source est configurée pour pointer sur gh-pages (dossier racine).

### 2. Déploiement manuel (optionnel)

Vous pouvez aussi déployer manuellement via la commande :
```bash
npm run deploy
```

Cette commande utilise gh-pages pour pousser le dossier `out` vers la branche gh-pages.

## Structure du projet

- `app/` : Composants et pages Next.js (architecture App Router).
- `components/` : Composants réutilisables.
- `lib/` : Fonctions utilitaires ou services.
- `public/` : Fichiers statiques accessibles directement à la racine du site.
- `styles/` : Fichiers de style globaux (ex. Tailwind).
- `out/` : Dossier généré après `npm run build`, contient la version statique à déployer.
- `.github/workflows/deploy.yaml` : Workflow GitHub Actions pour déployer automatiquement sur GitHub Pages.

## Licence

Ce projet est sous licence MIT.

```
MIT License

Copyright (c) 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included 
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE 
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Notes supplémentaires

- **Configuration GitHub Pages** : Assurez-vous que la branche gh-pages est bien configurée dans les paramètres du dépôt (Settings → Pages).
- **Personnalisation** : Modifiez les informations dans le fichier `next.config.mjs` pour ajuster le chemin de base (basePath) si nécessaire.
