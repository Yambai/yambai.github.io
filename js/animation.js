// Получаем элемент body
const body = document.querySelector('body');

// Массив цветов для фона
const colors = ['#AEE1F8', '#FFBC8B']; // бледно-синий и бледно-оранжевый

// Индекс текущего цвета
let currentColorIndex = 0;

// Функция для смены фона
function changeBackgroundColor() {
  // Меняем цвет фона
  body.style.backgroundColor = colors[currentColorIndex];

  // Изменяем индекс цвета для следующего перехода
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Запускаем смену фона каждые 5 секунд
setInterval(changeBackgroundColor, 5000);

// Изменим фон при первой загрузке
changeBackgroundColor();