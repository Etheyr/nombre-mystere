//Avant de commencer, donner la possiblité de choisir le nombre de tentatives
//Avant de commencer, choisir les valeurs minimale et maximale du nombre que l'ordinateur va choisir.

$(document).ready(main);


function main(){


	var vie;

	var min;

	var max;

	var luck;


	function demarrerPartie(){


		vie = parseInt(prompt("Choisissez le nombre de vie"));
		$("#vie").html(vie);

		min = parseInt(prompt("Choisissez le nombre minimum "));
		$('#min').html(min);

		max = parseInt(prompt("Choisissez le nombre maximum "));
		$('#max').html(max);
		
		luck = Math.floor(Math.random()* (max - min +1)) + min;

	}

	function partieGagnee(){


		alert("Bravo tu à trouver le nombre mystère");
		demarrerPartie();
	}

	function partiePerdue(){


		if (vie === 0){

			alert("Dommage tu à perdu il te reste 0 vie");

			demarrerPartie();
		}

	}

	function actual(){

		vie--;
		$('#vie').text(vie)

	}


	function clickValider(){


		var nombre = parseInt($("#clickValider").val(),10);


		if  (luck === nombre){ 

			partieGagnee();

		}else if(luck > nombre){ 

			alert("Perdu trop petit");
			partiePerdue();
			actual();

		}else if(luck < nombre){

			alert("Perdu trop grand");
			partiePerdue();
			actual();
		}

	}

	$("button").click(function(){

		clickValider();

	});
	demarrerPartie();
}
