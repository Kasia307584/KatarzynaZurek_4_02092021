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
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
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
  e.preventDefault();

  let isValid = true;

  if (!firstNameInput.validity.valid) {// function validity permet de verifier si l'utilisateur a saisi le champs de l'input en accord avec les propietés ds HTML, ici: minlength:2 et requiered
    isValid = false;
    firstNameDiv.setAttribute("data-error-visible", "true");
  } else {
    firstNameDiv.setAttribute("data-error-visible", "false");
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
    form.submit();
    alert("Félicitations, vous êtes inscrit !");
  }
})

  
// form.addEventListener("submit", function(e) {
//   //alert("Félicitations, vous êtes inscrit !");
// })

