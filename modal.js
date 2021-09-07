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

// show error messages
const firstNameInput = document.getElementById("first");
const lastNameInput  = document.getElementById("last");
const emailInput     = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput  = document.getElementById("quantity");
const radioButtons   = document.querySelectorAll(".checkbox-input[type=radio]");
const termsCheckbox  = document.getElementById("checkbox1");

const errorMessages = {
	lastName:  "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	email:     "Veuillez entrer une adresse email valide.",
	birthDate: "Veuillez entrer une date de naissance respectant le format JJ/MM/AAAA.",
	quantity:  "Veuillez entrer un nombre valide.",
	location:  "Veuillez choisir une ville.",
	terms:     "Veuillez accepter les conditions d'utilisations.",
};

function showErrMessage(elem, errTxt) {
	let errMessageElem = document.createElement("div");//tu peux creer la div vide dans html
  errMessageElem.classList.add("form-err-message");
  errMessageElem.innerHTML = errTxt;

	let br = document.createElement("br");

  if (elem !== radioButtons) {
		elem.parentElement.appendChild(errMessageElem);
		elem.parentElement.appendChild(br);
	} else {
		elem[0].parentElement.appendChild(errMessageElem);
		elem[0].parentElement.appendChild(br);
	}
}

function removeErrMessage() {
	let errMessageElems = document.getElementsByClassName("form-err-message");
  for (let i=0; i < errMessageElems.length; i++)
    errMessageElems[i].remove();
}


function isFirstNameValid() {
  console.log(firstNameInput.checkValidity());
  return firstNameInput.checkValidity();
/*	
  if (value !== null && value.length >= 2) 
    return true;
	else 
    return false;
*/
}

function isLastNameValid() {
  return lastNameInput.checkValidity();
/*
  let value = lastNameInput.value;
	
  if (value !== null && value.length >= 2) 
    return true;
	else 
    return false;
*/
}

function isEmailValid() {
  return emailInput.checkValidity()
/*  
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  return regex.test(emailInput.value); 
*/
}

function isBirthDateValid() {
  return birthDateInput.checkValidity()
/*  
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  return regex.test(emailInput.value); 
*/
}

function isQuantityValid() {
  if (quantityInput.value !== null)
    return true;
  else
    return false;
}

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

function isTermsChecked() {
  return termsCheckbox.checked; 
}

const btnSubmit = document.querySelector(".btn-submit");
console.log(btnSubmit);

btnSubmit.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("check")
  //removeErrMessage();
  
  let isValid = true;

  if (!isFirstNameValid()) //mets checkValidity directement ici
  {
    isValid = false;
    showErrMessage(firstNameInput, errorMessages.firstName);
    console.log("ca marche")
  }
  if(!isLastNameValid())
  {
    isValid = false;    
    showErrMessage(lastNameInput, errorMessages.lastName);
  }
  if(!isEmailValid())
  {
    isValid = false;    
    showErrMessage(emailInput, errorMessages.email);
  }
  if(!isBirthDateValid())
  {
    isValid = false;    
    showErrMessage(birthDateInput, errorMessages.birthDate);
  }
  if(!isQuantityValid())
  {
    isValid = false;    
    showErrMessage(quantityInput, errorMessages.quantity);
  }
  if(!isLocationChecked())
  {
    isValid = false;    
    showErrMessage(radioButtons, errorMessages.location);
  }
  if(!isTermsChecked())
  {
    isValid = false;    
    showErrMessage(termsCheckbox, errorMessages.terms);
  }
 
  if (isValid)
    document.querySelector("form").submit();
}) 
//function formValidator(e) {//elle n'est pas appele
  