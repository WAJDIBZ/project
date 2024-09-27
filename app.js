var books = [{ id: 1, author: 'Ahmed', price: 100, publisher: 'OCP' }, { id: 2, author: 'Ali', price: 200, publisher: 'OCP' }];
function onloaded() {
    displayBooks();
}
function createBook() {
    var bookId = document.getElementById('bookId').value;
    var author = document.getElementById('author').value;
    var price = document.getElementById('price').value;
    var publisher = document.getElementById('publisher').value;

    if (bookId && author && price && publisher) {
        books.push({ id: bookId, author, price, publisher });
        displayBooks();
        clearForm();
    } else {
        alert('Veuillez remplir tous les champs');
    }
}

function displayBooks() {
    var tableBody = document.querySelector('#bookTable tbody');
    tableBody.innerHTML = '';

    books.forEach((book, index) => {
        var row = `
            <tr>
                <td>${book.id}</td>
                <td>${book.author}</td>
                <td>${book.price} DT </td>
                <td>${book.publisher}</td>
                <td>
                    <button onclick="editBook(${index})">Modifier</button>
                    <button onclick="deleteBook(${index})">Supprimer</button>
                </td>
            </tr>`;
        tableBody.innerHTML += row;
    });
}

function editBook(index) {
    var book = books[index];
    document.getElementById('bookId').value = book.id;
    document.getElementById('author').value = book.author;
    document.getElementById('price').value = book.price;
    document.getElementById('publisher').value = book.publisher;
}
function clearForm() {
    document.getElementById('bookId').value = '';
    document.getElementById('author').value = '';
    document.getElementById('price').value = '';
    document.getElementById('publisher').value = '';
}

function updateBook() {
    var bookId = document.getElementById('bookId').value;
    var author = document.getElementById('author').value;
    var price = document.getElementById('price').value;
    var publisher = document.getElementById('publisher').value;

    var index = books.findIndex(book => book.id == bookId);
    if (index !== -1) {
        books[index] = { id: bookId, author, price, publisher };
        displayBooks();
        clearForm();
    } else {
        alert('Livre non trouvé');
    }
}

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}


