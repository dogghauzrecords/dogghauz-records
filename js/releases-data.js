/* ============================================================
   DISCOGRAFIA — catálogo completo levantado no Beatport
   (beatport.com/label/dogghauz-records/87782), 53 títulos únicos,
   mais recente → mais antigo conforme listagem do Beatport
   (checado 18 out 2026). Link real por faixa (Beatport sempre;
   Spotify e Apple Music quando encontrado) — sem link fabricado:
   o que não foi confirmado simplesmente não aparece.
   ============================================================ */
(function () {
  var RELEASES = [
    { title: "ContraFluxo.Pt1", img: "contrafluxo-pt1.jpg", artists: "Jay Mariani, Cesar Nardini", tag: "Novo · 16 out", beatport: "https://www.beatport.com/release/contrafluxopt1/7505216", spotify: "https://open.spotify.com/album/3U2kGeIvbrwIllVFfC4fJh", apple: "https://music.apple.com/us/album/contrafluxo-pt1-single/6815222621" },
    { title: "NoComptzz", img: "nocomptzz.jpg", artists: "Aaron Martin", beatport: "https://www.beatport.com/track/nocomptzz/18428256", spotify: "https://open.spotify.com/track/5jT4PBwIfo3mj8R1fXoV8I" , apple: "https://music.apple.com/us/album/nocomptzz/1716336928?i=1716336929" },
    { title: "The Dog House", img: "the-dog-house.jpg", artists: "Marian (BR)", beatport: "https://www.beatport.com/track/the-dog-house/18442114", spotify: "https://open.spotify.com/track/30Mx0w2JGvVVc6bkJxcLH5" , apple: "https://music.apple.com/us/album/the-dog-house/1720457057?i=1720457058" },
    { title: "Dogghaüz_Various Artists", img: "doggha-z-various-artists.jpg", artists: "Davide Mentesana, Puff (ITA), LET BR, Haustuff, DRE (BR), Markovni, Matevs", beatport: "https://www.beatport.com/release/dogghauz_various-artists/4295599", spotify: "https://open.spotify.com/album/7MqlAcwcpkYA6WcEYiHXvP" , apple: "https://music.apple.com/us/album/doggha%C3%BCz-various-artists/1710764135" },
    { title: "Girl", img: "girl.jpg", artists: "Jay Mariani", beatport: "https://www.beatport.com/track/girl/18152112", spotify: "https://open.spotify.com/track/7EV1ur3NV05pElkuQzSoZh" , apple: "https://music.apple.com/us/album/girl/1707874468?i=1707874469" },
    { title: "Smith Jackson", img: "smith-jackson.jpg", artists: "Cesar Nardini", beatport: "https://www.beatport.com/track/smith-jackson/18111640", spotify: "https://open.spotify.com/track/27OzD46RMT0vUZ36b2Oyf2" , apple: "https://music.apple.com/us/album/smith-jackson/1705955739?i=1705955740" },
    { title: "Twenty 20", img: "twenty-20.jpg", artists: "Gabriel Evoke", beatport: "https://www.beatport.com/track/twenty-20/18081538", spotify: "https://open.spotify.com/track/1c63w6aSGGvBW3YAPb0fto" , apple: "https://music.apple.com/us/album/twenty-20/1704659128?i=1704659129" },
    { title: "Shake Your Hands", img: "shake-your-hands.jpg", artists: "MNK4", beatport: "https://www.beatport.com/track/shake-your-hands/17982526", spotify: "https://open.spotify.com/track/3niJZ3I7b8HK8tFLFiZCUG" , apple: "https://music.apple.com/us/album/shake-your-hands/1699586564?i=1699586565" },
    { title: "Attitude", img: "attitude.jpg", artists: "Carlos Sot (Cla$$ & JCult), Slang G (BR)", beatport: "https://www.beatport.com/track/attitude/17938559", spotify: "https://open.spotify.com/track/3dNcyk4fQf2DnEmX9jJhkT" , apple: "https://music.apple.com/us/album/attitude/1697400024?i=1697400026" },
    { title: "Like", img: "like.jpg", artists: "Dabi", beatport: "https://www.beatport.com/track/like/17896316", spotify: "https://open.spotify.com/track/6IOZA4BrBgCItSgStapk4s" , apple: "https://music.apple.com/us/album/like/1695558308?i=1695558309" },
    { title: "Sinners & Sinners", img: "sinners-sinners.jpg", artists: "nocapz.", beatport: "https://www.beatport.com/track/sinners-sinners/17811267", spotify: "https://open.spotify.com/track/4ElnAAqFsBcQeaNqN1IdiT" , apple: "https://music.apple.com/us/album/sinners-sinners/1691551384?i=1691551386" },
    { title: "Speak Up", img: "speak-up.jpg", artists: "Leah.O, Dario Baldasari", beatport: "https://www.beatport.com/track/speak-up/17636147", spotify: "https://open.spotify.com/track/6HJajrwPBUzpWFJQT4rHgs" , apple: "https://music.apple.com/us/album/speak-up/1683234359?i=1683234360" },
    { title: "Sound of the Streetz", img: "sound-of-the-streetz.jpg", artists: "Pemax", beatport: "https://www.beatport.com/track/sound-of-the-streetz/17573345", spotify: "https://open.spotify.com/track/7moU8tKSIOYMg6IsgC1y2b" , apple: "https://music.apple.com/us/album/sound-of-the-streetz-scratch-2017/1680051826?i=1680051827" },
    { title: "Gangsta Alcatraz", img: "gangsta-alcatraz.jpg", artists: "Nicola Calbi, Rihen", beatport: "https://www.beatport.com/track/gangsta-alcatraz/17522391", spotify: "https://open.spotify.com/track/4TfbENj5tqEuzxvPQTNyHj" , apple: "https://music.apple.com/us/album/gangsta-alcatraz/1677641739?i=1677641741" },
    { title: "Blick", img: "blick.jpg", artists: "Abbud, Samir", beatport: "https://www.beatport.com/track/blick/17494148", spotify: "https://open.spotify.com/album/3Lf2ehiQvUjBnG1TRWyA4m" , apple: "https://music.apple.com/us/album/blick/1676370962?i=1676370963" },
    { title: "p.u.f.f", img: "p-u-f-f.jpg", artists: "Puff (ITA)", beatport: "https://www.beatport.com/track/puff/17445650", spotify: "https://open.spotify.com/track/7GO99Vz1zkQJodCp2nKfpE" , apple: "https://music.apple.com/us/album/p-u-f-f-single/1673778846" },
    { title: "Dom Dom Dom", img: "dom-dom-dom.jpg", artists: "Guilherme Rossi", beatport: "https://www.beatport.com/track/dom-dom-dom/17371336", spotify: "https://open.spotify.com/track/1aHhIX66IgVKNA3MjMwnVk" , apple: "https://music.apple.com/us/album/dom-dom-dom/1669115263?i=1669115264" },
    { title: "Rockstar", img: "rockstar.jpg", artists: "CHMPLOO", beatport: "https://www.beatport.com/track/rockstar/17239113", spotify: "https://open.spotify.com/track/1ng8o88Nw9lzaDwNHPi6cJ" , apple: "https://music.apple.com/us/album/rockstar/1660294524?i=1660294527" },
    { title: "To the Sound", img: "to-the-sound.jpg", artists: "Pricila Diaz", beatport: "https://www.beatport.com/track/to-the-sound/17203087", spotify: "https://open.spotify.com/track/3z41le1Czcjb1jZJHx1ttt" , apple: "https://music.apple.com/us/album/to-the-sound/1658418623?i=1658418624" },
    { title: "Unleash", img: "unleash.jpg", artists: "Mochakk, Cesar Nardini, Jay Mariani", tag: "#16 Beatport Tech House", beatport: "https://www.beatport.com/release/unleash/3933083", spotify: "https://open.spotify.com/album/0VdSrE9RhQ0oK1AV2ZtSKy" , apple: "https://music.apple.com/us/album/unleash-ep/1654196866" },
    { title: "Apologia", img: "apologia.jpg", artists: "Gabss", beatport: "https://www.beatport.com/track/apologia/17099848", spotify: "https://open.spotify.com/track/02wGMTUJC2Mz7Rt20qKodD" , apple: "https://music.apple.com/us/album/apologia/1653490735?i=1653490736" },
    { title: "Everyday", img: "everyday.jpg", artists: "Crewcutz", beatport: "https://www.beatport.com/release/everyday/3910921", spotify: "https://open.spotify.com/track/2Q3IU0mASTupVyfIMft5YY" , apple: "https://music.apple.com/us/album/everyday/1650989841?i=1650989844" },
    { title: "Let's Go See the Town", img: "let-s-go-see-the-town.jpg", artists: "Duarte (BR)", beatport: "https://www.beatport.com/track/lets-go-see-the-town/16986134", spotify: "https://open.spotify.com/track/2twlqGO1bfNPH3TQQOhPeT" , apple: "https://music.apple.com/us/album/lets-go-see-the-town/1648137528?i=1648137529" },
    { title: "Goodayzz", img: "goodayzz.jpg", artists: "Jho Roscioli", beatport: "https://www.beatport.com/track/goodayzz/16915376", spotify: "https://open.spotify.com/track/233k8P9x36nyDzi5ITuHLf" , apple: "https://music.apple.com/us/album/goodayzz/1644746722?i=1644746723" },
    { title: "Un Amour D'été", img: "un-amour-d-t.jpg", artists: "Duarte (BR)", beatport: "https://www.beatport.com/track/un-amour-dete/16812259", spotify: "https://open.spotify.com/track/0cesCPYL2jyRH1D5CuBGxT" , apple: "https://music.apple.com/us/album/un-amour-d%C3%A9t%C3%A9/1638821125?i=1638821126" },
    { title: "Celestial", img: "celestial.jpg", artists: "ENNE (BR)", beatport: "https://www.beatport.com/track/celestial/16812256", spotify: "https://open.spotify.com/album/2BhceCkg4JlIRzt0ihlbpF" , apple: "https://music.apple.com/us/album/celestial/1638820865?i=1638820866" },
    { title: "Listen Back", img: "listen-back.jpg", artists: "Cesar Nardini", beatport: "https://www.beatport.com/track/listen-back/16781054", spotify: "https://open.spotify.com/track/0KTCzqsyouHQUnqHL4QXbq" , apple: "https://music.apple.com/us/album/listen-back/1637175998?i=1637175999" },
    { title: "Kitty", img: "kitty.jpg", artists: "Jame C", beatport: "https://www.beatport.com/track/kitty/16786182", spotify: "https://open.spotify.com/track/24dS43csTJunGbt8N8Iz8S" , apple: "https://music.apple.com/us/album/kitty/1637484554?i=1637485036" },
    { title: "Reap", img: "reap.jpg", artists: "Lucas Bahr", beatport: "https://www.beatport.com/track/reap/16767111", spotify: "https://open.spotify.com/track/2wuB23eB6tK6kKYPCUfqfY" , apple: "https://music.apple.com/us/album/reap/1636542978?i=1636542980" },
    { title: "Breaking Glass", img: "breaking-glass.jpg", artists: "Ragie Ban, Duarte (BR)", beatport: "https://www.beatport.com/track/breaking-glass/16684621", spotify: "https://open.spotify.com/track/2zU2Qac3eqmBPuU2YhkYf0" , apple: "https://music.apple.com/us/album/breaking-glass/1632082581?i=1632082582" },
    { title: "Fuck That Shit", img: "fuck-that-shit.jpg", artists: "Na7an, Trallez", beatport: "https://www.beatport.com/track/fuck-that-shit/16684622", spotify: "https://open.spotify.com/track/08c4FZshqczc2LkpgH41Cf" , apple: "https://music.apple.com/us/album/f-k-that-shit/1632082206?i=1632082207" },
    { title: "Fantastic", img: "fantastic.jpg", artists: "Roddy Lima", beatport: "https://www.beatport.com/track/fantastic/16603143", spotify: "https://open.spotify.com/track/7sbtRXcFt2pBMRac1PFiPj" , apple: "https://music.apple.com/us/album/fantastic/1627808113?i=1627808114" },
    { title: "The Girls", img: "the-girls.jpg", artists: "Jho Roscioli", beatport: "https://www.beatport.com/track/the-girls/16618253", spotify: "https://open.spotify.com/track/5xvuP8Ged1FhE4kON5fJQO" , apple: "https://music.apple.com/us/album/the-girls/1628333555?i=1628333981" },
    { title: "Biggest Part of Me", img: "biggest-part-of-me.jpg", artists: "Luke Drash, Black Keusen", beatport: "https://www.beatport.com/track/biggest-part-of-me/16570926", spotify: "https://open.spotify.com/track/2G8dinorhKG1GsPoxFGk8H" , apple: "https://music.apple.com/us/album/biggest-part-of-me/1625717928?i=1625717930" },
    { title: "Live the Dream", img: "live-the-dream.jpg", artists: "Felipe Fella, Benan", beatport: "https://www.beatport.com/track/live-the-dream/16542620", spotify: "https://open.spotify.com/track/2K2VANyrRg0uzupceMUnWk" , apple: "https://music.apple.com/us/album/live-the-dream/1623855019?i=1623855020" },
    { title: "S. S.", img: "s-s.jpg", artists: "Tiago Bueno", beatport: "https://www.beatport.com/track/s-s/16485600", spotify: "https://open.spotify.com/track/3Pu7VpZjIClqf3reOSBPhC" , apple: "https://music.apple.com/us/album/s-s/1620788582?i=1620788583" },
    { title: "It's Too Late", img: "it-s-too-late.jpg", artists: "Kaddu", beatport: "https://www.beatport.com/track/its-too-late/16447799", spotify: "https://open.spotify.com/track/5UUqkPeHmHHcSJDMaRH3nu" },
    { title: "Caos", img: "caos.jpg", artists: "Guilherme Rossi", beatport: "https://www.beatport.com/track/caos/16423461", spotify: "https://open.spotify.com/track/3rLKKsAgEHpeaiyJPy9Gge" , apple: "https://music.apple.com/us/album/caos/1617649055?i=1617649446" },
    { title: "Lifestyle", img: "lifestyle.jpg", artists: "ENNE (BR)", beatport: "https://www.beatport.com/track/lifestyle/16362588", spotify: "https://open.spotify.com/track/75U4QJg1w9l9XjZueNXCrh" , apple: "https://music.apple.com/us/album/lifestyle/1615401553?i=1615401554" },
    { title: "Brava Dreams", img: "brava-dreams.jpg", artists: "Jay Mariani, Carlos Sot (Cla$$ & JCult)", beatport: "https://www.beatport.com/track/brava-dreams/16338623", spotify: "https://open.spotify.com/track/5xEkw2hRk5cdpxlftGcf50" , apple: "https://music.apple.com/us/album/brava-dreams/1614248758?i=1614248759" },
    { title: "Espirra O Lança", img: "espirra-o-lan-a.jpg", artists: "Jho Roscioli", beatport: "https://www.beatport.com/track/espirra-o-lanca/16271059", spotify: "https://open.spotify.com/track/16nSbUzxWClO6BulJGAvCh" , apple: "https://music.apple.com/us/album/espirra-o-lan%C3%A7a/1606416600?i=1606416602" },
    { title: "Love & Hate", img: "love-hate.jpg", artists: "Lucious (Drunk & Play)", beatport: "https://www.beatport.com/track/love-hate/16261332", spotify: "https://open.spotify.com/track/7smrfwOUf74ZgWN6z36Maf" , apple: "https://music.apple.com/us/album/love-hate-single/1610763539" },
    { title: "Gemstone", img: "gemstone.jpg", artists: "Brisotti", beatport: "https://www.beatport.com/track/gemstone/16205000", spotify: "https://open.spotify.com/track/1ZNFYtS5KnxaXjSyPQkXgB" , apple: "https://music.apple.com/us/album/gemstone/1608091754?i=1608091755" },
    { title: "Ritmo", img: "ritmo.jpg", artists: "Duarte (BR)", beatport: "https://www.beatport.com/track/ritmo/16104920", spotify: "https://open.spotify.com/track/1d6oBQDqFvhaovrpLxK4le" , apple: "https://music.apple.com/us/album/ritmo/1603338775?i=1603338776" },
    { title: "Closet", img: "closet.jpg", artists: "Fabricio Capute, Jay Mariani", beatport: "https://www.beatport.com/track/closet/15988144", spotify: "https://open.spotify.com/track/5bF4r32m2Tpt3WhvAnhrIX" , apple: "https://music.apple.com/us/album/closet/1598120828?i=1598120829" },
    { title: "G Feelings", img: "g-feelings.jpg", artists: "Jho Roscioli, Carlos Sot (Cla$$ & JCult)", beatport: "https://www.beatport.com/track/g-feelings/15858983", spotify: "https://open.spotify.com/track/0QTc8qwAWzpQZHhNdmOjbS" , apple: "https://music.apple.com/us/album/g-feelings/1591966175?i=1591966447" },
    { title: "Simulation Reloaded", img: "simulation-reloaded.jpg", artists: "Mochakk, Cesar Nardini, Jay Mariani", beatport: "https://www.beatport.com/release/simulation-reloaded/3508263", spotify: "https://open.spotify.com/album/64PM9daKVllFaKHobjggPt" , apple: "https://music.apple.com/us/album/simulation-reloaded-ep/1586640719" },
    { title: "Another", img: "another.jpg", artists: "Victor Lou", beatport: "https://www.beatport.com/track/another/14971574", spotify: "https://open.spotify.com/track/6NamVryBqT5bSWkKrILBBZ" , apple: "https://music.apple.com/us/album/another/1555067656?i=1555067658" },
    { title: "Alien Phone", img: "alien-phone.jpg", artists: "Cesar Nardini, Vinter (BR)", beatport: "https://www.beatport.com/track/alien-phone/14941682", spotify: "https://open.spotify.com/track/3V2Hdk5YRziiTU5aSj34Ux" , apple: "https://music.apple.com/us/album/alien-phone-radio-edit/1550998680?i=1550998684" },
    { title: "Golden", img: "golden.jpg", artists: "Fabricio Pecanha, Gaba Kamer", beatport: "https://www.beatport.com/track/golden/14544386", spotify: "https://open.spotify.com/track/0U97YPrRh2C3Nfyl6K5wLf" , apple: "https://music.apple.com/us/album/golden/1540495224?i=1540495225" },
    { title: "Hydromenage", img: "hydromenage.jpg", artists: "Mochakk", beatport: "https://www.beatport.com/track/hydromenage/14566304", spotify: "https://open.spotify.com/track/0GZw3UNt33hTDdJ6uiwSMp" , apple: "https://music.apple.com/us/album/hydromenage/1541057005?i=1541057006" },
    { title: "Juanita", img: "juanita.jpg", artists: "Lucious (Drunk & Play)", beatport: "https://www.beatport.com/track/juanita/14330528", spotify: "https://open.spotify.com/track/7DU7QtCFVVSD0DF2axH3Kt" , apple: "https://music.apple.com/us/album/juanita/1534329394?i=1534329546" },
    { title: "This Is Not a Simulation", img: "this-is-not-a-simulation.jpg", artists: "Mochakk, Cesar Nardini, Jay Mariani", tag: "Estreia · 2020", beatport: "https://www.beatport.com/track/this-is-not-a-simulation/13987552", spotify: "https://open.spotify.com/track/3sXXVQ5kk84OS1S4feSAH0" , apple: "https://music.apple.com/us/album/this-is-not-a-simulation/1524529131?i=1524529134" },
  ];

  var TOP_PLATFORMS = [
    { key: "beatport", label: "Beatport", url: "https://www.beatport.com/label/dogghauz-records/87782" },
    { key: "apple", label: "Apple Music", url: "https://music.apple.com/us/search?term=Dogghauz%20Records" },
    { key: "spotify", label: "Spotify", url: "https://open.spotify.com/artist/38jlH8F6waKoTrVSCk1S1s" },
  ];

  function topPlatformsHtml() {
    return (
      '<div class="mus-icons" style="margin:0 0 22px">' +
      TOP_PLATFORMS.map(function (p) {
        return '<a class="mus-ic" href="' + p.url + '" target="_blank" rel="noopener" title="' + p.label + '">' + (window.SITE_ICONS ? window.SITE_ICONS[p.key] : p.label) + "</a>";
      }).join("") +
      "</div>"
    );
  }

  function releaseIconsHtml(r) {
    var items = [];
    if (r.beatport) items.push({ key: "beatport", url: r.beatport, label: "Beatport" });
    if (r.spotify) items.push({ key: "spotify", url: r.spotify, label: "Spotify" });
    if (r.apple) items.push({ key: "apple", url: r.apple, label: "Apple Music" });
    if (!items.length) return "";
    return (
      '<div class="mus-icons">' +
      items.map(function (p) {
        return '<a class="mus-ic" href="' + p.url + '" target="_blank" rel="noopener" title="' + p.label + '">' + (window.SITE_ICONS ? window.SITE_ICONS[p.key] : p.label) + "</a>";
      }).join("") +
      "</div>"
    );
  }

  var player = window.createPreviewPlayer(".mus-art", "playing");

  function imgHtmlFor(r) {
    return '<img src="/assets/dogghauz/releases/' + r.img + '" alt="' + r.title + '" loading="lazy">';
  }

  function artistAvatarsHtml(r) {
    var idx = window.DGGZ_ARTIST_INDEX || {};
    var names = r.artists.split(",").map(function (s) { return s.trim(); });
    var known = names.filter(function (n) { return idx[n]; });
    if (!known.length) return "";
    return (
      '<div style="display:flex;gap:6px;margin-top:9px">' +
      known
        .map(function (n) {
          return (
            '<a href="' + idx[n].href + '" target="_blank" rel="noopener" title="' + n + '" onclick="event.stopPropagation()" ' +
            'style="width:26px;height:26px;border-radius:50%;overflow:hidden;flex-shrink:0;display:block;border:1px solid #2a2a2a">' +
            '<img src="' + idx[n].photo + '" alt="' + n + '" style="width:100%;height:100%;object-fit:cover;display:block">' +
            "</a>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function card(r) {
    var mainLink = r.beatport || r.spotify || r.apple;
    var titleHtml = mainLink
      ? '<a href="' + mainLink + '" target="_blank" rel="noopener" style="color:inherit;text-decoration:none">' + r.title + "</a>"
      : r.title;
    return (
      '<div class="mus-card">' +
      '<div class="mus-art">' + player.artInner(r, imgHtmlFor(r)) + "</div>" +
      '<div class="mus-info">' +
      '<div class="mus-title">' + titleHtml + (r.tag ? '<span class="rel-badge hot" style="margin-left:8px;vertical-align:middle">' + r.tag + "</span>" : "") + "</div>" +
      '<div class="mus-artists">' + r.artists + "</div>" +
      '<div class="mus-label">Dogghaüz Records</div>' +
      artistAvatarsHtml(r) +
      releaseIconsHtml(r) +
      "</div>" +
      "</div>"
    );
  }

  function render() {
    var grid = document.getElementById("rel-grid");
    if (!grid) return;
    grid.innerHTML = topPlatformsHtml() + '<div class="mus-grid">' + RELEASES.map(card).join("") + "</div>";
    var cards = grid.querySelectorAll(".mus-card");
    RELEASES.forEach(function (r, i) { player.bind(cards[i], r, imgHtmlFor(r)); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
