# Design: Il Respiro del Circo

**Data:** 2025-01-11
**Progetto:** manifesto circo
**Strumenti:** HTML5, CSS3, SVG inline, anime.js v4
**Vincolo:** Singola pagina HTML, nessun server richiesto

---

## Visione

Un circo sospeso tra due mondi: la parte superiore gialla, vivace e gioiosa, e la parte inferiore nera, malinconica e fantasma. Ogni elemento respira la propria emozione attraverso movimenti sottili e continui.

---

## Struttura del File

- **index.html**: pagina singola con SVG inline e script di animazione
- **anime.min.js**: libreria anime.js v4 (CDN o file locale)
- **style.css**: stili minimali per il layout

---

## Sezione Gialla — Il Mondo Felice

| Gruppo SVG | Elementi | Animazione | Parametri |
|---|---|---|---|
| **palloncinisinistra_giallo** | 3 ellissi, poligoni | Fluttuano verso l'alto con dondolio Y + oscillazione X | duration: 3000ms, loop, easing: easeInOutSine |
| **palloncini2_giallo** | 4 ellissi, poligoni | Fluttuano verso l'alto con ritardo | duration: 3500ms, delay: 200ms |
| **lucisinistra_giallo** | 14 luci (cerchi/rect) | Pulsazione scala 1→1.2→1, opacità 0.8→1 | duration: 800ms, loop, alternata |
| **lucidestra_giallo** | 14 luci (speculari) | Stessa pulsazione, ritardo 400ms | duration: 800ms, delay: 400ms |
| **bandierinesinistra_giallo** | 5 bandierine | Rotazione ±8deg con trasform-origin bottom | duration: 2000ms, loop, direction: alternate |
| **bandierinedestra_giallo** | 4 bandierine | Rotazione ±8deg, ritardo 300ms | duration: 2000ms, delay: 300ms |
| **bandierina_giallo** | Bandierina centrale | Rotazione ±10deg, più ampia | duration: 2500ms |
| **filosinistra_giallo** | Path del tightrope | Onda verticale: translateY ±5px | duration: 3000ms, easing: easeInOutQuad |
| **filodestra_giallo** | Path del tightrope | Onda verticale: translateY ±5px, ritardo 500ms | duration: 3000ms, delay: 500ms |
| **tendone_giallo** | Tendone + decorazioni | Leggero ingrandimento ritmico scale 1→1.01 | duration: 4000ms, loop |
| **Personaggi** | elefante, scimmia, pagliacci, leone, palla | Scale 1→1.02→1, "respiro" | duration: 3000ms, loop |

### Dettagli Personaggi Gialli
- **elefante_giallo**: scale 1→1.015, durata 3.5s
- **scimmia_giallo**: scale 1→1.02, durata 2.8s, leggero translateY -3px
- **pagliaccio1_giallo, pagliaccio2_giallo, pagliaccio3_giallo**: scale 1→1.02, durata 3s
- **leone_giallo**: scale 1→1.01, durata 4s (più lento, maestoso)
- **palla_giallo**: scale 1→1.03, durata 2s (leggera, vivace)

---

## Sezione Nera — Il Mondo Triste

| Gruppo SVG | Elementi | Animazione | Parametri |
|---|---|---|---|
| **lucisinistra_nero** | 5 luci | Pulsazione lenta: scala 1→1.05, opacità 0.3→0.6 | duration: 3000ms, loop |
| **lucidestra_nero** | 5 luci | Stessa pulsazione, ritardo 600ms | duration: 3000ms, delay: 600ms |
| **bandierinesinistra_nero** | 5 bandierine | Movimento pesante: rotazione ±3deg, raro | duration: 5000ms, loop |
| **bandierinedestra_nero** | 6 bandierine | Movimento pesante, ritardo 400ms | duration: 5000ms, delay: 400ms |
| **bandierina_nero** | Bandierina centrale | Oscillazione minima ±2deg | duration: 6000ms |
| **filosinistra_nero** | Path | Onda lenta: translateY ±2px | duration: 6000ms, easing: linear |
| **filodestra_nero** | Path | Onda lenta, ritardo 800ms | duration: 6000ms, delay: 800ms |
| **tendone_nero** | Tendone | Oscillazione minima scale 1→1.005 | duration: 8000ms |
| **Personaggi** | Tutti | **Tremolio impercettibile**: translateX/Y ±0.5px | duration: 200ms, loop, random |

### Dettagli Personaggi Neri
- **elefante_nero**: tremolio ±0.3px, durata 150ms
- **scimmia_nero**: tremolio ±0.5px, durata 180ms
- **pagliaccio1_nero, pagliaccio2_nero, pagliaccio3_nero**: tremolio ±0.4px, durata 200ms
- **leone_nero**: tremolio ±0.2px, durata 250ms (più statico)
- **palla_nero**: tremolio ±0.5px, durata 160ms

---

## Parametri Globali

- **Libreria:** anime.js v4 (CDN o file locale nella cartella)
- **Strategia di targeting:** Selettori CSS sui `id` dei gruppi SVG
- **transform-origin:** `center center` per default, `bottom center` per bandierine
- **Loop:** Tutte le animazioni sono infinite (`loop: true`)
- **Direction:** Alternate dove applicabile
- **Easing:**
  - Giallo: `easeInOutSine`, `easeInOutQuad`
  - Nero: `linear`, `easeOutQuad`

---

## Layout HTML

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
    <!-- SVG circo.svg inline -->
  </div>
  <script src="anime.min.js"></script>
  <script src="animations.js"></script>
</body>
</html>
```

### CSS Minimal
- `body`: background #000 o #fff a seconda del contesto
- `#circo-container`: centrato, max-width 100vw, overflow hidden
- `svg`: width 100%, height auto, display block

---

## Note Implementazione

1. **SVG inline necessario**: per poter selezionare i gruppi con querySelector e applicare transform CSS/JS.
2. **anime.js v4 API**: usa `anime({ targets: '#id', ... })` con proprietà come `translateY`, `scale`, `rotate`, `opacity`.
3. **Performance**: le animazioni sono tutte su `transform` e `opacity` (GPU-accelerated).
4. **Fallback**: se anime.js non carica, il SVG rimane statico e visibile.
5. **Nessun server**: tutti i file sono locali, nessuna dipendenza esterna se anime.js viene scaricato in locale.

---

## Obiettivi di Successo

- [ ] La parte gialla appare viva, festosa, leggera
- [ ] La parte nera appare spenta, malinconica, pesante
- [ ] Il contrasto è immediato anche senza spiegazioni
- [ ] Il file funziona aprendo index.html direttamente nel browser
- [ ] Le animazioni non vanno in conflitto (nessun glitch visivo)
