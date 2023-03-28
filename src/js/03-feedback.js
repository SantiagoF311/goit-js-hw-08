import throttle from 'lodash.throttle';

const input = document.querySelector('input');

throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  const formStateString = `email=${formState.email}&message=${formState.message}`;
  localStorage.setItem('feedback-form-state', formStateString);
}, 500);

if (localStorage.key !== '') {
  const loadValue = () => {
    const saved = localStorage.getItem('feedback-form-state');
    input.value = saved;
  };
  window.onload = loadValue;
}

input.addEventListener('submit', () => {
  localStorage.clear;
});
