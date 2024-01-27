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

document.addEventListener('DOMContentLoaded', function () {
  emailc('register_email', 'e-error');
});