const input = document.querySelector('input');

const inputValue = input.addEventListener('input', e => {
  const inputEmail = input.value;
  localStorage.setItem('feedback-form-state', inputEmail);
});

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
