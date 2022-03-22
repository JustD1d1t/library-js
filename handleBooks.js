// let borrowButtons = document.querySelectorAll(".borrow-book");
// const borrowedBooks = document.querySelector(".library__borrowed-books");
// const availableBooks = document.querySelector(".library__available-books");

// async function borrowBook(e) {
//   const response = await fetch("http://localhost:4000/books/borrow", {
//     body: {},
//   });
// }
// function returnBook(e) {
//   const book = handleBook(e);
//   availableBooks.append(book);
//   if (!borrowedBooks.querySelectorAll(".library__book").length) {
//     noRecordsInBorrowed.style.display = "flex";
//   }
//   noRecordsInAvailable.style.display = "none";
//   borrowButtons = document.querySelectorAll(".return-book");
// }

// borrowButtons.forEach((button) => {
//   button.addEventListener("click", borrowBook);
// });
