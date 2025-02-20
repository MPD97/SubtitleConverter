# ogólnie o projekcie
Celem projektu jest stworzenie prostej strony internetowej, umożliwiającej konwersję określonych znaków w różnych plikach wejściowych. Projekt wykorzystuje technologie HTML, CSS oraz JavaScript, z naciskiem na prostotę i czytelność kodu.

wykorzystane technologie:
- html
- css
- javascript

# głowne funkcjonalności
1. Użytkownik może wybrać jeden lub więcej plików do konwersji (np. .txt, .srt, .sub, .sbt, .dat) poprzez przeciąganie plików lub wybór z systemu plików. Pliki wyjściowe powinny zachować ten sam format co pliki wejściowe. Konwersja odbywa się za pomocą JavaScript.
2. W stopce strony znajduje się odnośnik do portfolio oraz przycisk "Buy me a coffee".
3. W górnej części strony znajduje się nagłówek z nazwą strony i jej opisem. Strona ma za zadanie konwertować polskie znaki w plikach wejściowych napisów filmów. poniżej znaduje sie zdjęcie przed konwersją (przed.png) i po konwersji (po.png).
# dokumentacja

Znaki, które należy zamienić i ich odpowiedniki (pliki `script.js` korzystają z tego obiektu):
```js
const replacements = {
    '³': 'ł', 'ê': 'ę', '¿': 'ż', '¹': 'ą', 'æ': 'ć',
    'Ÿ': 'ź', 'ñ': 'ń', '¯': 'Ż', '¥': 'Ą', 'Ê': 'Ę',
    'Ñ': 'Ń', '\u008F': 'Ź', 'œ': 'ś' 
};
```

# struktura projektu
- **index.html** – Główny plik HTML, zawiera podstawowy układ strony.
- **style.css** – Plik stylów definiujący wygląd i responsywność.
- **script.js** – Główna logika konwersji znaków oraz obsługa interakcji użytkownika.
- **przed.png** – Zdjęcie przed konwersją.
- **po.png** – Zdjęcie po konwersji.
