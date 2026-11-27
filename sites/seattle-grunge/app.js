(function () {
  var G = window.GRUNGE;
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function ext(href, text) { var a = el("a", null, text); a.href = href; a.target = "_blank"; a.rel = "noopener"; return a; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  // ---------- Timeline with era filter ----------
  var era = "all";
  function renderTimeline() {
    var chips = $("eraFilter"); chips.textContent = "";
    [{ id: "all", label: "All years" }].concat(G.eras).forEach(function (e) {
      var b = el("button", "chip", e.label); b.type = "button";
      b.setAttribute("aria-pressed", String(era === e.id));
      b.addEventListener("click", function () { era = e.id; renderTimeline(); });
      chips.appendChild(b);
    });
    var ol = $("tl"); ol.textContent = "";
    G.timeline.filter(function (t) { return era === "all" || t.era === era; }).forEach(function (t, i) {
      var li = el("li"), btn = el("button"); btn.type = "button";
      btn.appendChild(el("span", "yr", t.year)); btn.appendChild(document.createTextNode(t.title));
      var body = el("div", "body"); body.hidden = true;
      body.appendChild(el("p", null, t.text));
      body.appendChild(ext(t.link[1], t.link[0] + " ↗"));
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", function () {
        var open = body.hidden; body.hidden = !open; btn.setAttribute("aria-expanded", String(open));
      });
      li.appendChild(btn); li.appendChild(body); ol.appendChild(li);
    });
  }

  // ---------- Bands ----------
  function renderBands() {
    var grid = $("bandGrid");
    G.bands.forEach(function (b) {
      var card = el("div", "card"), btn = el("button"); btn.type = "button";
      btn.appendChild(el("h3", null, b.name));
      btn.appendChild(el("div", "sub", b.from + " • " + b.years));
      var more = el("div", "more"); more.hidden = true;
      more.appendChild(el("p", null, b.blurb));
      more.appendChild(el("strong", null, "Members: ")); more.appendChild(document.createTextNode(b.people));
      more.appendChild(el("p", null, "Key albums:"));
      var ul = el("ul"); b.albums.forEach(function (a) { ul.appendChild(el("li", null, a)); });
      more.appendChild(ul);
      more.appendChild(ext(b.link[1], b.link[0] + " ↗"));
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", function () { var open = more.hidden; more.hidden = !open; btn.setAttribute("aria-expanded", String(open)); });
      card.appendChild(btn); card.appendChild(more); grid.appendChild(card);
    });
  }

  // ---------- Places ----------
  function renderPlaces() {
    var ul = $("placeList");
    G.places.forEach(function (p) {
      var li = el("li");
      li.appendChild(el("h3", null, p.name));
      li.appendChild(el("div", "muted", p.area));
      li.appendChild(el("p", null, p.text));
      var links = el("div", "links");
      links.appendChild(ext("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(p.query), "Open in Maps ↗"));
      if (p.link) links.appendChild(ext(p.link[1], p.link[0] + " ↗"));
      li.appendChild(links); ul.appendChild(li);
    });
  }

  // ---------- Quiz (5 random questions from the bank) ----------
  var qs, qi, score;
  function startQuiz() {
    qs = shuffle(G.quiz).slice(0, 5).map(function (q) {
      var order = shuffle(q.options.map(function (o, i) { return i; }));
      return { q: q.q, why: q.why, options: order.map(function (i) { return q.options[i]; }), answer: order.indexOf(q.answer) };
    });
    qi = 0; score = 0; showQ();
  }
  function showQ() {
    var box = $("quizBox"); box.textContent = "";
    var q = qs[qi];
    box.appendChild(el("p", "muted", "Question " + (qi + 1) + " of " + qs.length));
    box.appendChild(el("h3", null, q.q));
    var why = el("p", "why"); why.setAttribute("aria-live", "polite");
    var next = el("button", "go", qi === qs.length - 1 ? "See score" : "Next"); next.type = "button"; next.hidden = true;
    var btns = q.options.map(function (o, i) {
      var b = el("button", "opt", o); b.type = "button";
      b.addEventListener("click", function () {
        btns.forEach(function (x, j) { x.disabled = true; if (j === q.answer) x.classList.add("right"); else if (x === b) x.classList.add("wrong"); });
        if (i === q.answer) score++;
        why.textContent = (i === q.answer ? "Right! " : "Not quite. ") + q.why;
        next.hidden = false; next.focus();
      });
      box.appendChild(b); return b;
    });
    box.appendChild(why); box.appendChild(next);
    next.addEventListener("click", function () { qi++; if (qi >= qs.length) endQuiz(); else showQ(); });
  }
  function endQuiz() {
    var box = $("quizBox"); box.textContent = "";
    box.appendChild(el("h3", null, "You got " + score + " out of " + qs.length));
    box.appendChild(el("p", null, score >= 4 ? "You really know your Seattle sound!" : "Nice start. Dive into the timeline and bands above, then try again."));
    var again = el("button", "go", "Try new questions"); again.type = "button"; again.addEventListener("click", startQuiz);
    box.appendChild(again);
  }

  // ---------- Learn more ----------
  function renderMore() {
    var ul = $("moreList");
    G.more.forEach(function (m) { var li = el("li"); li.appendChild(ext(m[1], m[0] + " ↗")); ul.appendChild(li); });
  }

  renderTimeline(); renderBands(); renderPlaces(); renderMore(); startQuiz();
})();
