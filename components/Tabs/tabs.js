class Tab {
  constructor(tabElement) {
    this.tabElement = tabElement;
    this.genre = this.tabElement.dataset.genre;
    // console.log(this.genre);
    if (this.genre === "all") {
      this.books = document.querySelectorAll(".book");
    } else {
      this.books = document.querySelectorAll(
        `.book[data-genre='${this.genre}']`
      );
    }
    // console.log(this.books);
    // this.books.forEach(book => new Book(book));
    this.books.forEach(book => book.classList.add("book-show"));
    this.tabElement.addEventListener("click", this.select);
  }

  select() {
    tabs.forEach(tab => tab.classList.remove("tab-selected"));
    this.classList.add("tab-selected");

    this.books.forEach(book => book.classList.remove("book-show"));
    if (this.genre === "all") {
      this.books = document.querySelectorAll(".book");
    } else {
      this.books = document.querySelectorAll(
        `.book[data-genre='${this.genre}']`
      );
    }
    // console.log(this.books);
    // this.books.forEach(book => new Book(book));
    this.books.forEach(book => book.classList.add("book-show"));
  }
}

// class Book {
//   constructor(bookElement) {
//     this.bookElement = bookElement;
//     console.log(this.bookElement);
//   }

//   select() {
//     this.bookElement.classList('book-show');
//   }
// }

const tabs = document.querySelectorAll(".tab-link");
// console.log(tabs);
// const newTabs = Array.from(tabs);
// console.log(newTabs);
tabs.forEach(tab => new Tab(tab));
