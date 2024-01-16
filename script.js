// Fonction pour ouvrir la fenêtre modale
function ouvrirFenetreModale() {
    document.getElementById("maFenetreModale").style.display = "block";
  }
  
  // Fonction pour fermer la fenêtre modale
  function fermerFenetreModale() {
    document.getElementById("maFenetreModale").style.display = "none";
  }
  
  // Associer la fonction d'ouverture au clic sur le bouton
  document.getElementById("monBouton").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton2").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton3").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton4").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton5").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton6").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton7").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton8").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton9").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton10").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton11").addEventListener("click", ouvrirFenetreModale);
  document.getElementById("monBouton12").addEventListener("click", ouvrirFenetreModale);
  function getParameterByName(name, url) {
    name = name.replace(/[[]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Obtenez la valeur du paramètre "visite" de l'URL
let visiteParam = getParameterByName('visite', window.location.href);

// Initialisez le compteur avec la valeur stockée localement ou 0 par défaut
let visitorCount = parseInt(localStorage.getItem('visitorCount')) || 0;

// Incrémentez le compteur si le paramètre "visite" est présent
if (visiteParam === '1') {
    visitorCount++;
    // Mise à jour du contenu dans le footer
    document.getElementById('counter').innerText = visitorCount;
    // Stockage du compteur dans le stockage local
    localStorage.setItem('visitorCount', visitorCount.toString());
}