/* ============================================================
   ANTI MAG — blog/revista da DoggHaüz Records. Busca
   /blog/posts.json em tempo real (sem embutir no JS),
   pra quem edita pelo painel em /admin ver o post aparecer aqui
   sem precisar de novo deploy manual do código. Editado via
   Decap CMS (git-gateway) — ver admin/config.yml.
   ============================================================ */
(function () {
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* só deixa passar URL relativa ou http(s) — sem isso, um link/imagem
     escrito no painel como [texto](javascript:...) vira um href que
     executa JS ao clicar (o CSP do site libera 'unsafe-inline', então
     não barra javascript: sozinho). O painel é de acesso restrito, mas
     uma conta do CMS comprometida não devia virar XSS persistente pra
     quem só está lendo a matéria. `u` já passou por escapeHtml (é um
     pedaço do markdown inteiro já escapado), então só valida o esquema
     sem escapar de novo. */
  function safeUrl(u) {
    u = (u || "").trim();
    return /^(https?:\/\/|\/)/i.test(u) ? u : "#";
  }

  /* markdown bem enxuto: só o suficiente pro que o painel gera
     (negrito, itálico, links, imagem, parágrafos, quebras) */
  function mdToHtml(md) {
    if (!md) return "";
    var html = escapeHtml(md);
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, function (m, alt, url) {
      return '<img src="' + safeUrl(url) + '" alt="' + alt + '" loading="lazy" style="width:100%;border-radius:10px;margin:14px 0">';
    });
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (m, text, url) {
      return '<a href="' + safeUrl(url) + '" target="_blank" rel="noopener">' + text + "</a>";
    });
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    html = html.replace(/^### (.*)$/gm, "<h4>$1</h4>");
    html = html.replace(/^## (.*)$/gm, "<h3>$1</h3>");
    html = html
      .split(/\n\s*\n/)
      .map(function (block) {
        if (/^<h[34]>/.test(block)) return block;
        return "<p>" + block.replace(/\n/g, "<br>") + "</p>";
      })
      .join("");
    return html;
  }

  function fmtDate(iso) {
    if (!iso) return "";
    var d = new Date(iso + (iso.length <= 10 ? "T00:00:00" : ""));
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
  }

  function openPost(p) {
    var overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML =
      '<div class="modal" style="position:relative;max-width:640px;text-align:left">' +
      '<button class="modal-close" id="am-close">✕</button>' +
      (p.cover ? '<img src="' + p.cover + '" alt="" style="width:100%;border-radius:12px;margin-bottom:16px">' : "") +
      '<div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a8a8a;margin-bottom:6px">' + fmtDate(p.date) + " · " + escapeHtml(p.author || "DoggHaüz Records") + "</div>" +
      '<h3 style="font-size:22px;margin-bottom:14px">' + escapeHtml(p.title) + "</h3>" +
      '<div class="am-body" style="font-size:14px;line-height:1.7;color:#ccc">' + mdToHtml(p.body) + "</div>" +
      "</div>";
    document.body.appendChild(overlay);
    overlay.querySelector("#am-close").onclick = function () { overlay.remove(); };
    overlay.onclick = function (e) { if (e.target === overlay) overlay.remove(); };
  }

  function t(s) {
    return window.DGGZ_LANG ? window.DGGZ_LANG.t(s) : s;
  }

  function card(p, big) {
    return (
      '<div class="mat-card' + (big ? " mat-featured" : "") + '" data-slug="' + escapeHtml(p.slug) + '">' +
      (big ? '<div class="mat-featured-tag">' + t("Destaque") + "</div>" : "") +
      (p.cover ? '<div class="mat-thumb"><img src="' + p.cover + '" alt="" loading="lazy"></div>' : "") +
      '<div class="mat-body"' + (big && !p.cover ? ' style="padding-right:80px"' : "") + ">" +
      '<div class="mat-outlet">Anti Mag · ' + fmtDate(p.date) + "</div>" +
      '<div class="mat-title">' + escapeHtml(p.title) + "</div>" +
      (p.excerpt ? '<div class="mat-excerpt">' + escapeHtml(p.excerpt) + "</div>" : "") +
      "</div>" +
      "</div>"
    );
  }

  var lastPosts = [];

  function render(posts) {
    var grid = document.getElementById("blog-grid");
    if (!grid) return;
    lastPosts = posts;
    var published = posts.filter(function (p) { return p.published !== false; });
    published.sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
    if (!published.length) {
      grid.innerHTML =
        '<div style="padding:100px 20px;text-align:center">' +
        '<div style="font-size:22px;font-weight:800;letter-spacing:2px;text-transform:uppercase">' + t("Em breve") + "</div>" +
        '<div style="font-size:13.5px;color:#8a8a8a;margin-top:10px">' + t("As primeiras matérias do Anti Mag estão a caminho.") + "</div>" +
        "</div>";
      return;
    }
    var featured = published.slice(0, 1);
    var rest = published.slice(1);
    var html = "";
    html += '<div class="mat-grid-inner mat-featured-grid">' + featured.map(function (p) { return card(p, true); }).join("") + "</div>";
    if (rest.length) {
      html += '<div class="store-section-head"><div class="store-section-title">' + t("Todas as matérias") + "</div></div>";
      html += '<div class="mat-grid-inner">' + rest.map(function (p) { return card(p, false); }).join("") + "</div>";
    }
    grid.innerHTML = html;
    var bySlug = {};
    published.forEach(function (p) { bySlug[p.slug] = p; });
    Array.prototype.forEach.call(grid.querySelectorAll(".mat-card"), function (el) {
      el.addEventListener("click", function () {
        var p = bySlug[el.dataset.slug];
        if (p) openPost(p);
      });
    });
  }

  function load() {
    var grid = document.getElementById("blog-grid");
    if (!grid) return;
    fetch("/blog/posts.json", { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (data) { render(data.posts || []); })
      .catch(function () {
        grid.innerHTML = '<div style="padding:60px 20px;text-align:center;color:#8a8a8a">' + t("Não foi possível carregar as matérias agora.") + "</div>";
      });
  }

  /* ---------- sugerir matéria (Netlify Forms) ---------- */
  var inputStyle = "width:100%;padding:12px 16px;border-radius:12px;border:1px solid #262626;background:#151515;color:#fff;font-size:13.5px;outline:none;box-sizing:border-box;margin-bottom:12px;font-family:inherit";

  function renderMateriaForm() {
    var root = document.getElementById("materia-form-root");
    if (!root) return;
    root.innerHTML =
      '<input id="mf-nome" type="text" required placeholder="' + t("Seu nome (como quer ser creditado)") + '" style="' + inputStyle + '">' +
      '<input id="mf-email" type="email" required placeholder="' + t("Seu e-mail") + '" style="' + inputStyle + '">' +
      '<input id="mf-titulo" type="text" required placeholder="' + t("Título da matéria") + '" style="' + inputStyle + '">' +
      '<textarea id="mf-materia" required rows="10" placeholder="' + t("Escreve a matéria inteira aqui, do jeito que ela deve ser publicada") + '" style="' + inputStyle + ';resize:vertical"></textarea>' +
      '<input id="mf-fotos" type="url" placeholder="' + t("Link com até 3 fotos (Drive, Imgur, WeTransfer...)") + '" style="' + inputStyle + '">' +
      '<textarea id="mf-links" rows="2" placeholder="' + t("Links auxiliares / fontes (uma por linha)") + '" style="' + inputStyle + ';resize:vertical"></textarea>' +
      '<button class="btn-w" id="mf-submit" style="width:100%">' + t("Enviar matéria") + "</button>" +
      '<div id="mf-status" style="font-size:12px;color:#8a8a8a;margin-top:10px;text-align:center"></div>';

    document.getElementById("mf-submit").addEventListener("click", function (e) {
      e.preventDefault();
      var nome = document.getElementById("mf-nome").value.trim();
      var email = document.getElementById("mf-email").value.trim();
      var titulo = document.getElementById("mf-titulo").value.trim();
      var materia = document.getElementById("mf-materia").value.trim();
      var status = document.getElementById("mf-status");
      if (!nome || !email || !titulo || !materia) {
        status.textContent = t("Preenche nome, e-mail, título e o texto da matéria.");
        return;
      }
      var fotos = document.getElementById("mf-fotos").value.trim();
      var links = document.getElementById("mf-links").value.trim();
      var body =
        "form-name=materia-sugestao" +
        "&bot-field=" +
        "&nome=" + encodeURIComponent(nome) +
        "&email=" + encodeURIComponent(email) +
        "&titulo=" + encodeURIComponent(titulo) +
        "&fotos_link=" + encodeURIComponent(fotos) +
        "&links_auxiliares=" + encodeURIComponent(links) +
        "&materia=" + encodeURIComponent(materia);
      status.textContent = t("Enviando...");
      fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body })
        .then(function () {
          status.textContent = t("Recebemos sua matéria! Vamos ler com calma — obrigado.");
          document.getElementById("mf-nome").value = "";
          document.getElementById("mf-email").value = "";
          document.getElementById("mf-titulo").value = "";
          document.getElementById("mf-materia").value = "";
          document.getElementById("mf-fotos").value = "";
          document.getElementById("mf-links").value = "";
        })
        .catch(function () {
          status.textContent = t("Não rolou enviar agora — tenta de novo em instantes.");
        });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { load(); renderMateriaForm(); });
  } else {
    load();
    renderMateriaForm();
  }
  document.addEventListener("tabchange", function (e) {
    if (e.detail.tab === "blog") load();
  });
  document.addEventListener("langchange", function () {
    renderMateriaForm();
    render(lastPosts);
  });
})();
