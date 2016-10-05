$(document).ready(pied);

// Fonction principale
function pied(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	var luck = Math.floor(Math.random()*5);
	console.log(luck);
	function clickValider(){
		var nombre = parseInt($("#clickValider").val(),10);
		console.log(typeof nombre);
		if  (luck === nombre){
			alert("Gagné");
		}else if(luck > nombre){
			alert("Perdu trop petit");
		}else if(luck < nombre){
			alert("Perdu trop grand");
		}
	}
	$("button").click(function(){
		clickValider();
	});


		// Récupérer le contenu de mon input

		// Stocker un nombre ENTIER généré "aléatoirement"

		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			
			
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus

}
