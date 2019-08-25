function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')  // FETCHING DATA FROM API
  .then(resp => resp.json()) // CONVERTING TO JSON FETCHED DATA
  .then(books => renderBooks(books)) // THIS IS RUNNING THE FUNCTION ON LINE 8 RenderBooks(Json)

}

function renderBooks(books) {
  const main = document.querySelector('main') // SELECTING THE WHOLE PAGE WITH MAIN 
  books.forEach(book => {        // ITERATING THROUGH THE LIST OF BOOKS FROM API
    const h2 = document.createElement('h2') // CREATING H2 TAG
    h2.innerHTML = `<h2>${book.name}</h2>`    
    main.appendChild(h2)  // ADDING h2 TO THE DOM
  })
}

// THIS IS EVENT LISTENER ---> >
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
