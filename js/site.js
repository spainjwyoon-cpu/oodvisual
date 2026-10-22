(function () {
  var works = window.WORKS || [], site = window.SITE || {};
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  document.querySelectorAll("[data-site]").forEach(function (el) {
    var k = el.getAttribute("data-site");
    if (k === "email") { el.textContent = site.email; el.href = "mailto:" + site.email; }
    else el.textContent = site[k] || "";
  });
  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  // 홈: 작품 그리드
  var grid = $("#works-grid");
  if (grid) {
    grid.innerHTML = works.map(function (w) {
      return '<a class="card" href="work.html?id=' + encodeURIComponent(w.id) + '">' +
        '<div class="card-img"><img src="' + esc(w.cover) + '" alt="' + esc(w.title) + '" loading="lazy"></div>' +
        '<div class="card-meta"><h3>' + esc(w.title) + ' <span>' + esc(w.titleEn) + '</span></h3>' +
        '<p>' + esc(w.type) + ' · ' + esc(w.year) + '</p></div></a>';
    }).join("");
    var hero = $("#hero-img");
    if (hero && works[0]) { hero.src = works[0].cover; hero.alt = works[0].title; }
  }

  // 작품 상세
  var detail = $("#work");
  if (detail) {
    var id = new URLSearchParams(location.search).get("id");
    var w = works.filter(function (x) { return x.id === id; })[0];
    if (!w) { detail.innerHTML = '<p class="empty">작품을 찾을 수 없어요. <a href="./">처음으로</a></p>'; return; }
    document.title = w.title + " · " + site.name;
    var i = works.indexOf(w), next = works[(i + 1) % works.length];
    detail.innerHTML =
      '<header class="work-hero"><img src="' + esc(w.cover) + '" alt="' + esc(w.title) + '"></header>' +
      '<section class="work-head wrap">' +
        '<p class="eyebrow">' + esc(w.type) + ' · ' + esc(w.year) + '</p>' +
        '<h1>' + esc(w.title) + ' <span>' + esc(w.titleEn) + '</span></h1>' +
        '<p class="lead">' + esc(w.summary) + '</p>' +
        '<div class="actions">' + (w.links || []).map(function (l) {
          return '<a class="btn' + (l.primary ? ' primary' : '') + '" href="' + esc(l.url) + '">' + esc(l.label) + '</a>';
        }).join("") + '</div>' +
      '</section>' +
      '<section class="work-body wrap">' +
        '<div>' + (w.body || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("") + '</div>' +
        (w.tools ? '<aside><h4>사용한 도구</h4><ul>' + w.tools.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join("") + '</ul></aside>' : '') +
      '</section>' +
      (w.gallery && w.gallery.length ? '<section class="gallery wrap">' + w.gallery.map(function (g) {
        var img = '<img src="' + esc(g.src) + '" alt="' + esc(g.caption) + '" loading="lazy">';
        return '<figure>' + (g.link ? '<a href="' + esc(g.link) + '">' + img + '</a>' : img) +
          (g.caption ? '<figcaption>' + esc(g.caption) + '</figcaption>' : '') + '</figure>';
      }).join("") + '</section>' : '') +
      (w.video ? '<section class="video wrap"><div class="ratio"><iframe src="' + esc(w.video) + '" title="' + esc(w.title) + '" allowfullscreen loading="lazy"></iframe></div></section>' : '') +
      (works.length > 1 ? '<nav class="next wrap"><a href="work.html?id=' + encodeURIComponent(next.id) + '">다음 작품 · ' + esc(next.title) + ' →</a></nav>' : '');
  }
})();
