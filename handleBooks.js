let borrowButtons = document.querySelectorAll(".borrow-book");
const borrowedBooks = document.querySelector(".library__borrowed-books");
const availableBooks = document.querySelector(".library__available-books");
const noRecordsInBorrowed = borrowedBooks.querySelector(".library__no-records");
const noRecordsInAvailable = availableBooks.querySelector(
  ".library__no-records"
);

function addNewButton(book, type) {
  const returnButton = document.createElement("button");
  if (type === "borrow") {
    returnButton.classList.add("return-book");
    returnButton.addEventListener("click", returnBook);
    returnButton.textContent = "Zwróć książkę";
  } else {
    returnButton.classList.add("borrow-book");
    returnButton.addEventListener("click", borrowBook);
    returnButton.textContent = "Wypożycz książkę";
  }
  book.append(returnButton);
}

function handleBook(e, type) {
  const button = e.target;
  const book = button.closest(".library__book");
  book.remove();
  button.remove();
  addNewButton(book, type);
  return book;
}

function borrowBook(e) {
  const book = handleBook(e, "borrow");
  borrowedBooks.append(book);
  returnButtons = document.querySelectorAll(".return-book");
  noRecordsInBorrowed.style.display = "none";
  if (!availableBooks.querySelectorAll(".library__book").length) {
    noRecordsInAvailable.style.display = "flex";
  } else {
    noRecordsInAvailable.style.display = "none";
  }
}
function returnBook(e) {
  const book = handleBook(e);
  availableBooks.append(book);
  if (!borrowedBooks.querySelectorAll(".library__book").length) {
    noRecordsInBorrowed.style.display = "flex";
  }
  noRecordsInAvailable.style.display = "none";
  borrowButtons = document.querySelectorAll(".return-book");
}

borrowButtons.forEach((button) => {
  button.addEventListener("click", borrowBook);
});
