# Sintesi Progetto - Manifesto Circo Animato

## Overview
Animazione SVG del manifesto circo in un'unica pagina HTML offline, con sezione superiore gialla (allegria) e sezione inferiore nera (horror/tristezza), animate con anime.js.

---

## File del Progetto

| File | Descrizione |
|------|-------------|
| `index.html` | Pagina principale con SVG inline, carica anime.min.js + animations.v2.js |
| `style.css` | Layout fullscreen centrato con sfondo gradiente radiale (#1a0f2e → #000000) |
| `animations.js` | Logica anime.js per tutte le animazioni (gialla + nera) |
| `animations.v2.js` | Copia cache-bust di animations.js per sviluppo iterativo |
| `anime.min.js` | Libreria anime.js v3.2.2 (UMD bundle, funziona offline) |
| `circo.svg` | File sorgente SVG originale (viewBox: 1228.15 × 2087.31) |
| `testo1.svg` | Titolo parte gialla (NON incluso in index.html) |
| `testo2.svg` | Titolo parte nera (NON incluso in index.html) |

---

## Animazioni Implementate

### Parte Gialla (Top - Allegria)

| Elemento | Animazione | Dettagli Tecnici |
|----------|-----------|------------------|
| Fili + Bandierine + Luci | Oscillazione | `rotate` da punto ancora bandierina rossa (624px 257px), `easeInOutSine` |
| Palloncini sinistra | Fluttuazione | `translateY` + `translateX` + `rotate`, durata 3000ms |
| Palloncini destra | Fluttuazione | `translateY` + `translateX` + `rotate`, durata 3500ms, delay 200ms |
| Palla (gialla) | Rotazione 360° | `transformOrigin: 385.12px 847.17px` (centro palla) |
| Elefante (giallo) | Camminata | Traslazione orizzontale con `easeInOutSine` |
| Scimmia (gialla) | Cappello oscillante | Mantiene inclinazione originale -26.9° |

### Parte Nera (Bottom - Horror/Tristezza)

| Elemento | Animazione | Dettagli Tecnici |
|----------|-----------|------------------|
| Palla (nera) | Rotazione 360° | `transformOrigin` al centro |
| Pagliacci 1/2/3 (neri) | Oscillazione appesi | `rotate` da punti ancora inferiori (pag1: 194,2038; pag2: 874,1999; pag3: 1065,2087) |
| Luci nere | Lampeggio horror | `steps(1)` per irregolarità, doppio `drop-shadow` rosso ad alta intensità |
| Leone + Elefante (neri) | Statici | Nessuna animazione (fermi) |

### Parametri Globali
- Tutte le durate dimezzate rispetto alla prima versione per maggiore dinamicità
- Easing morbido mantenuto per fluidità
- Loop infiniti con `direction: 'alternate'`

---

## Decisioni Chiave

1. **anime.js v3.2.2 invece di v4** - La v4 è ESM-only e non espone l'oggetto globale `anime()` richiesto dal setup inline
2. **SVG inline in HTML** - Necessario per accesso diretto ai nodi SVG da JavaScript
3. **Transform-origin in pixel** - I SVG richiedono coordinate esplicite in px via JS, non CSS
4. **Cache-busting con query param** - `animations.v2.js?v=N` incrementato ad ogni modifica per evitare cache browser
5. **Titoli rimossi** - I testi di testo1.svg e testo2.svg sono stati rimossi su richiesta dell'utente
6. **Nuvole rimosse** - Aggiunte e poi rimosse, non più presenti nel progetto

---

## Coordinate Importanti

- **Palla gialla**: cx=385.12, cy=847.17, r=77.37
- **Palla nera**: cx=394.85, cy=1201.8
- **Ancora pagliacci neri**: (194, 2038), (874, 1999), (1065, 2087)
- **Divisorio**: y = 1020.31
- **ViewBox SVG**: 0 0 1228.15 2087.31

---

## Note Tecniche

- **Directory con spazi**: il path contiene "manifesto circo", richiede quoting nelle chiamate shell
- **Offline-first**: tutti gli asset sono locali, nessuna dipendenza CDN
- **Browser support**: anime.js v3 UMD garantisce compatibilità senza bundler
- **User persona**: designer, nessuna domanda tecnica, soluzioni dirette

---

## Stato Attuale
✅ **Pronto** - Animazioni complete, titoli rimossi, tutti gli elementi animati funzionanti. Nessun elemento bloccante.

---

*Ultimo aggiornamento: cache-bust v178118473727*
