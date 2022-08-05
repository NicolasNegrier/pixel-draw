const pixelGame = {
    init: () => {
        // Fonctions lancées au demarrage
        pixelGame.form();
        pixelGame.grid();
        
    },

    // Fonction de création du formalaire de parametrage de la grille
    form: () => {
        // Recuperation du parent
        const configElm = document.querySelector('#config');

        // Creation de l'element formulaire et ajout de sa classe
        const formElm = document.createElement('form');
        formElm.classList.add('form');

        // Creation de l'input gérant la hauteur de la grille
        const inputHightElm = document.createElement('input');
        inputHightElm.id= 'ySize';
        inputHightElm.placeholder='hauteur';
        inputHightElm.type='number';
        inputHightElm.min='0';
        inputHightElm.max='40';
        inputHightElm.name='ySize';
        inputHightElm.classList.add('input');

        // Creation de l'input gérant la largeur de la grille
        const inputWidthElm = document.createElement('input');
        inputWidthElm.id = 'xSize';
        inputWidthElm.placeholder='largeur';
        inputWidthElm.type='number';
        inputWidthElm.min='0';
        inputWidthElm.max='90';
        inputWidthElm.name='xSize';
        inputWidthElm.classList.add('input');

        // Creation du bouton de validation avec sa classe
        const buttonElm = document.createElement('button');
        buttonElm.classList.add('button');
        buttonElm.textContent = 'Valider';

        // Insertion des elements créés dans leur element parent
        formElm.appendChild(inputHightElm);
        formElm.appendChild(inputWidthElm);
        formElm.appendChild(buttonElm);
        configElm.appendChild(formElm);

        // Ecoute de la validation des inputs du formulaire
        formElm.addEventListener('submit', pixelGame.handleSubmit);
    },

    // Fonction de la creation de la grille
    grid: (ySize=8, xSize=8) => {
        // Recuperation du parent
        const invaderElm = document.querySelector('#invader');

        // Creation des elements de la grille
        // Creation de mes lignes
        for (y = 0; y < ySize; y++) {
            const lineElm = document.createElement('div');
            lineElm.classList.add('line');
            // Creation des cases contenus dans chacune des ligne
            for (x = 0; x < xSize; x++ ) {
                const caseElm = document.createElement('div');
                caseElm.classList.add('case');
                caseElm.id = (`${y}${x}`);
                caseElm.addEventListener('click', pixelGame.handleClick);
                // insertion de chaque case dans la ligne
                lineElm.appendChild(caseElm);
            };
            // Insertion de la ligne dans la div invader
            invaderElm.appendChild(lineElm);
        };
    },
    // Action se produisant lors d'un clic sur une case
    handleClick: (event) => {
        // Recuperation de l'id de la case, selection de la case ayant l'id puis ajout ou retrait de la couleur
        const caseSelectedId = event.target.id
        const caseSelected = document.getElementById(caseSelectedId);
        caseSelected.classList.toggle('active');
    },

    // Action de produisant lors de la validation des parametres de la grille.
    handleSubmit: (event) => {
        // Empecher le rafraichissement automatique
        event.preventDefault();
        // Selection de l'element input et récupération de la valeur de son champs
        const yInputElm = document.getElementById('ySize');
        const yInputElmValue = yInputElm.value;

        // Selection de l'element input et récupération de la valeur de son champs
        const xInputElm = document.getElementById('xSize');
        const xInputElmValue = xInputElm.value;
        
        // Remise à zero du contenu de la div invader
        const invaderElm = document.querySelector('#invader');
        invaderElm.textContent = '';

        // Exercution de la fonction de creation de la grille avec les valeurs du formulaire en parametres
        pixelGame.grid(yInputElmValue,xInputElmValue);
        
    }
}
// Attente du chargement complet de la page avant l'execution de notre app
document.addEventListener('DOMContentLoaded', function() {
    pixelGame.init();
  });
