var tourDuJoueur1 = true;
var partieGagnee = false;
var cells = document.querySelectorAll('.cell');

var afficherSymbole = function(cell) {
	// a remplir
	// 1 - verifier case remplie ou pas
	if (cell.classList[1] !== 'hamburger' && cell.classList[1] !== 'hotdog') {

		// 2 - poser symbole J1 ou j2
		if (tourDuJoueur1){
			cell.classList.add('hamburger');
		} else {
			cell.classList.add('hotdog');
		};
		// 4 - changer le joueur courant
		tourDuJoueur1 = !tourDuJoueur1;
	};
	//  else {
	// 	return; //arreter la boucle
	// }
};

var combinaisons = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [2, 5, 8], [1, 4, 7],
                   [0, 3, 6], [0, 4, 8], [2, 4, 6]];

var verifierCombinaisons = function(){
	// a remplir
	// 3 - check combinaison gagnante
	combinaisons.forEach(function(combinaison){
		if (
			cells[combinaison[0]].classList[1] === cells[combinaison[1]].classList[1] &&
			cells[combinaison[1]].classList[1] === cells[combinaison[2]].classList[1] &&
			(cells[combinaison[0]].classList[1] === 'hamburger' ||
			cells[combinaison[0]].classList[1] === 'hotdog')

		) {
			console.log('WIN');
			var currentPlayer;
			if (tourDuJoueur1) {
				currentPlayer = 'joueur 2';
			} else {
				currentPlayer = 'joueur 1';
			}
			var bouton = document.querySelector('button');
			  bouton.classList.add ('visible');
				bouton.addEventListener('click',function(){
					document.location.reload(true);
				});
			// alert('Bravo ' + currentPlayer + ' Tu as gagné la partie !');
			partieGagnee = true;

		}
	});
};

cells.forEach(function(cell) {
	cell.addEventListener('click', function() {
		if (!partieGagnee) {
			afficherSymbole(cell);
			verifierCombinaisons();
		}
	});
});



// var alertBox = "<DIV style=\"width:350px;height:70px\" class=\"alertPosition\">";
//             alertBox +="<div class=\"alertBoxIn\" >";
//                      alertBox  +="<DIV style=\"position: relative; top: 1%; left: 2%\" /></DIV>";
//                      alertBox +="<SPAN style=\"position: relative; top:-30%; left: 12%\">"+alertMessage+"</SPAN>";
//                      alertBox  +="<input style=\"position: relative; top:20%; left:10%\" type=\"button\" value=\"    Ok      \" onclick=\"closeAlert();\" />";
//             alertBox+="</div>";
//     alertBox+="</div>";

// savoir qui joue
// a qui est le tour
// j1=> croix J2=> rond
// check combinaison gagnante
// click dans une case
// verifier si element présent dans une case
// scrore
// reset


// a chaque click dans une classe faire les choses suivantes :
// - j1 ou J2 ?
// - case rempli ou non ?
// - si la case est rempli on ne fait rien : on arrete la boucle
// si J1 : pose un rond
// sinon J2 : pose une croix
// - verifier si gagant ?
// si gagnant on arrete
// sinon changer le joueur courant
