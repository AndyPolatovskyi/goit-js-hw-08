import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";

const inputEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');
const formEl = document.querySelector('.feedback-form');
let inputStorage = localStorage.getItem(STORAGE_KEY);
inputEl.addEventListener("input", throttle(storeInputs, 500));
textareaEl.addEventListener("input", throttle(storeInputs, 500));
formEl.addEventListener("submit", function(evt) {
    evt.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    const email = inputEl.value;
    const message = textareaEl.value;
    evt.target.reset();
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify({'email': email,'message': message}));

    console.log(localStorage.getItem(STORAGE_KEY))
}
