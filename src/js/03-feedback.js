import { throttle } from 'lodash';

const input = document.querySelector('input');
const form = document.querySelector('form');

const saveFormState = () => {
  const saved = input.value;
  localStorage.setItem('feedback-form-state', saved);
};

const throttledSaveFormState = throttle(saveFormState, 500);

if (localStorage.getItem('feedback-form-state') !== null) {
  const loadValue = () => {
    const saved = localStorage.getItem('feedback-form-state');
    input.value = saved;
  };
  window.onload = loadValue;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
});

input.addEventListener('input', throttledSaveFormState);
