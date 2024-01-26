
/*document.getElementById("register_firstname").addEventListener("input", changerCouleurInput);

function changerCouleurInput() {
  var input = document.getElementById("register_firstname");

  // Vérifier la longueur du texte
  if (input.value.length > 8) {
    // Appliquer la classe 'long' pour changer la couleur
    input.classList.add("long");
  } else {
    // Retirer la classe 'long' si la longueur est inférieure ou égale à 8
    input.classList.remove("long");
  }
}
*/


document.addEventListener('DOMContentLoaded', function () {
  var inputElement = document.getElementById('register_firstname');
  var infoDiv = document.querySelector('.input-errors');

  // Gérer les clics en dehors de l'input
  document.addEventListener('click', function (event) {
    if (event.target !== inputElement) {
      // Afficher la div si l'input a été cliqué au moins une fois
      if (inputElement.clickedOnce) {
        infoDiv.classList.remove("input-errors");
      }
    }
  });

  // Gérer les clics sur l'input
  inputElement.addEventListener('click', function () {
    inputElement.clickedOnce = true;
  });

  // Gérer le changement dans l'input
  inputElement.addEventListener('input', function () {
    // Masquer la div si l'input a au moins un caractère
    if (inputElement.value.length > 0) {
      inputElement.clickedOnce = false;
      infoDiv.classList.add("input-errors");
    }else{
      infoDiv.classList.remove("input-errors");

    }
  });
});