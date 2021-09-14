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

// error messages
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
	let errMessageElem = document.createElement("div"); // tu peux creer la div vide dans html
  errMessageElem.classList.add("form-err-message");
  errMessageElem.textContent = errTxt;
  // document.getElementsByClassName("form-err-message").style.color = "red";
  // elem.style.border = "2px solid red";

  if (elem !== radioButtons) {
		elem.parentElement.appendChild(errMessageElem);
	} else {
		elem[0].parentElement.appendChild(errMessageElem);
	}
}

function removeErrMessage() {
  let errMessageElems = Array.from(form.getElementsByClassName("form-err-message"));
  for (let i=0; i < errMessageElems.length; i++){
    errMessageElems[i].remove();
  }
}

/*
	let errMessageElems = document.querySelector("form").getElementsByClassName("form-err-message");

  console.log("[1] errMessageElems.length = ", errMessageElems.length); // debug

  for (let i=0; i < errMessageElems.length; i++)
  {    
    //console.log(errMessageElems[i].parentNode.innerHTML); // debug
    //errMessageElems[i].parentNode.removeChild(errMessageElems[i]);
    errMessageElems[i].remove();
    console.log("[2] errMessageElems.length = ", errMessageElems.length); // debug
    //console.log(errMessageElems[i].parentNode.innerHTML); // debug
  }

  console.log("[3] errMessageElems.length = ", document.getElementsByClassName("form-err-message").length); // debug
}
*/



// emailTxt - string that contains the email adress entered by the user
// function return true if emailTxt is valid email adress
function isEmailValid(emailTxt) {

  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  return regex.test(emailTxt);

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

//const btnSubmit = document.querySelector(".btn-submit");

document.querySelector(".btn-submit").addEventListener("click", function(e) { 
  e.preventDefault();

  removeErrMessage();

  let isValid = true;

  if (!firstNameInput.checkValidity()) // function checkValidity permet de verifier si l'utilisateur a saisi le champs de l'input en accord avec les propietés ds HTML, ici: minlength:2 et requiered
  {
    isValid = false;
    showErrMessage(firstNameInput, errorMessages.firstName);
    // firstNameInput.style.border = "2px solid red";
    // firstNameInput.style.color = "red";
  }
  if(!lastNameInput.checkValidity())
  {
    isValid = false;    
    showErrMessage(lastNameInput, errorMessages.lastName);
   }
  if(!isEmailValid(emailInput.value))
  {
    isValid = false;    
    showErrMessage(emailInput, errorMessages.email);
  }
  if(!birthDateInput.checkValidity())
  {
    isValid = false;    
    showErrMessage(birthDateInput, errorMessages.birthDate);
  }
  if(!quantityInput.checkValidity())
  {
    isValid = false;    
    showErrMessage(quantityInput, errorMessages.quantity);
  }
  if(!isLocationChecked())
  {
    isValid = false;    
    showErrMessage(radioButtons, errorMessages.location);
  }
  if(!termsCheckbox.checked) // function checked permet de verifier si la case est cochée
  {
    isValid = false;    
    showErrMessage(termsCheckbox, errorMessages.terms);
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
