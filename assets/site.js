/* Shared behaviour for every Skyline page. Each block is guarded, because not
   every page carries a mobile nav, review cards or an estimate form. */
(function () {
  'use strict';

  // ── mobile navigation ──────────────────────────────────────────────
  var mb = document.getElementById('menuBtn');
  var mn = document.getElementById('mobileNav');
  if (mb && mn) {
    var icoOpen = mb.querySelector('.mb-open');
    var icoClose = mb.querySelector('.mb-close');
    function setNav(open) {
      mn.classList.toggle('hidden', !open);
      mb.setAttribute('aria-expanded', String(open));
      if (icoOpen) icoOpen.classList.toggle('hidden', open);
      if (icoClose) icoClose.classList.toggle('hidden', !open);
    }
    mb.addEventListener('click', function () { setNav(mn.classList.contains('hidden')); });
    mn.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setNav(false); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
    // widening back to the desktop bar should not leave the panel stranded open
    var wide = window.matchMedia('(min-width: 1024px)');
    (wide.addEventListener ? wide.addEventListener.bind(wide, 'change') : wide.addListener.bind(wide))(
      function () { if (wide.matches) setNav(false); }
    );
  }

  // ── review cards: clamp the long ones, drop the control when unneeded ──
  var cards = document.querySelectorAll('.rev');
  if (cards.length) {
    function settle() {
      cards.forEach(function (card) {
        var body = card.querySelector('.rev-body');
        var btn = card.querySelector('.rev-more');
        if (!body) return;
        if (body.scrollHeight <= body.clientHeight + 30) {
          card.classList.add('rev-short');
          if (btn) btn.remove();
        }
      });
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(settle);
    else window.addEventListener('load', settle);

    cards.forEach(function (card) {
      var btn = card.querySelector('.rev-more');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var open = card.classList.toggle('rev-open');
        btn.textContent = open ? 'Show less' : 'Read full review';
        btn.setAttribute('aria-expanded', String(open));
      });
    });
  }

  // ── estimate form (demo submit; wire to a real endpoint before launch) ──
  document.querySelectorAll('form[data-estimate]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var done = form.querySelector('.done');
      var btn = form.querySelector('button[type=submit]');
      if (done) done.classList.remove('hidden');
      if (btn) btn.textContent = 'Request sent';
    });
  });
})();
