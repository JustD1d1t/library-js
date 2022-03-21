const librarySelect = document.querySelector('select[name="library"]');
const librarySections = document.querySelectorAll(".library-section");
const allBooksSection = document.querySelector(".library__all-books-container");
const availableBooksSection = document.querySelector(
  ".library__available-books-container"
);
const borrowedBooksSection = document.querySelector(
  ".library__borrowed-books-container"
);

function handleSection(e) {
  const visibleSection = e.target.value;
  switch (visibleSection) {
    case "all":
      librarySections.forEach((section) => {
        section.style.display = "none";
        allBooksSection.style.display = "flex";
      });
      break;
    case "available":
      librarySections.forEach((section) => {
        section.style.display = "none";
        availableBooksSection.style.display = "flex";
      });
      break;
    case "borrowed":
      librarySections.forEach((section) => {
        section.style.display = "none";
        borrowedBooksSection.style.display = "flex";
      });
      break;
    default:
      console.log("error");
  }
}

librarySelect.addEventListener("change", handleSection);
