/* ============================================================
   MAIN — shell do site: parallax, reveal, tabs, toast.
   Adaptado do site do Jay Mariani (sem booking/apostila/store,
   que não se aplicam a uma gravadora).
   ============================================================ */

/* TOAST */
var toastTimer = null;
function toast(msg) {
  var t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2800);
}
window.toast = toast;

/* DEMOS — copiar e-mail (fallback pra quem não tem cliente de e-mail
   configurado no navegador e o mailto: não abre nada visível) */
document.addEventListener("click", function (e) {
  var copyLink = e.target.closest && e.target.closest("#demo-copy-email");
  if (!copyLink) return;
  e.preventDefault();
  var email = "dogghauz.demos@gmail.com";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(function () { toast("E-mail copiado!"); }).catch(function () { toast(email); });
  } else {
    toast(email);
  }
});

/* PLAYER REGISTRY — só um player (Vídeos) toca por vez */
var activePlayerStop = null;
window.claimPlayer = function (stopFn) {
  if (activePlayerStop && activePlayerStop !== stopFn) activePlayerStop();
  activePlayerStop = stopFn;
};

/* PARALLAX + REVEAL (fade contínuo ligado ao scroll) */
var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var plxEls = document.querySelectorAll(".plx");
var revealEls = document.querySelectorAll(".reveal");
function onScroll() {
  if (reduceMotion) return;
  var vh = window.innerHeight;
  plxEls.forEach(function (el) {
    var r = el.getBoundingClientRect();
    var center = r.top + r.height / 2 - vh / 2;
    el.style.transform = "translateY(" + -center * parseFloat(el.dataset.s || 0.1) + "px)";
  });
  var fadeZone = Math.max(vh * 0.35, 140);
  revealEls.forEach(function (el) {
    var r = el.getBoundingClientRect();
    var enter = Math.min((vh - r.top) / fadeZone, 1);
    var exit = Math.min(r.bottom / fadeZone, 1);
    var fade = Math.max(0, Math.min(enter, exit, 1));
    fade = fade * fade * (3 - 2 * fade); // smoothstep
    el.style.opacity = fade;
    el.style.transform = "translateY(" + (1 - fade) * 26 + "px)";
  });
}
window.addEventListener("scroll", function () { requestAnimationFrame(onScroll); }, { passive: true });
onScroll();

/* TABS — URLs limpas (ex: /videos) via History API. */
var TAB_KEYS = ["pro", "materias", "videos", "releases", "artistas", "demos", "blog"];
var TAB_PATHS = { pro: "/", materias: "/materias", videos: "/videos", releases: "/releases", artistas: "/artistas", demos: "/demos", blog: "/anti-mag" };
function keyFromPath(path) {
  var clean = path.replace(/\/+$/, "") || "/";
  for (var k in TAB_PATHS) {
    if (TAB_PATHS[k] === clean) return k;
  }
  return "pro";
}

var tabsScroll = document.getElementById("tabs-scroll");
var tabsScrollWrap = document.querySelector(".tabs-scroll-wrap");
function updateTabsEdges() {
  if (!tabsScroll || !tabsScrollWrap) return;
  var max = tabsScroll.scrollWidth - tabsScroll.clientWidth;
  tabsScrollWrap.classList.toggle("show-l", tabsScroll.scrollLeft > 4);
  tabsScrollWrap.classList.toggle("show-r", tabsScroll.scrollLeft < max - 4);
}
if (tabsScroll) {
  tabsScroll.addEventListener("scroll", updateTabsEdges, { passive: true });
  window.addEventListener("resize", updateTabsEdges);
  window.addEventListener("load", updateTabsEdges);
  updateTabsEdges();
}

function showTab(key, opts) {
  opts = opts || {};
  document.querySelectorAll(".tab").forEach(function (x) { x.classList.toggle("on", x.dataset.tab === key); });
  TAB_KEYS.forEach(function (k) {
    var el = document.getElementById("tab-" + k);
    if (el) el.classList.toggle("hidden", k !== key);
  });
  if (!opts.skipPush) {
    var path = TAB_PATHS[key] || "/";
    if (location.pathname !== path) history.pushState({ tab: key }, "", path);
  }
  window.scrollTo({ top: 0, behavior: "auto" });
  onScroll();
  var activeTab = document.querySelector('.tab[data-tab="' + key + '"]');
  if (activeTab) activeTab.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
  document.dispatchEvent(new CustomEvent("tabchange", { detail: { tab: key } }));
}
window.showTab = showTab;
document.querySelectorAll(".tab").forEach(function (t) {
  t.addEventListener("click", function () { showTab(t.dataset.tab); });
});
window.addEventListener("popstate", function () { showTab(keyFromPath(location.pathname), { skipPush: true }); });
showTab(keyFromPath(location.pathname), { skipPush: true });
