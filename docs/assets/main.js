/* Code for Virtual — site behaviour (no dependencies) */
(function () {
  "use strict";

  /* ---- current year in footer ---- */
  var year = document.getElementById("year");
  if (year) { year.textContent = String(new Date().getFullYear()); }

  /* ---- mobile navigation ---- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  function closeNav() {
    if (!toggle || !nav) { return; }
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "メニューを開く");
    nav.removeAttribute("data-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      if (open) {
        closeNav();
      } else {
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "メニューを閉じる");
        nav.setAttribute("data-open", "true");
      }
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) { closeNav(); }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") { closeNav(); }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) { closeNav(); }
    });
  }

  /* ---- header shadow once scrolled ---- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var syncHeader = function () {
      header.setAttribute("data-stuck", window.scrollY > 8 ? "true" : "false");
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }

  /* ---- reveal on scroll ---- */
  var targets = document.querySelectorAll("[data-reveal]");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduced) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });

  Array.prototype.forEach.call(targets, function (el) { observer.observe(el); });
})();
