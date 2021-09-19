function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg  = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeIcon = document.querySelector(".close");
const closeBtn = document.querySelector(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeIcon.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close confirmation message event
closeBtn.addEventListener("click", closeConfMessage);

// close confirmation message form
function closeConfMessage() {
  modalbg.style.display="none";
}

// DOM Elements
const form           = document.querySelector("form");
const firstNameInput = document.getElementById("first");
const lastNameInput  = document.getElementById("last");
const emailInput     = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput  = document.getElementById("quantity");
const radioButtons   = document.querySelectorAll(".checkbox-input[type=radio]");
const termsCheckbox  = document.getElementById("checkbox1");

const firstNameDiv = firstNameInput.parentElement;
const lastNameDiv  = lastNameInput.parentElement;
const emailDiv     = emailInput.parentElement;
const birthDateDiv = birthDateInput.parentElement;
const quantityDiv  = quantityInput.parentElement;
const radioButtonsDiv  = radioButtons[0].parentElement;
const termsCheckboxDiv = termsCheckbox.parentElement;

// email regex
let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;


function isLocationChecked() {
  for (let i=0; i < radioButtons.length; i++) 
  {
    if (radioButtons[i].checked)
    {
      return true;
    }
  }

  return false;
}


document.querySelector(".btn-submit").addEventListener("click", function(e) { 
  e.preventDefault(); // previent la fermeture prématuré de formulaire et l'affichage de messages d'erreur inclues par défault ds le navigateur

  let isValid = true;

  if (!firstNameInput.validity.valid) { // fonction validity permet de verifier si l'utilisateur a saisi le champs de l'input en accord avec les propietés ds HTML, ici: minlength:2 et requiered
    isValid = false;
    firstNameDiv.setAttribute("data-error-visible", "true"); // fonction showErrMessage (utilisé ds la version precedente) a été remplacé par les attributs de HTML 
  } else {
    firstNameDiv.setAttribute("data-error-visible", "false"); // setAttribute utilisé ici car data-error-visible est un attribut HTML non standardisé 
  }
  
  if(!lastNameInput.validity.valid) {
    isValid = false;
    lastNameDiv.setAttribute("data-error-visible", "true");
  } else {
    lastNameDiv.setAttribute("data-error-visible", "false");
  }

    if(!regex.test(emailInput.value)) {
    isValid = false;
    emailDiv.setAttribute("data-error-visible", "true");
  } else {
    emailDiv.setAttribute("data-error-visible", "false");
  }

  if(!birthDateInput.validity.valid) {
    isValid = false;
    birthDateDiv.setAttribute("data-error-visible", "true");
  } else {
    birthDateDiv.setAttribute("data-error-visible", "false");
  }

  if(!quantityInput.validity.valid) {
    isValid = false;    
    quantityDiv.setAttribute("data-error-visible", "true");
  } else {
    quantityDiv.setAttribute("data-error-visible", "false");
  }

  if(!isLocationChecked()) {
    isValid = false;    
    radioButtonsDiv.setAttribute("data-error-visible", "true");
  } else {
    radioButtonsDiv.setAttribute("data-error-visible", "false");
  }

  if(!termsCheckbox.checked) { // function checked permet de verifier si la case est cochée
    isValid = false;    
    termsCheckboxDiv.setAttribute("data-error-visible", "true");
  } else {
    termsCheckboxDiv.setAttribute("data-error-visible", "false");
  }

  if (isValid)
  {
    form.style.display="none";
    document.getElementById("confirmation-message").style.display="block";
  }
})

