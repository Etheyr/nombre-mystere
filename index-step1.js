$(document).ready(main);

// Fonction principale
function main(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		var nombre = $("#clickValider").val();
		console.log(nombre);

		if (nombre == 9){
			alert("Gagné");
		}else{
			alert("Perdu");
		}
	}

	$("button").click(function(){
		clickValider();
	});
}


		// Récupérer le contenu de mon input



// Comparer ce contenu à un nombre que vous choisissez
// Si le contenu est égal
// Afficher une alert Gagné
// Sinon,
// Afficher une alert Perdu

// /Fin == Fonction clickValider == 


// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
// Et qui appelle la fonction 'clickValider' défini ci-dessus


