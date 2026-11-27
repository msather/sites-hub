(function () {
  var D = window.FISHING;
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var $ = function (id) { return document.getElementById(id); };
  var monthSel = $("month"), areaSel = $("area"), accessSel = $("access"), out = $("areas");
  var boxes = document.querySelectorAll("fieldset input");

  var CHECKLIST = [
    ["Rules and safety", ["Fishing license and catch record card", "Checked WDFW emergency rule changes for my area", "Marine forecast checked (no small craft advisory)", "Tide and current times checked", "Life jacket for every person, worn on the water", "Told someone where I am going and when I will be back"]],
    ["Boat", ["Fuel, plus a spare", "Charged phone and VHF radio", "Anchor, line and a bailer or pump", "Navigation lights and horn or whistle", "Boat launch ramp and parking fee ready"]],
    ["Fishing gear", ["Rods, reels and fresh line", "Flashers, dodgers and leaders", "Spoons, hoochies and jigs", "Bait (herring) on ice", "Downrigger weights, release clips and net", "Cooler, ice and a way to bleed and clean fish"]]
  ];

  function safe(fn) { try { return fn(); } catch (e) { return null; } }
  var link = function (id, key) { $(id).href = D.links[key]; };
  link("regsLink", "regs"); link("emergencyLink", "emergency"); link("tidesLink", "tides");
  link("currentsLink", "currents"); link("mapLink", "areaMap");

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
  function anchor(href, text) {
    var a = el("a", null, text); a.href = href; a.target = "_blank"; a.rel = "noopener"; return a;
  }
  function monthNames(list) { return list.map(function (m) { return MONTHS[m - 1].slice(0, 3); }).join(", "); }
  function mapLink(query) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query + ", Washington"); }
  function groups() { return [].filter.call(boxes, function (b) { return b.checked; }).map(function (b) { return b.value; }); }

  // ---------- Best bets ----------
  function renderBest(month, g) {
    var box = $("best");
    box.textContent = "";
    if (month === 0) { return; }
    var byFish = {};
    D.areas.forEach(function (a) {
      a.fish.forEach(function (f) {
        if (g.indexOf(f.group) > -1 && f.peak.indexOf(month) > -1) {
          var key = f.name;
          (byFish[key] = byFish[key] || []).push(a);
        }
      });
    });
    box.appendChild(el("h2", null, "Best bets in " + MONTHS[month - 1]));
    var names = Object.keys(byFish);
    if (!names.length) { box.appendChild(el("p", "muted", "No peak fishing listed for this month with your filters.")); return; }
    var ul = el("ul");
    names.forEach(function (n) {
      var li = el("li");
      li.appendChild(el("strong", null, n + ": "));
      byFish[n].forEach(function (a, i) {
        if (i) li.appendChild(document.createTextNode(", "));
        var l = el("a", null, a.name.replace("Marine ", "") + " (" + a.place.split(/[:(,]/)[0].trim() + ")");
        l.href = "#area-" + a.id;
        li.appendChild(l);
      });
      ul.appendChild(li);
    });
    box.appendChild(ul);
  }

  // ---------- Live tides (NOAA, loaded in the browser) ----------
  function ymd(d) { return d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2); }
  function loadTides(area, mount) {
    var now = new Date(), tom = new Date(now.getTime() + 86400000);
    var key = "tides-" + area.station.id + "-" + ymd(now);
    var url = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=sites_hub_fishing" +
      "&begin_date=" + ymd(now) + "&end_date=" + ymd(tom) + "&datum=MLLW&station=" + area.station.id +
      "&time_zone=lst_ldt&units=english&interval=hilo&format=json";
    mount.textContent = "Loading live tides...";
    function draw(data, cached) {
      mount.textContent = "";
      var rows = data.predictions || [];
      if (!rows.length) throw new Error("no data");
      var table = el("table");
      var head = el("tr"); ["Day", "Time", "Tide", "Height"].forEach(function (h) { head.appendChild(el("th", null, h)); });
      table.appendChild(head);
      var today = now.getDate();
      rows.forEach(function (r) {
        var dt = r.t.split(" "), d = Number(dt[0].split("-")[2]);
        var tr = el("tr", r.type === "H" ? "hi" : "");
        tr.appendChild(el("td", null, d === today ? "Today" : "Tomorrow"));
        var hm = dt[1].split(":"), h = Number(hm[0]);
        tr.appendChild(el("td", null, ((h + 11) % 12 + 1) + ":" + hm[1] + (h >= 12 ? " pm" : " am")));
        tr.appendChild(el("td", null, r.type === "H" ? "High" : "Low"));
        tr.appendChild(el("td", null, Number(r.v).toFixed(1) + " ft"));
        table.appendChild(tr);
      });
      mount.appendChild(table);
      mount.appendChild(el("p", "muted", "Station: " + area.station.name + " (NOAA " + area.station.id + "), local time" + (cached ? ". Saved copy, you may be offline." : ".") +
        " Spots in this area can differ by 10-30 minutes; check your exact location."));
      mount.appendChild(anchor("https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=" + area.station.id, "Full NOAA tide chart for this station"));
    }
    fetch(url).then(function (r) { return r.json(); }).then(function (data) {
      draw(data);
      safe(function () { localStorage.setItem(key, JSON.stringify(data)); });
    }).catch(function () {
      var saved = safe(function () { return JSON.parse(localStorage.getItem(key)); });
      try { if (saved) { draw(saved, true); return; } } catch (e) { /* fall through */ }
      mount.textContent = "";
      mount.appendChild(el("p", "muted", "Live tides are unavailable right now. Use the written guidance above and "));
      mount.lastChild.appendChild(anchor("https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=" + area.station.id, "open the NOAA tide chart"));
    });
  }

  // ---------- Areas ----------
  function render() {
    var month = Number(monthSel.value), g = groups(), access = accessSel.value;
    out.textContent = "";
    renderBest(month, g);
    var shown = 0, fishCount = 0, tideJobs = [];
    D.areas.forEach(function (a) {
      if (areaSel.value !== "all" && areaSel.value !== a.id) return;
      var fish = a.fish.filter(function (f) { return g.indexOf(f.group) > -1 && (month === 0 || f.months.indexOf(month) > -1); });
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
          d.appendChild(el("span", "tag" + (isPeak ? " peak" : ""), isPeak ? "Peak now" : "Typical: " + monthNames(f.months)));
          d.appendChild(el("div", null, "Depth: " + f.depth + ". " + f.notes));
          grid.appendChild(d);
        });
        art.appendChild(grid);
        fishCount += fish.length;
      }

      art.appendChild(el("h3", null, "Popular spots"));
      var spots = a.hotspots.filter(function (h) { return access === "all" || h.access.indexOf(access) > -1; });
      if (!spots.length) art.appendChild(el("p", "empty", "No " + access + " spots listed for this area."));
      var ul = el("ul");
      spots.forEach(function (h) {
        var li = el("li");
        li.appendChild(el("strong", null, h.name));
        li.appendChild(document.createTextNode(" (" + h.access + "): " + h.note + " "));
        li.appendChild(anchor(mapLink(h.name + ", " + a.place), "Map"));
        ul.appendChild(li);
      });
      art.appendChild(ul);

      if (access !== "shore") {
        art.appendChild(el("h3", null, "Boat launches"));
        var ul3 = el("ul");
        a.launches.forEach(function (n) {
          var li = el("li"); li.appendChild(document.createTextNode(n + " "));
          li.appendChild(anchor(mapLink(n), "Map")); ul3.appendChild(li);
        });
        art.appendChild(ul3);
        art.appendChild(el("p", "muted", "Check ramp status, fees and hours before you go."));
      }

      art.appendChild(el("h3", null, "Tides and current"));
      art.appendChild(el("p", null, a.tides));
      var tideMount = el("div", "tidebox");
      art.appendChild(tideMount);
      tideJobs.push([a, tideMount]);

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

      art.appendChild(el("h3", null, "Official links"));
      var links = el("p", "links");
      links.appendChild(anchor("https://forecast.weather.gov/shmrn.php?mz=" + a.zone, "Marine weather forecast"));
      links.appendChild(anchor(D.links.regs, "WDFW rules (find " + a.name + ")"));
      links.appendChild(anchor(D.links.emergency, "Emergency rule changes"));
      art.appendChild(links);

      out.appendChild(art);
      shown++;
    });
    $("summary").textContent = shown + " area(s), " + fishCount + " fishing option(s) shown for " + (month === 0 ? "the whole year" : MONTHS[month - 1]) + ".";
    tideJobs.forEach(function (j) { loadTides(j[0], j[1]); });
  }

  // ---------- Checklist (saved on this device) ----------
  function renderChecklist() {
    var saved = safe(function () { return JSON.parse(localStorage.getItem("sound-fishing-checklist")) || {}; }) || {};
    var mount = $("checkitems"); mount.textContent = "";
    CHECKLIST.forEach(function (sec) {
      mount.appendChild(el("h4", null, sec[0]));
      sec[1].forEach(function (item) {
        var label = el("label"), cb = document.createElement("input");
        cb.type = "checkbox"; cb.checked = !!saved[item];
        cb.addEventListener("change", function () {
          saved[item] = cb.checked;
          safe(function () { localStorage.setItem("sound-fishing-checklist", JSON.stringify(saved)); });
        });
        label.appendChild(cb); label.appendChild(document.createTextNode(item));
        mount.appendChild(label);
      });
    });
  }
  $("resetChecks").addEventListener("click", function () {
    safe(function () { localStorage.removeItem("sound-fishing-checklist"); });
    renderChecklist();
  });

  monthSel.addEventListener("change", render);
  areaSel.addEventListener("change", render);
  accessSel.addEventListener("change", render);
  [].forEach.call(boxes, function (b) { b.addEventListener("change", render); });
  renderChecklist();
  render();

  // ---------- Offline support ----------
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").then(function () {
      $("offlineNote").textContent = "Works offline after your first visit. Add it to your home screen to open it like an app.";
    }).catch(function () { /* offline support is optional */ });
  }
})();
