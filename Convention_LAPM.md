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

| Rôle technique | Nom de fichier                  | Nom du composant            | Exemple d’import |
|----------------|---------------------------------|-----------------------------|------------------|
| Page           | `Home.page.tsx`                 | `Home_Page`                 | `import Home_Page from "../pages/Home.page";` |
| Root (contenu global de page) | `HomeRoot.root.tsx`             | `HomeRoot_Root`             | `import HomeRoot_Root from "../components/HomeRoot.root";` |
| Component (sous-composant réutilisable) | `UserCard.component.tsx`        | `UserCard_Component`        | `import UserCard_Component from "../components/UserCard.component";` |
| Layout (structures globales) | `Navbar.layout.tsx`             | `Navbar_Layout`             | `import Navbar_Layout from "../layouts/Navbar.layout";` |
| Element (micro-blocs visuels internes) | `Container3Images.element.tsx`   | `Container3Images_Element`  | `import { Container3Images_Element } from "../elements/Container3Images/Container3Images.element";` |

### Exemple minimal
```tsx
// src/elements/Container3Images/Container3Images.element.tsx
import css from "./container3Images.module.css";
import { Container3Images_Type } from "../../types/elements/container3Images.type";

function Container3Images_Element({ img1, metaNameImg1 }: Container3Images_Type) {
    return (
        <div className={css.Container3ImagesRoot}>
            <img src={img1} alt={metaNameImg1} className={css.Image} />
        </div>
    );
}

export { Container3Images_Element };
```

---

## 2) Types & Interfaces (`.ts`)

### Règles
- **Nom du type** : `PascalCase` + suffixe `_Type`  
  - Exemples : `User_Type`, `CardBlog_Type`, `Container3Images_Type`
- **Nom de fichier** : `camelCase.type.ts` (ou `.types.ts` si plusieurs types)
- **Export** : toujours nommé (jamais `default`)
- **Optionnalité** : utiliser `?` plutôt que `string | undefined` quand pertinent

### Exemple
```ts
// src/types/elements/container3Images.type.ts
export type Container3Images_Type = {
    img1: string;
    img2: string;
    img3: string;
    metaNameImg1: string;
    metaNameImg2: string;
    metaNameImg3: string;
};
```

---

## 3) Hooks personnalisés (`.ts` / `.tsx`)

### Règles
- **Nom du hook** : `camelCase` commençant par `use` → `useAuthCheck`, `useFetch`, `useMediaQuery`
- **Nom de fichier** : identique au nom du hook → `useAuthCheck.ts`
- **Export** : nommé (`export const useXxx = ...`)
- **Extension** :  
  - `.ts` si **pas de JSX**  
  - `.tsx` uniquement si le hook **retourne du JSX**

### Exemple
```ts
// src/hooks/useAuthCheck.ts
import { useEffect } from "react";

export const useAuthCheck = (): void => {
    useEffect(() => {
        // logique d'authentification
    }, []);
};
```

---

## 4) CSS Modules (`.module.css`)

### Règles
- **Nom de fichier** : `camelCase.module.css`
- **Nom de classe** : `PascalCase` (aligné avec le composant associé)
- **Portée** : chaque fichier `.module.css` ne doit cibler que son composant
- **Jamais de balises HTML directes** (`button`, `h1`, etc.) — toujours passer par une classe

### Exemple
```css
/* src/elements/Container3Images/container3Images.module.css */
.Container3ImagesRoot {
    display: flex;
    gap: 1rem;
}

.ContainerImg {
    flex: 1;
}

.Image {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
}
```

---

## 5) Imports

- **Composants Page / Root / Layout** : `default export`  
- **Éléments / Types / Hooks / Utils** : **exports nommés**

```tsx
// ✅ Pages / Root / Layout
import Home_Page from "../pages/Home.page";
import HomeRoot_Root from "../components/HomeRoot.root";
import Navbar_Layout from "../layouts/Navbar.layout";

// ✅ Éléments / Hooks / Types
import { Container3Images_Element } from "../elements/Container3Images/Container3Images.element";
import { useAuthCheck } from "../hooks/useAuthCheck";
import { CardBlog_Type } from "../types/cardBlog.type";
```

---

## 6) (Optionnel) Règles ESLint pour verrouiller le style

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    { "selector": "typeLike", "format": ["PascalCase"] },
    { "selector": "variable", "format": ["camelCase", "UPPER_CASE", "PascalCase"] },
    { "selector": "function", "format": ["camelCase", "PascalCase"] }
  ],
  "react/jsx-pascal-case": ["error", { "allowAllCaps": false }],
  "import/no-default-export": "off",
  "no-restricted-syntax": [
    "error",
    {
      "selector": "ExportDefaultDeclaration > FunctionDeclaration[id.name=/_.*/]",
      "message": "Le nom du composant exporté par défaut doit être Nom_Role (PascalCase + underscore)."
    }
  ]
}
```

---

## 7) Résumé express

- **Composants TSX**  
  - Fichier : `PascalCase.role.tsx` → `Home.page.tsx`  
  - Fonction : `Nom_Role` → `Home_Page`  
  - `default export` pour Page/Root/Layout  
  - `export nommé` pour Element

- **Types**  
  - Nom : `PascalCase` + `_Type` → `CardBlog_Type`  
  - Fichier : `camelCase.type.ts` → `cardBlog.type.ts`  
  - **Export nommé**

- **Hooks**  
  - Nom : `useSomething` (camelCase)  
  - Fichier : `useSomething.ts`  
  - **Export nommé**  
  - `.tsx` seulement si JSX retourné

- **CSS Modules**  
  - Nom du fichier : `camelCase.module.css`  
  - Nom de classe : `PascalCase`  
  - Jamais de balises HTML directes
