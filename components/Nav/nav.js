const about = document.querySelector('.about');
const allTabs = document.querySelector('.tabs');
const allBooks = document.querySelector('.books');
const allBookCards = Array.from(document.querySelectorAll('.book'));
const aboutContent = document.querySelector('.aboutContent');
const randomContent = document.querySelector('.randomContent');

// console.log(about);
// console.log(allTabs);
// console.log(allBooks);
// console.log(allBookCards);


about.addEventListener('click', () => aboutMe());

function aboutMe() {
  allTabs.classList.add('hidden');
  allBooks.classList.add('hidden');
  allBookCards.forEach(bookCard => bookCard.classList.remove('book-show'));
  aboutContent.classList.remove('hidden');
  randomContent.classList.add('hidden');
  
}


const random = document.querySelector('.random');
random.addEventListener('click', () => randomize());

function randomize() {
  allTabs.classList.add('hidden');
  allBooks.classList.add('hidden');
  allBookCards.forEach(bookCard => bookCard.classList.remove('book-show'));
  aboutContent.classList.add('hidden');
  randomContent.classList.remove('hidden');

  pickBook();

}

function pickBook() {
  const randomNumber = (Math.floor(Math.random() * 12)+1).toString();
  console.log(randomNumber);
  // console.log(2);
  // console.log('2');
  const pickedBook = document.querySelector(`.book[data-id='${randomNumber}']`)
  console.log(pickedBook);
  pickedBook.classList.add('book-show');
}

