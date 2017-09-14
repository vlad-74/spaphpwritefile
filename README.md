СТАРТОВАЯ СТРАНИЦА ДЛЯ SPA на сервере apache.

1. Проект протестирован на Chrome, Safari, Firefox, IE;
2. Проект с FLEX архитектурой. С Safari был небольшой гиморой;<br />
2.1. flex-basis НЕ РАБОТАЕТ в Safari, решение через - height;
3. Структура разбита по компонентам (папкам);
4. Переопределение стилей для разных размеров экрана (@media) - media.css; **НЕ ДЛЯ МОБИЛЬНЫХ**
5. Переопределение стилей для Safari & Firefox & IE;
6. Взаимосвязанные Top & Left MENU - menuActive.js;
7. Социальные иконки из font-awesome;
8. Меню более чем на 20 языках;
9. Перечень флагов (языков) - index.html;
10. Автоопределение языка пользователя <br />
10.1. Выбранный язык сохраненяется в localStorage - languageStorage.js(кроме Microsoft_a - в будущем реализую);
11. Присвоение флага языку - flagIco.css + myapp.appcache;
12. **Присвоение флага при "изменение" - readyFlags.js;** 
13. **Присвоение Captions & marquee & Content при изменение флага или меню - readyFlags.js;**
14. Данные вынесены в JSON ФАЙЛЫ<br />
14.1. Текст контента в data/tickerContent.json;<br />
14.2. Тексты для кнопок меню на разных языках - data/menuButtons.json;<br />
14.3. Бегущая строка (marquee)- данные в data/tickerContent.json реализация в readyFlags.js;<br />
15. Задействованы Ramda и jQuery библиотеки;<br />
15.1. Аналог NOT IN: var notIn = R.reject(R.propEq('id', 'ar'))(menuButtons);<br />
15.2. Фильтр(find): var buttonsMenunar = R.find(R.propEq('id', 'ar'))(menuButtons);
16. Приложение закэшировано - myapp.appcache
17. Перезапись в файл через PHP - xhr.open( 'POST', 'data/writeFile.php', true ); - $file = fopen('../upload/'.$fname, 'w')