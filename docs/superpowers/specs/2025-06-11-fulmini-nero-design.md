# Fulmini e Lampi nella Parte Nera — Design Spec

## Obiettivo
Aggiungere fulmini stilizzati a linea e flash di luce improvvisi nella parte nera del manifesto circo, per creare un'atmosfera tempestosa e drammatica.

## Architettura
- Gruppo SVG `<g id="fulmini_nero">` inserito subito dopo `sfondo_nero` dentro `<g id="Nero">`, così i fulmini sono sopra lo sfondo nero ma sotto tutti gli altri elementi (tendone, pagliacci, testo2, ecc.).
- ~12 path SVG a zig-zag stilizzati, colori bianchi/viola/azzurri, stroke variabile 1–3px.
- Rettangolo flash bianco semi-trasparente (`opacity=0` di default) sopra lo sfondo nero.
- Tutte le animazioni gestite da anime.js con `opacity` rapida, delay random, loop infinito.

## Elementi SVG

### Fulmini (path)
- Colori: `#FFFFFF` (60%), `#A5B4FC` (30%), `#E0E7FF` (10%)
- `fill="none"`, `stroke-linecap="round"`, `stroke-linejoin="round"`
- `stroke-width` 1px–3px (variabile per profondità)
- Coordinate y: 1020–1980 (tutta l'altezza nera)
- Coordinate x: 70–1150 (sparsi orizzontalmente)
- Forma: zig-zag spezzato, angoli acuti, 4–7 segmenti ciascuno

### Flash di illuminazione (rect)
- `id="flash_nero"`
- `x="68.74" y="1016.81" width="1086" height="966.5"`
- `fill="#FFFFFF"`, `opacity="0"`
- `style="pointer-events: none"`

## Animazioni (anime.js)

### Fulmini singoli
```
targets: '#fulmini_nero path'
opacity: [0, 1, 0]
duration: 60–180ms (random per path)
delay: Math.random() * 4000 (random per path)
loop: true
easing: 'easeOutExpo'
```
Ogni path ha delay e durata indipendenti per effetto caotico.

### Flash sfondo
```
targets: '#flash_nero'
opacity: [0, 0.35, 0]
duration: 120ms
easing: 'easeOutQuad'
```
Triggerato in parallelo al fulmine con probabilità ~30%.

## Stile
- `pointer-events: none` sul gruppo per non bloccare interazioni.
- Zero modifiche agli elementi esistenti del circo.

## File coinvolti
- `index.html` — aggiunta gruppo SVG fulmini e rect flash
- `animations.v2.js` — aggiunta animazioni fulmini e flash

## Testing
- Aprire `index.html` nel browser
- Verificare che i fulmini lampeggino in modo casuale
- Verificare che il flash illumini brevemente lo sfondo
- Verificare che testo2 e altri elementi rimangano visibili sopra i fulmini
