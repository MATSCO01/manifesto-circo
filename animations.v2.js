document.addEventListener('DOMContentLoaded', function() {

  // ============ AUDIO CONTROLS ============
  var carillonAudio = document.getElementById('carillon');
  var audioToggle = document.getElementById('audio-toggle');
  var audioStarted = false;

  if (carillonAudio && audioToggle) {
    carillonAudio.volume = 0.7;
    carillonAudio.loop = true;

    audioToggle.addEventListener('click', function() {
      if (!audioStarted) {
        carillonAudio.play().then(function() {
          audioStarted = true;
          audioToggle.textContent = '🔊';
          audioToggle.classList.add('playing');
        }).catch(function(err) {
          console.log('Audio non avviato:', err);
        });
      } else {
        if (carillonAudio.paused) {
          carillonAudio.play();
          audioToggle.textContent = '🔊';
          audioToggle.classList.add('playing');
        } else {
          carillonAudio.pause();
          audioToggle.textContent = '🔇';
          audioToggle.classList.remove('playing');
        }
      }
    });
  }

  // Punto di ancoraggio: la bandierina rossa
  var anchorX = '624px';
  var anchorY = '257px';

  // Imposta transform-origin per gli elementi attaccati alla bandierina rossa
  document.querySelectorAll('#filosinistra_giallo, #filodestra_giallo, #bandierinesinistra_giallo, #bandierinedestra_giallo, #lucisinistra_giallo, #lucidestra_giallo').forEach(function(el) {
    el.style.transformOrigin = anchorX + ' ' + anchorY;
  });

  // Imposta transform-origin per la palla (centro esatto: cx=385.12, cy=847.17)
  var pallaEl = document.querySelector('#palla_giallo');
  if (pallaEl) {
    pallaEl.style.transformOrigin = '385.12px 847.17px';
  }


  // ============ PARTE GIALLA — BANDIERINA ROSSA FISSA ============

  // ============ PARTE GIALLA — FILI + BANDIERINE + LUCI (attaccati alla bandierina rossa) ============

  anime({
    targets: ['#filosinistra_giallo', '#bandierinesinistra_giallo', '#lucisinistra_giallo'],
    rotate: [-8, 10],
    duration: 1000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });

  anime({
    targets: ['#filodestra_giallo', '#bandierinedestra_giallo', '#lucidestra_giallo'],
    rotate: [-10, 8],
    duration: 1250,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 600
  });

  // ============ PARTE GIALLA — LUCI (illuminazione) ============

  var luciGialle = document.querySelectorAll('#lucisinistra_giallo circle, #lucisinistra_giallo rect, #lucidestra_giallo circle, #lucidestra_giallo rect');

  luciGialle.forEach(function(luce, index) {
    luce.style.opacity = '0.3';
    luce.style.filter = 'drop-shadow(0 0 6px rgba(250,167,0,0.8))';
    luce.style.filter = 'drop-shadow(0 0 6px rgba(250,167,0,0.8))';

    anime({
      targets: luce,
      opacity: [0.3, 1, 1, 0.3],
      duration: 1250,
      loop: true,
      easing: 'easeInOutQuad',
      delay: index * 200 + 500
    });
  });

  // ============ PARTE GIALLA — PALLA CHE RUOTA A 360° ============
  // La palla rimane ferma nella posizione e ruota su se stessa

  anime({
    targets: '#palla_giallo',
    rotate: '1turn',
    duration: 2000,
    loop: true,
    easing: 'linear'
  });

  // ============ PARTE GIALLA — CAPPELLO DELLA SCIMMIA CHE SI MUOVE LEGGERMENTE ============
  // Il cappello oscilla leggermente mantenendo l'inclinazione originale -26.9°

  var cappelloScimmia = document.querySelectorAll('#scimmia_giallo .cls-30');
  cappelloScimmia.forEach(function(el) {
    el.style.transformOrigin = '130px 835px';
  });

  anime({
    targets: '#scimmia_giallo .cls-30',
    rotate: {
      value: [-32, -22],
      from: -26.9
    },
    duration: 750,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });
  // Elefante giallo fermo


  // ============ PARTE GIALLA — PAGLIACCIO 1 + PALLONCINI (fil attaccato alla mano) ============
  var gruppoPag1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  gruppoPag1.id = 'gruppo_pagliaccio1';
  var pag1El = document.querySelector('#pagliaccio1_giallo');
  var palloncini1 = document.querySelector('#palloncinisinistra_giallo');
  if (pag1El && pag1El.parentNode) {
    pag1El.parentNode.insertBefore(gruppoPag1, pag1El);
    if (pag1El) gruppoPag1.appendChild(pag1El);
    if (palloncini1) gruppoPag1.appendChild(palloncini1);
  }

  // Punto di ancoraggio: convergenza dei fili dei palloncini (mano)
  gruppoPag1.style.transformOrigin = '183.25px 634.54px';
  anime({
    targets: gruppoPag1,
    rotate: [-3, 3],
    translateY: [0, 15],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });

  // ============ PARTE GIALLA — PAGLIACCIO 2 (sospeso in aria) ============
  var pag2g = document.querySelector('#pagliaccio2_giallo');
  if (pag2g) pag2g.style.transformOrigin = '850px 579px';

  anime({
    targets: '#pagliaccio2_giallo',
    translateY: [0, 12],
    rotate: [-2, 2],
    duration: 1750,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 200
  });

  // ============ PARTE GIALLA — PAGLIACCIO 3 + PALLONCINI (fil attaccato alla mano) ============
  var gruppoPag3 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  gruppoPag3.id = 'gruppo_pagliaccio3';
  var pag3El = document.querySelector('#pagliaccio3_giallo');
  var palloncini3 = document.querySelector('#palloncini2_giallo');
  if (pag3El && pag3El.parentNode) {
    pag3El.parentNode.insertBefore(gruppoPag3, pag3El);
    if (pag3El) gruppoPag3.appendChild(pag3El);
    if (palloncini3) gruppoPag3.appendChild(palloncini3);
  }

  gruppoPag3.style.transformOrigin = '1105px 574px';
  anime({
    targets: gruppoPag3,
    rotate: [-4, 4],
    translateY: [0, 18],
    duration: 2250,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 400
  });

  // ============ PARTE NERA — SISTEMA SINISTRA ============
  // Raggruppo fisicamente filo + bandierine + luci in un unico <g>
  var sistemaSinistra = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  sistemaSinistra.id = 'sistema_sinistra_nero';

  var filoS = document.querySelector('#filosinistra_nero');
  var bandierineS = document.querySelector('#bandierinesinistra_nera');
  var luciS = document.querySelector('#lucisinistra_nero');

  if (filoS && filoS.parentNode) {
    filoS.parentNode.insertBefore(sistemaSinistra, filoS);
    if (filoS) sistemaSinistra.appendChild(filoS);
    if (bandierineS) sistemaSinistra.appendChild(bandierineS);
    if (luciS) sistemaSinistra.appendChild(luciS);
  }

  // Animazione del gruppo intero (oscillazione come pendolo rovesciato)
  sistemaSinistra.style.transformOrigin = '622.68px 1783.73px';
  anime({
    targets: sistemaSinistra,
    rotate: [-6, 8],
    duration: 1250,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });

  // Luci nere sinistra — EFFETTO HORROR INTENSO
  var luciNereSinistra = document.querySelectorAll('#lucisinistra_nero path');
  luciNereSinistra.forEach(function(luce, index) {
    luce.style.opacity = '0.05';
    luce.style.filter = 'drop-shadow(0 0 12px rgba(255,0,0,1)) drop-shadow(0 0 25px rgba(255,50,0,0.8))';

    // Lampeggio horror intenso con picchi di luce
    var ritardo = Math.random() * 3000;
    
    anime({
      targets: luce,
      opacity: [
        { value: 0.05, duration: 250 },
        { value: 1, duration: 80 },
        { value: 0.1, duration: 80 },
        { value: 1, duration: 80 },
        { value: 0.05, duration: 200 },
        { value: 0.8, duration: 60 },
        { value: 0.05, duration: 500 }
      ],
      duration: 1500 + Math.random() * 3000,
      loop: true,
      easing: 'steps(1)',
      delay: ritardo
    });
  });

  // ============ PARTE NERA — SISTEMA DESTRA ============
  // Raggruppo fisicamente filo + bandierine + luci in un unico <g>
  var sistemaDestra = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  sistemaDestra.id = 'sistema_destra_nero';

  var filoD = document.querySelector('#filodestra_nero');
  var bandierineD = document.querySelector('#bandierinedestra_nero');
  var luciD = document.querySelector('#lucidestra_nero');

  if (filoD && filoD.parentNode) {
    filoD.parentNode.insertBefore(sistemaDestra, filoD);
    if (filoD) sistemaDestra.appendChild(filoD);
    if (bandierineD) sistemaDestra.appendChild(bandierineD);
    if (luciD) sistemaDestra.appendChild(luciD);
  }

  // Animazione del gruppo intero (oscillazione come pendolo rovesciato)
  sistemaDestra.style.transformOrigin = '622.68px 1783.73px';
  anime({
    targets: sistemaDestra,
    rotate: [-8, 6],
    duration: 1500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 500
  });

  // Luci nere destra — EFFETTO HORROR INTENSO
  var luciNereDestra = document.querySelectorAll('#lucidestra_nero path');
  luciNereDestra.forEach(function(luce, index) {
    luce.style.opacity = '0.05';
    luce.style.filter = 'drop-shadow(0 0 12px rgba(255,0,0,1)) drop-shadow(0 0 25px rgba(255,50,0,0.8))';

    // Lampeggio horror intenso con picchi di luce
    var ritardo = Math.random() * 3500;
    
    anime({
      targets: luce,
      opacity: [
        { value: 0.05, duration: 250 },
        { value: 1, duration: 80 },
        { value: 0.1, duration: 100 },
        { value: 1, duration: 80 },
        { value: 0.05, duration: 250 },
        { value: 0.9, duration: 60 },
        { value: 0.05, duration: 625 }
      ],
      duration: 1750 + Math.random() * 3000,
      loop: true,
      easing: 'steps(1)',
      delay: ritardo
    });
  });



  // ============ PARTE NERA — PALLA CHE RUOTA ============
  var pallaNeraEl = document.querySelector('#palla_nero');
  if (pallaNeraEl) {
    pallaNeraEl.style.transformOrigin = '394.85px 1201.8px';
  }

  anime({
    targets: '#palla_nero',
    rotate: '1turn',
    duration: 2000,
    loop: true,
    easing: 'linear'
  });

  // ============ PARTE NERA — PAGLIACCIO 1 (dondola appeso) ============
  var pag1 = document.querySelector('#pagliaccio1_nero');
  if (pag1) pag1.style.transformOrigin = '194px 2038px';

  anime({
    targets: '#pagliaccio1_nero',
    rotate: [-5, 5],
    duration: 750,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });

  // ============ PARTE NERA — PAGLIACCIO 2 (dondola appeso) ============
  var pag2 = document.querySelector('#pagliaccio2_nero');
  if (pag2) pag2.style.transformOrigin = '874px 1999px';

  anime({
    targets: '#pagliaccio2_nero',
    rotate: [-4, 4],
    duration: 875,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 200
  });

  // ============ PARTE NERA — PAGLIACCIO 3 (dondola appeso) ============
  var pag3 = document.querySelector('#pagliaccio3_nero');
  if (pag3) pag3.style.transformOrigin = '1065px 2087px';

  anime({
    targets: '#pagliaccio3_nero',
    rotate: [-4, 4],
    duration: 1000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 300
  });

  // ============ PARTE NERA — BANDIERINA CENTRALE (ferma, ancorata sul tendone) ============
  // La bandierina nera resta fissa, nessuna animazione applicata




  // ============ INSEGNE LUMINOSE — TESTO1 + TESTO2 ============
  // Nessuna animazione opacity: i testi restano sempre visibili (opacity=1)
  // Solo il bagliore drop-shadow sfarfalla come insegna al neon

  var neonStyle = document.createElement('style');
  neonStyle.textContent = [
    '@keyframes insegna-caldi {',
    '  0%,100% { filter: drop-shadow(0 0 4px rgba(255,200,50,0.5)) drop-shadow(0 0 10px rgba(255,150,0,0.35)); }',
    '  20% { filter: drop-shadow(0 0 1px rgba(255,200,50,0.2)) drop-shadow(0 0 3px rgba(255,150,0,0.15)); }',
    '  22% { filter: drop-shadow(0 0 8px rgba(255,200,50,0.7)) drop-shadow(0 0 18px rgba(255,150,0,0.5)); }',
    '  26% { filter: drop-shadow(0 0 2px rgba(255,200,50,0.3)) drop-shadow(0 0 6px rgba(255,150,0,0.2)); }',
    '  30% { filter: drop-shadow(0 0 6px rgba(255,200,50,0.65)) drop-shadow(0 0 14px rgba(255,150,0,0.4)); }',
    '  38% { filter: drop-shadow(0 0 1px rgba(255,200,50,0.15)) drop-shadow(0 0 3px rgba(255,150,0,0.1)); }',
    '  42% { filter: drop-shadow(0 0 5px rgba(255,200,50,0.6)) drop-shadow(0 0 11px rgba(255,150,0,0.35)); }',
    '  48% { filter: none; }',
    '  52% { filter: drop-shadow(0 0 7px rgba(255,200,50,0.75)) drop-shadow(0 0 15px rgba(255,150,0,0.5)); }',
    '}',
    '@keyframes insegna-freddi {',
    '  0%,100% { filter: drop-shadow(0 0 5px rgba(138,43,226,0.5)) drop-shadow(0 0 12px rgba(0,255,255,0.3)); }',
    '  12% { filter: drop-shadow(0 0 1px rgba(138,43,226,0.2)) drop-shadow(0 0 4px rgba(0,255,255,0.15)); }',
    '  16% { filter: drop-shadow(0 0 9px rgba(138,43,226,0.7)) drop-shadow(0 0 20px rgba(0,255,255,0.5)); }',
    '  22% { filter: drop-shadow(0 0 2px rgba(138,43,226,0.3)) drop-shadow(0 0 6px rgba(0,255,255,0.2)); }',
    '  28% { filter: drop-shadow(0 0 7px rgba(138,43,226,0.65)) drop-shadow(0 0 16px rgba(0,255,255,0.4)); }',
    '  34% { filter: none; }',
    '  40% { filter: drop-shadow(0 0 4px rgba(138,43,226,0.45)) drop-shadow(0 0 10px rgba(0,255,255,0.25)); }',
    '  62% { filter: drop-shadow(0 0 10px rgba(138,43,226,0.75)) drop-shadow(0 0 22px rgba(0,255,255,0.6)); }',
    '}'
  ].join('\n');
  document.head.appendChild(neonStyle);

  var t1 = document.querySelector('#testo1');
  if (t1) {
    t1.style.opacity = '1';
    t1.style.animation = 'insegna-caldi 2.5s infinite';
    // Contorno dorato opaco, meno fluo
    t1.querySelectorAll('path').forEach(function(p) {
      p.setAttribute('stroke', '#C9A227');
      p.setAttribute('stroke-width', '1.2');
      p.setAttribute('stroke-linejoin', 'round');
    });
  }

  var t2 = document.querySelector('#testo2');
  if (t2) {
    t2.style.opacity = '1';
    t2.style.animation = 'insegna-freddi 1.8s infinite';
    // Contorno freddo opaco, meno fluo
    t2.querySelectorAll('path').forEach(function(p) {
      p.setAttribute('stroke', '#48D1CC');
      p.setAttribute('stroke-width', '1');
      p.setAttribute('stroke-linejoin', 'round');
    });
  }

  // ============ GRADIENTE TRAMONTO — PARTE GIALLA ============
  var tramontoStops = [
    { id: 'tramonto-1', colors: ['#FFD700', '#FFA500', '#FF4500', '#FFD700'] },
    { id: 'tramonto-2', colors: ['#FFA500', '#FF6347', '#FFD700', '#FFA500'] },
    { id: 'tramonto-3', colors: ['#FF6347', '#FF4500', '#FFA500', '#FF6347'] }
  ];

  tramontoStops.forEach(function(stop, i) {
    var el = document.getElementById(stop.id);
    if (el) {
      anime({
        targets: el,
        stopColor: stop.colors,
        duration: 8000 + i * 500,
        easing: 'linear',
        loop: true,
        direction: 'alternate'
      });
    }
  });

  // ============ FULMINI E LAMPI NELLA PARTE NERA ============
  var fulmini = document.querySelectorAll('#fulmini_nero path');
  fulmini.forEach(function(f, i) {
    anime({
      targets: f,
      opacity: [0, 1, 0],
      duration: 250 + Math.random() * 250,
      delay: 500 + Math.random() * 3000,
      loop: true,
      easing: 'easeOutExpo'
    });
  });

  // Flash di illuminazione dello sfondo
  var flashNero = document.querySelector('#flash_nero');
  if (flashNero) {
    anime({
      targets: flashNero,
      opacity: [0, 0.25, 0],
      duration: 300 + Math.random() * 200,
      loop: true,
      easing: 'easeOutQuad',
      delay: 800 + Math.random() * 2500
    });
  }

});
