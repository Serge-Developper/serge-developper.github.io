$(document).ready(function () {
  // Fonction pour créer l'overlay
  function createOverlay() {
    return $('<div class="overlay"></div>');
  }

  // Fonction pour afficher l'overlay
  function showOverlay() {
    $('.overlay').fadeIn();
  }

  // Fonction pour cacher l'overlay
  function hideOverlay() {
    $('.overlay').fadeOut();
  }

  // Événement lorsque la souris entre dans un élément .nft_ape
  $('.nft_ape').mouseenter(function () {
    // Vérifie s'il existe déjà un overlay, sinon en crée un et l'ajoute au document
    if ($('.overlay').length === 0) {
      createOverlay().appendTo('body');
    }
    // Affiche l'overlay
    showOverlay();
  });

  // Événement lorsque la souris quitte un élément .nft_ape
  $('.nft_ape').mouseleave(function () {
    // Cache l'overlay
    hideOverlay();
  });
});


