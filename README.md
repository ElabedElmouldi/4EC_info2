# Analyse de données avec pandas – 4ème Économie et Gestion (2026/2027)

Cours proposé par **Elabed Elmouldi**. Site statique, hors ligne, prêt pour GitHub Pages.

Référentiel : aides pédagogiques d'informatique, section Économie et Gestion, 4ème année (Ministère de l'Éducation, Tunisie, septembre 2024) – domaine « Analyse de données » : bibliothèque pandas (DataFrame, affichage, modification, nettoyage, fonctions statistiques, `groupby`, conditions, tris) et graphiques matplotlib.

## Contenu
| Élément | Détail |
|---|---|
| Cours | 6 chapitres : objectifs, prérequis, cours pas à pas, erreurs fréquentes, résumé, tableau de synthèse, exercices gradués corrigés, QCM |
| Exercices | 18 exercices corrigés (niveaux 1 à 3) + QCM aléatoire de 10 questions tirées de 30 |
| TP | 4 TP corrigés avec grille d'évaluation (mode professeur) |
| Évaluations | 2 devoirs de contrôle + 1 devoir de synthèse, 20 points, barème détaillé, corrigé, chronomètre |
| Simulateur | Opérations pandas sur 5 jeux de données, code généré, graphique, 9 défis guidés (hors ligne) |
| Aide-mémoire | Toutes les syntaxes du programme |
| Données | 6 fichiers fictifs (csv, xlsx) dans `data/` |
| Corrections | 24 fichiers Python dans `scripts/` |

## Démarrage rapide
Extraire l'archive et ouvrir `index.html`. Aucune installation n'est nécessaire pour lire le site.
Pour exécuter les programmes : `pip install pandas matplotlib openpyxl`, puis lancer un fichier de `scripts/` **depuis le dossier du projet**.
Détails : [docs/installation.md](docs/installation.md).

## Publication sur GitHub Pages
Voir [docs/deploiement.md](docs/deploiement.md). Le site est statique : il n'y a ni backend, ni base de données, ni clé secrète.
Adresse finale : `https://UTILISATEUR.github.io/NOM-DU-DEPOT/`.

## Modifier le cours
Le site est généré par `python tools/build.py` (Python 3.12+, pandas, matplotlib, openpyxl). Le générateur exécute chaque exemple avec le vrai pandas et s'arrête si un exemple échoue.
Architecture : [docs/architecture.md](docs/architecture.md).

## Tests
`python tests/test_site.py`, `node tests/test_minipandas.js` (après `python tests/gen_attendus.py`) et `python tests/test_navigateur.py`.
Résultats réellement obtenus : [docs/RAPPORT_TESTS.md](docs/RAPPORT_TESTS.md).

## Limites connues (honnêteté)
- **Pas de comptes ni de suivi centralisé.** Un site GitHub Pages est statique. Les parcours « élève / enseignant / administrateur » sont limités à : QCM avec score enregistré sur l'appareil de l'élève, et un **mode professeur** (barèmes et remarques) qui n'est pas protégé par mot de passe. Un vrai suivi des élèves demanderait un backend séparé, non réalisé ici.
- **Le simulateur imite pandas** avec JavaScript ; il n'exécute pas Python. Il couvre les opérations du programme (affichage, filtres, tri, `groupby`, suppression, doublons, valeurs nulles, colonne calculée).
- Exercices à réponse libre : la correction est à lire par l'élève (code corrigé et résultat). Il n'y a pas de correction automatique du code saisi.
- Pas de mesure Lighthouse/PageSpeed, pas de test sur appareil mobile réel ni sur Firefox/Safari. Le workflow GitHub Actions n'a pas été exécuté sur GitHub.
- Résultats générés avec pandas 3.0.6 ; l'affichage de `info()` peut différer selon la version.
- Données fictives.

## Licence
Contenu : CC BY-NC-SA 4.0 ; code : MIT. Voir [LICENSE](LICENSE).
