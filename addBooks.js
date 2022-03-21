const books = [
  {
    title: "DZIENNIK ANNE FRANK",
    author: "ANNE FRANK",
    description:
      "Uznany za jedno z największych dzieł literatury światowej, pamiętnik Anne Frank to dokładna, nad wyraz dojrzała relacja z ponad dwuletniego ukrywania się Anne i całej jej rodziny podczas nazistowskiej okupacji Holandii. Trudno nie czytać „Dziennika…” ze smutkiem i swego rodzaju poczuciem straty, gdy wiemy już, że kryjówkę zdradzono, a bohaterka zmarła w obozie kilka miesięcy później… Lektura trudna przez poczucie nadchodzącej zagłady, a jednocześnie przyjemna, bo Anne w błyskotliwy sposób udało się opisać te ostatnie lata swojego życia.",
  },
  {
    title: "MYŚL! I BOGAĆ SIĘ",
    author: "NAPOLEON HILL",
    description:
      "Ten napisany w 1937 roku poradnik wciąż bije na świecie rekordy popularności. Chociaż może „poradnik” to trochę zbyt uproszczone słowo na opisanie tej książki. Jest to raczej zachęcenie do pracy i przyjęcie pewnej filozofii sukcesu, dzięki której, w przyszłości, dzięki ciężkiej pracy, wysiłkowi i odpowiedniemu nastawieniu, każdy jest w stanie stać się dobrze prosperującym człowiekiem. W każdej dziedzinie życia. Coś dla samorozwoju, budowania motywacji i pewności siebie. Napisane w czasach Wielkiej Depresji, dzisiaj w czasie kryzysu sprawdza się jak nigdy dotąd.",
  },
  {
    title: "PRZEMINĘŁO Z WIATREM",
    author: "MARGARET MITCHELL",
    description:
      "Tej powieści pewnie nikomu nie muszę przedstawiać, tym bardziej, że już wcześniej do niej zachęcałam. Dla przypomnienia to pełna namiętności, miłości i zdrady historia pięknej belle z amerykańskiego Południa: Scarlett O’Hary. A w tle wojna secesyjna, krwawy upadek Południa, obalenie niewolnictwa i wielkie zmiany, nie tylko dla całych Stanów Zjednoczonych, ale przed wszystkim dla głównej bohaterki. I jej niezapomniane, kultowe motto: „Bo jutro też jest dzień”.",
  },
  {
    title: "ZMIERZCH",
    author: "STEPHENIE MEYER",
    description:
      "Bardzo chciałabym nie pisać o tej pozycji, a raczej pozycjach kilku, bo to przecież cztery porządne tomiszcza. Ale najwidoczniej nie mam wyboru 😉 Hit wśród młodzieży. Kultowe powieści nastolatków. Wampiry kontra wilkołaki. Odwieczny konflikt. A w tym wszystkim zagubiona, stłamszona i ciamajdowata Bella, która nie może zdecydować się kogo wybrać, czy bladolicego Edwarda, czy śniadego Jacoba. I cierpi. A potem w końcu wybiera. I jeszcze więcej wampirów i wilkołaków.",
  },
  {
    title: "KOD LEONARDA DA VINCI",
    author: "DAN BROWN",
    description:
      "Jedna z najbardziej popularnych powieści ostatnich lat, wciąż na pierwszym miejscu wśród czytelników Wielkiej Brytanii. Pełen wartkiej akcji, tajemnic i morderstw thriller, którego głównym bohaterem jest Robert Langdon. Ten historyk, profesor, specjalista od symboli zostaje wplątany w odwieczny religijny spisek i niczym współczesny rycerz okrągłego stołu wyrusza na poszukiwanie Świętego Graala. A w tle Paryż i oczywiście obrazy Leonardo da Vinci. Typowy przykład literatury pop, dla każdego kto nie wymaga zbyt wiele.",
  },
  {
    title: "ALCHEMIK",
    author: "PAOLO COELHO",
    description:
      "Jedna z książek, których rewelacyjnego odbioru zupełnie nie rozumiem. Przez wielu uznawana za niesamowitą, pełną odwiecznej mądrości, ekstremalnie przeładowaną filozofią powieść.  W gruncie rzeczy jest wyjątkowo tanim chwytem na zbolałe życiem serca naiwnych czytelników, zapełnioną pustymi „rozważaniami” w stylu: „W życiu bo­wiem is­tnieją rzeczy, o które war­to wal­czyć do sa­mego końca”, czy „To oczywiste, że ludzkość zdoła zachować moc.” Po przeanalizowaniu „filozofii” Coelho, wycięciu nic nieznaczących frazesów zostaje może dziesięć stron słabej prozy. Najlepsza dla wciąż „szukających swojej drogi ” zagubionych gimnazjalistów, prawdziwa filozofia light, bez kalorii i żadnych wartości odżywczych.",
  },
  {
    title: "Władca Pierścieni",
    author: "J.R.R. Tolkien",
    description:
      "Pozycja obowiązkowa. Kultowa powieść, która jest podstawą całego współczesnego fantasy, a sam Tolkien został mianowany „ojcem” gatunku. To on sklasyfikował elfy, krasnoludy, orków i gobliny. To dzięki niemu po Śródziemu biegają hobbity. Można się kłócić skąd czerpał inspiracje. Można próbować ubliżyć jego umiejętnościom kreowania światów. Ale bez Tolkiena popkultura, w tym filmy, literatura, gry komputerowe, byłaby o wiele uboższa… Nawet jeśli dzisiaj staje się modne bycie anty-Tolkienem.",
  },
  {
    title: "HARRY POTTER",
    author: "J.K. ROWLING",
    description:
      "Siedem tomów opowiadających dzieje młodego czarodzieja, który walczy ze swoim odwiecznym wrogiem Voldemortem zmieniły życie całego pokolenia. Przez lata czekaliśmy na kolejne tomy, obawiając się o ukochanych bohaterów, razem z nimi przeżywając rozterki i wykłócając się o przynależność do domów Hogwartu. Potem równie długo czekaliśmy na kolejne części ekranizacji. Rowling udało się odświeżyć literaturę dziecięcą i młodzieżową. Wprowadzić element zapomnianej magii we współczesność. Odrealnić trochę rzeczywistość. Baśń, legenda, thriller i dobrze opowiedziana historia dla małych jak i dla dużych czytelników.",
  },
  {
    title: "WYJĄTKI Z DZIEŁ PRZEWODNICZĄCEGO MAO TSE-TUNGA",
    author: "MAO TSE-TUNG",
    description:
      "Co by tu dużo pisać… Obowiązkowa pozycja dla WSZYSTKICH obywateli Chińskiej Republiki Ludowej. NIE do odrzucenia. NIE do podważenia. Prawie czterdzieści lat po śmierci Mao wciąż na szczycie.",
  },
];
const availableBooksInLibrary = document.querySelector(
  ".library__available-books"
);
const allBooksInLibrary = document.querySelector(".library__all-books");

books.forEach((book) => {
  const newBook = document.createElement("div");
  newBook.classList.add("library__book");
  const template = `<div class="library__book-details"><h5 class="library__book-title">Tytuł: ${book.title}</h5><h5 class="library__book-author">Autor: ${book.author}</h5></div><p class="library__book-description clamp-3">${book.description}</p>`;
  newBook.innerHTML = template;
  addBooksToLibrary(newBook);
});
books.forEach((book) => {
  const newBook = document.createElement("div");
  newBook.classList.add("library__book");
  const template = `<div class="library__book-details"><h5 class="library__book-title">Tytuł: ${book.title}</h5><h5 class="library__book-author">Autor: ${book.author}</h5></div><p class="library__book-description clamp-3">${book.description}</p> <button class="borrow-book">Wypożycz książkę</button>`;
  newBook.innerHTML = template;
  addBooksToAvailable(newBook);
});

function addBooksToLibrary(book) {
  allBooksInLibrary.append(book);
}
function addBooksToAvailable(book) {
  availableBooksInLibrary.append(book);
}
