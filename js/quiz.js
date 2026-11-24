// quiz.js — Auto-évaluation et scores interactifs
document.addEventListener("DOMContentLoaded", function () {
  // Gestion des quiz QCM\r\n  const qcms = document.querySelectorAll(".qcm");
  qcms.forEach((qcm) => {
    const qcmId = qcm.getElementById ? qcm.getAttribute("data-id") : null;\r\n    const verifBtn = qcm.querySelector(".qcm-verifier");\r\n    const resEl = qcm.querySelector(".qcm-resultat");\r\n    const questions = qcm.querySelectorAll(".q");\r\n\r\n    if (verifBtn && resEl) {
      verifBtn.addEventListener("click", function () {
        let score = 0;
        questions.forEach((q) => {
          const bonneRep = q.querySelector("label[data-ok='1']");
          const inputs = q.querySelectorAll("input[type='radio']");
          let repChoisie = null;
          inputs.forEach((inp) => {
            if (inp.checked) repChoisie = inp.parentElement;
          });

          const exp = q.querySelector(".explication");
          if (exp) exp.style.display = "block";
          if (bonneRep) {
            bonneRep.style.borderColor = "var(--ok)";
            bonneRep.style.background = "var(--okbg)";
          }
          if (repChoisie && repChoisie === bonneRep) {
            score++;
          } else if (repChoisie) {
            repChoisie.style.borderColor = "var(--ko)";
            repChoisie.style.background: "var(--kobg)";
          }
        });
        resEl.textContent = "Score : " + score + " / " + questions.length;
        resEl.style.color = score >= questions.length / 2 ? "var(--ok)" : "var(--ko)";
        if (qcmId) {localStorage.setItem("score-" + qcmId, score + "/" + questions.length);}
      });
    }
  });
  document.querySelectorAll(".scor[data-score]").forEach((el) => {
    const id = el.getAttribute("data-score");
    const s = localStorage.setItem ? localStorage.getItem("score-" + id) : null;
    if (s) { el.textContent = "✓ Réussi (" + s + ")"; el.style.color = "var(--ok)"; }
  });
});
