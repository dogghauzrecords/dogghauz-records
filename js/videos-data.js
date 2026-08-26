/* ============================================================
   VÍDEOS — levantamento no YouTube sobre a DoggHaüz Records
   (checado 24 ago 2026). Embeds via youtube.com/embed, carregados
   só ao clicar (lite embed). Só um vídeo toca por vez.
   ============================================================ */
(function () {
  var VIDEOS = [
    { id: "dpdY6TWdxFA", title: "DOGGHAUZ SHOWCASE #1 @ Club Savanna", cat: "aftermovie", desc: "A primeira showcase itinerante do selo, em Rio do Sul (SC), 2021." },
    { id: "bUZGB7e7CmE", title: "Mochakk @ DOGGHAÜZ RELEASE PARTY", cat: "aftermovie", desc: "Set na festa de lançamento do single de estreia, \"This Is Not a Simulation\" (2020)." },
    { id: "qqnJ_7Nm8kQ", title: "Jay Mariani @ DoggHaüz Showcase Baroque 2024 [FULL SET]", cat: "set", desc: "Set completo na showcase do selo no Baroque Club (SC), 2024." },
    { id: "NijVjWWNjh4", title: "Mochakk — Campainhas [Tech House]", cat: "lancamento", desc: "Vídeo oficial de release solo de Mochakk pelo selo." },
    { id: "rDHyDGphBBI", title: "Nicola Calbi, Rihen — Gangsta Alcatraz (Yosef Remix) [Dogghauz Records]", cat: "lancamento", desc: "Vídeo oficial de remix lançado pelo selo." },
    { id: "FeP7Esj2XWs", title: "Pemax — Sound Of The Streetz [Dogghauz Records]", cat: "lancamento", desc: "Um dos primeiros lançamentos do catálogo do selo." },
    { id: "zHH5Xn6RUwY", title: "Jay Mariani @ DOGGHAÜZ RELEASE PARTY", cat: "set", desc: "Set na festa de lançamento do single de estreia (2020)." },
    { id: "Gl4UA7SHZOU", title: "César Nardini @ DOGGHAÜZ RELEASE PARTY", cat: "set", desc: "Set na festa de lançamento do single de estreia (2020)." },
    { id: "mVBYFx3oafw", title: "Gaba Kamer @ DOGGHAÜZ RELEASE PARTY", cat: "set", desc: "Set na festa de lançamento do single de estreia (2020)." },
    { id: "lJpGIY_C00Y", title: "Capute — Dogg Hauz Label Set (30/08/2020)", cat: "set", desc: "Set na estreia da gravadora, no lançamento de \"This Is Not a Simulation\"." },
    { id: "6K6CBPwqVF4", title: "Jay Mariani @ Dogghauz Vinil Sessions SP", cat: "set", desc: "Set no evento vinil-only da DoggHaüz em São Paulo." },
    { id: "EnB9u9R8-e4", title: "Jay Mariani @ Dogghauz Showcase | Privilège Vitória", cat: "set", desc: "Set na showcase da DoggHaüz no Privilège, em Vitória (ES)." },
    { id: "0Yn2mZw2q0o", title: "Jay Mariani — Dogghaüz Showcase @ Gate 22 | Campinas (360º VR)", cat: "set", desc: "Set em vídeo 360º na estreia da showcase no Gate 22, Campinas (SP), março de 2025." },
    { id: "CxzlJNrNNHc", title: "Pemax — Live @ Dogghauz Festival", cat: "set", desc: "Set ao vivo do Pemax em evento da DoggHaüz." },
    { id: "6EzxK9XRD6Y", title: "Dogghauz Warmsessions 2023 #003 | Yellow DJ Academy", cat: "aftermovie", desc: "Showcase da DoggHaüz na Yellow DJ Academy, Curitiba (PR), 2023." },
    { id: "vvTw8-4NkUo", title: "Dogghauz Warmsessions 2023 #002 | Yellow DJ Academy", cat: "aftermovie", desc: "Showcase da DoggHaüz na Yellow DJ Academy, Curitiba (PR), 2023." },
    { id: "J9N9VCbkPJU", title: "DGGZ Showcase | Club Vibe #002", cat: "aftermovie", desc: "Showcase da DoggHaüz na Club Vibe, Curitiba (PR)." },
    { id: "W7YwpQOYUW8", title: "Duarte b2b Jame C @ DoggHaüz at Baroque — São José, SC [RECAP]", cat: "aftermovie", desc: "Recap da showcase da DoggHaüz na Baroque (Dhun Club), São José (SC)." },
    { id: "-uO4uEZn9lk", title: "[DGG005] Victor Lou — Another", cat: "lancamento", desc: "Vídeo oficial de release do catálogo do selo." },
  ];

  var CATS = [
    { key: "all", label: "Todos" },
    { key: "aftermovie", label: "Aftermovies" },
    { key: "set", label: "Sets" },
    { key: "lancamento", label: "Lançamentos" },
  ];

  var current = "all";
  var activeCard = null;

  function cardHtml(v) {
    return (
      '<div class="vid-thumb-wrap">' +
      '<img class="vid-thumb" src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="" loading="lazy">' +
      '<div class="vid-play">▶</div>' +
      "</div>" +
      '<div class="vid-title">' + v.title + (v.desc ? '<span class="vid-desc">' + v.desc + "</span>" : "") + "</div>"
    );
  }

  function renderNav() {
    var nav = document.getElementById("vid-nav");
    if (!nav) return;
    var t = window.DGGZ_LANG ? window.DGGZ_LANG.t : function (s) { return s; };
    nav.innerHTML = CATS.map(function (c) {
      return '<div class="embed-tab' + (c.key === current ? " on" : "") + '" data-cat="' + c.key + '">' + t(c.label) + "</div>";
    }).join("");
    Array.prototype.forEach.call(nav.querySelectorAll(".embed-tab"), function (el) {
      el.addEventListener("click", function () {
        current = el.dataset.cat;
        renderNav();
        renderGrid();
      });
    });
  }

  function stopActive() {
    if (activeCard && activeCard.dataset.playing === "1") {
      var v = VIDEOS.find(function (x) { return x.id === activeCard.dataset.yt; });
      activeCard.innerHTML = cardHtml(v);
      activeCard.dataset.playing = "0";
      bindCard(activeCard, v);
    }
  }

  function bindCard(el, v) {
    el.onclick = function () {
      stopActive();
      if (window.claimPlayer) window.claimPlayer(stopActive);
      el.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + v.id + '?autoplay=1" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      el.dataset.playing = "1";
      activeCard = el;
    };
  }

  function renderGrid() {
    var grid = document.getElementById("vid-grid");
    if (!grid) return;
    activeCard = null;
    var list = current === "all" ? VIDEOS : VIDEOS.filter(function (v) { return v.cat === current; });
    grid.innerHTML = list.map(function (v) { return '<div class="vid-card" data-yt="' + v.id + '">' + cardHtml(v) + "</div>"; }).join("");
    var cards = grid.querySelectorAll(".vid-card");
    list.forEach(function (v, i) {
      cards[i].dataset.playing = "0";
      bindCard(cards[i], v);
    });
  }

  function render() {
    renderNav();
    renderGrid();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
  document.addEventListener("langchange", renderNav);
})();
