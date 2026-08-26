/* ============================================================
   SHOWCASES — linha do tempo das showcases "The Dog House" /
   Dogghaüz Showcase (checado 25 ago 2026). Datas exatas só
   quando confirmadas em matéria/post; o resto fica marcado
   "data a confirmar" — sem inventar dia nem mês.
   ============================================================ */
(function () {
  var EVENTS = [
    {
      date: "2020-08-30",
      dateLabel: "30 ago 2020",
      title: "Lançamento — \"This Is Not a Simulation\"",
      place: "Online",
      desc: "Estreia da gravadora com o single-manifesto \"This Is Not a Simulation\" e um festival online reunindo mais de 20 artistas.",
      links: [
        { label: "Matéria — House Mag", url: "https://housemag.com.br/6760-who-let-the-dogs-out-gravadora-dogghauz-records-estreia-com-festival-online/" },
        { label: "Set — Jay Mariani", url: "https://www.youtube.com/watch?v=zHH5Xn6RUwY" },
        { label: "Set — César Nardini", url: "https://www.youtube.com/watch?v=Gl4UA7SHZOU" },
        { label: "Set — Gaba Kamer", url: "https://www.youtube.com/watch?v=mVBYFx3oafw" },
        { label: "Set — Capute", url: "https://www.youtube.com/watch?v=lJpGIY_C00Y" },
      ],
    },
    {
      date: "2021",
      dateLabel: "2021",
      title: "1ª showcase — Savanna Club",
      place: "Rio do Sul, SC",
      desc: "A primeira showcase presencial da DoggHaüz, ainda sem data exata confirmada publicamente.",
      links: [{ label: "Aftermovie — YouTube", url: "https://www.youtube.com/watch?v=dpdY6TWdxFA" }],
    },
    {
      date: "2022-09-10",
      dateLabel: "10 set 2022",
      title: "Showcase — Deep Soul",
      place: "Porto Velho, RO",
      desc: "Retomada das showcases itinerantes depois de dois anos focados só em lançamentos, em parceria com a produtora Deep Soul.",
      links: [{ label: "Matéria — House Mag", url: "https://www.housemag.com.br/house-mag-o-inicio-de-um-novo-ciclo-na-gravadora-brasileira-dogghauz-records/" }, { label: "Instagram — Deep Soul", url: "https://instagram.com/deepsouloficial" }],
    },
    { date: "2022-15", dateLabel: "Data a confirmar", title: "Showcase — Castelo do Café", place: "Manhuaçu, MG", desc: "Showcase em parceria com o espaço Castelo do Café.", links: [{ label: "Instagram — Castelo do Café", url: "https://instagram.com/castelodocafe" }] },
    { date: "2022-16", dateLabel: "Data a confirmar", title: "Showcase — Clube Vibe (#002)", place: "Curitiba, PR", desc: "Uma das showcases feitas em Curitiba, na casa Clube Vibe — já foi ao menos a 2ª edição por lá.", links: [{ label: "Instagram — Clube Vibe", url: "https://instagram.com/clubvibe" }, { label: "Vídeo — YouTube", url: "https://www.youtube.com/watch?v=J9N9VCbkPJU" }] },
    {
      date: "2026-08-08",
      dateLabel: "8 ago 2026",
      title: "Showcase — Meio CWB",
      place: "Curitiba, PR",
      desc: "Cesar Nardini x Jay Mariani all night, no Meio — listening bar e mini club de música em Curitiba.",
      links: [{ label: "Instagram — Meio CWB", url: "https://instagram.com/meiocwb" }],
    },
    { date: "2023-06", dateLabel: "2023", title: "Warmsessions #002 e #003 — Yellow DJ Academy", place: "Curitiba, PR", desc: "Duas edições confirmadas em 2023 na Yellow DJ Academy, escola de referência pra DJs em Curitiba — dia exato ainda não confirmado.", links: [{ label: "Instagram — Yellow DJ Academy", url: "https://instagram.com/yellowdjacademy" }, { label: "Aftermovie #002", url: "https://www.youtube.com/watch?v=vvTw8-4NkUo" }, { label: "Aftermovie #003", url: "https://www.youtube.com/watch?v=6EzxK9XRD6Y" }] },
    {
      date: "2023-07-08",
      dateLabel: "8 jul 2023",
      title: "The Dog House Showcase",
      place: "Centro Histórico, São Paulo, SP",
      desc: "Maior showcase da DoggHaüz até então — 13 horas de festa num prédio histórico do Centro de São Paulo, produção própria, misturando música, arte visual e lifestyle.",
      links: [{ label: "Matéria — WeGoOut", url: "https://wegoout.com.br/noticias/the-dog-house-showcase" }],
    },
    { date: "2023-19", dateLabel: "Data a confirmar", title: "Showcase — Privilège", place: "Vitória, ES", desc: "Showcase em parceria com a casa Privilège.", links: [{ label: "Instagram — Privilège", url: "https://instagram.com/privilegebrasil" }, { label: "Vídeo — YouTube", url: "https://www.youtube.com/watch?v=EnB9u9R8-e4" }] },
    { date: "2023-20", dateLabel: "Data a confirmar", title: "Showcase — Baroque (Dhun Club)", place: "São José, SC", desc: "Uma das duas showcases feitas em São José, na Baroque (Dhun Club).", links: [{ label: "Instagram — Dhun Club", url: "https://instagram.com/dhunclub" }, { label: "Recap — YouTube", url: "https://www.youtube.com/watch?v=W7YwpQOYUW8" }] },
    { date: "2023-21", dateLabel: "Data a confirmar", title: "Showcase — Suntimes", place: "São José, SC", desc: "Segunda showcase em São José, em parceria com o selo Suntimes.", links: [{ label: "Instagram — Suntimes", url: "https://instagram.com/suntimeslabel" }] },
    { date: "2024-01", dateLabel: "Data a confirmar", title: "Showcase internacional — Ministerium", place: "Lisboa, Portugal", desc: "Expansão internacional da DoggHaüz, com showcase no Ministerium.", links: [{ label: "Instagram — Ministerium", url: "https://instagram.com/ministeriumclub" }] },
    {
      date: "2026-02",
      dateLabel: "fev 2026",
      title: "DoggHaüz In Store Session",
      place: "Collectivinyl, São Paulo, SP",
      desc: "Evento vinil-only na loja Collectivinyl, com Cesar Nardini, Jay Mariani e PR.A.DO.",
      links: [{ label: "Instagram — Collectivinyl", url: "https://instagram.com/collectivinyl" }, { label: "Set — Jay Mariani", url: "https://www.youtube.com/watch?v=6K6CBPwqVF4" }],
    },
    {
      date: "2025-11-06",
      dateLabel: "6 nov 2025",
      title: "Showcase — LOTE",
      place: "São Paulo, SP",
      desc: "Achado no Instagram da DoggHaüz durante a pesquisa — ainda sem confirmação por uma segunda fonte, mas o post é da própria conta oficial.",
      links: [{ label: "Instagram — LOTE", url: "https://instagram.com/lote.sp" }],
    },
    {
      date: "2025-03-15",
      dateLabel: "15 mar 2025",
      title: "Estreia em São Paulo (interior) — Gate 22",
      place: "Campinas, SP",
      desc: "Mochakk apresenta a DoggHaüz Showcase no Gate 22, com Cesar Nardini, Jay Mariani, Sterium e SHE MLLR.",
      links: [{ label: "Matéria — House Mag", url: "https://www.housemag.com.br/o-que-esperar-da-estreia-da-dogghauz-no-gate-22-com-mochakk-cesar-nardini-jay-mariani-sterium-e-she-mllr/" }, { label: "Matéria — Play BPM", url: "https://playbpm.com.br/noticias/dogghauz-no-gate-22/" }, { label: "Set 360º VR — Jay Mariani", url: "https://www.youtube.com/watch?v=0Yn2mZw2q0o" }],
    },
  ];

  function item(e, i) {
    var linksHtml = (e.links || [])
      .map(function (l) { return '<a class="mus-ic" style="width:auto;padding:0 10px;border-radius:100px;font-size:10.5px;font-weight:600" href="' + l.url + '" target="_blank" rel="noopener">' + l.label + "</a>"; })
      .join("");
    return (
      '<div class="card reveal" style="margin-bottom:12px">' +
      '<div style="display:flex;gap:16px;align-items:flex-start">' +
      '<div style="flex-shrink:0;min-width:92px;font-size:12px;font-weight:700;letter-spacing:.5px;color:' + (e.dateLabel === "Data a confirmar" ? "#8a8a8a" : "inherit") + '">' + e.dateLabel + "</div>" +
      "<div>" +
      '<div class="clabel" style="margin-bottom:4px">' + e.place + "</div>" +
      '<div style="font-size:15px;font-weight:700;margin-bottom:6px">' + e.title + "</div>" +
      '<div class="bio" style="font-size:13px">' + e.desc + "</div>" +
      (linksHtml ? '<div class="mus-icons" style="margin-top:10px">' + linksHtml + "</div>" : "") +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  function render() {
    var root = document.getElementById("showcases-timeline");
    if (!root) return;
    var sorted = EVENTS.slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
    var html = sorted.map(item).join("");
    html +=
      '<div class="card reveal" style="text-align:center;margin-top:24px">' +
      '<div class="clabel">Quer levar a DoggHaüz pra sua cidade?</div>' +
      '<div class="bio" style="margin-bottom:18px">Fala com a gente pra fechar a próxima data.</div>' +
      '<a class="contact-btn whatsapp" style="display:inline-flex;margin:0 auto 10px" href="https://wa.me/5511987195639?text=' + encodeURIComponent("Oi! Quero falar sobre uma showcase da DoggHaüz Records") + '" target="_blank" rel="noopener">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.3.1-.1.05-.3 0-.4s-.5-1.2-.7-1.6-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.8 2 4.7 4.7 0 0 0 1 2.5 10.7 10.7 0 0 0 4.4 3.9c1.6.7 1.6.5 1.9.4a2.3 2.3 0 0 0 1.5-1 1.8 1.8 0 0 0 .1-1c-.1-.2-.2-.2-.4-.3z"/></svg>' +
      "WhatsApp — DoggHaüz" +
      "</a>" +
      '<div style="font-size:12.5px;color:#8a8a8a;margin-top:6px">dogghauzrecords@gmail.com</div>' +
      "</div>";
    root.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
