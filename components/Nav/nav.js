// class Anchor {
//   constructor(anchorElement) {
//     this.anchorElement = anchorElement;
//     this.anchorElement.addEventListener('mouseover', () => this.hover());

//   }

//   hover() {
//     // console.log('test');
//     this.anchorElement.style['background-color'] = 'black';
//   }
// }


const about = document.querySelector('.about');
const allTabs = document.querySelector('.tabs');
const allBooks = document.querySelector('.books');
const allBookCards = Array.from(document.querySelectorAll('.book'));
const aboutData = document.querySelector('.aboutData');

// console.log(about);
// console.log(allTabs);
// console.log(allBooks);
// console.log(allBookCards);


about.addEventListener('click', () => aboutMe());



function aboutMe() {
  allTabs.classList.add('hidden');
  allBooks.classList.add('hidden');
  allBookCards.forEach(bookCard => bookCard.classList.remove('book-show'));
  aboutData.classList.remove('hidden');
}


