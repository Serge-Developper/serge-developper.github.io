
function disableScriptsOnMobile() {
    // Vérifier si la largeur de l'écran est inférieure ou égale à 780 pixels
    if (window.screen.width <= 1023) {
        // Si oui, quitter la fonction sans rien faire
        return;
    }

    // Bloc de code à exécuter si la condition n'est pas satisfaite
    // Insérez ici les balises de script que vous souhaitez désactiver
    document.write(
        '<script src="https://code.jquery.com/jquery-3.7.1.js"><\/script>' +
        '<script src="assets/js/tilt.jquery.js" type="text/javascript"><\/script>' +
        '<script src="assets/js/overlay.js"><\/script>'
    );
}

// Appeler la fonction pour désactiver les scripts sur mobile
disableScriptsOnMobile();
