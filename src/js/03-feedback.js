import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');
const formEl = document.querySelector('form.feedback-form');
let inputStorage = localStorage.getItem("feedback-form-state");
inputEl.addEventListener("input", throttle(storeInputs, 500));
textareaEl.addEventListener("input", throttle(storeInputs, 500));
formEl.addEventListener("submit", function(evt) {
    evt.preventDefault();
    localStorage.clear();
    const email = inputEl.value;
    const message = textareaEl.value;
    console.log({'email': email,'message': message})
})
    if(inputStorage) {
        inputStorage = JSON.parse(inputStorage);
        inputEl.value = inputStorage['email'];
        textareaEl.value = inputStorage['message'];

    }

function storeInputs() {
   
    const email = inputEl.value;
    const message = textareaEl.value;
    localStorage.setItem("feedback-form-state", JSON.stringify({'email': email,'message': message}));

    console.log(localStorage.getItem("feedback-form-state"))
}
