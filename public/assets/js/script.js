function configurerGestionnaireChamp(inputId, infoDivClass ) {
  var inputElement = document.getElementById(inputId);
  var infoDiv = document.querySelector('.' + infoDivClass);
  if (!inputElement || !infoDiv) {
    return; // Quitter la fonction si les éléments ne sont pas présents
  }
  document.addEventListener('click', function (event) {
    if (event.target !== inputElement) {
      if (inputElement.clickedOnce) {
        infoDiv.classList.remove(infoDivClass);
        inputElement.style.borderColor = "red";
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
      inputElement.style.borderColor = "black";
    } else {
      infoDiv.classList.remove(infoDivClass);
      inputElement.style.borderColor = "red";


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

  if (!inputElement || !infoDiv) {
    return; // Quitter la fonction si les éléments ne sont pas présents
  }

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
emailc('register_email', 'e-error')
//password


document.addEventListener('DOMContentLoaded', function () {
  var inputElement = document.getElementById('register_password_first');
  var infoDiv = document.querySelector('.errors-list-password');
  var a = document.querySelector(".aaa");

  if (!inputElement || !infoDiv) {
    return; // Quitter la fonction si les éléments ne sont pas présents
  }

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




  // Gérer le changement dans l'input
  inputElement.addEventListener('input', function () {
    // Masquer la div si l'input a au moins un caractère
    infoDiv.classList.remove("errors-list-password");

    if (inputElement.value.length > 7) {
      
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



//display repeat password if first pwd is good
document.addEventListener('DOMContentLoaded', function () {

  // Votre condition
  
  var passwordInput = document.getElementById('register_password_first');

  // Fonction pour gérer l'animation en fonction de la condition
  passwordInput.addEventListener('input', function () {

 
      var pwdSec = document.querySelector(".pwd-sec");
    // Modifiez le style en fonction de la condition
    if (passwordInput.value.length > 7) {
      pwdSec.style.display = "block";

      }
else{
  pwdSec.style.display = "none";  
}
   
})
  
  });