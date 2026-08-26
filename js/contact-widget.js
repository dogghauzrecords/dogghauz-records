/* ============================================================
   CONTRATAR — janela de contato (estilo chat de suporte) da
   DoggHaüz Records, mesmo esquema do site do Jay Mariani.
   ============================================================ */
(function () {
  window.openContactWidget = function () {
    var overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML =
      '<div class="modal contact-modal" style="position:relative">' +
      '<button class="modal-close" id="dgz-contact-close">✕</button>' +
      '<div class="ava-big" style="width:56px;height:56px;margin:0 auto 14px"><img src="/assets/dogghauz/photos/logo-instagram.jpg" alt="DoggHaüz Records"></div>' +
      "<h3>Booking DoggHaüz Records</h3>" +
      '<p>Data, cidade, venue e proposta — a gente responde direto por aqui.</p>' +
      '<a class="contact-btn whatsapp" href="https://wa.me/5511987195639?text=' + encodeURIComponent("Oi! Quero falar sobre uma showcase da DoggHaüz Records") + '" target="_blank" rel="noopener">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.3.1-.1.05-.3 0-.4s-.5-1.2-.7-1.6-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.8 2 4.7 4.7 0 0 0 1 2.5 10.7 10.7 0 0 0 4.4 3.9c1.6.7 1.6.5 1.9.4a2.3 2.3 0 0 0 1.5-1 1.8 1.8 0 0 0 .1-1c-.1-.2-.2-.2-.4-.3z"/></svg>' +
      "WhatsApp — DoggHaüz" +
      "</a>" +
      '<div class="contact-info-text">' +
      '<div class="contact-info-row"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.9 12.9 0 0 0 .7 2.8 2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 12.9 12.9 0 0 0 2.8.7 2 2 0 0 1 1.7 2z"/></svg>+55 11 98719-5639</div>' +
      '<div class="contact-info-row"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 6l9 7 9-7"/></svg>dogghauzrecords@gmail.com</div>' +
      "</div>" +
      "</div>";
    document.body.appendChild(overlay);
    overlay.querySelector("#dgz-contact-close").onclick = function () { overlay.remove(); };
    overlay.onclick = function (e) { if (e.target === overlay) overlay.remove(); };
  };
})();
