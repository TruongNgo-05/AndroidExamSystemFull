import { BLOG_DATA, escapeHtml } from "../data/blogData.js";
import { MOCK_REVIEWS } from "../data/mockReviews.js";
import blogVideo from "../../../assets/media/blog-intro.mp4";
import { refreshLibraryLoop } from "./blogLibrary.js";

export function initBlogPage(root, onSearch) {
  const canHover = () =>
    window.matchMedia(
      "(min-width: 901px) and (hover: hover) and (pointer: fine)",
    ).matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var _dead = false,
    _ev = [],
    _ti = [],
    _ob = [],
    _frames = new Set();
  function listen(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    _ev.push([target, type, handler, options]);
  }
  var addEventListener = function (t, f, o) {
    listen(window, t, f, o);
  };
  var setTimeout = function (f, t) {
    var id = window.setTimeout(function () {
      if (!_dead) f();
    }, t);
    _ti.push(id);
    return id;
  };
  var setInterval = function (f, t) {
    var id = window.setInterval(function () {
      if (!_dead) f();
    }, t);
    _ti.push(id);
    return id;
  };
  var requestAnimationFrame = function (f) {
    var id = window.requestAnimationFrame(function (t) {
      _frames.delete(id);
      if (!_dead) f(t);
    });
    _frames.add(id);
    return id;
  };
  var IntersectionObserver = function (cb, o) {
    var x = new window.IntersectionObserver(cb, o);
    _ob.push(x);
    return x;
  };

  /* cuộn mượt tới các mục khi bấm liên kết "#..." (không đổi URL, an toàn với HashRouter) */
  var _nav = function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href");
    if (id.length < 2) return;
    var t = root.querySelector(id);
    if (t) {
      e.preventDefault();
      t.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    }
  };
  listen(root, "click", _nav);

  var $ = function (i) {
    return root.querySelector("#" + i);
  };
  function ic(n) {
    return '<svg class="i"><use href="#i-' + n + '"/></svg>';
  }
  /* theme */
  var R = document.documentElement;
  /* typing */
  var W = ["cùng Jeli", "theo nhịp của bạn", "mọi lúc mọi nơi"],
    wi = 0,
    ci = 0,
    del = false,
    ty = $("ty");
  (function tick() {
    var w = W[wi];
    ty.textContent = w.slice(0, ci);
    if (!del && ci === w.length) {
      del = true;
      return setTimeout(tick, 1400);
    }
    if (del && ci === 0) {
      del = false;
      wi = (wi + 1) % W.length;
    }
    ci += del ? -1 : 1;
    setTimeout(tick, del ? 40 : 90);
  })();
  /* marquee */
  var M = BLOG_DATA.subjects,
    h = "";
  M.forEach(function (x) {
    h += "<span>" + ic("grad") + " " + escapeHtml(x) + "</span>";
  });
  $("mq").innerHTML = h + h + h + h;
  /* reveal + counters */
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("on");
          var b = e.target.querySelector("[data-n]");
          if (b && !b.d) {
            b.d = 1;
            count(b);
          }
          var tg = e.target;
          setTimeout(function () {
            tg.style.transitionDelay = "";
          }, 1300);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  root.querySelectorAll(".rv").forEach(function (n, i) {
    n.style.transitionDelay = (i % 4) * 90 + "ms";
    io.observe(n);
  });
  function count(b) {
    var t = +b.dataset.n,
      s = b.dataset.s || "",
      st = null;
    if (!t) {
      b.textContent = "0" + s;
      return;
    }
    (function f(ts) {
      st = st || ts;
      var p = Math.min((ts - st) / 1200, 1);
      b.textContent = Math.round(t * p) + s;
      if (p < 1) requestAnimationFrame(f);
    })(performance.now());
  }
  /* tilt */
  root.querySelectorAll(".fc").forEach(function (c) {
    listen(c, "mousemove", function (e) {
      if (!canHover()) return;
      var r = c.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform =
        "perspective(600px) rotateY(" +
        x * 10 +
        "deg) rotateX(" +
        -y * 10 +
        "deg) translateY(-4px)";
    });
    listen(c, "mouseleave", function () {
      c.style.transform = "";
    });
  });
  /* Shared React search field and quick subject filters. */
  $("lf2").onclick = function (event) {
    const button = event.target.closest("button");
    if (button) onSearch(button.dataset.q);
  };
  const library = $("lib");
  const motionToggle = $("library-motion-toggle");
  function setLibraryPaused(paused) {
    library.dataset.paused = String(paused);
    motionToggle.setAttribute("aria-pressed", String(paused));
    motionToggle.textContent = paused ? "Chạy tiếp" : "Tạm dừng";
  }
  setLibraryPaused(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  motionToggle.onclick = () =>
    setLibraryPaused(library.dataset.paused !== "true");
  addEventListener("resize", function () {
    refreshLibraryLoop(root);
  });
  /* video player */
  (function () {
    var vp = $("vp"),
      vv = $("vv"),
      pl = $("vpl"),
      pp = $("vpp"),
      bar = $("vbar"),
      fill = $("vfill"),
      tm = $("vtm"),
      fs = $("vfs"),
      loaded = false,
      userPaused = false,
      D = 17.2;
    var rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    function load() {
      if (loaded) return;
      loaded = true;
      vv.src = blogVideo;
    }
    function fmt(x) {
      x = Math.floor(x);
      return Math.floor(x / 60) + ":" + ("0" + (x % 60)).slice(-2);
    }
    function play() {
      load();
      var r = vv.play();
      if (r && r.catch) r.catch(function () {});
    }
    function toggle() {
      if (vv.paused) {
        userPaused = false;
        play();
      } else {
        userPaused = true;
        vv.pause();
      }
    }
    function upd() {
      var d = vv.duration || D,
        c = vv.currentTime || 0;
      fill.style.width = (c / d) * 100 + "%";
      tm.textContent = fmt(c) + " / " + fmt(d);
      bar.setAttribute("aria-valuenow", Math.round((c / d) * 100));
      var cur = 0,
        bs = [].slice.call($("vch").children);
      bs.forEach(function (b, k) {
        if (c >= +b.dataset.t - 0.05) cur = k;
      });
      bs.forEach(function (b, k) {
        b.classList.toggle("on", k === cur);
      });
    }
    function seek(x) {
      load();
      var d = vv.duration || D;
      x = Math.max(0, Math.min(d - 0.05, x));
      if (vv.readyState < 1) {
        listen(
          vv,
          "loadedmetadata",
          function () {
            vv.currentTime = x;
            upd();
          },
          { once: true },
        );
      } else {
        vv.currentTime = x;
      }
      fill.style.width = (x / d) * 100 + "%";
    }
    listen(vv, "play", function () {
      vp.classList.add("pl");
      pp.innerHTML = ic("pause");
      pp.setAttribute("aria-label", "Tạm dừng");
    });
    listen(vv, "pause", function () {
      vp.classList.remove("pl");
      pp.innerHTML = ic("play");
      pp.setAttribute("aria-label", "Phát");
    });
    listen(vv, "timeupdate", upd);
    listen(vv, "loadedmetadata", upd);
    pl.onclick = toggle;
    pp.onclick = toggle;
    vv.onclick = toggle;
    function mv(e) {
      var r = bar.getBoundingClientRect();
      seek(((e.clientX - r.left) / r.width) * (vv.duration || D));
    }
    bar.onpointerdown = function (e) {
      bar.setPointerCapture(e.pointerId);
      mv(e);
      bar.onpointermove = mv;
    };
    bar.onpointerup = bar.onpointercancel = function () {
      bar.onpointermove = null;
    };
    bar.onkeydown = function (e) {
      if (e.key === "ArrowRight") {
        seek(vv.currentTime + 2);
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        seek(vv.currentTime - 2);
        e.preventDefault();
      }
    };
    $("vch").onclick = function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      userPaused = false;
      seek(+b.dataset.t);
      play();
    };
    fs.onclick = function () {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        var f = vp.requestFullscreen || vp.webkitRequestFullscreen;
        if (f) f.call(vp);
        else if (vv.webkitEnterFullscreen) vv.webkitEnterFullscreen();
      }
    };
    new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) load();
        });
      },
      { rootMargin: "300px 0px" },
    ).observe(vp);
    new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.intersectionRatio >= 0.5) {
            if (!userPaused && !rm) play();
          } else if (!vv.paused) vv.pause();
        });
      },
      { threshold: [0, 0.5] },
    ).observe(vp);
  })();
  /* jeli + lightbox */
  var jw = $("jw"),
    jt = $("jt"),
    jb = $("jb"),
    shown = false;
  addEventListener(
    "scroll",
    function () {
      var on = scrollY > 520;
      jw.classList.toggle("on", on);
      if (on && !shown) {
        shown = true;
        jw.classList.add("hi");
        setTimeout(function () {
          jw.classList.remove("hi");
        }, 4500);
      }
    },
    { passive: true },
  );
  var MS = [
      "Mỗi ngày một ít, thi tốt hơn nhiều!",
      "Sai thì xem lại, đúng thì nhớ lâu hơn.",
      "Ôn đều tay, đừng để dồn sát ngày thi nhé.",
      "Cố lên, mình ở đây cổ vũ bạn!",
      "Nghỉ 5 phút rồi làm tiếp nào.",
    ],
    mi = 0;
  jb.onclick = function () {
    jt.textContent = MS[mi++ % MS.length];
    jb.classList.remove("jmp");
    void jb.offsetWidth;
    jb.classList.add("jmp");
  };
  /* nav, share, hero tilt */
  function toast(m) {
    var t = $("ts");
    t.textContent = m;
    t.classList.add("on");
    setTimeout(function () {
      t.classList.remove("on");
    }, 2200);
  }
  $("sh").onclick = function () {
    var u = location.href;
    if (navigator.share) {
      navigator.share({ title: document.title, url: u }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(u).then(
        function () {
          toast("Đã sao chép liên kết");
        },
        function () {
          toast("Không sao chép được liên kết");
        },
      );
    } else toast("Không sao chép được liên kết");
  };
  var sn = $("sn"),
    ls = [].slice.call(sn.querySelectorAll(".sl a"));
  function nav() {
    sn.classList.toggle("on", scrollY > 520);
    var cur = null;
    ls.forEach(function (a) {
      var t = root.querySelector(a.getAttribute("href"));
      if (t && t.getBoundingClientRect().top < innerHeight * 0.4) cur = a;
    });
    ls.forEach(function (a) {
      a.classList.toggle("on", a === cur);
    });
  }
  addEventListener("scroll", nav, { passive: true });
  nav();
  (function () {
    var h = root.querySelector(".hero"),
      a = root.querySelector(".art");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    listen(h, "mousemove", function (e) {
      if (!canHover()) return;
      var r = h.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      a.style.transform =
        "perspective(900px) rotateY(" +
        x * 14 +
        "deg) rotateX(" +
        -y * 10 +
        "deg)";
    });
    listen(h, "mouseleave", function () {
      a.style.transform = "";
    });
  })();
  /* grid + timeline + big text + magnetic */
  var tl = $("tl"),
    tli = $("tli"),
    bt = $("bt");
  function sc2() {
    var r = tl.getBoundingClientRect(),
      p = Math.max(0, Math.min(1, (innerHeight * 0.65 - r.top) / r.height));
    tli.style.height = p * 100 + "%";
    var b = bt.parentNode.getBoundingClientRect();
    bt.style.transform = "translateX(" + (b.top * 0.5 - 400) + "px)";
  }
  addEventListener("scroll", sc2, { passive: true });
  sc2();
  root.querySelectorAll(".btn").forEach(function (b) {
    listen(b, "mousemove", function (e) {
      if (!canHover()) return;
      var r = b.getBoundingClientRect();
      b.style.transform =
        "translate(" +
        (e.clientX - r.left - r.width / 2) * 0.2 +
        "px," +
        (e.clientY - r.top - r.height / 2) * 0.3 +
        "px)";
    });
    listen(b, "mouseleave", function () {
      b.style.transform = "";
    });
  });
  /* progress, glow, up */
  var gl = $("gl");
  addEventListener(
    "scroll",
    function () {
      var h = R.scrollHeight - innerHeight;
      $("pg").style.width = (scrollY / h) * 100 + "%";
      root.querySelectorAll(".blob").forEach(function (b, k) {
        b.style.marginTop = scrollY * (k ? -0.12 : 0.15) + "px";
      });
    },
    { passive: true },
  );
  addEventListener("mousemove", function (e) {
    if (!canHover()) return;
    gl.style.left = e.clientX + "px";
    gl.style.top = e.clientY + "px";
  });
  /* ripple */
  listen(root, "click", function (e) {
    if (!canHover()) return;
    var b = e.target.closest(".btn");
    if (!b) return;
    var r = b.getBoundingClientRect(),
      d = Math.max(r.width, r.height),
      s = document.createElement("span");
    s.className = "rp";
    s.style.cssText =
      "width:" +
      d +
      "px;height:" +
      d +
      "px;left:" +
      (e.clientX - r.left - d / 2) +
      "px;top:" +
      (e.clientY - r.top - d / 2) +
      "px";
    b.appendChild(s);
    setTimeout(function () {
      s.remove();
    }, 600);
  });
  /* particles */
  (function () {
    var c = $("pc"),
      x = c.getContext("2d"),
      P = [],
      m = { x: -999, y: -999 };
    if (!x) return;
    function rs() {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
    }
    rs();
    addEventListener("resize", rs);
    for (var n = 0; n < 46; n++)
      P.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2.5 + 1,
      });
    listen(c.parentNode, "mousemove", function (e) {
      if (!canHover()) return;
      var r = c.getBoundingClientRect();
      m.x = e.clientX - r.left;
      m.y = e.clientY - r.top;
    });
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    (function a() {
      x.clearRect(0, 0, c.width, c.height);
      P.forEach(function (p, i) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;
        var dx = p.x - m.x,
          dy = p.y - m.y,
          d = Math.hypot(dx, dy);
        if (d > 0 && d < 110) {
          p.x += (dx / d) * 2;
          p.y += (dy / d) * 2;
        }
        x.beginPath();
        x.arc(p.x, p.y, p.r, 0, 7);
        x.fillStyle = document.documentElement.dataset.theme === "light" ? "rgba(8,127,128,.35)" : "rgba(204,251,241,.8)";
        x.fill();
        for (var j = i + 1; j < P.length; j++) {
          var q = P[j],
            e = Math.hypot(p.x - q.x, p.y - q.y);
          if (e < 110) {
            x.strokeStyle = (document.documentElement.dataset.theme === "light" ? "rgba(8,127,128," : "rgba(204,251,241,") + (0.35 - e / 320) + ")";
            x.beginPath();
            x.moveTo(p.x, p.y);
            x.lineTo(q.x, q.y);
            x.stroke();
          }
        }
      });
      requestAnimationFrame(a);
    })();
  })();
  /* reviews */
  (function () {
    var D = MOCK_REVIEWS;
    var U = [];
    try {
      var stored = JSON.parse(localStorage.getItem("jler_rv") || "[]");
      U = Array.isArray(stored)
        ? stored
            .filter(
              (a) =>
                a &&
                typeof a.n === "string" &&
                typeof a.t === "string" &&
                Number.isInteger(a.s) &&
                a.s >= 1 &&
                a.s <= 5,
            )
            .slice(0, 20)
        : [];
    } catch (e) {}
    var all,
      idx = 0,
      tmr,
      sel = 0;
    function st(n) {
      var h = "";
      for (var k = 1; k <= 5; k++)
        h += '<span class="' + (k <= Math.round(n) ? "" : "e") + '">★</span>';
      return h;
    }
    function esc(t) {
      var d = document.createElement("div");
      d.textContent = t;
      return d.innerHTML;
    }
    function render() {
      all = U.concat(D);
      var sum = 0;
      all.forEach(function (a) {
        sum += a.s;
      });
      var avg = all.length ? sum / all.length : 0;
      $("tk").innerHTML =
        all
          .map(function (a) {
            return (
              '<div class="rc"><div><div class="stars">' +
              st(a.s) +
              "</div><p>" +
              esc(a.t) +
              '</p><div class="who"><span class="av">' +
              esc(a.n.charAt(0).toUpperCase()) +
              "</span><span>" +
              esc(a.n) +
              "<small>" +
              esc(a.r || "Người dùng JLer") +
              "</small></span></div></div></div>"
            );
          })
          .join("") ||
        '<div class="rc"><p>Chưa có đánh giá trên trình duyệt này. Hãy chia sẻ cảm nhận đầu tiên của bạn.</p></div>';
      $("dt").innerHTML = all
        .map(function (_, k) {
          return '<button aria-label="Đánh giá ' + (k + 1) + '"></button>';
        })
        .join("");
      [].forEach.call($("dt").children, function (b, k) {
        b.onclick = function () {
          go(k);
        };
      });
      $("avs").innerHTML = st(avg);
      $("cnt").textContent = all.length + " đánh giá";
      var el = $("av"),
        t0 = null;
      (function f(ts) {
        t0 = t0 || ts;
        var p = Math.min((ts - t0) / 900, 1);
        el.textContent = (avg * p).toFixed(1);
        if (p < 1) requestAnimationFrame(f);
      })(performance.now());
      go(0);
    }
    function go(k) {
      if (!all.length) {
        $("tk").style.transform = "";
        return;
      }
      idx = (k + all.length) % all.length;
      $("tk").style.transform = "translateX(-" + idx * 100 + "%)";
      [].forEach.call($("dt").children, function (b, j) {
        b.classList.toggle("on", j === idx);
      });
      clearInterval(tmr);
      tmr = setInterval(function () {
        go(idx + 1);
      }, 5000);
    }
    var pk = $("pk");
    pk.innerHTML = "";
    for (var k = 1; k <= 5; k++)
      (function (k) {
        var b = document.createElement("button");
        b.textContent = "★";
        b.setAttribute("aria-label", k + " sao");
        b.onclick = function () {
          sel = k;
          [].forEach.call(pk.children, function (c, j) {
            c.classList.toggle("on", j < k);
          });
        };
        pk.appendChild(b);
      })(k);
    $("sd").onclick = function () {
      var n = $("nm").value.trim(),
        c = $("cm").value.trim();
      if (!sel || !n || !c) {
        $("nt").textContent =
          "Vui lòng chọn số sao, nhập tên và nội dung đánh giá.";
        $("nt").style.color = "var(--bad)";
        return;
      }
      U.unshift({ n: n, r: "Người dùng JLer", s: sel, t: c });
      try {
        localStorage.setItem("jler_rv", JSON.stringify(U.slice(0, 20)));
      } catch (e) {}
      $("nm").value = "";
      $("cm").value = "";
      sel = 0;
      [].forEach.call(pk.children, function (c) {
        c.classList.remove("on");
      });
      $("nt").style.color = "";
      $("nt").textContent = "Cảm ơn bạn đã đánh giá!";
      render();
    };
    render();
  })();

  return function cleanup() {
    _dead = true;
    root.removeEventListener("click", _nav);
    _ev.forEach(function (x) {
      x[0].removeEventListener(x[1], x[2], x[3]);
    });
    _ti.forEach(function (id) {
      window.clearTimeout(id);
      window.clearInterval(id);
    });
    _frames.forEach((id) => window.cancelAnimationFrame(id));
    _ob.forEach(function (o) {
      o.disconnect();
    });
    var video = $("vv");
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
  };
}
