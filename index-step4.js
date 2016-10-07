//Avant de commencer, donner la possiblité de choisir le nombre de tentatives
//Avant de commencer, choisir les valeurs minimale et maximale du nombre que l'ordinateur va choisir.

$(document).ready(main);


function main(){


	var vie = parseInt(prompt("Choisissez le nombre de vie"));
			$('#vie').text(vie)

	var min = parseInt(prompt("Choisissez le nombre minimum "));

	var max = parseInt(prompt("Choisissez le nombre maximum "));

	var luck = Math.floor(Math.random()* (max - min +1)) + min;

	console.log(luck);

	console.log(vie);


	function demarrerPartie(){


		vie = prompt("Choisissez le nombre maximal de tentatives");
		nombre = parseInt($("#clickValider").val(),10);
		luck = Math.floor(Math.random()* (max - min +1)) + min;
		console.log(luck);

		vie = parseInt(prompt("Choisissez le nombre de vie"));
		$("#vie").html(vie);

		min = parseInt(prompt("Choisissez le nombre minimum "));
		$('#min').html(min);

		max = parseInt(prompt("Choisissez le nombre maximum "));
		$('#max').html(max);
		

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
	function clickValider(){


		var nombre = parseInt($("#clickValider").val(),10);



		if  (luck === nombre){ 

			partieGagnee();

		}else if(luck > nombre){ 


			console.log(vie)
			vie--;
			alert("Perdu trop petit");
			partiePerdue();
			$('#vie').text(vie) 


		}else if(luck < nombre){


			console.log(vie)
			vie--;
			alert("Perdu trop grand");
			partiePerdue();
			$('#vie').text(vie) 
		}

		
	}

	$("button").click(function(){

		clickValider();


	});
}
