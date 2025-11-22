const myLibrary = [];


function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read 
    this.id =  crypto.randomUUID()
    
    
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

console.log(myLibrary)


// create card
const library = document.querySelector('#library');



// go through array and post each item to card



function renderLibrary() {
    library.textContent= '';
  myLibrary.forEach((book) => {
    //creat items for each card
const card = document.createElement('div');
const bookInfo = document.createElement('p');
const deleteBtn = document.createElement('div');
const readBtn = document.createElement('button');

card.setAttribute('class', 'card');
deleteBtn.setAttribute('class', 'deleteBtn');
readBtn.setAttribute('class', 'readbtn button');




function toggleRead(book) {
   book.read = !book.read;
   
}
readBtn.addEventListener('click', () => {
    toggleRead(book);
    bookInfo.textContent = book.info();
})

deleteBtn.addEventListener('click', () => {
    myLibrary.splice(indexedDB, 1);
    renderLibrary()
})
deleteBtn.textContent = 'X';
readBtn.textContent = 'Read';
bookInfo.textContent = book.info();
//add to the library
library.appendChild(card);
card.appendChild(deleteBtn);
card.appendChild(bookInfo)
card.appendChild(readBtn);
})  
}


renderLibrary();