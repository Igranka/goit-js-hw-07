function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      input.value = "";
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxContainer.innerHTML = "";
}

function createBoxes(amount) {
  const base = 30;
  
  for (let i = 0; i < amount; i++) {
    const size = base + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxContainer.append(box);
  }
}