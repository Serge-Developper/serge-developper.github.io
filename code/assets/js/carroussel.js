document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le conteneur principal du carrousel
    const slider = document.querySelector('.box_nft_slider');

    // Définir la distance de déplacement en pixels
    const slideDistance = 312; // Largeur d'une boîte NFT

    // Fonction pour afficher la boîte NFT suivante
    function showNextBox() {
        slider.scrollBy({
            left: slideDistance,
            behavior: 'smooth'
        });
    }

    // Fonction pour afficher la boîte NFT précédente
    function showPreviousBox() {
        slider.scrollBy({
            left: -slideDistance,
            behavior: 'smooth'
        });
    }

    // Ajouter des écouteurs d'événements aux flèches de navigation du carrousel
    document.querySelector('.arrow_forward').addEventListener('click', () => {
        showNextBox();
    });

    document.querySelector('.arrow_back').addEventListener('click', () => {
        showPreviousBox();
    });
});
