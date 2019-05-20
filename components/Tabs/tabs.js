class Tab {
  constructor(tabElement) {
    // debugger
    this.tabElement = tabElement;
    this.genre = this.tabElement.dataset.genre;

    if (this.genre === "all") {
      this.books = document.querySelectorAll(".book");
    } else {
      this.books = document.querySelectorAll(
        `.book[data-genre='${this.genre}']`
      );
    }
    this.books.forEach(book => book.classList.add('book-show'));
    // console.log(this.books);

    this.books = Array.from(this.books).map(book => new Book(book));
    // console.log(this.books);

    this.tabElement.addEventListener("click", () => this.select());
  }

  select() {
    tabs.forEach(tab => tab.classList.remove("tab-selected"));
    this.tabElement.classList.add("tab-selected");

    // console.log(this.books);
    const books = document.querySelectorAll(".book");
    books.forEach(book => book.classList.remove("book-show"));

    this.books.forEach(book => book.select());

  }
}

class Book {
  constructor(bookElement) {
    this.bookElement = bookElement;
    // console.log(this.bookElement);
  }

  select() {
    this.bookElement.classList.add("book-show");
  }
}

const tabs = document.querySelectorAll(".tab-link");
tabs.forEach(tab => new Tab(tab));
