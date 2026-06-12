# Fulmini e Lampi nella Parte Nera — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aggiungere ~12 path SVG di fulmini stilizzati e un rettangolo flash nella parte nera del manifesto circo, animati con anime.js per effetto tempesta circense.

**Architecture:** Gruppo SVG inserito subito dopo `sfondo_nero` dentro `#Nero` (layering corretto: sopra sfondo, sotto elementi). Animazioni `opacity` rapide con delay random per caoticità. Flash bianco semi-trasparente in parallelo.

**Tech Stack:** HTML inline SVG, anime.js v3.2.2 UMD, CSS inline

---

## File Structure

- `index.html:355` — modifica: inserire `<g id="fulmini_nero">` subito dopo `<rect id="sfondo_nero" .../>` dentro `<g id="Nero">`
- `index.html:356` (nuova riga) — creazione: ~12 path fulmini + 1 rect flash
- `animations.v2.js:327` — modifica: aggiungere sezione animazioni fulmini e flash dopo la sezione insegne luminose

---

### Task 1: Aggiungere fulmini SVG in index.html

**Files:**
- Modify: `/Users/martinaverna_02/Desktop/manifesto circo/index.html:355`

- [ ] **Step 1: Leggere la riga dello sfondo nero**

Leggi `index.html` alla riga 355 per trovare:
```html
<rect id="sfondo_nero" class="cls-41" x="68.74" y="1016.81" width="1086" height="966.5"/>
```

- [ ] **Step 2: Inserire gruppo fulmini dopo sfondo_nero**

Sostituisci:
```html
    <rect id="sfondo_nero" class="cls-41" x="68.74" y="1016.81" width="1086" height="966.5"/>
    <g id="tendone_nero">
```

Con:
```html
    <rect id="sfondo_nero" class="cls-41" x="68.74" y="1016.81" width="1086" height="966.5"/>
    <g id="fulmini_nero" style="pointer-events: none;">
      <rect id="flash_nero" x="68.74" y="1016.81" width="1086" height="966.5" fill="#FFFFFF" opacity="0"/>
      <path d="M120,1100 L150,1150 L130,1200 L180,1250 L140,1300 L200,1350" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M900,1150 L870,1200 L920,1250 L880,1300 L940,1350 L890,1400" stroke="#A5B4FC" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M250,1300 L300,1320 L270,1380 L340,1410 L300,1460 L380,1480" stroke="#E0E7FF" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M800,1400 L760,1450 L820,1480 L780,1530 L850,1560 L800,1600" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M400,1500 L450,1530 L420,1580 L490,1610 L450,1660 L520,1680" stroke="#A5B4FC" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M650,1600 L620,1650 L680,1680 L640,1730 L700,1760 L660,1800" stroke="#E0E7FF" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M150,1650 L180,1700 L140,1750 L200,1780 L160,1830 L220,1850" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M1000,1700 L970,1750 L1030,1780 L990,1830 L1050,1860 L1010,1900" stroke="#A5B4FC" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M350,1800 L380,1830 L340,1880 L400,1910 L360,1950 L420,1980" stroke="#FFFFFF" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M750,1850 L720,1900 L780,1930 L740,1980" stroke="#E0E7FF" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M500,1200 L540,1230 L510,1280 L570,1310 L530,1350" stroke="#A5B4FC" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
      <path d="M550,1550 L520,1600 L580,1630 L540,1680 L600,1710" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
    </g>
    <g id="tendone_nero">
```

---

### Task 2: Aggiungere animazioni fulmini in animations.v2.js

**Files:**
- Modify: `/Users/martinaverna_02/Desktop/manifesto circo/animations.v2.js`

- [ ] **Step 1: Leggere la fine del file**

Leggi `animations.v2.js` dalla riga 327 in poi per trovare la sezione insegne luminose e il `});` finale.

- [ ] **Step 2: Inserire animazioni fulmini prima del `});` finale**

Trova:
```javascript
  }

});
```

Sostituisci con:
```javascript
  }

  // ============ FULMINI E LAMPI NELLA PARTE NERA ============
  var fulmini = document.querySelectorAll('#fulmini_nero path');
  fulmini.forEach(function(f, i) {
    anime({
      targets: f,
      opacity: [0, 1, 0],
      duration: 60 + Math.random() * 120,
      delay: Math.random() * 4000,
      loop: true,
      easing: 'easeOutExpo'
    });
  });

  // Flash di illuminazione dello sfondo
  var flashNero = document.querySelector('#flash_nero');
  if (flashNero) {
    anime({
      targets: flashNero,
      opacity: [0, 0.35, 0],
      duration: 120,
      loop: true,
      easing: 'easeOutQuad',
      delay: 500 + Math.random() * 2000
    });
  }

});
```

---

### Task 3: Verificare nel browser

**Files:** nessuno (solo verifica visiva)

- [ ] **Step 1: Aprire index.html nel browser**

- [ ] **Step 2: Verificare**
  - I fulmini lampeggiano in modo casuale nella parte nera
  - Il flash illumina brevemente lo sfondo nero
  - Il testo2, il tendone e gli altri elementi rimangono visibili sopra i fulmini
  - Nessun errore nella console del browser

---

## Spec coverage check

| Requisito | Task |
|-----------|------|
| Gruppo SVG layering corretto | Task 1 |
| ~12 path fulmini stilizzati | Task 1 |
| Rettangolo flash bianco | Task 1 |
| Animazioni anime.js rapide e random | Task 2 |
| Flash in parallelo ai fulmini | Task 2 |
| `pointer-events: none` | Task 1 |

## Placeholder scan
Nessun placeholder trovato. Tutti gli step contengono codice completo.

## Type consistency
- `opacity` usato come attributo SVG (`opacity="0"`) nel markup, come proprietà CSS (`opacity: [0, 1, 0]`) in anime.js — corretto per entrambi i contesti.
- ID `fulmini_nero` e `flash_nero` consistenti tra HTML e JS.
