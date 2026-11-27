(function () {
  var D = window.FISHING;
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var $ = function (id) { return document.getElementById(id); };
  var monthSel = $("month"), areaSel = $("area"), out = $("areas");
  var boxes = document.querySelectorAll("fieldset input");

  [["regsLink", "regs"], ["emergencyLink", "emergency"], ["tidesLink", "tides"], ["currentsLink", "currents"], ["mapLink", "areaMap"]]
    .forEach(function (p) { $(p[0]).href = D.links[p[1]]; });

  var opt = function (v, t) { var o = document.createElement("option"); o.value = v; o.textContent = t; return o; };
  monthSel.appendChild(opt("0", "All year"));
  MONTHS.forEach(function (m, i) { monthSel.appendChild(opt(String(i + 1), m)); });
  monthSel.value = String(new Date().getMonth() + 1);
  areaSel.appendChild(opt("all", "All areas"));
  D.areas.forEach(function (a) { areaSel.appendChild(opt(a.id, a.name + " - " + a.place)); });

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function monthNames(list) {
    return list.map(function (m) { return MONTHS[m - 1].slice(0, 3); }).join(", ");
  }

  function render() {
    var month = Number(monthSel.value);
    var groups = [].filter.call(boxes, function (b) { return b.checked; }).map(function (b) { return b.value; });
    out.textContent = "";
    var shown = 0, fishCount = 0;
    D.areas.forEach(function (a) {
      if (areaSel.value !== "all" && areaSel.value !== a.id) return;
      var fish = a.fish.filter(function (f) {
        return groups.indexOf(f.group) > -1 && (month === 0 || f.months.indexOf(month) > -1);
      });
      var art = el("article", "area");
      art.id = "area-" + a.id;
      art.appendChild(el("h2", null, a.name));
      art.appendChild(el("p", "place", a.place));
      art.appendChild(el("p", null, a.summary));

      art.appendChild(el("h3", null, month === 0 ? "What is typically available" : "In season in " + MONTHS[month - 1]));
      if (!fish.length) {
        art.appendChild(el("p", "empty", "Nothing typical for these filters. Try another month or fish type."));
      } else {
        var grid = el("div", "fish");
        fish.forEach(function (f) {
          var d = el("div");
          d.appendChild(el("strong", null, f.name));
          var isPeak = month > 0 && f.peak.indexOf(month) > -1;
          var tag = el("span", "tag" + (isPeak ? " peak" : ""), isPeak ? "Peak now" : "Typical: " + monthNames(f.months));
          d.appendChild(tag);
          d.appendChild(el("div", null, "Depth: " + f.depth + ". " + f.notes));
          grid.appendChild(d);
        });
        art.appendChild(grid);
        fishCount += fish.length;
      }

      art.appendChild(el("h3", null, "Popular spots"));
      var ul = el("ul");
      a.hotspots.forEach(function (h) {
        var li = el("li");
        li.appendChild(el("strong", null, h.name));
        li.appendChild(document.createTextNode(" (" + h.access + "): " + h.note));
        ul.appendChild(li);
      });
      art.appendChild(ul);

      art.appendChild(el("h3", null, "Tides and current"));
      art.appendChild(el("p", null, a.tides));

      art.appendChild(el("h3", null, "Helpful lures and gear"));
      var ul2 = el("ul");
      a.lures.forEach(function (l) {
        var li = el("li");
        li.appendChild(el("strong", null, l.name));
        li.appendChild(document.createTextNode(" - " + l.targets + ". " + l.note));
        ul2.appendChild(li);
      });
      art.appendChild(ul2);

      art.appendChild(el("h3", null, "Angler notes"));
      art.appendChild(el("p", null, a.tips));
      out.appendChild(art);
      shown++;
    });
    $("summary").textContent = shown + " area(s), " + fishCount + " fishing option(s) shown for " +
      (month === 0 ? "the whole year" : MONTHS[month - 1]) + ".";
  }

  monthSel.addEventListener("change", render);
  areaSel.addEventListener("change", render);
  [].forEach.call(boxes, function (b) { b.addEventListener("change", render); });
  render();
})();
