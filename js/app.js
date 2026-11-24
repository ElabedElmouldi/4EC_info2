// app.js — Gestion du menu mobile, mode professeur et sommaire
document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile burger
  const btnMenu = document.getElementById("btn-menu");
  const menu = document.getElementById("menu");
  if (btnMenu && menu) {
    btnMenu.addEventListener("click", function () {
      const ouvert = menu.classList.toggle("ouvert");
      btnMenu.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });
  }

  // Mode professeur
  const btnProf = document.getElementById("btn-prof");
  const prefProf = localStorage.getItem("mode-prof") === "true";
  if (prefProf) {
    document.body.classList.add("mode-prof");
    if (btnProf) btnProf.setAttribute("aria-pressed", "true");
  }
  if (btnProf) {
    btnProf.addEventListener("click", function () {
      const actif = document.body.classList.toggle("mode-prof");
      btnProf.setAttribute("aria-pressed", actif ? "true" : "false");
      localStorage.setItem("mode-prof", actif ? "true" : "false");
    });
  }

  // Sommaire dynamique dans les chapitres
  const tocListe = document.getElementById("toc-liste");
  if (tocListe) {
    const titres = document.querySelectorAll("main h2");
    titres.forEach((h2, idx) => {
      if (!h2.id) {
        h2.id = "sec-" + (idx + 1);
      }
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + h2.id;
      a.textContent = h2.textContent.replace(/^[0-9]+\.\s*/, "");
      li.appendChild(a);
      tocListe.appendChild(li);
    });
  }
});
