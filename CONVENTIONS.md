# 📘 Conventions de nommage – Projet **LAPM**

> Objectif : une **grammaire visuelle** claire et cohérente pour tous les fichiers, composants, hooks et types.

---

## 1) Composants React (`.tsx`)

### Règles
- **Nom de fichier** : `PascalCase.role.tsx`
- **Nom du composant exporté** : `Nom_Role` (séparateur `_` entre nom métier et rôle technique)
- **Imports** : strictement identiques au nom du composant (pas de renommage)
- **Indentation** : 4 espaces
- **Styles** : jamais dans le `.tsx` — utiliser des **CSS Modules** séparés

### Rôles disponibles

| Rôle technique | Nom de fichier              | Nom du composant  | Exemple d’import |
|---|---|---|---|
| Page           | `Home.page.tsx`             | `Home_Page`       | `import Home_Page from "../pages/Home.page";` |
| Root (contenu global de page) | `HomeRoot.root.tsx`         | `HomeRoot_Root`   | `import HomeRoot_Root from "../components/HomeRoot.root";` |
| Component (sous-composant réutilisable) | `UserCard.component.tsx`    | `UserCard_Component` | `import UserCard_Component from "../components/UserCard.component";` |
| Layout (structures globales) | `Navbar.layout.tsx`         | `Navbar_Layout`   | `import Navbar_Layout from "../layouts/Navbar.layout";` |

### Exemple minimal
```tsx
// src/pages/Home.page.tsx
export default function Home_Page() {
    return <main>Bienvenue</main>;
}
```

---

## 2) Types & Interfaces (`.ts`)

### Règles
- **Nom du type** : `PascalCase` **avec suffixe** `_Type`
  - Exemples : `User_Type`, `CardBlog_Type`, `Home_Page_Props` (pour les props)
- **Nom de fichier** : `camelCase` + suffixe `.type.ts` (ou `.types.ts` si le fichier contient plusieurs types)
- **Export** : nommé (jamais `default`)
- **Optionnalité** : utiliser `?` plutôt que `string | undefined` quand pertinent

### Exemple
```ts
// src/types/cardBlog.type.ts
export type CardBlog_Type = {
    reactKey: number;
    path?: string;
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
};
```

### Arborescence type
```
src/
 └── types/
      ├── cardBlog.type.ts
      ├── user.type.ts
      └── common.types.ts   // plusieurs petits types génériques
```

> (Optionnel) `src/types/index.ts` pour ré-exporter :  
> `export * from "./cardBlog.type";`

---

## 3) Hooks personnalisés (`.ts` / `.tsx`)

### Règles
- **Nom du hook** : `camelCase` commençant par `use` → `useAuthCheck`, `useFetch`, `useMediaQuery`
- **Nom de fichier** : identique au nom du hook → `useAuthCheck.ts`
- **Export** : **nommé** (`export const useXxx = ...`) pour éviter les renommages sauvages
- **Extension** :
  - `.ts` si **pas de JSX** (99% des cas)
  - `.tsx` **uniquement** si le hook **retourne du JSX**

### Exemples
```ts
// src/hooks/useAuthCheck.ts
import { useEffect } from "react";

export const useAuthCheck = (): void => {
    useEffect(() => {
        // logique d'authentification
    }, []);
};
```

```tsx
// src/hooks/usePortal.tsx (rare : retourne du JSX)
import { createPortal } from "react-dom";

export const usePortal = (children: React.ReactNode) => {
    const el = document.getElementById("portal-root")!;
    return createPortal(children, el);
};
```

### Arborescence hooks
```
src/
 └── hooks/
      ├── useAuthCheck.ts
      ├── useFetch.ts
      └── useMediaQuery.ts
```

---

## 4) Imports (rappel)

- **Composants** : import par défaut, nom **identique** au composant
- **Hooks / Types / Utils** : **exports nommés** pour éliminer l’ambiguïté

```tsx
// ✅ Composants
import Home_Page from "../pages/Home.page";
import HomeRoot_Root from "../components/HomeRoot.root";
import Navbar_Layout from "../layouts/Navbar.layout";

// ✅ Hooks & Types
import { useAuthCheck } from "../hooks/useAuthCheck";
import { CardBlog_Type } from "../types/cardBlog.type";
```

---

## 5) (Optionnel) Règles ESLint pour verrouiller le style

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    { "selector": "typeLike", "format": ["PascalCase"] },
    { "selector": "variable", "format": ["camelCase", "UPPER_CASE", "PascalCase"] },
    { "selector": "function", "format": ["camelCase", "PascalCase"] }
  ],
  "react/jsx-pascal-case": ["error", { "allowAllCaps": false }],
  "import/no-default-export": "off", // on autorise default export pour les composants
  "no-restricted-syntax": [
    "error",
    {
      "selector": "ExportDefaultDeclaration > FunctionDeclaration[id.name=/_.*/]",
      "message": "Le nom du composant exporté par défaut doit être Nom_Role (PascalCase + underscore)."
    }
  ]
}
```

> Remarque : on **garde** le `default export` pour les **composants** afin que l’import reste propre (`import Home_Page from ...`).  
> Pour les **hooks/types/utils**, on **impose** l’export **nommé**.

---

## 6) Résumé express

- **Composants TSX**  
  - Fichier : `PascalCase.role.tsx` → `Home.page.tsx`  
  - Fonction : `Nom_Role` → `Home_Page`  
  - `default export`, pas de renommage à l’import

- **Types**  
  - Nom : `PascalCase` + `_Type` → `CardBlog_Type`  
  - Fichier : `camelCase.type.ts` → `cardBlog.type.ts`  
  - **Export nommé**

- **Hooks**  
  - Nom : `useSomething` (camelCase)  
  - Fichier : `useSomething.ts`  
  - **Export nommé**  
  - `.tsx` seulement si JSX retourné
