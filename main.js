const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read 
    
    this.haveRead = function() {
        return this.read ? 'read' : 'not read yet';
    }

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead()}`
    }
}


const theHobbit = new Book ('The Hobbit', 'J.R.R. Tolkien', 295, false)
const courtOfThornes = new Book('A Court of Thorns and Roses', 'Sarah J. Mass', 419, false)


const form  = document.querySelector('#newBook');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // stop page reload
  const newBook = addBookToLibrary(); // create and store book
  console.log(newBook);
  renderLibrary(); // check it worked
  form.reset();
});



function addBookToLibrary() {

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
    return book;


}


myLibrary.push(theHobbit, courtOfThornes)




// create card
const library = document.querySelector('#library');



// go through array and post each item to card



function renderLibrary() {
    library.textContent= '';
  myLibrary.forEach((book) => {
    
const card = document.createElement('div');
card.setAttribute('class', 'card');
card.textContent = book.info();
library.appendChild(card);
})  
}

renderLibrary();