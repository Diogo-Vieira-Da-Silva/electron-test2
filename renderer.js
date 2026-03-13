const toggleButton = document.getElementById('toggle-dark-mode');
const resetButton = document.getElementById('reset-to-system');
const themeSource = document.getElementById('theme-source');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeSource.innerHTML = 'Dark';
  } else {
    themeSource.innerHTML = 'Light';
  }
});

resetButton.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  themeSource.innerHTML = 'Light';
});