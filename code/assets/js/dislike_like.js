document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez toutes les images avec la classe 'like1'
    var images = document.querySelectorAll('.like1');

    // Parcourez chaque image et ajoutez un écouteur d'événement clic
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Vérifiez si l'image actuelle est remplie ou vide
            var isFilled = image.src.includes('like.png');

            // Si l'image est remplie, changez-la en image vide; sinon, changez-la en image remplie
            if (isFilled) {
                image.src = 'assets/img/likeremplis.png';
            } else {
                image.src = 'assets/img/like.png';

                // Redimensionnez l'image remplie pour qu'elle corresponde à la taille de l'image de base
                image.style.width = image.dataset.width + '1';
                image.style.height = image.dataset.height + '1';
            }
        });

        // Stockez les dimensions d'origine de l'image dans les attributs de données
        image.dataset.width = image.width;
        image.dataset.height = image.height;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez toutes les images avec la classe 'like1'
    var images = document.querySelectorAll('.like2');

    // Parcourez chaque image et ajoutez un écouteur d'événement clic
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Vérifiez si l'image actuelle est remplie ou vide
            var isFilled = image.src.includes('like.png');

            // Si l'image est remplie, changez-la en image vide; sinon, changez-la en image remplie
            if (isFilled) {
                image.src = 'assets/img/likeremplis.png';
            } else {
                image.src = 'assets/img/like.png';

                // Redimensionnez l'image remplie pour qu'elle corresponde à la taille de l'image de base
                image.style.width = image.dataset.width + '1';
                image.style.height = image.dataset.height + '1';
            }
        });

        // Stockez les dimensions d'origine de l'image dans les attributs de données
        image.dataset.width = image.width;
        image.dataset.height = image.height;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez toutes les images avec la classe 'like1'
    var images = document.querySelectorAll('.like');

    // Parcourez chaque image et ajoutez un écouteur d'événement clic
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Vérifiez si l'image actuelle est remplie ou vide
            var isFilled = image.src.includes('like.png');

            // Si l'image est remplie, changez-la en image vide; sinon, changez-la en image remplie
            if (isFilled) {
                image.src = 'assets/img/likeremplis.png';
            } else {
                image.src = 'assets/img/like.png';

                // Redimensionnez l'image remplie pour qu'elle corresponde à la taille de l'image de base
                image.style.width = image.dataset.width + '1';
                image.style.height = image.dataset.height + '1';
            }
        });

        // Stockez les dimensions d'origine de l'image dans les attributs de données
        image.dataset.width = image.width;
        image.dataset.height = image.height;
    });
});