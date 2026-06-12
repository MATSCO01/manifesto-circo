# Il Respiro del Circo — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Creare una singola pagina HTML con il SVG del circo inline, animato con anime.js v4, con contrasto emotivo tra la parte superiore gialla (gioiosa) e inferiore nera (malinconica).

**Architecture:** SVG inline in HTML per permettere selezione DOM dei gruppi. CSS minimal embedded. anime.js v4 caricato da CDN (funziona senza server locale). Script di animazione embedded che targetta i gruppi SVG per ID.

**Tech Stack:** HTML5, CSS3, SVG, anime.js v4

---

## File Structure

| File | Responsabilità |
|---|---|
| `index.html` | Struttura pagina, SVG inline, CSS embedded, script anime.js embedded |
| `style.css` | Stili minimal per layout e centraggio |
| `anime.min.js` | Libreria anime.js v4 (da scaricare o CDN) |

**Nota:** Per rispettare il vincolo "singola pagina HTML" e "no server", il file `index.html` conterrà SVG inline e CSS embedded. `anime.min.js` sarà scaricato localmente nella stessa cartella.

---

### Task 1: Setup e Struttura Base

**Files:**
- Create: `/Users/matteoscoccia/Documents/GitHub/manifesto circo/index.html`
- Create: `/Users/matteoscoccia/Documents/GitHub/manifesto circo/style.css`
- Download: `/Users/matteoscoccia/Documents/GitHub/manifesto circo/anime.min.js`

- [ ] **Step 1: Scaricare anime.js v4**

Scarica la libreria anime.js v4 minified nella cartella del progetto:

```bash
curl -L "https://cdn.jsdelivr.net/npm/animejs@4.0.0/dist/anime.min.js" -o "/Users/matteoscoccia/Documents/GitHub/manifesto circo/anime.min.js"
```

Verifica che il file esista:
```bash
ls -la "/Users/matteoscoccia/Documents/GitHub/manifesto circo/anime.min.js"
```
Expected: file trovato, dimensione > 10KB

- [ ] **Step 2: Creare index.html con struttura base**

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il Respiro del Circo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="circo-container">
        <!-- SVG verrà inserito qui nel prossimo task -->
    </div>
    
    <script src="anime.min.js"></script>
    <script src="animations.js"></script>
</body>
</html>
```

- [ ] **Step 3: Creare style.css**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
}

#circo-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#circo-container svg {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    display: block;
}
```

- [ ] **Step 4: Verifica struttura base**

Apri il file index.html nel browser (doppio click). 
Expected: pagina nera vuota, nessun errore console.

---

### Task 2: Inserimento SVG Inline

**Files:**
- Modify: `/Users/matteoscoccia/Documents/GitHub/manifesto circo/index.html`

- [ ] **Step 1: Copiare il contenuto di circo.svg**

Leggi il file `/Users/matteoscoccia/Documents/GitHub/manifesto circo/circo.svg` e copia l'intero contenuto XML dentro il div `#circo-container`.

- [ ] **Step 2: Inserire SVG nel HTML**

Sostituisci il commento `<!-- SVG verrà inserito qui -->` con l'intero contenuto di `circo.svg`.

Il risultato deve essere:
```html
<div id="circo-container">
    <svg xmlns="http://www.w3.org/2000/svg" ... >
        <!-- tutto il contenuto del SVG -->
    </svg>
</div>
```

- [ ] **Step 3: Verifica visualizzazione SVG**

Apri index.html nel browser.
Expected: il circo è visibile, centrato, occupa tutto lo schermo. Le due metà (gialla sopra, nera sotto) sono visibili.

---

### Task 3: Animazioni Parte Gialla — Atmosfera

**Files:**
- Create: `/Users/matteoscoccia/Documents/GitHub/manifesto circo/animations.js`

- [ ] **Step 1: Creare animations.js e animare palloncini**

```javascript
// ============ PARTE GIALLA — ATMOSFERA ============

// Palloncini sinistra — fluttuano verso l'alto
anime({
    targets: '#palloncinisinistra_giallo ellipse, #palloncinisinistra_giallo polygon',
    translateY: [-5, -15],
    translateX: [-2, 2],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

// Palloncini destra — fluttuano con ritardo
anime({
    targets: '#palloncini2_giallo ellipse, #palloncini2_giallo polygon',
    translateY: [-5, -15],
    translateX: [-2, 2],
    duration: 3500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 200
});
```

- [ ] **Step 2: Animare luci gialle**

Aggiungi al file:
```javascript
// Luci sinistra — pulsano brillanti
anime({
    targets: '#lucisinistra_giallo circle, #lucisinistra_giallo rect',
    scale: [1, 1.2],
    opacity: [0.8, 1],
    duration: 800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad'
});

// Luci destra — pulsano con ritardo
anime({
    targets: '#lucidestra_giallo circle, #lucidestra_giallo rect',
    scale: [1, 1.2],
    opacity: [0.8, 1],
    duration: 800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    delay: 400
});
```

- [ ] **Step 3: Animare bandierine gialle**

Aggiungi:
```javascript
// Bandierine sinistra — sventolano
anime({
    targets: '#bandierinesinistra_giallo polygon',
    rotate: [-8, 8],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: '50% 100%'
});

// Bandierine destra — sventolano con ritardo
anime({
    targets: '#bandierinedestra_giallo polygon',
    rotate: [-8, 8],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 300,
    transformOrigin: '50% 100%'
});

// Bandierina centrale — sventola più ampio
anime({
    targets: '#bandierina_giallo polygon',
    rotate: [-10, 10],
    duration: 2500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: '50% 100%'
});
```

- [ ] **Step 4: Animare fili e tendone gialli**

Aggiungi:
```javascript
// Fili — oscillano
anime({
    targets: '#filosinistra_giallo',
    translateY: [-5, 5],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad'
});

anime({
    targets: '#filodestra_giallo',
    translateY: [-5, 5],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    delay: 500
});

// Tendone — respiro leggero
anime({
    targets: '#tendone_giallo',
    scale: [1, 1.01],
    duration: 4000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: '50% 50%'
});
```

- [ ] **Step 5: Verifica atmosfera gialla**

Apri index.html.
Expected: palloncini fluttuano, luci pulsano, bandierine sventolano, fili oscillano, tendone respira.

---

### Task 4: Animazioni Parte Gialla — Personaggi (Respiro)

**Files:**
- Modify: `/Users/matteoscoccia/Documents/GitHub/manifesto circo/animations.js`

- [ ] **Step 1: Animare personaggi gialli**

Aggiungi:
```javascript
// ============ PARTE GIALLA — PERSONAGGI (RESPIRO) ============

// Elefante — respiro lento e maestoso
anime({
    targets: '#elefante_giallo',
    scale: [1, 1.015],
    duration: 3500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: '50% 50%'
});

// Scimmia — respiro vivace
anime({
    targets: '#scimmia_giallo',
    scale: [1, 1.02],
    translateY: [0, -3],
    duration: 2800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: '50% 100%'
});

// Pagliacci — respiro
anime({
    targets: '#pagliaccio1_giallo, #pagliaccio2_giallo, #pagliaccio3_giallo',
    scale: [1, 1.02],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: '50% 50%'
});

// Leone — respiro maestoso
anime({
    targets: '#leone_giallo',
    scale: [1, 1.01],
    duration: 4000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: '50% 50%'
});

// Palla — respiro leggero e vivace
anime({
    targets: '#palla_giallo',
    scale: [1, 1.03],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: '50% 50%'
});
```

- [ ] **Step 2: Verifica personaggi gialli**

Apri index.html.
Expected: tutti i personaggi della metà superiore hanno un leggero respiro ritmico.

---

### Task 5: Animazioni Parte Nera — Atmosfera

**Files:**
- Modify: `/Users/matteoscoccia/Documents/GitHub/manifesto circo/animations.js`

- [ ] **Step 1: Animare luci nere**

Aggiungi:
```javascript
// ============ PARTE NERA — ATMOSFERA ============

// Luci nere — pulsano fioche e lente
anime({
    targets: '#lucisinistra_nero path',
    scale: [1, 1.05],
    opacity: [0.3, 0.6],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeOutQuad'
});

anime({
    targets: '#lucidestra_nero path',
    scale: [1, 1.05],
    opacity: [0.3, 0.6],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeOutQuad',
    delay: 600
});
```

- [ ] **Step 2: Animare bandierine nere**

Aggiungi:
```javascript
// Bandierine nere — movimenti pesanti e lenti
anime({
    targets: '#bandierinesinistra_nero polygon',
    rotate: [-3, 3],
    duration: 5000,
    loop: true,
    direction: 'alternate',
    easing: 'easeOutQuad',
    transformOrigin: '50% 100%'
});

anime({
    targets: '#bandierinedestra_nero polygon',
    rotate: [-3, 3],
    duration: 5000,
    loop: true,
    direction: 'alternate',
    easing: 'easeOutQuad',
    delay: 400,
    transformOrigin: '50% 100%'
});

// Bandierina centrale nera — quasi statica
anime({
    targets: '#bandierina_nero polygon',
    rotate: [-2, 2],
    duration: 6000,
    loop: true,
    direction: 'alternate',
    easing: 'easeOutQuad',
    transformOrigin: '50% 100%'
});
```

- [ ] **Step 3: Animare fili e tendone neri**

Aggiungi:
```javascript
// Fili neri — onde lente
anime({
    targets: '#filosinistra_nero',
    translateY: [-2, 2],
    duration: 6000,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
});

anime({
    targets: '#filodestra_nero',
    translateY: [-2, 2],
    duration: 6000,
    loop: true,
    direction: 'alternate',
    easing: 'linear',
    delay: 800
});

// Tendone nero — sospiro minimo
anime({
    targets: '#tendone_nero',
    scale: [1, 1.005],
    duration: 8000,
    loop: true,
    direction: 'alternate',
    easing: 'easeOutQuad',
    transformOrigin: '50% 50%'
});
```

- [ ] **Step 4: Verifica atmosfera nera**

Apri index.html.
Expected: la metà inferiore ha movimenti molto più lenti e smorzati rispetto alla superiore.

---

### Task 6: Animazioni Parte Nera — Personaggi (Tremolio)

**Files:**
- Modify: `/Users/matteoscoccia/Documents/GitHub/manifesto circo/animations.js`

- [ ] **Step 1: Animare personaggi neri con tremolio**

Aggiungi:
```javascript
// ============ PARTE NERA — PERSONAGGI (TREMOLIO) ============

// Elefante nero — tremolio impercettibile
anime({
    targets: '#elefante_nero',
    translateX: [-0.3, 0.3],
    translateY: [-0.3, 0.3],
    duration: 150,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
});

// Scimmia nera — tremolio
anime({
    targets: '#scimmia_nero',
    translateX: [-0.5, 0.5],
    translateY: [-0.5, 0.5],
    duration: 180,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
});

// Pagliacci neri — tremolio
anime({
    targets: '#pagliaccio1_nero, #pagliaccio2_nero, #pagliaccio3_nero',
    translateX: [-0.4, 0.4],
    translateY: [-0.4, 0.4],
    duration: 200,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
});

// Leone nero — tremolio minimo
anime({
    targets: '#leone_nero',
    translateX: [-0.2, 0.2],
    translateY: [-0.2, 0.2],
    duration: 250,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
});

// Palla nera — tremolio
anime({
    targets: '#palla_nero',
    translateX: [-0.5, 0.5],
    translateY: [-0.5, 0.5],
    duration: 160,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
});
```

- [ ] **Step 2: Verifica completa**

Apri index.html.
Expected:
- Metà superiore (gialla): luci brillanti, palloncini fluttuano, bandierine sventolano, personaggi respirano
- Metà inferiore (nera): luci fioche, bandierine pendono, fili ondeggiano lentamente, personaggi tremano impercettibilmente
- Il contrasto è visibile e immediato

---

### Task 7: Ottimizzazione e Pulizia

**Files:**
- Modify: `/Users/matteoscoccia/Documents/GitHub/manifesto circo/index.html`
- Modify: `/Users/matteoscoccia/Documents/GitHub/manifesto circo/animations.js`

- [ ] **Step 1: Verifica console errori**

Apri index.html nel browser, apri DevTools (F12), vai alla tab Console.
Expected: nessun errore rosso. Eventuali warning di anime.js su target non trovati devono essere risolti controllando gli ID.

- [ ] **Step 2: Ottimizzazione performance**

Se ci sono lag o scatti:
1. Verifica che tutte le animazioni usino solo `transform` e `opacity` (GPU-accelerated)
2. Aggiungi `will-change: transform` agli elementi animati nel CSS se necessario
3. Riduci il numero di elementi animati simultaneamente se il browser fatica

- [ ] **Step 3: Test cross-browser**

Apri index.html in:
- Chrome/Chromium
- Firefox
- Safari

Expected: animazioni visibili e fluide in tutti i browser.

- [ ] **Step 4: Test offline**

Disconnetti internet, ricarica la pagina.
Expected: tutto funziona (anime.js è locale).

---

## Spec Coverage Check

| Requisito Design | Task che lo implementa |
|---|---|
| Parte gialla: luci pulsano brillanti | Task 3, Step 2 |
| Parte gialla: palloncini fluttuano | Task 3, Step 1 |
| Parte gialla: bandierine sventolano | Task 3, Step 3 |
| Parte gialla: fili oscillano | Task 3, Step 4 |
| Parte gialla: tendone respira | Task 3, Step 4 |
| Parte gialla: personaggi respiro | Task 4, Step 1 |
| Parte nera: luci pulsano fioche | Task 5, Step 1 |
| Parte nera: bandierine pendono | Task 5, Step 2 |
| Parte nera: fili ondeggiano lenti | Task 5, Step 3 |
| Parte nera: tendone sospiro | Task 5, Step 3 |
| Parte nera: personaggi tremolio | Task 6, Step 1 |
| Singola pagina HTML | Task 1, Task 2 |
| Funziona senza server | Task 1, Step 1 (anime.js locale) |

---

## Placeholder Scan

- [x] Nessun "TBD", "TODO", "implement later"
- [x] Nessun "Add appropriate error handling" vago
- [x] Nessun "Similar to Task N" senza codice
- [x] Tutti gli ID SVG sono quelli reali del file circo.svg
- [x] Tutti i parametri anime.js sono validi per v4
