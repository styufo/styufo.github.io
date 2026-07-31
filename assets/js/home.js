(function () {
  "use strict";

  if (window.lucide) {
    window.lucide.createIcons({ "stroke-width": 1.8 });
  }

  var menuButton = document.querySelector(".menu-button");
  var siteNav = document.getElementById("site-nav");

  if (menuButton && siteNav) {
    menuButton.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("title", isOpen ? "Close navigation" : "Open navigation");
      document.body.classList.toggle("menu-open", isOpen);
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("title", "Open navigation");
        document.body.classList.remove("menu-open");
      });
    });
  }

  var filterButtons = document.querySelectorAll("[data-filter]");
  var publications = document.querySelectorAll(".publication[data-topics]");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.dataset.filter;

      filterButtons.forEach(function (item) {
        var selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });

      publications.forEach(function (publication) {
        var topics = publication.dataset.topics.split(" ");
        publication.hidden = filter !== "all" && !topics.includes(filter);
      });
    });
  });

  var copyButton = document.getElementById("copy-email");
  var toast = document.getElementById("toast");
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("visible");
    }, 1800);
  }

  if (copyButton) {
    copyButton.addEventListener("click", function () {
      var email = copyButton.dataset.email;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(function () {
          showToast("Email copied");
        }).catch(function () {
          window.location.href = "mailto:" + email;
        });
      } else {
        window.location.href = "mailto:" + email;
      }
    });
  }

  var year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
