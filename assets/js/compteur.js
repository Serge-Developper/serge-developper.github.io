// Sélection du bouton "Publier"
const publishButton = document.querySelector('.button');

// Sélection du compteur
const counterEl = document.querySelector('.counter');

// Fonction pour mettre à jour le compteur
function updateCounter() {
    let counterNumber = 0;
    const updateCounterInterval = setInterval(function() {
        counterNumber += 0.01; // Incrémentation de 0.01 à chaque intervalle
        counterEl.textContent = counterNumber.toFixed(2) + " ICDX"; // Affichage du nombre avec deux décimales et "ICDX"

        if (counterNumber >= 0.05) { // Condition pour arrêter le compteur à 0.05
            clearInterval(updateCounterInterval);
            // Désactiver le bouton après que le compteur est terminé
            publishButton.removeEventListener('click', publishButtonClick);
            publishButton.disabled = true;
        }
    }, 200); // Intervalle de mise à jour du compteur
}

// Fonction gérant le clic sur le bouton "Publier"
function publishButtonClick(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du bouton
    updateCounter(); // Démarrer le compteur
}

// Ajout d'un écouteur d'événement sur le bouton "Publier"
publishButton.addEventListener('click', publishButtonClick);




// Dark nft_create 



document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.button');
    const checkVert = document.querySelector('.check_vert');
    const roboticdx2 = document.querySelector('.roboticdx2');
  
    button.addEventListener('click', function() {
      checkVert.style.display = 'block';
      roboticdx2.classList.add('darken');
      checkVert.classList.add('show');
    });
  });


// Dark nft_create 










//compteur like et dislike + icdx valeur

document.addEventListener("DOMContentLoaded", function() {
    // Sélection du compteur d'ICDX
    const icdxCounter = document.getElementById('icdxCounter');
    // Sélection des compteurs de likes
    const counterLikes = document.querySelectorAll('.counter_like');
  
    // Fonction pour augmenter le compteur d'ICDX
    function augmenterCompteurICDX() {
        let valeurActuelle = parseFloat(icdxCounter.textContent);

        // Déterminer la valeur cible
        const valeurCible = 124;

        // Incrémenter le compteur jusqu'à la valeur cible
        const incrementation = setInterval(function() {
            if (valeurActuelle >= valeurCible || parseInt(counterLikes[0].textContent) >= 52) {
                clearInterval(incrementation); // Arrêter l'incrémentation lorsque le compteur atteint la valeur cible ou lorsque le compteur de likes atteint 52
            } else {
                valeurActuelle += 1; // Incrémenter le compteur de 1
                icdxCounter.textContent = Math.floor(valeurActuelle) + ' ICDX'; // Mettre à jour le texte du compteur
            }
        }, 50); // Intervalle de mise à jour du compteur
    }

    // Fonction pour augmenter les compteurs de likes
    function augmenterCompteursLikes() {
        // Pour chaque compteur de likes
        counterLikes.forEach(counter => {
            let valeurActuelle = parseInt(counter.textContent);

            // Déterminer la valeur cible en fonction de l'index
            let valeurCible = (counter === counterLikes[0]) ? 52 : 9;

            // Incrémenter le compteur jusqu'à la valeur cible
            const incrementation = setInterval(function() {
                if (valeurActuelle >= valeurCible) {
                    clearInterval(incrementation); // Arrêter l'incrémentation lorsque le compteur atteint la valeur cible
                } else {
                    valeurActuelle += 1; // Incrémenter le compteur de 1
                    counter.textContent = valeurActuelle + ' K'; // Mettre à jour le texte du compteur avec le "K"
                }
            }, 50); // Intervalle de mise à jour du compteur
        });
    }

    // Fonction pour détecter lorsque l'utilisateur atteint la partie spécifiée de la page
    function detecterPartiePage() {
        // Récupérer l'élément cible où vous souhaitez déclencher l'incrémentation des compteurs de likes
        const partieCible = document.querySelector('.image_container2');

        // Créer un observateur d'intersection pour détecter lorsque la partie cible devient visible dans la fenêtre d'affichage
        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Démarrer l'incrémentation des compteurs de likes lorsque la partie cible devient visible
                    augmenterCompteursLikes();
                    // Démarrer l'incrémentation du compteur d'ICDX lorsque la partie cible devient visible
                    augmenterCompteurICDX();
                    observer.unobserve(partieCible); // Arrêter d'observer une fois que la partie cible a été détectée
                }
            });
        });

        // Observer la partie cible
        observer.observe(partieCible);
    }

    // Appeler la fonction pour détecter lorsque l'utilisateur atteint la partie spécifiée de la page
    detecterPartiePage();
});












document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments nécessaires dans imageContainer3
    const icdxCounter3 = document.getElementById('icdxCounter2'); // Sélectionner le compteur d'ICDX
    const counterLikes3 = document.querySelectorAll('.counter_like.counter_like_1'); // Sélectionner les compteurs de likes
    const counterDislikes3 = document.querySelectorAll('.counter_like.counter_dislike_1'); // Sélectionner les compteurs de dislikes

    // Fonction pour augmenter les compteurs de likes pour imageContainer3
    function augmenterCompteursLikes3() {
        // Pour chaque compteur de likes
        counterLikes3.forEach(counter => {
            let valeurActuelleLikes = parseInt(counter.textContent);

            // Déterminer la valeur cible pour les likes
            const valeurCibleLikes = 78;

            // Incrémenter le compteur de likes jusqu'à la valeur cible
            const incrementationLikes = setInterval(function() {
                if (valeurActuelleLikes >= valeurCibleLikes) {
                    clearInterval(incrementationLikes); // Arrêter l'incrémentation lorsque le compteur de likes atteint la valeur cible
                    augmenterCompteursDislikes3(); // Démarrer l'incrémentation des dislikes une fois que la valeur cible des likes est atteinte
                } else {
                    valeurActuelleLikes += 1; // Incrémenter le compteur de likes de 1
                    counter.textContent = valeurActuelleLikes + ' K'; // Mettre à jour le texte du compteur de likes avec le "K"
                    // Incrémenter le compteur d'ICDX
                    icdxCounter3.textContent = Math.floor(valeurActuelleLikes * 84 / 78) + ' ICDX';
                }
            }, 35); // Intervalle de mise à jour du compteur (plus court pour accélérer)
        });
    }

    // Fonction pour augmenter les compteurs de dislikes pour imageContainer3
    function augmenterCompteursDislikes3() {
        // Pour chaque compteur de dislikes
        counterDislikes3.forEach(counter => {
            let valeurActuelleDislikes = parseInt(counter.textContent);

            // Réinitialiser le compteur de dislikes à 0
            counter.textContent = '0 K';

            // Déterminer la valeur cible pour les dislikes
            const valeurCibleDislikes = 31;

            // Incrémenter le compteur de dislikes si le compteur de likes a atteint sa valeur cible
            const incrementationDislikes = setInterval(function() {
                if (parseInt(counterLikes3[0].textContent) >= 78) {
                    // Commencer à augmenter le compteur de dislikes
                    if (valeurActuelleDislikes >= valeurCibleDislikes) {
                        clearInterval(incrementationDislikes); // Arrêter l'incrémentation lorsque le compteur de dislikes atteint la valeur cible
                    } else {
                        valeurActuelleDislikes += 1; // Incrémenter le compteur de dislikes de 1
                        counter.textContent = valeurActuelleDislikes + ' K'; // Mettre à jour le texte du compteur de dislikes avec le "K"
                        // Décrémenter le compteur d'ICDX
                        icdxCounter3.textContent = Math.floor((78 - valeurActuelleDislikes) * 84 / 78) + ' ICDX';
                    }
                }
            }, 35); // Intervalle de mise à jour du compteur (plus court pour accélérer)
        });
    }

    // Fonction pour détecter lorsque l'utilisateur atteint la partie spécifiée de la page
    function detecterPartiePage3() {
        // Récupérer l'élément cible où vous souhaitez déclencher l'incrémentation des compteurs de likes
        const partieCible3 = document.querySelector('.image_container3');

        // Créer un observateur d'intersection pour détecter lorsque la partie cible devient visible dans la fenêtre d'affichage
        const observer3 = new IntersectionObserver(function(entries, observer3) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Démarrer l'incrémentation des compteurs de likes lorsque la partie cible devient visible
                    augmenterCompteursLikes3();
                    observer3.unobserve(partieCible3); // Arrêter d'observer une fois que la partie cible a été détectée
                }
            });
        });

        // Observer la partie cible
        observer3.observe(partieCible3);
    }

    // Appeler la fonction pour détecter lorsque l'utilisateur atteint la partie spécifiée de la page
    detecterPartiePage3();
});










document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments à observer
    const boxNFT3 = document.querySelector('.box_nft3');
    const boxNFT4 = document.querySelector('.box_nft4');
    const imageContainer3 = document.querySelector('.image_container3');

    // Créer un observateur d'intersection
    const observer = new IntersectionObserver(entries => {
        // Pour chaque entrée dans la liste d'entrées
        entries.forEach(entry => {
            // Si l'élément est visible à l'écran
            if (entry.isIntersecting) {
                // Régler l'opacité des boîtes en fonction de l'intersectionRatio
                boxNFT3.style.opacity = '0.4'; // Opacité à 40%
                boxNFT4.style.opacity = '0.2'; // Opacité à 20%
                imageContainer3.style.opacity = '1'; // Opacité à 100%

                // Ajouter la classe 'show' pour faire apparaître les éléments progressivement
                boxNFT3.classList.add('show');
                boxNFT4.classList.add('show');
            }
        });
    }, {
        threshold: 0.5 // Définir le seuil de visibilité à 50%
    });

    // Observer l'élément imageContainer2
    observer.observe(imageContainer3);
});
  










// imagecontainer2 transition avec box nft et box nft 2

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments à observer
    const boxNFT = document.querySelector('.box_nft');
    const boxNFT2 = document.querySelector('.box_nft2');
    const imageContainer2 = document.querySelector('.image_container2');

    // Créer un observateur d'intersection
    const observer = new IntersectionObserver(entries => {
        // Pour chaque entrée dans la liste d'entrées
        entries.forEach(entry => {
            // Si l'élément est visible à l'écran
            if (entry.isIntersecting) {
                // Régler l'opacité des boîtes en fonction de l'intersectionRatio
                boxNFT.style.opacity = '0.4'; // Opacité à 40%
                boxNFT2.style.opacity = '0.2'; // Opacité à 20%
                imageContainer2.style.opacity = '1'; // Opacité à 100%

                // Ajouter la classe 'show' pour faire apparaître les éléments progressivement
                boxNFT.classList.add('show');
                boxNFT2.classList.add('show');
            }
        });
    }, {
        threshold: 0.5 // Définir le seuil de visibilité à 50%
    });

    // Observer l'élément imageContainer2
    observer.observe(imageContainer2);
});
  









// transition pour les box nft 3 et 4 avec l'image container 3






