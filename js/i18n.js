/* ============================================================
   I18N — tradução PT/EN/ES do site da DoggHaüz Records. Chave do
   dicionário é o próprio texto em português (o que já está no
   HTML); troca de idioma só reescreve o textContent dos elementos
   marcados com [data-i18n], mais alguns pontos de conteúdo
   dinâmico (matérias, vídeos, artistas) que escutam o evento
   "langchange" e usam window.DGGZ_LANG.t() pra re-renderizar.
   Fica salvo em localStorage — só nesse navegador, não sincroniza
   entre aparelhos nem é lido por ninguém além de quem acessa.
   ============================================================ */
(function () {
  var STRINGS = {
    "Início": { en: "Home", es: "Inicio" },
    "Matérias": { en: "Press", es: "Prensa" },
    "Vídeos": { en: "Videos", es: "Vídeos" },
    "Artistas": { en: "Artists", es: "Artistas" },
    "Selo · Coletivo · Brasil": { en: "Label · Collective · Brazil", es: "Sello · Colectivo · Brasil" },
    "Movimento legitimamente brasileiro, criado para ir na contramão dos padrões estéticos e musicais.": {
      en: "A genuinely Brazilian movement, built to go against the grain of aesthetic and musical standards.",
      es: "Un movimiento genuinamente brasileño, creado para ir a contramano de los estándares estéticos y musicales.",
    },
    "Fundação · pandemia de 2020": { en: "Founded · during the 2020 pandemic", es: "Fundación · pandemia de 2020" },
    'Nasceu de uma sessão de estúdio entre Mochakk, Cesar Nardini e Jay Mariani — três amigos cansados de um mercado saturado, em busca de originalidade. O single de estreia, "This Is Not a Simulation", virou manifesto.': {
      en: 'Born out of a studio session between Mochakk, Cesar Nardini and Jay Mariani — three friends tired of a saturated market, chasing originality. The debut single, "This Is Not a Simulation", became a manifesto.',
      es: 'Nació de una sesión de estudio entre Mochakk, Cesar Nardini y Jay Mariani — tres amigos cansados de un mercado saturado, en busca de originalidad. El sencillo debut, "This Is Not a Simulation", se convirtió en manifiesto.',
    },
    "DOGGHAÜZ RECORDS · DESDE 2020": { en: "DOGGHAÜZ RECORDS · SINCE 2020", es: "DOGGHAÜZ RECORDS · DESDE 2020" },
    "Fundadores": { en: "Founders", es: "Fundadores" },
    "TRÊS AMIGOS, UM SELO": { en: "THREE FRIENDS, ONE LABEL", es: "TRES AMIGOS, UN SELLO" },
    "Alguns nomes do catálogo": { en: "Some names from the catalog", es: "Algunos nombres del catálogo" },
    "52+ LANÇAMENTOS · VER TODOS EM ARTISTAS": { en: "52+ RELEASES · SEE ALL UNDER ARTISTS", es: "52+ LANZAMIENTOS · VER TODOS EN ARTISTAS" },
    "Showcases": { en: "Showcases", es: "Showcases" },
    "de ponta a ponta": { en: "coast to coast", es: "de punta a punta" },
    "· Ministerium": { en: " · Ministerium", es: " · Ministerium" },
    "Savanna Club (Rio do Sul), São José (2x), Porto Velho, Manhuaçu, Curitiba, Vitória, São Paulo e Gate 22 (Campinas) — além de uma showcase no Ministerium, em Portugal.": {
      en: "Savanna Club (Rio do Sul), São José (2x), Porto Velho, Manhuaçu, Curitiba, Vitória, São Paulo and Gate 22 (Campinas) — plus a showcase at Ministerium, in Portugal.",
      es: "Savanna Club (Rio do Sul), São José (2x), Porto Velho, Manhuaçu, Curitiba, Vitória, São Paulo y Gate 22 (Campinas) — además de una showcase en Ministerium, en Portugal.",
    },
    "O que é a DoggHaüz Records": { en: "What is DoggHaüz Records", es: "Qué es DoggHaüz Records" },
    'A DoggHaüz Records nasceu em 2020, em plena pandemia, de uma sessão de estúdio entre Mochakk, Cesar Nardini e Jay Mariani — três amigos cansados de um mercado saturado e em busca de originalidade. O single de estreia, "This Is Not a Simulation", funcionou como manifesto: uma gravadora brasileira nascida junto ao próprio movimento que pretendia provocar, vendo a liberdade como essência para se comunicar através da música, do visual, da arte e do lifestyle.': {
      en: 'DoggHaüz Records was born in 2020, in the middle of the pandemic, from a studio session between Mochakk, Cesar Nardini and Jay Mariani — three friends tired of a saturated market and chasing originality. The debut single, "This Is Not a Simulation", worked as a manifesto: a Brazilian label born alongside the very movement it meant to provoke, seeing freedom as the essence for communicating through music, visuals, art and lifestyle.',
      es: 'DoggHaüz Records nació en 2020, en plena pandemia, de una sesión de estudio entre Mochakk, Cesar Nardini y Jay Mariani — tres amigos cansados de un mercado saturado y en busca de originalidad. El sencillo debut, "This Is Not a Simulation", funcionó como manifiesto: un sello brasileño nacido junto al propio movimiento que pretendía provocar, viendo la libertad como esencia para comunicarse a través de la música, lo visual, el arte y el lifestyle.',
    },
    'Desde então, o selo já soma mais de 50 lançamentos entre house, tech house e minimal deep tech, revelando nomes como Victor Lou, Jho Roscioli, Guilherme Rossi, Duarte, Lucious e Kaddu — sempre com a mesma lógica: dar espaço a talentos brasileiros fora do circuito óbvio. Como resume Mochakk, a ideia sempre foi "building something bigger with all the DJs and producers we think are really killing it in the Brazilian scene".': {
      en: 'Since then, the label has racked up more than 50 releases across house, tech house and minimal deep tech, breaking names like Victor Lou, Jho Roscioli, Guilherme Rossi, Duarte, Lucious and Kaddu — always with the same logic: giving space to Brazilian talent outside the obvious circuit. As Mochakk puts it, the idea was always "building something bigger with all the DJs and producers we think are really killing it in the Brazilian scene".',
      es: 'Desde entonces, el sello ya suma más de 50 lanzamientos entre house, tech house y minimal deep tech, revelando nombres como Victor Lou, Jho Roscioli, Guilherme Rossi, Duarte, Lucious y Kaddu — siempre con la misma lógica: dar espacio a talentos brasileños fuera del circuito obvio. Como resume Mochakk, la idea siempre fue "building something bigger with all the DJs and producers we think are really killing it in the Brazilian scene".',
    },
    "Fora do estúdio, a DoggHaüz virou também um coletivo itinerante. As showcases \"The Dog House\" já passaram por Savanna Club (Rio do Sul), São José (2x), Porto Velho, Manhuaçu, Curitiba, Vitória, São Paulo e Gate 22 (Campinas) — além de uma showcase internacional no Ministerium, em Portugal.": {
      en: 'Outside the studio, DoggHaüz also became a traveling collective. The "The Dog House" showcases have already played Savanna Club (Rio do Sul), São José (2x), Porto Velho, Manhuaçu, Curitiba, Vitória, São Paulo and Gate 22 (Campinas) — plus an international showcase at Ministerium, in Portugal.',
      es: 'Fuera del estudio, DoggHaüz también se convirtió en un colectivo itinerante. Las showcases "The Dog House" ya pasaron por Savanna Club (Rio do Sul), São José (2x), Porto Velho, Manhuaçu, Curitiba, Vitória, São Paulo y Gate 22 (Campinas) — además de una showcase internacional en Ministerium, Portugal.',
    },
    "Por trás da marca, uma equipe enxuta: Catel no visual, Gaba Kamer na distribuição e Lu Serrano na imprensa — sustentando o crescimento constante de um selo que segue com expansão internacional em curso.": {
      en: "Behind the brand, a lean team: Catel on visuals, Gaba Kamer on distribution and Lu Serrano on press — powering the steady growth of a label with international expansion underway.",
      es: "Detrás de la marca, un equipo reducido: Catel en lo visual, Gaba Kamer en distribución y Lu Serrano en prensa — sosteniendo el crecimiento constante de un sello con expansión internacional en curso.",
    },
    "Números": { en: "Numbers", es: "Números" },
    "Streams acumulados em todas as plataformas": { en: "Accumulated streams across all platforms", es: "Streams acumulados en todas las plataformas" },
    "DJs que já deram suporte às faixas do selo em sets": { en: "DJs who have already supported the label's tracks in sets", es: "DJs que ya apoyaron las pistas del sello en sets" },
    "Alcance em playlists — 542 playlists no total": { en: "Playlist reach — 542 playlists in total", es: "Alcance en playlists — 542 playlists en total" },
    "Entradas em charts": { en: "Chart entries", es: "Entradas en charts" },
    "Shazams": { en: "Shazams", es: "Shazams" },
    "Ano de fundação, em plena pandemia": { en: "Founding year, in the middle of the pandemic", es: "Año de fundación, en plena pandemia" },
    "Métricas agregadas via Songstats · ago 2026": { en: "Metrics aggregated via Songstats · Aug 2026", es: "Métricas agregadas vía Songstats · ago 2026" },
    "Showcases & palcos": { en: "Showcases & venues", es: "Showcases & escenarios" },
    "1ª showcase": { en: "1st showcase", es: "1ª showcase" },
    "Showcase": { en: "Showcase", es: "Showcase" },
    "Produção própria": { en: "Self-produced", es: "Producción propia" },
    "In-store": { en: "In-store", es: "In-store" },
    "Estreia SP": { en: "SP debut", es: "Debut SP" },
    "Contrate →": { en: "Hire us →", es: "Contrátanos →" },
    "Onde ouvir": { en: "Where to listen", es: "Dónde escuchar" },
    "Catálogo completo": { en: "Full catalog", es: "Catálogo completo" },
    "5,5K seguidores · 79 faixas": { en: "5.5K followers · 79 tracks", es: "5,5K seguidores · 79 pistas" },
    "Perfil do selo": { en: "Label profile", es: "Perfil del sello" },
    "18,9K seguidores": { en: "18.9K followers", es: "18,9K seguidores" },
    "Booking": { en: "Booking", es: "Booking" },
    "RELEASES": { en: "RELEASES", es: "LANZAMIENTOS" },
    "Discografia completa — 52 lançamentos no catálogo Beatport.": { en: "Full discography — 52 releases in the Beatport catalog.", es: "Discografía completa — 52 lanzamientos en el catálogo de Beatport." },
    "DOGGHAÜZ NA MÍDIA": { en: "DOGGHAÜZ IN THE PRESS", es: "DOGGHAÜZ EN LOS MEDIOS" },
    "ANTI MAG": { en: "ANTI MAG", es: "ANTI MAG" },
    "A revista da DoggHaüz Records — bastidores, lançamentos e a cena por dentro.": { en: "The DoggHaüz Records magazine — behind the scenes, releases and the scene from the inside.", es: "La revista de DoggHaüz Records — detrás de escena, lanzamientos y la escena por dentro." },
    "Escreva pro Anti Mag": { en: "Write for Anti Mag", es: "Escribe para Anti Mag" },
    "Escreveu uma matéria e quer publicar aqui? Manda o texto completo — passa pela nossa curadoria antes de ir pro ar, mas é a matéria de verdade que a gente recebe, pronta pra revisão.": {
      en: "Wrote an article and want to publish it here? Send the full text — it goes through our curation before going live, but it's the real piece we want, ready for review.",
      es: "¿Escribiste un artículo y quieres publicarlo aquí? Manda el texto completo — pasa por nuestra curaduría antes de publicarse, pero es el artículo de verdad que recibimos, listo para revisión.",
    },
    "Seu nome (como quer ser creditado)": { en: "Your name (how you want to be credited)", es: "Tu nombre (cómo quieres ser acreditado)" },
    "Seu e-mail": { en: "Your email", es: "Tu correo" },
    "Título da matéria": { en: "Article title", es: "Título del artículo" },
    "Escreve a matéria inteira aqui, do jeito que ela deve ser publicada": { en: "Write the whole article here, the way it should be published", es: "Escribe el artículo entero aquí, tal como debe publicarse" },
    "Link com até 3 fotos (Drive, Imgur, WeTransfer...)": { en: "Link with up to 3 photos (Drive, Imgur, WeTransfer...)", es: "Enlace con hasta 3 fotos (Drive, Imgur, WeTransfer...)" },
    "Links auxiliares / fontes (uma por linha)": { en: "Supporting links / sources (one per line)", es: "Enlaces de apoyo / fuentes (uno por línea)" },
    "Enviar matéria": { en: "Submit article", es: "Enviar artículo" },
    "VÍDEOS": { en: "VIDEOS", es: "VÍDEOS" },
    "Aftermovies, sets e lançamentos oficiais.": { en: "Aftermovies, sets and official release videos.", es: "Aftermovies, sets y vídeos oficiales de lanzamiento." },
    "A linha do tempo das showcases \"The Dog House\" pelo Brasil e fora.": { en: 'The timeline of "The Dog House" showcases across Brazil and beyond.', es: 'La línea de tiempo de las showcases "The Dog House" por Brasil y fuera.' },
    "ENVIE SUA DEMO": { en: "SEND US YOUR DEMO", es: "ENVÍA TU DEMO" },
    "Curte o som da DoggHaüz e quer mandar uma faixa? Bora ouvir.": { en: "Into the DoggHaüz sound and want to send a track? Let's hear it.", es: "¿Te gusta el sonido de DoggHaüz y quieres mandar una pista? Vamos a escucharla." },
    "Como enviar": { en: "How to submit", es: "Cómo enviar" },
    "Só aceitamos link do SoundCloud (pode ser privado). Nada de arquivo anexado, nem link de Drive, Dropbox ou qualquer nuvem — se não for link do SoundCloud, não abrimos.": {
      en: "We only accept a SoundCloud link (private is fine). No attached files, no Drive, Dropbox or any cloud link — if it's not a SoundCloud link, we won't open it.",
      es: "Solo aceptamos enlace de SoundCloud (puede ser privado). Nada de archivos adjuntos, ni enlaces de Drive, Dropbox o cualquier nube — si no es un enlace de SoundCloud, no lo abrimos.",
    },
    "Antes de mandar:": { en: "Before you send it:", es: "Antes de enviar:" },
    "Manda a faixa mixada e masterizada (ou perto disso).": { en: "Send the track mixed and mastered (or close to it).", es: "Manda la pista mezclada y masterizada (o cerca de eso)." },
    "Conta rapidamente quem você é e de onde toca.": { en: "Give us a quick line on who you are and where you play.", es: "Cuéntanos rápido quién eres y desde dónde tocas." },
    "O que a gente não lança": { en: "What we don't release", es: "Lo que no lanzamos" },
    "Enviar demo": { en: "Send demo", es: "Enviar demo" },
    "Se o botão não abrir seu e-mail:": { en: "If the button doesn't open your email app:", es: "Si el botón no abre tu correo:" },
    "ARTISTAS": { en: "ARTISTS", es: "ARTISTAS" },
    "Fundadores, equipe e o catálogo da DoggHaüz Records.": { en: "Founders, team and the DoggHaüz Records catalog.", es: "Fundadores, equipo y el catálogo de DoggHaüz Records." },
    /* rótulos usados em conteúdo dinâmico (roster-data.js, videos-data.js, materias-data.js) */
    "Equipe": { en: "Team", es: "Equipo" },
    "Catálogo": { en: "Catalog", es: "Catálogo" },
    "Catálogo · Instagram ↗": { en: "Catalog · Instagram ↗", es: "Catálogo · Instagram ↗" },
    "Visual / artwork": { en: "Visuals / artwork", es: "Visual / artwork" },
    "Distribuição": { en: "Distribution", es: "Distribución" },
    "Imprensa": { en: "Press", es: "Prensa" },
    "Cofundador": { en: "Co-founder", es: "Cofundador" },
    "Todos": { en: "All", es: "Todos" },
    "Aftermovies": { en: "Aftermovies", es: "Aftermovies" },
    "Sets": { en: "Sets", es: "Sets" },
    "Lançamentos": { en: "Releases", es: "Lanzamientos" },
    "Destaque": { en: "Featured", es: "Destacado" },
    "Todas as matérias": { en: "All articles", es: "Todos los artículos" },
    "Preenche nome, e-mail, título e o texto da matéria.": { en: "Fill in name, email, title and the article text.", es: "Completa nombre, correo, título y el texto del artículo." },
    "Enviando...": { en: "Sending...", es: "Enviando..." },
    "Recebemos sua matéria! Vamos ler com calma — obrigado.": { en: "We received your article! We'll give it a proper read — thank you.", es: "¡Recibimos tu artículo! Lo vamos a leer con calma — gracias." },
    "Não rolou enviar agora — tenta de novo em instantes.": { en: "Couldn't send it right now — try again in a moment.", es: "No se pudo enviar ahora — intenta de nuevo en un momento." },
    "Em breve": { en: "Coming soon", es: "Próximamente" },
    "As primeiras matérias do Anti Mag estão a caminho.": { en: "The first Anti Mag articles are on their way.", es: "Los primeros artículos de Anti Mag están en camino." },
    "Não foi possível carregar as matérias agora.": { en: "Couldn't load the articles right now.", es: "No se pudieron cargar los artículos ahora." },
    /* página de booking */
    "Booking de Showcases": { en: "Showcase Booking", es: "Booking de Showcases" },
    "Solicitar Booking": { en: "Request Booking", es: "Solicitar Booking" },
    'Selo e coletivo itinerante — showcases "The Dog House" pelo Brasil e fora, levando o line-up completo (fundadores + catálogo) pra sua cidade.': {
      en: 'Label and traveling collective — "The Dog House" showcases across Brazil and beyond, bringing the full line-up (founders + catalog) to your city.',
      es: 'Sello y colectivo itinerante — showcases "The Dog House" por Brasil y fuera, llevando el line-up completo (fundadores + catálogo) a tu ciudad.',
    },
    "Ver imprensa e cases ↓": { en: "See press & case studies ↓", es: "Ver prensa y casos ↓" },
    "Métricas agregadas via Songstats": { en: "Metrics aggregated via Songstats", es: "Métricas agregadas vía Songstats" },
    "Já rolou em": { en: "Already played in", es: "Ya tocamos en" },
    "MAIS SHOWCASES EM BREVE": { en: "MORE SHOWCASES COMING SOON", es: "MÁS SHOWCASES PRÓXIMAMENTE" },
    "Na mídia": { en: "In the press", es: "En los medios" },
    "Aftermovie": { en: "Aftermovie", es: "Aftermovie" },
    "Contato direto": { en: "Direct contact", es: "Contacto directo" },
    "Linha do tempo": { en: "Timeline", es: "Línea de tiempo" },
    "Ver showcases →": { en: "See showcases →", es: "Ver showcases →" },
    "Vamos agendar sua data?": { en: "Let's book your date?", es: "¿Agendamos tu fecha?" },
    "FALE COM": { en: "TALK TO", es: "HABLA CON" },
    "A DOGGHAÜZ": { en: "DOGGHAÜZ", es: "DOGGHAÜZ" },
    "Data, cidade, venue e proposta — a gente responde rápido.": { en: "Date, city, venue and proposal — we reply fast.", es: "Fecha, ciudad, venue y propuesta — respondemos rápido." },
    "O que esperar da estreia da Dogghaüz no Gate 22": { en: "What to expect from DoggHaüz's debut at Gate 22", es: "Qué esperar del debut de DoggHaüz en Gate 22" },
    "Criatividade e irreverência marcam a jornada da Dogghaüz Records até aqui": { en: "Creativity and irreverence mark DoggHaüz Records' journey so far", es: "Creatividad e irreverencia marcan el recorrido de DoggHaüz Records hasta ahora" },
    "The Dog House Showcase by DoggHaüz Records chega a São Paulo": { en: "The Dog House Showcase by DoggHaüz Records arrives in São Paulo", es: "The Dog House Showcase de DoggHaüz Records llega a São Paulo" },
  };

  var LANG_KEY = "dggz_lang";
  var FLAGS = { pt: "🇧🇷", en: "🇺🇸", es: "🇪🇸" };

  function currentLang() {
    try { return localStorage.getItem(LANG_KEY) || "pt"; } catch (e) { return "pt"; }
  }

  function t(ptText, lang) {
    lang = lang || currentLang();
    if (lang === "pt" || !ptText) return ptText;
    var entry = STRINGS[ptText.trim()];
    return entry && entry[lang] ? entry[lang] : ptText;
  }

  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (el.dataset.i18nOrig === undefined) el.dataset.i18nOrig = el.textContent;
      el.textContent = t(el.dataset.i18nOrig, lang);
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("on", b.dataset.lang === lang);
    });
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }

  function setLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang(lang);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  function renderSwitcher() {
    var host = document.getElementById("lang-switch");
    if (!host) return;
    host.innerHTML = ["pt", "en", "es"]
      .map(function (l) { return '<button class="lang-btn" data-lang="' + l + '" title="' + l.toUpperCase() + '">' + FLAGS[l] + "</button>"; })
      .join("");
    Array.prototype.forEach.call(host.querySelectorAll(".lang-btn"), function (b) {
      b.addEventListener("click", function () { setLang(b.dataset.lang); });
    });
  }

  window.DGGZ_LANG = { get: currentLang, set: setLang, t: t };

  function init() {
    renderSwitcher();
    applyLang(currentLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
