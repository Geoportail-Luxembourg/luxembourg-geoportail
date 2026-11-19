# Référence des paramètres d'état (`SP_KEY_*`)

Ces paramètres sont gérés par le système **StatePersistor** qui synchronise l'état de l'application avec l'URL (permalink) et/ou le `localStorage`.

## Modes de stockage

| Valeur enum                    | Description                                |
| ------------------------------ | ------------------------------------------ |
| `localStorage` (0)             | Stockage navigateur uniquement             |
| `permalink` (1)                | Query param URL                            |
| `permalinkAsPath` (2)          | Segment de chemin URL                      |
| `permalinkAndLocalStorage` (3) | Les deux (défaut pour la plupart des clés) |

---

## 🗺️ Viewport de la carte

| Constante          | Param URL   | Format                           | Description                                                                                                                                                                 |
| ------------------ | ----------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SP_KEY_ZOOM`      | `zoom`      | Entier (ex: `14`)                | Niveau de zoom de la carte. Lors de la restauration, une table de correspondance convertit les zooms v2 (0–13) vers v3 (8–21). Défaut : `VITE_DEFAULT_VIEW_ZOOM`.           |
| `SP_KEY_X`         | `X`         | Entier (coordonnée Web Mercator) | Centre X de la carte, arrondi. Également utilisé pour épingler la croix de localisation.                                                                                    |
| `SP_KEY_Y`         | `Y`         | Entier (coordonnée Web Mercator) | Centre Y de la carte. Même usage double que X.                                                                                                                              |
| `SP_KEY_ROTATION`  | `rotation`  | Float (radians, ex: `0.523`)     | Angle de rotation de la vue. Défaut : `0`.                                                                                                                                  |
| `SP_KEY_SRS`       | `SRS`       | Projection (ex: `EPSG:2169`)     | **⚠️ TODO — Lecture seule, héritage v3.** Si présent avec X/Y, transforme les coordonnées dans la projection indiquée avant de centrer la carte. Jamais réécrit dans l'URL. |
| `SP_KEY_CROSSHAIR` | `crosshair` | `true` / `false`                 | Si `true` à la restauration, ouvre le popup d'information de localisation au centre de la carte. Supprimé de l'URL quand le popup est fermé.                                |

---

## 📚 Couches

| Constante                | Param URL   | Format                                                                      | Description                                                                                                                                                                                                                                                                    |
| ------------------------ | ----------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `SP_KEY_LAYERS`          | `layers`    | IDs séparés par `-` (ex: `359-401-402`), ordre inversé                      | Couches superposées actives. La résolution des IDs passe par le service de thèmes. Si une couche requiert une authentification, le formulaire de connexion s'ouvre automatiquement. En v2, le séparateur était `,` et les noms de couches étaient utilisés à la place des IDs. |
| `SP_KEY_OPACITIES`       | `opacities` | Flottants 0–1 séparés par `-` (ex: `1-0.5-0.8`)                             | Opacité de chaque couche, dans le même ordre et la même longueur que `layers`.                                                                                                                                                                                                 |
| `SP_KEY_TIME_SELECTIONS` | `time`      | Plages ISO séparées par `--` (ex: `2020-01-01/2020-12-31--`), ordre inversé | Sélection temporelle par couche (valeur min/max). **Attention : le séparateur est `--` (double tiret)**, pas `-`.                                                                                                                                                              |
| `SP_KEY_BGLAYER`         | `bgLayer`   | Nom de couche (ex: `basemap_2015_global`)                                   | Couche de fond active. Les noms v2 sont convertis vers v3 via une table de correspondance (ex: `webbasemap` → `basemap_2015_global`).                                                                                                                                          |

---

## 🎨 Thème & Style

| Constante                                              | Stockage                            | Format                                | Description                                                                                                                                                                                                                                       |
| ------------------------------------------------------ | ----------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SP_KEY_THEME`                                         | Segment de chemin URL (ex: `/main`) | Nom de thème (ex: `main`, `tourisme`) | Thème actif. Stocké en **chemin URL** (pas en query param), sauf sur GitHub Pages où c'est un query param. À la restauration, appelle `setTheme()` + `setThemeZooms()`. Ouvre le formulaire d'auth si le thème n'est pas dans les thèmes publics. |
| `SP_KEYS_STYLE` (`roadmap`, `topomap`, `topomap_gray`) | `localStorage` uniquement           | JSON `{"medium": [...StyleItem[]]}`   | Style MVT personnalisé par couche de fond vectorielle. Trois clés possibles selon la couche active. Jamais écrit dans le permalink.                                                                                                               |
| `SP_KEY_SERIAL`                                        | `serial`                            | UUID v4                               | Identifiant d'un style MVT sauvegardé sur le serveur. La logique de chargement est partiellement implémentée dans `mvt-styles.composable.ts`.                                                                                                     |
| `SP_KEY_SERIAL_LAYERS`                                 | `serialLayer`                       | Nom de couche                         | **Commenté / inutilisé.** Était destiné à identifier la couche vectorielle associée au `serial`.                                                                                                                                                  |

---

## ⚙️ Mode application

| Constante                         | Param URL                | Format                          | Description                                                                                                                                                                               |
| --------------------------------- | ------------------------ | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SP_KEY_EMBEDDED`                 | `embedded`               | Valeur truthy / `false`         | Active le **mode carte embarquée** (sans header ni barre d'outils). Lecture seule, jamais repersisté dans l'URL. Actif dès que la valeur est présente et différente de `'false'`.         |
| `SP_KEY_EMBEDDED_SERVER`          | `embeddedserver`         | Hostname/IP (ex: `192.168.1.1`) | Adresse du serveur de tuiles local pour l'app mobile (tuiles hors ligne). Utilisé dans `mobile-tile.composable.ts` et `mvt-styles.composable.ts`. Exclu des URLs partagées / raccourcies. |
| `SP_KEY_EMBEDDED_SERVER_PROTOCOL` | `embeddedserverprotocol` | `http` ou `https`               | Protocole pour le serveur embarqué. Défaut : `http`. Exclu des URLs partagées.                                                                                                            |
| `SP_KEY_APPLOGIN`                 | `applogin`               | `yes`                           | **⚠️ TODO.** Indicateur de connexion depuis l'app mobile. Active le flag `isApp` dans le store. Quand c'est le seul param URL, force la lecture depuis le `localStorage`.                 |
| `SP_KEY_LOCALFORAGE`              | `localforage`            | `android` ou `ios`              | **⚠️ TODO.** Plateforme mobile. Active `isApp` et force la lecture depuis le `localStorage`. Exclu des URLs partagées.                                                                    |
| `SP_KEY_LAYERS_OPEN`              | `layersOpen`             | `true` / `false`                | État du panneau de couches (ouvert/fermé). Stocké en **localStorage uniquement**, jamais dans le permalink. Défaut : `true`.                                                              |

---

## 🗂️ Mes Cartes & Dessin

| Constante         | Param URL  | Format                                 | Description                                                                                                                                                                                               |
| ----------------- | ---------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SP_KEY_MAPID`    | `map_id`   | UUID                                   | ID d'une "Ma Carte" sauvegardée. À la restauration, appelle `openMyMap(uuid)`. Supprimé du permalink quand la carte est effacée.                                                                          |
| `SP_KEY_FEATURES` | `features` | Hash encodé (FeatureHash propriétaire) | Entités dessinées sérialisées (points, lignes, polygones, cercles). Seules les entités **sans** `map_id` sont persistées — les entités MyMaps sont exclues. Les cercles sont encodés comme des polygones. |

---

## 🔍 Feature Info

| Constante    | Param URL | Format                        | Description                                                                                                                              |
| ------------ | --------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `SP_KEY_FID` | `fid`     | Identifiant d'entité (string) | **⚠️ TODO.** Ouvre directement le popup d'info pour une entité spécifique au chargement de la page. **Supprimé de l'URL** après lecture. |

---

## ↔️ Comparateur de couches

| Constante                            | Param URL     | Format                | Description                                                                                                  |
| ------------------------------------ | ------------- | --------------------- | ------------------------------------------------------------------------------------------------------------ |
| `SP_KEY_LAYERCOMPARATOR`             | `lc`          | `true` / `false`      | Active/désactive le slider de comparaison de couches. Écrit dans le permalink uniquement.                    |
| `SP_KEY_LAYERCOMPARATOR_SLIDERRATIO` | `sliderRatio` | Float 0–1 (ex: `0.5`) | Position du slider de comparaison en fraction de la largeur de la carte. Écrit dans le permalink uniquement. |

---

## 🌐 Langue & Version

| Constante        | Param URL | Format                            | Description                                                                                                                                                            |
| ---------------- | --------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SP_KEY_LANG`    | `lang`    | Code ISO (`fr`, `de`, `en`, `lb`) | Langue de l'interface. À la restauration, appelle `i18next.changeLanguage()` et met à jour l'attribut `<html lang="...">`.                                             |
| `SP_KEY_VERSION` | `version` | Entier (`2` ou `3`)               | Version du format permalink. Utilisé pour détecter les permaliens v2 et appliquer les migrations nécessaires. Toujours **réécrit en `3`** immédiatement après lecture. |

---

## 🔧 Heuristiques internes (⚠️ TODO / partiellement implémentés)

| Constante        | Param URL | Description                                                                                                                                                       |
| ---------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SP_KEY_IPV6`    | `ipv6`    | **⚠️ TODO.** Indicateur v3. Quand c'est le seul param URL (ou combiné avec `applogin`/`localforage`), force la lecture depuis le `localStorage` au lieu de l'URL. |
| `SP_KEY_ADDRESS` | `address` | Présence utilisée uniquement dans les heuristiques de détection de version pour forcer la lecture depuis le `localStorage`. Non consommé par ailleurs.            |
| `SP_KEY_DEBUG`   | `debug`   | **⚠️ TODO.** Même comportement qu'`address` dans les règles de routage. Non implémenté fonctionnellement.                                                         |

---

## 🏚️ Clés héritées v2 (lecture seule)

Ces paramètres ne sont **lus que lors de la restauration de permaliens v2** et sont supprimés de l'URL après traitement.

| Constante                    | Param URL           | Format                                           | Description                                                                                                    |
| ---------------------------- | ------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `SP_KEY_V2_BGLAYEROPACITY`   | `bgOpacity`         | Float 0–1                                        | Opacité de la couche de fond v2. Si `0`, force la couche de fond par défaut v2.                                |
| `SP_KEY_V2_LAYERSINDICIES`   | `layers_indices`    | Entiers séparés par `,`                          | **⚠️ TODO / Inutilisé.** Indices d'ordre Z des couches en v2. Supprimé après migration mais non utilisé en v4. |
| `SP_KEY_V2_LAYERSOPACITIES`  | `layers_opacity`    | Flottants séparés par `,` (ex: `1,1,0.5`)        | Opacités v2 des couches. Combinées avec `layers_visibility` pour calculer l'opacité effective.                 |
| `SP_KEY_V2_LAYERSVISIBILITY` | `layers_visibility` | Booléens séparés par `,` (ex: `true,false,true`) | Visibilité v2 des couches. Une couche invisible → opacité forcée à `0`.                                        |
