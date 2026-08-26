/* ============================================================
   ARTISTAS — fundadores, equipe e catálogo da DoggHaüz Records,
   levantado via imprensa (House Mag, Alataj, WeGoOut), catálogo
   Beatport e Instagram (checado 24 ago 2026). Instagram e foto só
   entram quando confirmados com contexto (bio/release/lineup) —
   sem link nem foto inventados: quem não foi achado fica só com
   as iniciais, sem link.
   ============================================================ */
(function () {
  var LINKS = {
    "Catel": { instagram: "https://instagram.com/catelzera", photo: "artists/catel.jpg" },
    "Gaba Kamer": { instagram: "https://instagram.com/gabakamer", photo: "artists/gaba-kamer.jpg" },
    "Lu Serrano": { instagram: "https://instagram.com/luoliserra", photo: "artists/lu-serrano.jpg" },
    "Victor Lou": { instagram: "https://instagram.com/victorloumusic", photo: "artists/victor-lou.jpg" },
    "Jho Roscioli": { instagram: "https://instagram.com/jhoroscioli", photo: "artists/jho-roscioli.jpg" },
    "Guilherme Rossi": { instagram: "https://instagram.com/guilherossi", photo: "artists/guilherme-rossi.jpg" },
    "Duarte (BR)": { instagram: "https://instagram.com/listenduarte", photo: "artists/duarte-br.jpg" },
    "Lucious (Drunk & Play)": { instagram: "https://instagram.com/luciousmusic", photo: "artists/lucious.jpg" },
    "Kaddu": { instagram: "https://instagram.com/taldekaddu", photo: "artists/kaddu.jpg" },
    "Pricila Diaz": { instagram: "https://instagram.com/priciladiazmusic", photo: "artists/pricila-diaz.jpg" },
    "Sterium": { instagram: "https://instagram.com/steriummusic", photo: "artists/sterium.jpg" },
    "Roddy Lima": { instagram: "https://instagram.com/roddylima", photo: "artists/roddy-lima.jpg" },
    "Trallez": { instagram: "https://instagram.com/trallez", photo: "artists/trallez.jpg" },
    "Carlos Sot (Cla$$ & JCult)": { instagram: "https://instagram.com/carlossot__", photo: "artists/carlos-sot.jpg" },
    "Fabrício Peçanha": { instagram: "https://instagram.com/fabriciopecanha", photo: "artists/fabricio-pecanha.jpg" },
    "Brisotti": { instagram: "https://instagram.com/brisottimusic", photo: "artists/brisotti.jpg" },
    "Gabriel Evoke": { instagram: "https://instagram.com/gabrielevoke", photo: "artists/gabriel-evoke.jpg" },
    "Marian (BR)": { instagram: "https://instagram.com/marian_br_", photo: "artists/marian-br.jpg" },
    "Nicola Calbi": { instagram: "https://instagram.com/nicola.calbi", photo: "artists/nicola-calbi.jpg" },
    "Rihen": { instagram: "https://instagram.com/rihen_music", photo: "artists/rihen.jpg" },
    "Pemax": { instagram: "https://instagram.com/pemaxdjmax", photo: "artists/pemax.jpg" },
    "CHMPLOO": { instagram: "https://instagram.com/chmploo.dj", photo: "artists/chmploo.jpg" },
    "ENNE (BR)": { instagram: "https://instagram.com/enne.brasil", photo: "artists/enne-br.jpg" },
    "Jame C": { instagram: "https://instagram.com/jamecthekid", photo: "artists/jame-c.jpg" },
    "Lucas Bahr": { instagram: "https://instagram.com/lucasbahrszn", photo: "artists/lucas-bahr.jpg" },
    "Ragie Ban": { instagram: "https://instagram.com/ragieban", photo: "artists/ragie-ban.jpg" },
    "Na7an": { instagram: "https://instagram.com/na7andj", photo: "artists/na7an.jpg" },
    "Luke Drash": { instagram: "https://instagram.com/lukedrash", photo: "artists/luke-drash.jpg" },
    "Black Keusen": { instagram: "https://instagram.com/blackkeusen", photo: "artists/black-keusen.jpg" },
    "Felipe Fella": { instagram: "https://instagram.com/felipefella", photo: "artists/felipe-fella.jpg" },
    "Benan": { instagram: "https://instagram.com/benanofc", photo: "artists/benan.jpg" },
    "Tiago Bueno": { instagram: "https://instagram.com/tiagobcb", photo: "artists/tiago-bueno.jpg" },
    "Vinter (BR)": { instagram: "https://instagram.com/vitorvinter", photo: "artists/vinter-br.jpg" },
    "Aaron Martin": { instagram: "https://instagram.com/aaronmartin.ofc", photo: "artists/aaron-martin.jpg" },
    "Davide Mentesana": { instagram: "https://instagram.com/davidementesana", photo: "artists/davide-mentesana.jpg" },
    "Puff (ITA)": { instagram: "https://instagram.com/puff_italy", photo: "artists/puff-ita.jpg" },
    "LET BR": { instagram: "https://instagram.com/letbrmusic", photo: "artists/let-br.jpg" },
    "Haustuff": { instagram: "https://instagram.com/assenheimer", photo: "artists/haustuff.jpg" },
    "Markovni": { instagram: "https://instagram.com/markovni_", photo: "artists/markovni.jpg" },
    "Matevs": { instagram: "https://instagram.com/matevslago", photo: "artists/matevs.jpg" },
    "MNK4": { instagram: "https://instagram.com/mnk4music", photo: "artists/mnk4.jpg" },
    "Slang G (BR)": { instagram: "https://instagram.com/slangg_br", photo: "artists/slang-g.jpg" },
    "Dabi": { instagram: "https://instagram.com/dabimusic", photo: "artists/dabi.jpg" },
    "nocapz.": { instagram: "https://instagram.com/nocapzmusic", photo: "artists/nocapz.jpg" },
    "Leah.O": { instagram: "https://instagram.com/leah.oofficial", photo: "artists/leah-o.jpg" },
    "Dario Baldasari": { instagram: "https://instagram.com/dario_baldasari", photo: "artists/dario-baldasari.jpg" },
    "Abbud": { instagram: "https://instagram.com/abbuddj", photo: "artists/abbud.jpg" },
    "Samir": { instagram: "https://instagram.com/matheuspinheiro_pj", photo: "artists/samir.jpg" },
    "Gabss": { instagram: "https://instagram.com/im.gabss_", photo: "artists/gabss.jpg" },
    "Crewcutz": { instagram: "https://instagram.com/crewcutzmusic", photo: "artists/crewcutz.jpg" },
    "Cabralz BR": { instagram: "https://instagram.com/cabralzgrv", photo: "artists/cabralz.jpg" },
    "Malive": { instagram: "https://instagram.com/maliveofficial", photo: "artists/malive.jpg" },
    "Gabriele Agostino": { instagram: "https://instagram.com/gabriele_ago", photo: "artists/gabriele-agostino.jpg" },
  };

  var FOUNDERS = [
    { name: "Mochakk", role: "Cofundador · Circoloco, Defected", href: "https://instagram.com/mochakk", photo: "artists/mochakk.jpg", initials: "MK" },
    { name: "Cesar Nardini", role: "Cofundador · São Paulo", href: "https://instagram.com/cesar.nardini", photo: "artists/cesar-nardini.jpg", initials: "CN" },
    { name: "Jay Mariani", role: "Cofundador · Curitiba", href: "https://jaymariani.com.br", photo: "/assets/dogghauz/photos/press-jay-mariani.jpg", initials: "JM" },
  ];

  var CREW_NAMES = ["Catel", "Gaba Kamer", "Lu Serrano"];
  var CREW_ROLES = { "Catel": "Visual / artwork", "Gaba Kamer": "Distribuição", "Lu Serrano": "Imprensa" };

  /* índice nome → {href, photo} exposto global pra outras abas (Releases)
     poderem plotar o avatar circular de quem tocou em cada faixa —
     só entra aqui quem tem foto E link confirmados. Roda logo na carga
     do script (não dentro de render()) pra já estar pronto quando as
     outras abas montarem seus cards, seja qual for a ordem dos <script>. */
  (function buildArtistIndex() {
    var index = {};
    Object.keys(LINKS).forEach(function (name) {
      var l = LINKS[name];
      if (l.instagram && l.photo) {
        index[name] = { href: l.instagram, photo: "/assets/dogghauz/" + l.photo };
      }
    });
    FOUNDERS.forEach(function (f) {
      if (f.href && f.photo) {
        index[f.name] = { href: f.href, photo: f.photo.indexOf("../") === 0 ? "/assets/dogghauz/photos/press-jay-mariani.jpg" : "/assets/dogghauz/" + f.photo };
      }
    });
    window.DGGZ_ARTIST_INDEX = index;
  })();

  var ARTISTS = [
    "Victor Lou", "Jho Roscioli", "Guilherme Rossi", "Duarte (BR)", "Lucious (Drunk & Play)", "Kaddu",
    "Pricila Diaz", "Sterium", "Roddy Lima", "Trallez",
    "Carlos Sot (Cla$$ & JCult)", "Fabrício Peçanha", "Brisotti", "Gabriel Evoke", "Marian (BR)",
    "Nicola Calbi", "Rihen", "Pemax", "CHMPLOO", "ENNE (BR)", "Jame C", "Lucas Bahr",
    "Ragie Ban", "Na7an", "Luke Drash", "Black Keusen", "Felipe Fella",
    "Benan", "Tiago Bueno", "Vinter (BR)", "Aaron Martin", "Davide Mentesana",
    "Puff (ITA)", "LET BR", "Haustuff", "Markovni", "Matevs", "MNK4", "Slang G (BR)", "Dabi",
    "nocapz.", "Leah.O", "Dario Baldasari", "Abbud", "Samir", "Gabss",
    "Crewcutz", "Cabralz BR", "Malive", "Gabriele Agostino",
  ];

  function initialsFor(name) {
    var clean = name.replace(/\([^)]*\)/g, "").replace(/[^a-zA-Z\s]/g, " ").trim();
    var parts = clean.split(/\s+/).filter(Boolean);
    if (!parts.length) return "??";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  function supItem(p) {
    var avatar = p.photo ? '<img src="' + (p.photo.indexOf("../") === 0 ? p.photo : "/assets/dogghauz/" + p.photo) + '" alt="' + p.name + '">' : p.initials;
    var inner =
      '<div class="sup-ava">' + avatar + "</div>" +
      '<div><div class="sup-n">' + p.name + '</div><div class="sup-r">' + p.role + "</div></div>";
    return p.href
      ? '<a class="sup" href="' + p.href + '" target="_blank" rel="noopener">' + inner + "</a>"
      : '<div class="sup">' + inner + "</div>";
  }

  function t(s) {
    return window.DGGZ_LANG ? window.DGGZ_LANG.t(s) : s;
  }

  function translateRole(role) {
    return role.replace(/^Cofundador/, t("Cofundador"));
  }

  function artistItem(name) {
    var l = LINKS[name] || {};
    return supItem({
      name: name,
      role: t(l.instagram ? "Catálogo · Instagram ↗" : "Catálogo"),
      href: l.instagram,
      photo: l.photo,
      initials: initialsFor(name),
    });
  }

  function founderItem(f) {
    return supItem({ name: f.name, role: translateRole(f.role), href: f.href, photo: f.photo, initials: f.initials });
  }

  function render() {
    var root = document.getElementById("roster-root");
    if (!root) return;
    var crew = CREW_NAMES.map(function (n) {
      var l = LINKS[n] || {};
      return supItem({ name: n, role: t(CREW_ROLES[n]), href: l.instagram, photo: l.photo, initials: initialsFor(n) });
    });
    var uniqueArtists = ARTISTS.filter(function (a, i) { return ARTISTS.indexOf(a) === i; });
    var confirmedCount = uniqueArtists.filter(function (a) { return LINKS[a] && LINKS[a].instagram; }).length;
    root.innerHTML =
      '<div class="card">' +
      '<div class="clabel">' + t("Fundadores") + "</div>" +
      '<div class="support-grid">' + FOUNDERS.map(founderItem).join("") + "</div>" +
      "</div>" +
      '<div class="card reveal">' +
      '<div class="clabel">' + t("Equipe") + "</div>" +
      '<div class="support-grid">' + crew.join("") + "</div>" +
      "</div>" +
      '<div class="card reveal">' +
      '<div class="clabel">' + t("Catálogo") + " — " + uniqueArtists.length + " artistas · " + confirmedCount + " com Instagram confirmado</div>" +
      '<div class="support-grid">' + uniqueArtists.map(artistItem).join("") + "</div>" +
      "</div>";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
  document.addEventListener("langchange", render);
})();
