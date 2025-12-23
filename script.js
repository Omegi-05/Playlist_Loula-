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

        let currentAudio = null;

        function playAudio(index) {
            // Arrête l'audio en cours et lance le prochain cliquer //
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            
            currentAudio = new Audio(audioSources[index]);
            currentAudio.play();
        }

        
        document.getElementById('button0').addEventListener('click', function () {
            document.body.style.backgroundColor="#0000ff"; // fond couleur bleu //
        })

                document.getElementById('button1').addEventListener('click', function () {
            document.body.style.backgroundColor="#ff0000"; // fond couleur rouge //
        })


        // source aide : https://youtu.be/Qos80OkI7MY?si=RkdndJgX1PhVCjAd
        // https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/audio // 
