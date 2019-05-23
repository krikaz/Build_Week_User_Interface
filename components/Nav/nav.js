const allTabs = document.querySelector('.tabs');
const allBooks = document.querySelector('.books');
const allBookCards = Array.from(document.querySelectorAll('.book'));
const aboutContent = document.querySelector('.aboutContent');
const randomContent = document.querySelector('.randomContent');

const about = document.querySelector('.about');
about.addEventListener('click', () => aboutMe());

const random = document.querySelector('.random');
random.addEventListener('click', () => randomize());

function aboutMe() {
  hideAll();
  aboutContent.classList.remove('hidden');
  randomContent.classList.add('hidden');
}

function randomize() {
  hideAll()
  aboutContent.classList.add('hidden');
  randomContent.classList.remove('hidden');
  pickBook();

}

function pickBook() {
  const randomNumber = (Math.floor(Math.random() * 12)+1).toString();
  const pickedBook = document.querySelector(`.book[data-id='${randomNumber}']`)
  pickedBook.classList.add('book-show');
}

function hideAll() {
  allTabs.classList.add('hidden');
  allBooks.classList.add('hidden');
  allBookCards.forEach(bookCard => bookCard.classList.remove('book-show'));
}

