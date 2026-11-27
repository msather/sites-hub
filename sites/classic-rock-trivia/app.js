(function () {
  var BANK = window.TRIVIA_BANK;
  var ROUND = 5;
  var KEY = "crt-used-artists-v1";
  var $ = function (id) { return document.getElementById(id); };

  // ---- helpers ----
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function safe(fn, fallback) { try { return fn(); } catch (e) { return fallback; } }
  function loadUsed() { return safe(function () { return JSON.parse(localStorage.getItem(KEY)) || []; }, []); }
  function saveUsed(list) { safe(function () { localStorage.setItem(KEY, JSON.stringify(list)); }); }

  // song title -> artist object (titles are unique across the bank; data is checked)
  var owner = {};
  BANK.forEach(function (a) { a.songs.forEach(function (s) { owner[s] = a; }); });
  var totalSongs = Object.keys(owner).length;
  $("bankInfo").textContent = BANK.length + " artists and " + totalSongs + " songs in the question bank. Each round uses artists you have not seen lately.";

  // ---- building a round (no repeated artists, repeats across rounds avoided) ----
  function chooseArtists() {
    var used = loadUsed();
    var fresh = BANK.filter(function (a) { return used.indexOf(a.artist) === -1; });
    if (fresh.length < ROUND) { used = []; fresh = BANK.slice(); } // everything seen: start a new cycle
    var chosen = shuffle(fresh).slice(0, ROUND);
    saveUsed(used.concat(chosen.map(function (a) { return a.artist; })));
    return chosen;
  }

  function decoyPool(artist, tricky, taken) {
    var others = BANK.filter(function (a) { return a.artist !== artist.artist; });
    var same = others.filter(function (a) { return a.style === artist.style; });
    var pool = tricky && same.length >= 3 ? same : others;
    return shuffle(pool).map(function (a) { return pick(a.songs); }).filter(function (s) { return taken.indexOf(s) === -1; });
  }

  function buildQuestion(artist) {
    var tricky = Math.random() < 0.5;
    var notQuestion = Math.random() < 0.3 && artist.songs.length >= 3;
    var options, answer, text;
    if (notQuestion) {
      var real = shuffle(artist.songs).slice(0, 3);
      var decoy = decoyPool(artist, tricky, real)[0];
      options = shuffle(real.concat([decoy]));
      answer = decoy;
      text = "Which of these is NOT a song by " + artist.artist + "?";
    } else {
      var right = pick(artist.songs);
      var decoys = []; // three different artists, never the question artist
      var pool = decoyPool(artist, tricky, [right]);
      var seenArtists = {};
      pool.forEach(function (s) {
        var o = owner[s].artist;
        if (decoys.length < 3 && !seenArtists[o]) { seenArtists[o] = true; decoys.push(s); }
      });
      options = shuffle([right].concat(decoys));
      answer = right;
      text = "Which of these is a song by " + artist.artist + "?";
    }
    return { artist: artist.artist, text: text, options: options, answer: answer, not: notQuestion };
  }

  // ---- game flow ----
  var questions, index, score, answers;
  function startRound() {
    questions = chooseArtists().map(buildQuestion);
    index = 0; score = 0; answers = [];
    $("start").hidden = true; $("results").hidden = true; $("quiz").hidden = false;
    showQuestion();
  }

  function showQuestion() {
    var q = questions[index];
    $("progress").textContent = "Question " + (index + 1) + " of " + ROUND;
    $("question").textContent = q.text;
    $("feedback").textContent = "";
    $("next").hidden = true;
    var box = $("options"); box.textContent = "";
    q.options.forEach(function (o) {
      var b = document.createElement("button");
      b.className = "opt"; b.type = "button"; b.textContent = o; b.dataset.song = o;
      b.addEventListener("click", function () { choose(o); });
      box.appendChild(b);
    });
  }

  function choose(song) {
    var q = questions[index];
    var correct = song === q.answer;
    if (correct) score++;
    answers.push({ q: q, picked: song, correct: correct });
    [].forEach.call($("options").children, function (b) {
      b.disabled = true;
      var artistOf = owner[b.dataset.song].artist;
      var note = document.createElement("small");
      note.textContent = artistOf;
      b.appendChild(note);
      if (b.dataset.song === q.answer) b.classList.add("right");
      else if (b.dataset.song === song) b.classList.add("wrong");
    });
    $("feedback").textContent = correct ? "Nailed it!" : (q.not ? "Not quite. That one is not theirs: " + q.answer + "." : "Not quite. The real one is " + q.answer + ".");
    $("next").textContent = index === ROUND - 1 ? "See results" : "Next question";
    $("next").hidden = false;
    $("next").focus();
  }

  function finish() {
    $("quiz").hidden = true; $("results").hidden = false;
    $("score").textContent = "You scored " + score + " out of " + ROUND;
    var verdicts = ["Roadie material. Back to the record shelf!", "Opening act, with room to grow.", "Solid sideman.", "Lead guitarist energy.", "Headliner!", "Hall of Fame. Perfect set!"];
    $("verdict").textContent = verdicts[score];
    var rev = $("review"); rev.textContent = "";
    answers.forEach(function (a, i) {
      var d = document.createElement("div"); d.className = "rv";
      var h = document.createElement("div");
      var m = document.createElement("span"); m.className = "mark " + (a.correct ? "ok" : "no"); m.textContent = a.correct ? "Correct " : "Missed ";
      h.appendChild(m); h.appendChild(document.createTextNode((i + 1) + ". " + a.q.text));
      d.appendChild(h);
      var ul = document.createElement("ul");
      a.q.options.forEach(function (o) {
        var li = document.createElement("li");
        li.textContent = o + " - " + owner[o].artist + (o === a.q.answer ? " (answer)" : "");
        ul.appendChild(li);
      });
      d.appendChild(ul); rev.appendChild(d);
    });
    $("again").focus();
  }

  $("play").addEventListener("click", startRound);
  $("again").addEventListener("click", startRound);
  $("next").addEventListener("click", function () { index++; if (index >= ROUND) finish(); else showQuestion(); });
})();
