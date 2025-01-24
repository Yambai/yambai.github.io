// Добавляем обработчики событий на кнопки
document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu a');

  // Кнопка "Скример"
  menuLinks[1].addEventListener('click', (e) => {
    e.preventDefault();

    // Создаем модальное окно с изображением и звуком
    const screamerModal = document.createElement('div');
    screamerModal.classList.add('screamer-modal');
    screamerModal.innerHTML = `
      <div class="screamer-content">
        <img src="screamer-face.png" alt="Скример" />
        <audio autoplay>
          <source src="screamer-sound.mp3" type="audio/mpeg">
        </audio>
      </div>
    `;

    document.body.appendChild(screamerModal);

    // Убираем скример через 3 секунды
    setTimeout(() => {
      document.body.removeChild(screamerModal);
    }, 3000);
  });

  // Кнопка "Фейерверк"
  menuLinks[2].addEventListener('click', (e) => {
    e.preventDefault();

    // Запускаем анимацию фейерверка
    const fireworksContainer = document.createElement('div');
    fireworksContainer.classList.add('fireworks-container');
    document.body.appendChild(fireworksContainer);

    // Создаем эффект фейерверка
    for (let i = 0; i < 20; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      firework.style.left = `${Math.random() * 100}%`;
      firework.style.top = `${Math.random() * 100}%`;
      firework.style.animationDelay = `${Math.random() * 1}s`;
      fireworksContainer.appendChild(firework);
    }

    // Убираем фейерверк через 3 секунды
    setTimeout(() => {
      document.body.removeChild(fireworksContainer);
    }, 3000);
  });

  // Кнопка "Бип"
  menuLinks[3].addEventListener('click', (e) => {
    e.preventDefault();

    // Воспроизводим звук бипа
    const beepSound = new Audio('beep-sound.mp3');
    beepSound.play();
  });

  // Кнопка "Блог"
  menuLinks[4].addEventListener('click', (e) => {
    e.preventDefault();

    // Переход на новую вкладку
    window.open('https://ваш-сайт-блог.рф', '_blank');
  });
});
