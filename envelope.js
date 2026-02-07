(function () {
  var intro = document.getElementById('valentine-intro');
  var container = document.getElementById('envelope-container');
  var enterBtn = document.getElementById('enter-btn');
  var main = document.getElementById('main-carousels');
  var valentineAudio = document.getElementById('valentine-audio'); // optional: set .src and call .play() when needed

  if (!intro || !container || !enterBtn || !main) return;

  function openEnvelope() {
    if (container.classList.contains('opened')) return;
    container.classList.add('opened');
    // Optional: play background music when envelope opens – e.g. valentineAudio.play();
    setTimeout(function () {
      enterBtn.classList.add('visible');
    }, 1200);
  }

  function goToCarousels() {
    // Optional: play or fade in audio when entering carousels – e.g. valentineAudio.play();
    intro.classList.add('hidden');
    main.hidden = false;
    main.classList.add('visible');
    document.dispatchEvent(new CustomEvent('carousels-visible'));
  }

  container.addEventListener('click', openEnvelope);
  enterBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    goToCarousels();
  });
})();
