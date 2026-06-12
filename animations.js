document.addEventListener('DOMContentLoaded', function() {

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
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });

  anime({
    targets: ['#filodestra_giallo', '#bandierinedestra_giallo', '#lucidestra_giallo'],
    rotate: [-10, 8],
    duration: 2500,
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
      duration: 2500,
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
    duration: 4000,
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
    duration: 1500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });
  // Camminata fluida e seamless, stessa durata della palla

  anime({
    targets: '#elefante_giallo',
    translateY: [-5, 2],
    rotate: [-4, 4],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });

  // ============ PARTE GIALLA — PAGLIACCIO 3 + PALLONCINI DESTRA ============





  // ============ PARTE GIALLA — PAGLIACCIO 1 (sospeso dai palloncini) ============
  var pag1g = document.querySelector('#pagliaccio1_giallo');
  if (pag1g) pag1g.style.transformOrigin = '183px 326px';

  anime({
    targets: '#pagliaccio1_giallo',
    translateY: [0, 15],
    rotate: [-3, 3],
    duration: 4000,
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
    duration: 3500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 200
  });

  // ============ PARTE GIALLA — PAGLIACCIO 3 (sospeso dai palloncini) ============
  var pag3g = document.querySelector('#pagliaccio3_giallo');
  if (pag3g) pag3g.style.transformOrigin = '1104px 286px';

  anime({
    targets: '#pagliaccio3_giallo',
    translateY: [0, 18],
    rotate: [-4, 4],
    duration: 4500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 400
  });

  // ============ PARTE NERA — SISTEMA SINISTRA: FILO + BANDIERINE + LUCI ATTACCATE ============

  anime({
    targets: ['#filosinistra_nero', '#bandierinesinistra_nera', '#lucisinistra_nero'],
    translateY: [-2, 2],
    duration: 4000,
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
        { value: 0.05, duration: 500 },
        { value: 1, duration: 100 },
        { value: 0.1, duration: 150 },
        { value: 1, duration: 100 },
        { value: 0.05, duration: 400 },
        { value: 0.8, duration: 100 },
        { value: 0.05, duration: 1000 }
      ],
      duration: 3000 + Math.random() * 3000,
      loop: true,
      easing: 'steps(1)',
      delay: ritardo
    });
  });

  // ============ PARTE NERA — SISTEMA DESTRA: FILO + BANDIERINE + LUCI ATTACCATE ============

  anime({
    targets: ['#filodestra_nero', '#bandierinedestra_nero', '#lucidestra_nero'],
    translateY: [-2, 2],
    duration: 4500,
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
        { value: 0.05, duration: 600 },
        { value: 1, duration: 100 },
        { value: 0.1, duration: 200 },
        { value: 1, duration: 100 },
        { value: 0.05, duration: 500 },
        { value: 0.9, duration: 100 },
        { value: 0.05, duration: 1250 }
      ],
      duration: 3500 + Math.random() * 3000,
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
    duration: 4000,
    loop: true,
    easing: 'linear'
  });

  // ============ PARTE NERA — PAGLIACCIO 1 (dondola appeso) ============
  var pag1 = document.querySelector('#pagliaccio1_nero');
  if (pag1) pag1.style.transformOrigin = '194px 2038px';

  anime({
    targets: '#pagliaccio1_nero',
    rotate: [-5, 5],
    duration: 1500,
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
    duration: 1750,
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
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: 300
  });

  // ============ PARTE NERA — BANDIERINA CENTRALE (tendone nero fermo) ============

  anime({
    targets: '#bandierina_nero',
    translateY: [-2, 2],
    rotate: [-0.8, 0.8],
    duration: 5000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });



});
