$(document).ready(main);


function main(){


	var luck = Math.floor(Math.random()*50); 
	console.log(luck);
	var counter = 3 ;
	console.log(counter);

	

	function demarrerPartie(){

		nombre = parseInt($("#clickValider").val(),10);
		luck = Math.floor(Math.random()*50); 
		counter = 3 ;
		console.log(luck);

	}


	function partieGagnee(){


		alert("Bravo tu à trouver le nombre mystère");
		demarrerPartie();
	}


	function partiePerdue(){


		if (counter === 0){

			alert("Dommage tu à perdu il te reste 0 vie");

			demarrerPartie();

		}

			
	}


	function clickValider(){


		var nombre = parseInt($("#clickValider").val(),10);



		if  (luck === nombre){ 

			partieGagnee();

			demarrerPartie();

		}else if(luck > nombre){ 

			console.log(counter)
			counter--;
			alert("Perdu trop petit");
			partiePerdue();

		}else if(luck < nombre){

			console.log(counter)
			counter--;
			alert("Perdu trop grand");
			partiePerdue();
		}

		$('span').text(counter) 
	}

	$("button").click(function(){

		clickValider();


	});
}

		// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	// Récupérer le contenu de mon input

		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
				*/

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit

			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 		*/

	// /Fin == Fonction clickValider == 

	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
		*/
