function configurerGestionnaireChamp(inputId, infoDivClass) {
  var inputElement = document.getElementById(inputId);
  var infoDiv = document.querySelector('.' + infoDivClass);

  document.addEventListener('click', function (event) {
    if (event.target !== inputElement) {
      if (inputElement.clickedOnce) {
        infoDiv.classList.remove(infoDivClass);
      }
    }
  });

  inputElement.addEventListener('click', function () {
    inputElement.clickedOnce = true;
  });

  inputElement.addEventListener('input', function () {
    if (inputElement.value.length > 1) {
      inputElement.clickedOnce = false;
      infoDiv.classList.add(infoDivClass);
    } else {
      infoDiv.classList.remove(infoDivClass);
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  configurerGestionnaireChamp('register_lastname', 'ln-error');
});

document.addEventListener('DOMContentLoaded', function () {
  configurerGestionnaireChamp('register_firstname', 'fn-error');
});


//email

function emailc(inputId, infoDivClass) {
  var inputElement = document.getElementById(inputId);
  var infoDiv = document.querySelector('.' + infoDivClass);

  document.addEventListener('click', function (event) {
    if (event.target !== inputElement) {
      if (inputElement.clickedOnce) {
        infoDiv.classList.remove(infoDivClass);
      }
    }
  });

  inputElement.addEventListener('click', function () {
    inputElement.clickedOnce = true;
  });


  inputElement.addEventListener('input', function () {
    var inputValue = inputElement.value;
    
    var regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

    if (regex.test(inputValue)) {
      inputElement.clickedOnce = false;
      infoDiv.classList.add(infoDivClass);
    } else {
      infoDiv.classList.remove(infoDivClass);
    }
  });
}

//password


document.addEventListener('DOMContentLoaded', function () {
  var inputElement = document.getElementById('register_password_first');
  var infoDiv = document.querySelector('.errors-list-password');



  var registerContent = document.querySelector(".register-content ul");


  var firstFSvg = document.querySelector(".first-f-svg");
  var firstSSvg = document.querySelector(".first-s-svg");
  var firstLi = registerContent.children[0];

  var secondFSvg = document.querySelector(".second-f-svg");
  var secondSSvg = document.querySelector(".second-s-svg");
  var secondLi = registerContent.children[1];

  var thirdFSvg = document.querySelector(".third-f-svg");
  var thirdSSvg = document.querySelector(".third-s-svg");
  var thirdLi = registerContent.children[2];


  var fourFSvg = document.querySelector(".four-f-svg");
  var fourSSvg = document.querySelector(".four-s-svg");
  var fourLi = registerContent.children[3];







  // Gérer les clics en dehors de l'input
  document.addEventListener('click', function (event) {
    if (event.target !== inputElement) {
      // Afficher la div si l'input a été cliqué au moins une fois
      if (inputElement.clickedOnce) {
        infoDiv.classList.remove("errors-list-password");
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
    if (inputElement.value.length > 7) {
      inputElement.clickedOnce = false;
      firstLi.style.color = 'black';
      firstFSvg.style.fill ='black'
      firstFSvg.style.display ='block'
      firstSSvg.style.display ="none";
    }else{
      firstLi.style.color = 'red';
      firstLi.style.fill ='red'
      firstFSvg.style.display ='none'
      firstSSvg.style.display ="block";
    }
    
    if (/[a-zA-Z]/.test(inputElement.value)) {
      inputElement.clickedOnce = false;
      secondLi.style.color = 'black';
      secondFSvg.style.fill ='black'
      secondFSvg.style.display ='block'
      secondSSvg.style.display ="none";
    }else{
      secondLi.style.color = 'red';
      secondLi.style.fill ='red'
      secondFSvg.style.display ='none'
      secondSSvg.style.display ="block";
    }

      if (/\d/.test(inputElement.value)) {
      inputElement.clickedOnce = false;
      thirdLi.style.color = 'black';
      thirdFSvg.style.fill ='black'
      thirdFSvg.style.display ='block'
      thirdSSvg.style.display ="none";
    } else {
      thirdLi.style.color = 'red';
      thirdLi.style.fill ='red'
      thirdFSvg.style.display ='none'
      thirdSSvg.style.display ="block";
    }
    
    if (/[~!@#:]/.test(inputElement.value)) {
      inputElement.clickedOnce = false;
      fourLi.style.color = 'black';
      fourFSvg.style.fill ='black'
      fourFSvg.style.display ='block'
      fourSSvg.style.display ="none";
  } else {
    fourLi.style.color = 'red';
    fourLi.style.fill ='red'
      fourFSvg.style.display ='none'
      fourSSvg.style.display ="block";
  }

  });
});