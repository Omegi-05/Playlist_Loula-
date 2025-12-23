//pour le chargement :  tjr repris du portfolio 😭😭🙏//
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            const mainContent = document.getElementById('mainContent');
            const progressFill = document.getElementById('progressFill');

            //la barre de progression //
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                progressFill.style.width = progress + '%';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    
                    // fin du chargééééé //
                    setTimeout(() => {
                        loader.classList.add('fade-out');
                        mainContent.classList.add('visible'); //l'inspecteur me saoule ici pourtant tt marche//
                        
                        setTimeout(() => {
                            loader.style.display = 'none';
                        }, 500);
                    }, 300);
                }
            }, 100);
        });

       // On créer une const avec un nom, les chemins qui mènnent à la source audio mp3 suivi du dossier//
        const audioSources = [
            'musique/Freddie Dredd - NOTHING INTO SOMETHING (Visualizer).mp3',
            'musique/NALGOTICA (Slowed).mp3',
            'musique/Big Poppa (2007 Remaster).mp3',
            'musique/Ayasa-告白の夜.mp3',
            'musique/Chamber Of Reflection.mp3',
            'musique/Vanille - Suivre le soleil (clip officiel).mp3'

            
        ];
  // Couleurs de fond pour chaque bouton, associées aux thèmes des artistes via le figma//
        const backgroundColors = [
            '#401C18',  // Sang pour FREDDIE
            '#101010',  // Noir en mode bakaaaa pour NALGOTICA
            '#F02F36',  // Rouge pour BIGGY, RIP. 
            '#F3862B',  // Orange pour AYASA
            '#647891',  // Bleu Gris clair pour MAC DEMARCO
            '#676B21'   // Vert clair pour VANILLE
        ];

        let currentAudio = null;
        let activeButton = null;

        function playAudio(index) {
            if (activeButton !== null) {
                document.querySelectorAll('.button')[activeButton].classList.remove('active');
            }

            // Arrête l'audio en cours si il y en a un autre après//
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            
            // Change la couleur de fond du body et on le relie sur le css // 
            document.body.style.backgroundColor = backgroundColors[index];
            
            // Ajoute la classe active au bouton cliqué et l'active si j'ai bien compris // 
            document.querySelectorAll('.button')[index].classList.add('active');
            activeButton = index;
            
            // Crée et joue le nouvel audio suivant lorsqu'on clique // 
            currentAudio = new Audio(audioSources[index]);
            currentAudio.play();

            currentAudio.addEventListener('ended', function() {
                document.querySelectorAll('.button')[index].classList.remove('active');
                document.body.style.backgroundColor = 'white';
                activeButton = null;
            });
        }


        // Sketch le 22/12 et produit le 23/12, il est actuellemnt 03:54 du matin 😭🙏//
        // source aide : https://youtu.be/Qos80OkI7MY?si=RkdndJgX1PhVCjAd //
        // https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/audio // 
