# GameOn - event registration

This is a solution to the [OpenClassrooms](https://openclassrooms.com/) project. OpenClassrooms is one of the largest online schools in Europe, based in Paris.

## Overview

### Screenshot

![](/images/screenshot.png)

### The challenge

Users should be able to:

- Display and fill out the form
- See a confirmation message after successfully submitting
- View error messages upon submission if fields are empty or contain incorrect input

### Links

- Live Site URL: [See the live page here](https://kasia307584.github.io/game_on-event-registration-form/)

## My process

### Built with

- Vanilla JavaScript
- HTML DOM API

### What I learned

- create JavaScript functions
- add event listeners to HTML elements
- create a regular expression (regex)
- use HTML attributes (e.g., `min` `max`) combined with HTML DOM API properties (e.g., `HTMLElement.validity.valid`) to validate the user input and display error messages if necessary
- use DOM interfaces methods (e.g., `setAttribute()` on an Element object) to show or hide elements

HTML code using HTML attributes:

```html
<div
  class="formData"
  data-error="Veuillez entrer un nombre valide."
  data-error-visible="false"
>
  <label for="quantity"
    >À combien de tournois GameOn avez-vous déjà participé ?</label
  ><br />
  <input
    type="number"
    class="text-control"
    id="quantity"
    name="quantity"
    min="0"
    max="99"
    required
  /><br />
</div>
```

JavaScript code using HTML DOM API properties and DOM interfaces methods:

```js
const quantityInput = document.getElementById("quantity");
const quantityDiv = quantityInput.parentElement;

if (!quantityInput.validity.valid) {
  isValid = false;
  quantityDiv.setAttribute("data-error-visible", "true");
} else {
  quantityDiv.setAttribute("data-error-visible", "false");
}
```

### Continued development

- each input field (not just the email field) can be validated using JavaScript functions based on regular expression tests (e.g., for the first name input, a regex can check if only letters are used)
