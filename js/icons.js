/* ============================================================
   ICONS — glifos SVG monocromáticos de plataforma, reusados em
   Músicas, Releases em destaque e no rodapé de Plataformas.
   ============================================================ */
(function () {
  var ICONS = {
    spotify: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9.5"/><path d="M6.8 9.8c3.6-1 7.2-.7 9.9.9"/><path d="M7.3 13c3-.8 5.9-.6 8.1.8"/><path d="M8 16c2.3-.6 4.5-.4 6.2.6"/></svg>',
    apple: '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M16 3.5v10.9a3.3 3.3 0 1 1-2-3V7.8l-5 1.2v6.4a3.3 3.3 0 1 1-2-3V5.2l9-1.7z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><polygon points="10,9.3 15.5,12 10,14.7" fill="currentColor" stroke="none"/></svg>',
    beatport: '<svg viewBox="0 0 22 28" width="11" height="14" fill="currentColor"><path d="M22 19.8977C21.9962 21.2183 21.6783 22.5181 21.0738 23.6845C20.4691 24.8508 19.596 25.8488 18.5301 26.5919C17.4641 27.3348 16.2374 27.8006 14.9561 27.9487C13.6748 28.0968 12.3777 27.9229 11.1768 27.442C9.97588 26.961 8.90752 26.1876 8.06422 25.1886C7.2209 24.1896 6.6281 22.9952 6.33699 21.7086C6.04592 20.4222 6.06538 19.0824 6.39366 17.8053C6.72198 16.5282 7.34925 15.3523 8.22116 14.3795L2.82452 19.8977L0 17.0049L6.06685 10.8626C6.46673 10.4536 6.78283 9.96689 6.99656 9.43114C7.21034 8.89538 7.31739 8.32122 7.31156 7.74244V0H11.2894V7.71569C11.307 8.8329 11.1009 9.94202 10.684 10.9746C10.2672 12.0073 9.64813 12.9415 8.86527 13.7198L8.68683 13.9025C9.82565 12.8426 11.2401 12.1436 12.7587 11.8899C14.2774 11.6362 15.8353 11.8388 17.2439 12.4732C18.6525 13.1075 19.8515 14.1463 20.6956 15.464C21.5396 16.7817 21.9927 18.3217 22 19.8977ZM18.3964 19.8977C18.405 19.0142 18.1571 18.1481 17.6842 17.4093C17.2112 16.6704 16.5346 16.0921 15.7402 15.7479C14.9457 15.4037 14.0693 15.3091 13.2222 15.4761C12.3751 15.6429 11.5957 16.0639 10.9826 16.6855C10.3695 17.307 9.95069 18.1012 9.77925 18.967C9.60778 19.8328 9.69139 20.7313 10.0194 21.5485C10.3476 22.3655 10.9053 23.0643 11.6219 23.5561C12.3385 24.0478 13.1817 24.3105 14.0443 24.3105C14.6136 24.3158 15.1783 24.2056 15.7058 23.9862C16.2333 23.7669 16.7133 23.4428 17.1179 23.0326C17.5225 22.6223 17.8436 22.1341 18.0632 21.596C18.2826 21.0579 18.3959 20.4808 18.3964 19.8977Z"/></svg>',
    soundcloud: '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><rect x="2.5" y="13" width="1.8" height="5"/><rect x="5.5" y="11" width="1.8" height="7"/><rect x="8.5" y="8" width="1.8" height="10"/><rect x="11.5" y="9.5" width="1.8" height="8.5"/><path d="M14.5 18v-8.2c.5-.2 1.1-.3 1.7-.3 2.6 0 4.8 2.1 4.8 4.75S18.8 19 16.2 19c-.6 0-1.2-.1-1.7-.4z"/></svg>',
    bandcamp: '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M3.5 5h11.2L21 12l-6.3 7H3.5l6.3-7-6.3-7z"/></svg>',
    traxsource: '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><rect x="3" y="11.5" width="2.6" height="6.5"/><rect x="8" y="7" width="2.6" height="11"/><rect x="13" y="3.5" width="2.6" height="14.5"/><rect x="18" y="9" width="2.6" height="9"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M14 3h2.3c.2 1.7 1.4 3 3.2 3.3v2.4c-1.2 0-2.3-.4-3.2-1v6.8a5 5 0 1 1-5-5c.2 0 .5 0 .7.05v2.5a2.5 2.5 0 1 0 2 2.45V3z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M14 22v-8h2.7l.4-3H14V9c0-.9.2-1.5 1.5-1.5H17V5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8V11H8.5v3H11v8h3z"/></svg>',
  };
  var PLATFORM_META = {
    spotify: { name: "Spotify" },
    apple: { name: "Apple Music" },
    youtube: { name: "YouTube" },
    beatport: { name: "Beatport" },
    soundcloud: { name: "SoundCloud" },
    bandcamp: { name: "Bandcamp" },
    traxsource: { name: "Traxsource" },
  };
  var PLATFORM_ORDER = ["spotify", "apple", "youtube", "beatport", "soundcloud", "bandcamp", "traxsource"];

  function platformLinks(title, r) {
    var q = encodeURIComponent("Jay Mariani " + title);
    var urls = {
      spotify: (r && r.spotify) || ("https://open.spotify.com/search/" + q),
      apple: "https://music.apple.com/search?term=" + q,
      youtube: "https://www.youtube.com/results?search_query=" + q,
      beatport: "https://www.beatport.com/search?q=" + q,
      soundcloud: (r && r.soundcloud) || ("https://soundcloud.com/search?q=" + q),
      bandcamp: (r && r.bandcamp) || "https://jaymariani.bandcamp.com",
      traxsource: "https://www.traxsource.com/search?term=" + q,
    };
    return PLATFORM_ORDER.map(function (k) { return { key: k, url: urls[k], meta: PLATFORM_META[k] }; });
  }

  function iconsRowHtml(title, r, cls) {
    return (
      '<div class="' + (cls || "mus-icons") + '">' +
      platformLinks(title, r).map(function (p) {
        return '<a class="mus-ic" href="' + p.url + '" target="_blank" rel="noopener" title="' + p.meta.name + '" onclick="event.stopPropagation()">' + ICONS[p.key] + "</a>";
      }).join("") +
      "</div>"
    );
  }

  /* PREVIEW PLAYER — capa clicável toca um trecho embutido (Spotify ou
     SoundCloud, o que a faixa tiver); os ícones de plataforma continuam
     levando pra faixa inteira. Compartilhado entre Músicas e os
     releases em destaque da Início. */
  function spotifyEmbedSrc(url) {
    var m = url && url.match(/open\.spotify\.com\/(album|track)\/([a-zA-Z0-9]+)/);
    return m ? "https://open.spotify.com/embed/" + m[1] + "/" + m[2] + "?utm_source=generator&theme=0" : null;
  }

  function soundcloudEmbedSrc(url) {
    return (
      "https://w.soundcloud.com/player/?url=" + encodeURIComponent(url) +
      "&color=%23ffffff&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
    );
  }

  function previewFor(r) {
    var sp = r && r.spotify && spotifyEmbedSrc(r.spotify);
    if (sp) return { src: sp, height: 80 };
    if (r && r.soundcloud) return { src: soundcloudEmbedSrc(r.soundcloud), height: 80 };
    return null;
  }

  /* artSelector: seletor da capa dentro do card. playingClass: classe
     aplicada ao card enquanto o preview toca (pra CSS de layout). */
  function createPreviewPlayer(artSelector, playingClass) {
    var cls = playingClass || "playing";
    var activeCard = null;

    function artInner(r, imgHtml) {
      return imgHtml + (previewFor(r) ? '<div class="mus-play-btn"><span class="mus-play-ic">▶</span></div>' : "");
    }

    function stopActive() {
      if (!activeCard) return;
      activeCard.querySelector(artSelector).innerHTML = artInner(activeCard._pRel, activeCard._pImgHtml);
      activeCard.classList.remove(cls);
      activeCard = null;
    }

    function bind(el, r, imgHtml) {
      el._pRel = r;
      el._pImgHtml = imgHtml;
      /* clicar num ícone (abre link em nova aba) também para o preview
         desse card — capturado antes do stopPropagation do próprio ícone,
         que só bloqueia a subida do evento. */
      el.addEventListener(
        "click",
        function (e) {
          if (activeCard === el && e.target.closest(".mus-ic")) stopActive();
        },
        true
      );

      var p = previewFor(r);
      if (!p) return;
      var art = el.querySelector(artSelector);
      art.classList.add("playable");
      art.addEventListener("click", function () {
        if (activeCard === el) { stopActive(); return; }
        stopActive();
        if (window.claimPlayer) window.claimPlayer(stopActive);
        /* sandbox sem allow-top-navigation/allow-popups: impede o embed de
           tentar abrir o app nativo (Spotify/SoundCloud) no celular — só
           toca ali dentro mesmo, sem o "abrir no app?" */
        art.innerHTML = '<iframe class="mus-player" src="' + p.src + '" width="100%" height="' + p.height + '" frameborder="0" allow="autoplay; encrypted-media; clipboard-write" sandbox="allow-scripts allow-same-origin" loading="lazy"></iframe>';
        el.classList.add(cls);
        activeCard = el;
      });
    }

    return { bind: bind, artInner: artInner, stopActive: stopActive, previewFor: previewFor };
  }

  window.SITE_ICONS = ICONS;
  window.platformLinks = platformLinks;
  window.iconsRowHtml = iconsRowHtml;
  window.previewFor = previewFor;
  window.createPreviewPlayer = createPreviewPlayer;
})();
