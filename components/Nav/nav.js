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
const allBooks = document.querySelector('.books');
const allTabs = document.querySelector('.tabs');

console.log(allBooks);
console.log(allTabs);


about.addEventListener('click', () => aboutMe());



function aboutMe() {
  allBooks.classList.add('hidden');
  allTabs.classList.add('hidden');
}


// console.log(about);
