# Модель якості для додатку згідно зі стандартами ISO/IEC 25010 та ISO/IEC 25019:2023.:

| Характеристика | Опис |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| Функціональна придатність	| Додаток повинен правильно створювати, редагувати, видаляти та переміщати задачі між списками. |
| Продуктивність та ефективність |	Час завантаження сторінки < 2 сек, швидка обробка запитів (< 100 мс). |
| Сумісність | Коректна робота у різних браузерах (Chrome, Firefox, Edge). |
| Юзабіліті |	Мінімалістичний UI, адаптивний дизайн, інтуїтивне управління задачами. |
| Надійність |	Збереження даних при перезавантаженні сторінки, коректна обробка помилок. |
| Безпека |	Захист від XSS, CSRF, SQL-ін’єкцій, правильна авторизація (якщо є). |
| Супроводжуваність |	Чітка структура коду, відповідність принципам SOLID, коментування. |
| Переносимість |	Можливість запуску на сервері Node.js, розгортання у Docker. |


# Ключові метрики якості коду:

| Метрика |	Опис |
| ---------------- | ---------------------------------- |
| % успішно виконаних запитів	| Число запитів із кодом 2xx від загальної кількості. |
| Тестове покриття (%) | Частка коду, покритого unit-тестами (Jest). |
| Середній час відповіді (мс) |	Час обробки запитів сервером (Supertest). |
| Час рендеру UI (мс) |	Скільки часу потрібно браузеру на рендер сторінки. |
| Відсутність критичних помилок | Відсутність помилок JavaScript. |
| Кількість кліків для виконання задачі	| Чим менше кліків, тим краще. |
| Кількість збоїв (500-ті помилки) | Має бути 0 у робочому середовищі. |
| Чистота коду | Відсутність помилок стилю коду. |


# Результати перевірки застосунку через Sonarqube
![image](https://github.com/user-attachments/assets/1b45ae77-6f12-446e-a59b-b6e10ea42a90)

# UML-діаграми випадків використання, класів, послідовності:
## Діаграма випадків використання
![image](https://www.plantuml.com/plantuml/png/TP51IWCn58RtESLZzbtOrgqKF8C726DmKojCqfK8JhjmAOXquKQyGIWMWxNJA_plHhxNpY8C9BiVlkz_USdC1zk4vVtSs3eyD5JX0nq_8t7BArvZYyWl5LbFDzurfd5ri8kxkHFmwmnXXpz44lOeNXHZpniSSE1NmWyYlhK2KQXKqQCXEKllQkjF9LAmxIUka8XR7BKN7NxFOwyl1iexEkrKF1l0wnuV3_1FxAHTBiaRRbKgYPE1-8Qa1FPbPLfMIjjScYTZz2rfDBhIxV8mpiCa3zCiICVCBMxbq_u1)
## Діаграма класів
![image](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLl39B2vHgEPI00Bjp1Gh1R_ItAJK8WY_9BCa9zLA8RYaA3Cl7IgKM9nTRAKG0gIYOq52NBLS49F0OYIO17H7IManNAnMWOiBx1ObGoK5BLrT1QNSnBnA9R2fN0wfUIb09mC0)
## Діаграма послідовності
![image](https://www.plantuml.com/plantuml/png/RP2nJiGm38RtF8Lr4mo5_GPq2yDD88wAsJGM2j0sIW9Yf7HWO-h4m3DK20a4eho2_KQOqW6aJab-V_h-oAkOCAIhyj9WaUe0_CY3tFARD78dBJzpB_V6A-8Avx5Ai3YXKyZN2y2en__HXi8r1TZQl_61OjmvZziZzviRCoU7R4yzI-2E1txHf0D-vLwlEfJMv6ib9iCI3Wysnx2BrcO9uuMP2hF9SKJM1IeIf1fAT1LuFAFHeC1SkTO-yISF-lgG1wsMXhz-48tU__p3hAYokgHl)

# Специфікація обмежень для системи. [Посилання на файл](docs/specification)
![image](https://github.com/user-attachments/assets/425c375d-4c22-4cce-967f-84e9bc8a7e95)
