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
8. Strona powinna zawierać polityke-prywatności która określa zasady strony. Na dole strony powinien znajdowac sie link do polityki prywatnosci.
9. Strona powinna wyswietlać zgode na wykorzystanie ciasteczek. W tresci zgody powinna byc informacja o polityce prywatnosci i linku do polityki prywatnosci. Uzywkonik moze zaakceptować albo nie wyrazic zgody na przetwarzanie danych. Po potwierdzeniu lub odmowie zgody strona pamieta wybór uzytkownika i wyswietla zgode tylko raz. Analityka google nie jest wykonywana dopóki uzytkowik nie wyrazi zgody na przetwarzanie danych, lub odmówi zgody. 
10. Dodaj mało widoczny copyright
    -Copyright © [Rok] [Twoje Imię i Nazwisko]. Wszelkie prawa zastrzeżone.

    Treści i materiały zawarte na tej stronie internetowej, w tym teksty, grafiki, zdjęcia, logotypy, filmy, projekty oraz inne elementy, są chronione prawem autorskim i stanowią własność Mateusz Ambroziak, chyba że wskazano inaczej. Kopiowanie, reprodukcja, modyfikacja, dystrybucja lub jakiekolwiek inne użycie materiałów zawartych na tej stronie bez uprzedniej pisemnej zgody właściciela praw autorskich jest zabronione.
11. strona powinna wyswietlac reklamy

# dokumentacja

Znaki, które należy zamienić i ich odpowiedniki (pliki `script.js` korzystają z tego obiektu):
```js
const replacements = {
    '³': 'ł', '£': 'Ł', 'ê': 'ę', 'Ê': 'Ę', '¿': 'ż', '¯': 'Ż',
    '¹': 'ą', '¥': 'Ą', 'æ': 'ć', 'Æ': 'Ć', 'Ÿ': 'ź', '\u008F': 'Ź',
    'ñ': 'ń', 'Ñ': 'Ń', 'œ': 'ś', 'Œ': 'Ś'
};
```

# struktura projektu
- **index.html** – Główny plik HTML, zawiera podstawowy układ strony.
- **style.css** – Plik stylów definiujący wygląd i responsywność.
- **script.js** – Główna logika konwersji znaków oraz obsługa interakcji użytkownika.
- **przed.png** – Zdjęcie przed konwersją.
- **po.png** – Zdjęcie po konwersji.
- **privacy.html** – Strona z polityką prywatności.
