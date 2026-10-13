/* Точка входа. Загружает контроллер игры после вспомогательных классов.
   Классический script-запуск сохраняет возможность открыть index.html напрямую,
   без сервера и без сборщика модулей. */
(function () {
  const script = document.createElement('script');
  script.src = 'js/Game.js';
  script.onerror = function () {
    const message = document.createElement('p');
    message.textContent = 'Не удалось загрузить js/Game.js. Проверьте, что папка проекта распакована целиком.';
    message.style.cssText = 'padding:20px;color:#fff;background:#30222e;font:16px system-ui';
    document.body.appendChild(message);
  };
  document.body.appendChild(script);
})();
