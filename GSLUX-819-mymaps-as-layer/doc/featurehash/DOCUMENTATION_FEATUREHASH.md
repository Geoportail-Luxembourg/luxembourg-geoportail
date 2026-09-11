# Documentation de l'encodage / décodage FeatureHash

## Objectif

Ce document explique comment fonctionne l'encodage et le décodage des features dans `app.js`.

Le principe général est le suivant :

1. Une feature est convertie en une chaîne compacte.
2. La géométrie est encodée avec un alphabet spécial de 64 caractères.
3. Les coordonnées sont compressées avec un encodage différentiel.
4. Les propriétés sont ajoutées sous forme de paires `clé*valeur`.
5. Le décodage effectue l'opération inverse pour reconstruire les objets JSON.

---

## 1. Structure générale d'une feature encodée

Une feature encodée suit globalement cette forme :

```text
[type](coordonnées)~propriété*valeur'propriété*valeur')
```

Exemples de préfixes de géométrie :

- `p` : `Point`
- `l` : `LineString`
- `a` : `Polygon`

Exemple complet :

```text
p(sn3a-wwdA~display_order*1'a*0'c*%23ed1c24)...
```

Le caractère `~` sépare la géométrie des propriétés.

---

## 2. Alphabet d'encodage `CHAR64`

L'algorithme utilise l'alphabet suivant :

```text
.-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz
```

Cet alphabet contient 64 caractères, donc chaque caractère représente 6 bits d'information.

### Pourquoi un alphabet de 64 caractères ?

Parce qu'il permet de compresser les nombres en utilisant une base 64 personnalisée, adaptée à la sérialisation des coordonnées.

---

## 3. Encodage des nombres

### `encodeNumber(num)`

Cette fonction prend un entier non signé et le convertit en une suite de caractères `CHAR64`.

Principe :

- on extrait 5 bits à la fois avec `num & 0x1f`
- on ajoute un bit de continuation `0x20` tant qu'il reste des bits à écrire
- on écrit le résultat sous forme de caractères de l'alphabet

Cela produit un encodage de type **variable-length**.

### `encodeSignedNumber(num)`

Cette fonction encode un entier signé.

Elle applique d'abord un codage de type **zigzag** :

- les nombres positifs deviennent des entiers pairs
- les nombres négatifs deviennent des entiers impairs

Schématiquement :

```text
signedNum = num << 1
si num < 0 alors signedNum = ~signedNum
```

Ensuite `signedNum` est transmis à `encodeNumber()`.

### Intérêt du zigzag

Le zigzag rend les petits nombres négatifs et positifs plus compacts, ce qui est idéal pour les deltas de coordonnées.

---

## 4. Encodage des coordonnées

### Fonction concernée

- `encodeCoordinates(flatCoordinates)`

### Entrée

La fonction attend un tableau aplati de coordonnées :

```js
[x1, y1, x2, y2, x3, y3, ...]
```

### Principe

Les coordonnées ne sont pas stockées en absolu, mais en **différences** par rapport au point précédent.

Pour chaque point :

```text
dx = x - prevX
dy = y - prevY
```

Puis :

- `dx` est encodé avec `encodeSignedNumber(dx)`
- `dy` est encodé avec `encodeSignedNumber(dy)`

Ensuite `prevX` et `prevY` sont mis à jour avec la valeur courante.

### Pourquoi faire ça ?

Parce que les différences entre points consécutifs sont souvent petites, donc plus faciles à compresser.

### Exemple

Si on encode les coordonnées :

```js
[673100, 88526];
```

le résultat encodé est :

```text
sn3a-wwdA
```

---

## 5. Encodage des géométries

### Point

Pour un `Point`, la structure est :

```text
p(coordinates)
```

Exemple :

```text
p(sn3a-wwdA)
```

### LineString

Pour une `LineString`, toutes les coordonnées sont aplaties puis encodées dans un seul flux :

```text
l(encodedCoordinates)
```

### Polygon

Pour un `Polygon`, chaque anneau est encodé séparément.

Les anneaux sont séparés par un apostrophe `'`.

Exemple conceptuel :

```text
a(ring1'ring2'ring3)
```

Avant chaque anneau, `prevX` et `prevY` sont remis à zéro.

### Pourquoi réinitialiser pour chaque anneau ?

Un anneau de polygone est une séquence indépendante de coordonnées. Les deltas doivent donc repartir de zéro au début de chaque anneau.

---

## 6. Encodage des propriétés

### Format

Les propriétés sont écrites sous la forme :

```text
clé*valeur
```

Puis plusieurs propriétés sont séparées par `'`.

Exemple :

```text
~display_order*1'a*0'c*%23ed1c24
```

### Mappage des clés longues vers les clés courtes

L'implémentation convertit certaines clés longues vers un format court avant l'encodage.

| Clé longue        | Clé courte |
| ----------------- | ---------- |
| `angle`           | `a`        |
| `color`           | `c`        |
| `description`     | `d`        |
| `stroke`          | `e`        |
| `isLabel`         | `i`        |
| `linestyle`       | `l`        |
| `name`            | `n`        |
| `opacity`         | `o`        |
| `showOrientation` | `r`        |
| `shape`           | `s`        |
| `size`            | `t`        |
| `isCircle`        | `u`        |

### Valeurs encodées

Les valeurs passent par `encodeURIComponent()` afin de protéger les caractères spéciaux.

Avant cela, certains caractères problématiques sont remplacés :

- `(`
- `)`
- `'`
- `*`

sont transformés en `_` dans la valeur sérialisée.

### Types de valeurs

Les propriétés restent sérialisées comme des chaînes, mais côté décodage elles sont reconverties selon leur nature :

- booléens : `true` / `false`
- nombres : `parseFloat(...)`
- chaînes : conservées telles quelles après décodage URL

---

## 7. Décodage d'une feature

### Fonction principale

- `decodeFeature(encodedText)`

### Étapes

1. La chaîne est d'abord passée dans `decodeURIComponent()`.
2. Si la chaîne commence par `F`, elle est considérée comme une collection de features.
3. Sinon, elle est décodée comme une feature unique.

---

## 8. Décodage d'une collection de features

### Fonction concernée

- `decodeFeaturesCollection(encodedText)`

### Préfixe `F`

Les collections de features commencent par `F`.

Exemple :

```text
F...première_feature...deuxième_feature...troisième_feature...
```

### Séparation des features

Le code cherche les prochaines occurences de :

- `a(`
- `p(`
- `l(`

pour déterminer où commence la feature suivante.

Chaque bloc extrait est ensuite envoyé à `decodeSingleFeature()`.

---

## 9. Décodage d'une feature unique

### Fonction concernée

- `decodeSingleFeature(encodedText)`

### Étapes détaillées

#### 1. Nettoyage final

Si la chaîne se termine par `)`, elle est retirée.

#### 2. Séparation géométrie / propriétés

On découpe sur le premier `~` :

- avant `~` : géométrie
- après `~` : propriétés

#### 3. Détection du type de géométrie

Le premier caractère indique le type :

- `p` → `Point`
- `l` → `LineString`
- `a` → `Polygon`

#### 4. Extraction des coordonnées

Le texte des coordonnées est extrait entre `(` et la fin de la sous-chaîne géométrique.

#### 5. Décodage des coordonnées

`decodeCoordinates(text)` lit les caractères deux par deux :

- un nombre signé pour `x`
- un nombre signé pour `y`

Chaque nombre est reconstruit à partir des bits 5 par 5, puis converti depuis le format zigzag.

#### 6. Reconstruction de la géométrie

- `Point` → `[x, y]`
- `LineString` → `[[x1, y1], [x2, y2], ...]`
- `Polygon` → `[[[x1, y1], [x2, y2], ...]]`

#### 7. Décodage des propriétés

Les propriétés sont séparées par `'`, puis chaque bloc est coupé sur `*`.

Exemple :

```text
a*0
c*%23ed1c24
```

Ensuite :

- la clé courte est retransformée en clé longue via `SHORT_PROP_MAP`
- la valeur est passée dans `decodeURIComponent()`
- la valeur est convertie vers le bon type si nécessaire

---

## 10. Pourquoi `prevX` et `prevY` sont importants

Les coordonnées sont encodées en **différentiel**.

Cela veut dire que pour décoder correctement une séquence :

- il faut repartir de `0` au début d'une feature
- il faut repartir de `0` au début de chaque anneau de polygone

Si `prevX` ou `prevY` gardent une valeur précédente, les coordonnées décodées deviennent fausses.

---

## 11. Exemple complet

### Feature Point

Entrée :

```js
{
  type: 'Point',
  coordinates: [673100, 88526],
  properties: {
    display_order: '1',
    angle: 0,
    color: '#ed1c24'
  }
}
```

Encodage :

```text
p(sn3a-wwdA~display_order*1'a*0'c*%23ed1c24)
```

Décodage :

```js
{
  type: 'Point',
  coordinates: [673100, 88526],
  properties: {
    display_order: '1',
    angle: 0,
    color: '#ed1c24'
  }
}
```

---

## 12. Points importants à retenir

- La géométrie est encodée séparément des propriétés.
- Les coordonnées sont compressées par delta encoding.
- Le zigzag permet de représenter efficacement les entiers signés.
- Les propriétés sont sérialisées sous forme `clé*valeur`.
- Le séparateur `~` marque le passage de la géométrie aux propriétés.
- Le séparateur `'` sert à séparer les propriétés et, pour les polygones, les anneaux.
- `prevX` et `prevY` doivent être réinitialisés aux bons moments.

---

## 13. Résumé du pipeline

### Encodage

1. Lecture de la feature JSON
2. Conversion de la géométrie en tableau aplati
3. Calcul des deltas de coordonnées
4. Encodage zigzag des deltas
5. Encodage base-64 custom avec `CHAR64`
6. Conversion des propriétés en clés courtes
7. Sérialisation des propriétés en `clé*valeur`
8. Assemblage final

### Décodage

1. Décodage URL global
2. Détection d'une collection ou d'une feature simple
3. Séparation géométrie / propriétés
4. Décodage des coordonnées
5. Reconstruction de la géométrie
6. Reconstruction des propriétés
7. Retour d'un objet JSON exploitable

---

## 14. Fichiers liés

- Implémentation principale : `app.js`
- Page de test : `index.html`
- Styles : `styles.css`

---

## 15. Notes de validation

Lors des tests manuels, les coordonnées suivantes ont été validées avec succès :

- `Point [673100, 88526]`
- `Point [680693, 90952]`
- premier anneau du `Polygon` de test

Cela confirme que l'encodage/décodage des coordonnées fonctionne correctement lorsque l'état interne est correctement réinitialisé.
