# ogólnie o projekcie
Celem projektu jest stworzenie prostej strony internetowej, umożliwiającej konwersję określonych znaków w różnych plikach wejściowych. Projekt wykorzystuje technologie HTML, CSS oraz JavaScript, z naciskiem na prostotę i czytelność kodu.

wykorzystane technologie:
- html
- css
- javascript

# głowne funkcjonalności
1. Użytkownik może wybrać jeden lub więcej plików do konwersji (np. .txt, .srt, .sub, .sbt, .dat) poprzez przeciąganie plików lub wybór z systemu plików. Pliki wyjściowe powinny zachować ten sam format co pliki wejściowe. Konwersja odbywa się za pomocą JavaScript.
2. W stopce strony znajduje się odnośnik do portfolio oraz przycisk "Buy me a coffee".
3. W górnej części strony znajduje się nagłówek z nazwą strony i jej opisem. Strona ma za zadanie konwertować polskie znaki w plikach wejściowych napisów filmów. poniżej znaduje sie zdjęcie przed konwersją (przed.png) i po konwersji (po.png). Treść opisu:
Aplikacja do konwersji polskich znaków w napisach do filmów. Prosta w obsłudze strona, która pozwala szybko zamienić tekst z napisów, usuwając lub poprawiając polskie znaki. Idealne rozwiązanie dla osób, które potrzebują szybkiej korekty w swoich plikach napisów. Poniżej prezentujemy efekt działania narzędzia – zdjęcia przed i po konwersji. Jeśli podoba ci się to, co robię, możesz wesprzeć projekt, kupując mi kawę! :)
4. Strona powinna wyświetlać się w jezyku polskim lub w jezyku angielskim w zaleznosci od przeglądarki uzytkownika. Użytkownik moze zmienić język strony na angielski wyswietlajac za pomocą wybrania flagi w naglowku strony.
5. Strona powinna być responsywna i wyświetlać się poprawnie na urządzeniach o róznych rozdzielczosciach i wielkosciach ekranu.
6. Strona powinna być indeksowana przez wyszukiwarki internetowe.
7. Dodanie analityki strony (google analytics)
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
