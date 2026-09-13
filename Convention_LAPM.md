# 📘 Conventions de nommage – Projet **LAPM**

> Objectif : une **grammaire visuelle** claire et cohérente pour tous les fichiers, composants, hooks, types et styles.

---

## 1) Composants React (`.tsx`)

### Règles

- **Nom de fichier** : `PascalCase.role.tsx`
- **Nom du composant exporté** : `Nom_Role` (séparateur `_` entre nom métier et rôle technique)
- **Exports** :
  - `default export` pour les **Page**, **Root**, **Layout**
  - `export nommé` pour les **Element** (plus strict, pas de renommage possible)
- **Imports** : strictement identiques au nom du composant
- **Indentation** : 4 espaces
- **Styles** : jamais dans le `.tsx` — utiliser des **CSS Modules** séparés

### Rôles disponibles

| Rôle technique | Nom de fichier | Nom du composant | Exemple d’import |
|---|---|---|---|
| Page | `Home.page.tsx` | `Home_Page` | `import Home_Page from "../pages/Home.page";` |
| Root (contenu global de page) | `HomeRoot.root.tsx` | `HomeRoot_Root` | `import HomeRoot_Root from "../components/HomeRoot.root";` |
| Component (sous-composant réutilisable) | `UserCard.component.tsx` | `UserCard_Component` | `import UserCard_Component from "../components/UserCard.component";` |
| Layout (structures globales) | `Navbar.layout.tsx` | `Navbar_Layout` | `import Navbar_Layout from "../layouts/Navbar.layout";` |
| Element (micro-blocs visuels internes) | `Container3Images.element.tsx` | `Container3Images_Element` | `import { Container3Images_Element } from "../elements/Container3Images/Container3Images.element";` |

---

## 2) Types & Interfaces (`.ts`)

### Règles

- **Nom du type** : `PascalCase` + suffixe `_Type`
  - Exemples : `User_Type`, `CardBlog_Type`, `Container3Images_Type`
- **Nom de fichier** : `camelCase.type.ts` (ou `.types.ts` si plusieurs types)
- **Export** : toujours nommé (jamais `default`)
- **Optionnalité** : utiliser `?` plutôt que `string | undefined` quand pertinent

---

## 3) Hooks personnalisés (`.ts` / `.tsx`)

### Règles

- **Nom du hook** : `camelCase` commençant par `use` → `useAuthCheck`, `useFetch`, `useMediaQuery`
- **Nom de fichier** : identique au nom du hook → `useAuthCheck.ts`
- **Export** : nommé (`export const useXxx = ...`)
- **Extension** :
  - `.ts` si **pas de JSX**
  - `.tsx` uniquement si le hook **retourne du JSX**

---

## 4) CSS Modules (`.module.css`)

### Règles

- **Nom de fichier** : `camelCase.module.css`
- **Nom de classe** : `PascalCase` (aligné avec le composant associé)
- **Portée** : chaque fichier `.module.css` ne doit cibler que son composant
- **Jamais de balises HTML directes** (`button`, `h1`, etc.) — toujours passer par une classe

---

## 5) SEO (Helmet / JSON-LD / DataSEO)

### Règles générales

- **Tous les exports SEO sont nommés** (jamais de `default export`).
- Convention spécifique selon le type de fichier : **DataSEO**, **JSON-LD**, **Helmet**.

### 🔹 DataSEO



### 🔹 JSON-LD



---

## 6) Imports

- **Composants Page / Root / Layout** : `default export`
- **Éléments / Types / Hooks / SEO / Utils** : **exports nommés**

```tsx
// ✅ Pages / Root / Layout
import Home_Page from "../pages/Home.page";
import HomeRoot_Root from "../components/HomeRoot.root";
import Navbar_Layout from "../layouts/Navbar.layout";

// ✅ SEO
import { dataSEO_Portfolio_data_SEO } from "../seo/dataSEO_Portfolio.data.seo";
import { JSON_LD_Breadcrumb_Portfolio_schema_SEO } from "../seo/JSON-LD_Breadcrumb_Portfolio.schema.seo";
import { HelmetPortfolio_helmet_SEO } from "../seo/HelmetPortfolio.helmet.seo";

// ✅ Éléments / Hooks / Types
import { Container3Images_Element } from "../elements/Container3Images/Container3Images.element";
import { useAuthCheck } from "../hooks/useAuthCheck";
import { CardBlog_Type } from "../types/cardBlog.type";
```

---

## 7) Résumé express

- **Composants TSX**
  - Page/Root/Layout → `default export`
  - Element → `export nommé`
- **Types**
  - Fichier : `camelCase.type.ts`
  - Nom : `PascalCase_Type`
  - Export nommé
- **Hooks**
  - Nom : `useSomething`
  - Export nommé
  - `.tsx` seulement si JSX retourné
- **CSS Modules**
  - Fichier : `camelCase.module.css`
  - Classes : `PascalCase`
- **SEO**
  - DataSEO → `dataSEO_NomDeLaPage.data.seo.ts` → `dataSEO_NomDeLaPage_data_SEO`
  - JSON-LD → `JSON-LD_Type_NomDeLaPage.schema.seo.ts` → `JSON_LD_Type_NomDeLaPage_schema_SEO`
  - Helmet → `HelmetNomDeLaPage.helmet.seo.tsx` → `HelmetNomDeLaPage_helmet_SEO`

---

# 8) Documentation du code

> Objectif : chaque composant, fonction, hook et type important doit pouvoir être compris **sans avoir besoin d’analyser toute son implémentation**.
>
> La documentation doit expliquer :
> - **ce que fait** le code ;
> - **pourquoi il existe** ;
> - **comment il fonctionne** ;
> - **quelles données il attend** ;
> - **quelles contraintes doivent être respectées** ;
> - et, lorsque cela est pertinent, **comment il interagit avec les autres composants du projet**.

La documentation du projet est volontairement **poussée et explicite**, même lorsque certaines informations peuvent sembler évidentes à un développeur expérimenté.

---

## 8.1) Langue de la documentation

### Règles

- Toute la documentation interne du projet doit être rédigée en **français**.
- Les noms techniques, noms de fonctions, propriétés, événements JavaScript, variables CSS ou termes imposés par une API restent dans leur langue d'origine.
- Les noms des paramètres et propriétés doivent être repris **exactement tels qu'ils existent dans le code**.
- La documentation doit rester compréhensible par un développeur qui découvre le projet pour la première fois.

### Exemple

```ts
/**
 * Permet de déterminer si la slide est actuellement active.
 *
 * La slide est considérée comme active lorsque son `offset`
 * est égal à `0`.
 */
```

---

## 8.2) Organisation des imports

Les imports sont séparés par catégories grâce à des commentaires simples.

### Format

```tsx
/* Import des modules CSS */

/* Import des Components */

/* Import des composants React */

/* Import des Hooks */

/* Import des Components de Data */

/* Import des Utils */

/* Import des Types */
```

Toutes les catégories ne doivent pas obligatoirement être présentes.

Seules les catégories réellement utilisées dans le fichier doivent être ajoutées.

### Exemple

```tsx
/* Import des modules CSS */
import styles from "./carrousel3D.module.css";

/* Import des Components */
import { Slide_Component } from "./components/Slide.component";

/* Import des composants React */
import {
    useMemo,
    useRef,
    useState,
    type TouchEvent,
} from "react";

/* Import des Types */
import { Carrousel3D_Props } from "./carrousel3D.type";
```

---

## 8.3) Documentation principale des composants React

Chaque composant important doit posséder un bloc **JSDoc principal** immédiatement avant sa déclaration.

### Structure attendue

```tsx
/**
 * ### Documentation : Nom ou rôle du composant.
 * Description générale du composant.
 *
 * Il permet notamment :
 * - Fonctionnalité 1.
 * - Fonctionnalité 2.
 * - Fonctionnalité 3.
 *
 * ---
 * ### Les clés attendues en paramètre du composant sont :
 * @param {...} props - Description générale.
 * @param {...} props.propriete - **[propriete]** - Description.
 *
 * ---
 * @returns {React.ReactNode} Description de la valeur retournée.
 */
```

### Règles

- La première ligne commence par :

```md
### Documentation :
```

- Elle indique clairement **quel composant est documenté**.
- Le paragraphe suivant explique l'objectif général du composant.
- Les comportements principaux sont détaillés sous forme de liste lorsque le composant possède plusieurs responsabilités.
- Les propriétés reçues doivent être listées individuellement.
- Les propriétés optionnelles doivent être indiquées comme telles.
- Les valeurs par défaut doivent être précisées lorsqu'elles sont définies dans le composant.
- Le type retourné doit être documenté avec `@returns`.

### Exemple

```tsx
/**
 * ### Documentation : Composant Carrousel 3D.
 * Ce composant réutilisable a pour objectif d'afficher une liste de slides
 * sous la forme d'un carrousel interactif avec un effet visuel 3D.
 *
 * Il permet notamment :
 * - D'afficher plusieurs slides.
 * - De naviguer grâce aux boutons précédent et suivant.
 * - De naviguer grâce au swipe sur les appareils tactiles.
 * - De transmettre la position relative de chaque slide au CSS.
 *
 * ---
 * ### Les clés attendues en paramètre du composant sont :
 * @param {Carrousel3D_Props} props - L'objet contenant les propriétés nécessaires au composant.
 * @param {Carrousel3D_Type[]} props.slides - **[slides]** - Tableau contenant les slides du carrousel.
 * @param {boolean} [props.isPageBackground=false] - **[isPageBackground]** Optionnel - Active l'arrière-plan associé aux slides.
 * @param {string} [props.className=""] - **[className]** Optionnel - Classe CSS supplémentaire.
 *
 * ---
 * @returns {React.ReactNode | null} Retourne le carrousel ou `null` si aucune slide n'est disponible.
 */
```

---

## 8.4) Documentation des fonctions

Les fonctions possédant une logique métier ou technique importante doivent être documentées.

Cela concerne notamment :

- les fonctions utilitaires ;
- les fonctions de transformation de données ;
- les fonctions de navigation ;
- les fonctions de calcul ;
- les gestionnaires d'événements complexes ;
- les fonctions internes dont le comportement n'est pas immédiatement évident.

### Format

```ts
/**
 * ### Fonction : nomDeLaFonction.
 * Description de la fonction.
 *
 * ---
 * @param {...} parametre - Description.
 *
 * ---
 * @returns {...} Description.
 */
```

### Exemple

```tsx
/**
 * ### Fonction : handleTouchEnd.
 * Analyse le mouvement tactile effectué entre le début et la fin
 * du toucher afin de déterminer si l'utilisateur souhaite changer de slide.
 *
 * Plusieurs vérifications sont effectuées :
 * - Le point de départ doit avoir été enregistré.
 * - Le déplacement doit être principalement horizontal.
 * - La distance parcourue doit dépasser le seuil minimum.
 *
 * ---
 * @param {TouchEvent<HTMLElement>} event - Événement tactile déclenché lorsque l'utilisateur retire son doigt.
 *
 * ---
 * @returns {void}
 */
```

---

## 8.5) Documentation des fonctions pures

Lorsqu'une fonction est réellement pure, ajouter :

```ts
@pure
```

avec une explication.

### Format

```ts
/**
 * ...
 *
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire
 * et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {...}
 */
```

### ⚠️ Règle

`@pure` ne doit être utilisé **que si la fonction est réellement pure**.

Une fonction utilisant notamment :

- le DOM ;
- un `useEffect` ;
- un état React ;
- une API ;
- un stockage ;
- une mutation externe ;

ne doit pas recevoir cette annotation.

---

## 8.6) Documentation des Hooks personnalisés

Les Hooks personnalisés doivent avoir leur propre documentation JSDoc.

### Structure

```ts
/**
 * ### Documentation : Hook nomDuHook.
 * Description de son objectif.
 *
 * Il permet notamment :
 * - ...
 * - ...
 *
 * ---
 * ### Les paramètres attendus par le hook sont :
 * @param {...} parametre - **[parametre]** - Description.
 *
 * ---
 * ### Fonctionnement :
 * Explication du mécanisme interne lorsque cela est pertinent.
 *
 * ---
 * @returns {...} Description de la valeur retournée.
 */
```

### Exemple

```tsx
/**
 * ### Documentation : Hook useTilt.
 * Ce hook interne a pour objectif de gérer l'effet d'inclinaison 3D
 * appliqué à un élément en fonction de la position de la souris.
 *
 * Il permet notamment :
 * - De récupérer la position de la souris.
 * - De calculer sa position relative dans l'élément.
 * - De transmettre ces valeurs au CSS.
 * - De réinitialiser l'effet lorsque la souris quitte l'élément.
 *
 * ---
 * ### Les paramètres attendus par le hook sont :
 * @param {boolean} enabled - **[enabled]** - Active ou désactive l'effet.
 * @param {string} [animationDuration="150ms"] - **[animationDuration]** Optionnel - Durée de la transition.
 *
 * ---
 * @returns {React.RefObject<HTMLDivElement | null>} Retourne la référence React à associer à l'élément.
 */
```

---

## 8.7) Documentation des Types et Interfaces

Les fichiers `.type.ts` et `.types.ts` font l'objet d'une documentation particulièrement détaillée.

Chaque `type` ou `interface` doit posséder :

1. une documentation générale ;
2. une documentation individuelle pour chaque propriété.

---

## Documentation générale du Type

### Format

```ts
/**
 * TypeScript type pour ...
 *
 * ⚠️ **NOTE IMPORTANTE** : Description du rôle du type,
 * de son utilisation et des contraintes générales à respecter.
 */
```

### Exemple

```ts
/**
 * TypeScript type pour les données d'une slide du composant `Carrousel3D_Element`.
 *
 * ⚠️ **NOTE IMPORTANTE** : Ce type définit les informations attendues
 * pour chaque slide affichée dans le carrousel 3D.
 * Chaque élément du tableau `slides` doit respecter cette structure.
 */
type Carrousel3D_Type = {
```

---

## 8.8) Documentation des propriétés d'un Type

Chaque propriété doit posséder son propre bloc JSDoc.

### Structure

```ts
/**
 * ⚠️ **NOTE ET CONTRAINTE** : Description principale.
 *
 * - Contrainte ou comportement 1.
 * - Contrainte ou comportement 2.
 * - Contrainte ou comportement 3.
 *
 * ---
 * @example ...
 * @example ...
 */
propriete: type;
```

### Exemple

```ts
/**
 * ⚠️ **NOTE ET CONTRAINTE** : Identifiant unique de la slide.
 *
 * - Peut être un nombre ou une string.
 * - Doit être unique dans le tableau des slides.
 * - Doit rester stable entre les différents rendus React.
 *
 * ---
 * @example 1
 * @example "photo-mariage-1"
 */
id: number | string;
```

---

## 8.9) Contraintes techniques et contraintes métier

La documentation doit distinguer autant que possible :

- ce qui est **imposé techniquement par le code** ;
- ce qui est **imposé par le projet** ;
- ce qui est seulement **recommandé**.

### Exemple

Si TypeScript accepte n'importe quelle string :

```ts
image: string;
```

mais que le projet impose une image 3:4 de maximum 150 Ko, la documentation doit préciser cette contrainte.

```ts
/**
 * ⚠️ **NOTE ET CONTRAINTE** : Image principale de la slide.
 *
 * - Doit être une URI ou URL valide.
 * - Dans le projet LAPM, l'image doit respecter un ratio 3:4.
 * - Le poids maximum autorisé est de 150 Ko.
 */
image: string;
```

Une recommandation ne doit pas être présentée comme une contrainte technique si le code ne la vérifie pas.

---

## 8.10) Utilisation de `@example`

Les exemples sont fortement recommandés pour :

- les strings possédant un format particulier ;
- les URI et URL ;
- les identifiants ;
- les tableaux ;
- les unions TypeScript ;
- les objets ;
- les valeurs dont l'utilisation peut être ambiguë.

### Exemple simple

```ts
/**
 * ---
 * @example "Photographe"
 * @example "Développeur web"
 */
job_title: string;
```

### Exemple avec tableau

```ts
/**
 * ---
 * @example ["React", "TypeScript", "Node.js"]
 */
skills: string[];
```

### Exemple avec objet complexe

```ts
/**
 * ---
 * @example
 * [
 *     {
 *         id: 1,
 *         image: "/images/photo-1.webp",
 *         title: "Mariage à Montpellier"
 *     }
 * ]
 */
slides: Carrousel3D_Type[];
```

---

## 8.11) Commentaires internes au code

En complément du JSDoc, les mécanismes internes importants doivent être expliqués directement dans l'implémentation.

Deux formats sont utilisés.

### Commentaire simple

Pour une instruction ou un bloc court :

```tsx
/* Position de départ du swipe */
const touchStartX = useRef<number | null>(null);
```

### Commentaire multiligne

Pour expliquer un mécanisme plus complexe :

```tsx
/*
 * Duplication du tableau des slides trois fois.
 *
 * Cette duplication permet de disposer de slides avant et après
 * la série principale afin de conserver l'effet visuel du carrousel.
 */
const carouselSlides = useMemo(
    () => [...slides, ...slides, ...slides],
    [slides],
);
```

---

## 8.12) Commentaires directement associés à une valeur

Lorsqu'une valeur possède une signification technique particulière, un commentaire peut être placé directement à côté.

### Exemple

```ts
"@type": "Person", /* (Obligatoire) Type du JSON-LD */
```

ou :

```tsx
const isActive = offset === 0; /* La valeur 0 représente la slide active */
```

Ce format est privilégié lorsque l'information est courte et directement liée à la valeur concernée.

---

## 8.13) Documentation des comportements conditionnels

Les blocs conditionnels importants doivent expliquer :

- **la condition** ;
- **ce qui se passe lorsqu'elle est vraie** ;
- éventuellement **ce qui se passe lorsqu'elle est fausse**.

### Exemple

```tsx
/*
 * Si aucune slide n'est fournie,
 * aucun élément HTML n'est généré par le composant.
 */
if (slides.length === 0) {
    return null;
}
```

Autre exemple :

```tsx
/*
 * Regarde dans data si la personne est salariée.
 * Si ce n'est pas précisé ou false alors ce bloc ne sera pas inclus.
 */
...(data.salaried && {
```

---

## 8.14) Documentation des valeurs calculées

Lorsqu'une variable contient une valeur transformée ou calculée, expliquer son sens plutôt que simplement répéter l'opération.

### ❌ À éviter

```tsx
/* Calcul de offset */
const offset = index - (slides.length + slideIndex);
```

### ✅ Préféré

```tsx
/*
 * Calcul de la position relative de la slide par rapport
 * à la slide actuellement active.
 *
 * 0  = slide active
 * <0 = slide précédente
 * >0 = slide suivante
 */
const offset =
    index - (slides.length + slideIndex);
```

---

## 8.15) Documentation des effets et événements

Les effets React et événements DOM importants doivent expliquer :

- pourquoi l'événement est ajouté ;
- ce qu'il provoque ;
- pourquoi il est supprimé ;
- éventuellement les dépendances du `useEffect`.

### Exemple

```tsx
/*
 * Ajout des événements nécessaires à la gestion
 * de l'effet de tilt.
 */
el.addEventListener("mouseenter", handleEnter);
el.addEventListener("mousemove", handleMove);
el.addEventListener("mouseleave", handleEnd);

/*
 * Nettoyage des événements lorsque le composant est démonté
 * ou lorsque les dépendances du useEffect sont modifiées.
 */
return () => {
    el.removeEventListener("mouseenter", handleEnter);
    el.removeEventListener("mousemove", handleMove);
    el.removeEventListener("mouseleave", handleEnd);
};
```

---

## 8.16) Niveau de documentation attendu

La documentation LAPM est volontairement plus détaillée qu'une documentation standard.

### Principe

Le développeur doit pouvoir comprendre :

```text
Fichier
    ↓
Rôle du composant
    ↓
Données attendues
    ↓
Contraintes
    ↓
Fonctionnement général
    ↓
Fonctions importantes
    ↓
Mécanismes internes
```

sans être obligé de reconstituer lui-même la logique du composant.

La documentation doit cependant rester hiérarchisée :

- **JSDoc principal** → fonctionnement général ;
- **JSDoc des fonctions** → mécanisme précis ;
- **JSDoc des Types** → contrat des données ;
- **commentaires internes** → explication locale de l'implémentation.

---

## 8.17) Ce qui ne nécessite pas forcément une documentation complète

Il n'est pas nécessaire de créer un gros bloc JSDoc pour chaque opération triviale.

### Exemple

Une instruction comme :

```tsx
const isActive = offset === 0;
```

peut simplement recevoir :

```tsx
/* Détermine si la slide est actuellement active */
const isActive = offset === 0;
```

En revanche, une fonction réalisant plusieurs vérifications :

```tsx
handleTouchEnd()
```

mérite un véritable bloc JSDoc.

Le niveau de documentation doit donc être proportionnel à la complexité du mécanisme.

---

## 8.18) Séparateurs dans les blocs JSDoc

Le séparateur Markdown :

```md
---
```

est utilisé pour distinguer les grandes parties d'une documentation.

### Exemple

```ts
/**
 * Description générale.
 *
 * ---
 * ### Les paramètres attendus :
 * ...
 *
 * ---
 * ### Fonctionnement :
 * ...
 *
 * ---
 * @returns ...
 */
```

Cela doit rester cohérent dans tout le projet.

---

## 8.19) Mise en forme Markdown dans le JSDoc

La documentation peut utiliser le Markdown afin d'améliorer sa lisibilité dans l'IDE.

Sont notamment autorisés :

```md
### Titre
**Texte important**
`nomDeVariable`
- Liste
⚠️ **NOTE IMPORTANTE**
⚠️ **NOTE ET CONTRAINTE**
---
```

### Exemple

```ts
/**
 * ⚠️ **NOTE ET CONTRAINTE** : Position de la slide.
 *
 * - `0` correspond à la slide active.
 * - Une valeur `< 0` correspond aux slides précédentes.
 * - Une valeur `> 0` correspond aux slides suivantes.
 */
```

---

## 8.20) Documentation et nommage

La documentation doit toujours utiliser les **noms réels du projet**.

Si un composant s'appelle :

```tsx
Carrousel3D_Element
```

la documentation utilise :

```md
`Carrousel3D_Element`
```

et non :

```md
Carousel
Carrousel
CarrouselComponent
```

Même principe pour :

```tsx
Slide_Component
Carrousel3D_Type
Slide_Props
useTilt
```

Cela permet de rechercher directement les références dans le projet.

---

## 8.21) Documentation des valeurs par défaut

Toute propriété ou tout paramètre possédant une valeur par défaut importante doit être documenté.

### Exemple

```tsx
function Carrousel3D_Element({
    slides,
    isPageBackground = false,
    className = "",
}: Carrousel3D_Props)
```

doit être documenté sous la forme :

```ts
@param {boolean} [props.isPageBackground=false]
@param {string} [props.className=""]
```

Même principe pour une fonction :

```ts
function useTilt(
    enabled: boolean,
    animationDuration = "150ms",
)
```

avec :

```ts
@param {string} [animationDuration="150ms"]
```

---

## 8.22) Résumé express — Documentation

- **Composants** → JSDoc principal complet.
- **Hooks** → rôle + paramètres + fonctionnement + retour.
- **Fonctions complexes** → JSDoc dédié.
- **Fonctions simples** → commentaire local si nécessaire.
- **Types / Interfaces** → documentation générale + chaque propriété documentée.
- **Contraintes** → clairement indiquées avec `⚠️ **NOTE ET CONTRAINTE**`.
- **Informations générales importantes** → `⚠️ **NOTE IMPORTANTE**`.
- **Exemples** → `@example`.
- **Fonction pure** → `@pure` uniquement lorsque cela est réellement applicable.
- **Valeurs par défaut** → indiquées dans les `@param`.
- **Code complexe** → commentaires internes expliquant le fonctionnement et non simplement la syntaxe.
- **Documentation** → exclusivement en français.
- **Noms techniques** → toujours identiques aux noms réellement utilisés dans le code.
- **Séparation des sections JSDoc** → `---`.
- **Indentation** → 4 espaces, comme le reste du projet.
