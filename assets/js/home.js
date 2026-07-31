(function () {
  "use strict";

  var filter = document.getElementById("tag-filter");
  var buttons = document.querySelectorAll(".tag-btn");
  var rows = document.querySelectorAll(".publication-row[data-tags]");

  buttons.forEach(function (button) {
    var tag = button.dataset.tag;
    var count = tag === "all" ? rows.length : Array.from(rows).filter(function (row) {
      return row.dataset.tags.split(",").includes(tag);
    }).length;
    var badge = document.createElement("span");
    badge.className = "tag-count";
    badge.textContent = count;
    button.appendChild(badge);
  });

  if (filter) {
    filter.addEventListener("click", function (event) {
      var button = event.target.closest(".tag-btn");
      if (!button) return;

      buttons.forEach(function (item) {
        var selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });

      var selectedTag = button.dataset.tag;
      rows.forEach(function (row) {
        var tags = row.dataset.tags.split(",");
        row.hidden = selectedTag !== "all" && !tags.includes(selectedTag);
      });
    });
  }

  var copyButton = document.getElementById("email-copy");
  var toast = document.getElementById("toast");
  var toastTimer;

  function showToast() {
    if (!toast) return;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 1700);
  }

  if (copyButton) {
    copyButton.addEventListener("click", function () {
      var email = copyButton.dataset.email;
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(showToast).catch(function () {
          window.location.href = "mailto:" + email;
        });
      } else {
        window.location.href = "mailto:" + email;
      }
    });
  }

  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("visible", window.scrollY > 520);
    }, { passive: true });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var currentYear = document.getElementById("current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
})();
