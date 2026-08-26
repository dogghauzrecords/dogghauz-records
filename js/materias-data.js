/* ============================================================
   MATÉRIAS — cobertura de imprensa sobre a DoggHaüz Records.
   Levantamento por busca (checado 24 ago 2026). Imagens salvas
   direto das matérias originais quando disponíveis.
   ============================================================ */
(function () {
  var ARTICLES = [
    {
      outlet: "House Mag",
      date: "11 mar 2025",
      sortDate: "2025-03-11",
      featured: true,
      title: "O que esperar da estreia da Dogghaüz no Gate 22 com Mochakk, Cesar Nardini, Jay Mariani, Sterium e SHE MLLR",
      titleEn: "What to expect from DoggHaüz's debut at Gate 22 with Mochakk, Cesar Nardini, Jay Mariani, Sterium and SHE MLLR",
      titleEs: "Qué esperar del debut de DoggHaüz en Gate 22 con Mochakk, Cesar Nardini, Jay Mariani, Sterium y SHE MLLR",
      excerpt: "Perfil de cada nome do line-up da estreia da DoggHaüz no Gate 22 (Campinas), num universo que mistura house, tech house e cultura urbana.",
      url: "https://www.housemag.com.br/o-que-esperar-da-estreia-da-dogghauz-no-gate-22-com-mochakk-cesar-nardini-jay-mariani-sterium-e-she-mllr/",
      img: "housemag-gate22.jpg",
    },
    {
      outlet: "Alataj",
      date: "27 fev 2024",
      sortDate: "2024-02-27",
      featured: true,
      title: "Criatividade e irreverência marcam a jornada da Dogghaüz Records até aqui",
      titleEn: "Creativity and irreverence mark DoggHaüz Records' journey so far",
      titleEs: "Creatividad e irreverencia marcan el recorrido de DoggHaüz Records hasta ahora",
      excerpt: "A matéria mais completa sobre a origem do selo: nascido em 2020 de uma sessão de estúdio, o \"som de Pitbull\" que virou manifesto e mais de 50 lançamentos depois.",
      url: "https://alataj.com.br/trend/criatividade-e-irreverencia-marcam-a-jornada-da-dogghauz-records-ate-aqui",
      img: "alataj-dogghauz.jpg",
    },
    {
      outlet: "Play BPM",
      date: "12 mar 2025",
      sortDate: "2025-03-12",
      title: "O que esperar da estreia da Dogghaüz no Gate 22",
      titleEn: "What to expect from DoggHaüz's debut at Gate 22",
      titleEs: "Qué esperar del debut de DoggHaüz en Gate 22",
      excerpt: "Cobertura-irmã do mesmo showcase, com detalhes de local, horário e ingressos — \"selo vibrante e influenciado pela cultura de rua\".",
      url: "https://playbpm.com.br/noticias/dogghauz-no-gate-22/",
      img: "playbpm-gate22.jpg",
    },
    {
      outlet: "WeGoOut",
      date: "13 jun 2023",
      sortDate: "2023-06-15",
      title: "The Dog House Showcase by DoggHaüz Records chega a São Paulo",
      titleEn: "The Dog House Showcase by DoggHaüz Records arrives in São Paulo",
      titleEs: "The Dog House Showcase de DoggHaüz Records llega a São Paulo",
      excerpt: "Primeira edição paulistana do showcase — 13 horas de festa num prédio histórico do Centro, misturando música, arte visual e lifestyle.",
      url: "https://wegoout.com.br/noticias/the-dog-house-showcase",
      img: "wegoout-saopaulo.jpg",
    },
    {
      outlet: "House Mag",
      date: "29 ago 2022",
      sortDate: "2022-08-29",
      title: "O início de um novo ciclo na gravadora brasileira DoggHaüz Records",
      titleEn: "The start of a new cycle at Brazilian label DoggHaüz Records",
      titleEs: "El inicio de un nuevo ciclo en el sello brasileño DoggHaüz Records",
      excerpt: "Depois de dois anos focada em lançamentos, a DoggHaüz retoma os showcases itinerantes com uma data em Porto Velho (RO).",
      url: "https://www.housemag.com.br/house-mag-o-inicio-de-um-novo-ciclo-na-gravadora-brasileira-dogghauz-records/",
      img: "housemag-novociclo.png",
    },
    {
      outlet: "Gray Area Magazine",
      date: "29 mai 2025",
      sortDate: "2025-05-29",
      title: "Mochakk Calling: Exclusive Interview on the Line",
      excerpt: "Mochakk fala sobre criar a DoggHaüz ao lado dos melhores amigos para dar espaço a produtores brasileiros: \"building something bigger with all the DJs and producers we think are really killing it in the Brazilian scene\".",
      url: "https://grayarea.co/magazine/mochakk-calling-exclusive-interview-on-the-line",
    },
    {
      outlet: "Mixmag.net",
      date: "19 ago 2025",
      sortDate: "2025-08-19",
      title: "Mochakk has found his calling",
      excerpt: "Perfil de capa do Mochakk confirma o selo entre seus projetos: \"he's started his own record label, Dogghaüz\".",
      url: "https://mixmag.net/feature/mochakk-cover-feature-mozambique-interview-mixmag-lab-brazilian-dj",
    },
    {
      outlet: "House Mag",
      date: "27 ago 2020",
      sortDate: "2020-08-27",
      title: "Who let the dogs out? Gravadora DoggHauz Records estreia com festival online",
      titleEn: "Who let the dogs out? DoggHaüz Records label debuts with online festival",
      titleEs: "Who let the dogs out? El sello DoggHaüz Records debuta con festival online",
      excerpt: "Estreia da DoggHaüz — fundada por Mochakk, Jay Mariani e Cesar Nardini — com o lançamento \"This Is Not a Simulation\" e festa de lançamento online.",
      url: "https://housemag.com.br/6760-who-let-the-dogs-out-gravadora-dogghauz-records-estreia-com-festival-online/",
    },
  ];

  function titleFor(a) {
    var lang = window.DGGZ_LANG ? window.DGGZ_LANG.get() : "pt";
    if (lang === "en" && a.titleEn) return a.titleEn;
    if (lang === "es" && a.titleEs) return a.titleEs;
    return a.title;
  }

  function t(s) {
    return window.DGGZ_LANG ? window.DGGZ_LANG.t(s) : s;
  }

  function card(a, big) {
    return (
      '<a class="mat-card' + (big ? " mat-featured" : "") + '" href="' + a.url + '" target="_blank" rel="noopener">' +
      (big ? '<div class="mat-featured-tag">' + t("Destaque") + "</div>" : "") +
      (a.img ? '<div class="mat-thumb"><img src="/assets/dogghauz/materias/' + a.img + '" alt="" loading="lazy"></div>' : "") +
      '<div class="mat-body">' +
      '<div class="mat-outlet">' + a.outlet + " · " + a.date + "</div>" +
      '<div class="mat-title">' + titleFor(a) + "</div>" +
      (a.excerpt ? '<div class="mat-excerpt">' + a.excerpt + "</div>" : "") +
      "</div>" +
      "</a>"
    );
  }

  function render() {
    var grid = document.getElementById("mat-grid");
    if (!grid) return;
    var featured = ARTICLES.filter(function (a) { return a.featured; });
    var chrono = ARTICLES.slice().sort(function (a, b) { return b.sortDate.localeCompare(a.sortDate); });
    var html = "";
    if (featured.length) {
      html += '<div class="store-section-head"><div class="store-section-title">' + t("Destaque") + "</div></div>";
      html += '<div class="mat-grid-inner mat-featured-grid">' + featured.map(function (a) { return card(a, true); }).join("") + "</div>";
    }
    html += '<div class="store-section-head"><div class="store-section-title">' + t("Todas as matérias") + "</div></div>";
    html += '<div class="mat-grid-inner">' + chrono.map(function (a) { return card(a, false); }).join("") + "</div>";
    grid.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
  document.addEventListener("langchange", render);
})();
