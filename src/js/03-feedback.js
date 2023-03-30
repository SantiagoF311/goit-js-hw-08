import { throttle } from 'lodash';

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('#message');
const form = document.querySelector('form');
let inputSaved = {};

const saveFormState = () => {
  const saved = {
    email: emailInput.value,
    text: messageInput.value,
  };

  const inputSaved = JSON.stringify(saved);
  localStorage.setItem('feedback-form-state', inputSaved);
  console.log(inputSaved);
};

const throttledSaveFormState = throttle(saveFormState, 500);

if (localStorage.getItem('feedback-form-state') !== null) {
  const loadValue = () => {
    const saved = localStorage.getItem('feedback-form-state');
    inputSaved = JSON.parse(saved);
    emailInput.value = inputSaved.email;
    messageInput.value = inputSaved.text;
  };
  window.onload = loadValue;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
});

emailInput.addEventListener('input', throttledSaveFormState);
messageInput.addEventListener('input', throttledSaveFormState);
