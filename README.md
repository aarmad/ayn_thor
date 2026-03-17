# AYN THOR - Console Portable Innovante à Double Écran

Bienvenue sur le projet **AYN THOR**. Ce projet est une vitrine web e-commerce moderne et réactive construite avec [Next.js](https://nextjs.org/) pour présenter la console révolutionnaire AYN THOR, la première de sa catégorie à proposer un système AMOLED à double écran sous Android 13.

## 🚀 Fonctionnalités Principales

- **Technologies Modernes :** Développé avec Next.js 14, React 18 et Tailwind CSS.
- **Design Premium et Fluide :** Interface minimaliste aux bords arrondis ("galet"), mode sombre étendu et animations ultra-fluides grâce à [Framer Motion](https://www.framer.com/motion/).
- **Expérience Utilisateur :** Mise en page responsive "sans scroll" optimisée pour le configurateur de produits.
- **Performances Rapides :** Architecture React de pointe avec optimisation des images et composants dynamiques.

## 🛠️ Installation et Lancement Local

Pour démarrer ce projet sur votre machine locale :

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/aarmad/ayn_thor.git
    cd ayn_thor
    ```

2.  **Installez les dépendances :**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3.  **Lancez le serveur de développement :**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```

4.  Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat. Le site se mettra à jour automatiquement au fur et à mesure que vous modifierez les fichiers.

## 📁 Structure du Projet

- `src/app/` : Contient les pages principales de l'application (Accueil, Produit, Modèles, Panier).
- `src/components/` : Composants réutilisables d'UI globale (Navbar, Footer, Menu mobile).
- `src/store/` : Gestion de l'état global (ex: le panier avec Zustand).
- `public/` : Contient tous les actifs statiques, la typographie locale, les favicons et les images.

## 🌐 Déploiement

Ce dépôt est conçu pour être facilement déployé sur **Netlify** ou **Vercel** de manière transparente. Assurez-vous simplement que le dossier de build (`.next`) est configuré dans les paramètres de publication de votre plateforme. Sur Netlify, la commande de build par défaut doit être `npm run build` et le dossier de publication doit être `.next`.

---
*Ce projet est une vitrine. Toute référence au nom et aux caractéristiques du produit "AYN THOR" est une réalisation à but illustratif.*
