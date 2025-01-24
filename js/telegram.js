const BOT_TOKEN = '1966150062:AAGJhSpxq40AH7meI5R6wvYYaQOVJeYAq0Q';  // Замените на ваш токен
const CHAT_ID = '1306241821';  // Замените на ваш chat_id
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

// Обработчик отправки формы
document.getElementById('telegramForm').addEventListener('submit', function (e) {
  e.preventDefault();  // Предотвращаем перезагрузку страницы

  const message = document.getElementById('message').value;  // Получаем текст из поля

  // Отправка сообщения через Telegram API
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  })
  .then(response => {
    if (response.ok) {
      // Очищаем форму и показываем статус
      document.getElementById('message').value = ''; // Очищаем поле
      document.getElementById('formMessageStatus').textContent = 'Сообщение отправлено!'; // Текст о успешной отправке
    } else {
      document.getElementById('formMessageStatus').textContent = 'Ошибка при отправке сообщения.';
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
    document.getElementById('formMessageStatus').textContent = 'Произошла ошибка.';
  });
});

