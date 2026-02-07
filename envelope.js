(function () {
  var intro = document.getElementById('valentine-intro');
  var container = document.getElementById('envelope-container');
  var enterBtn = document.getElementById('enter-btn');
  var main = document.getElementById('main-carousels');
  var valentineAudio = document.getElementById('valentine-audio');

  if (!intro || !container || !enterBtn || !main) return;

  function openEnvelope() {
    if (container.classList.contains('opened')) return;
    container.classList.add('opened');
    setTimeout(function () {
      enterBtn.classList.add('visible');
    }, 1200);
  }

  function goToCarousels() {
    if (valentineAudio && valentineAudio.src) {
      valentineAudio.play().catch(function () {});
    }
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
