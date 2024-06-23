const myLibrary = [];
const container = document.querySelector(".container");

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = Boolean(read);
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function updateCards() {
	container.innerHTML = myLibrary.reduce(
		(text, book) =>
			text +
			`<div class="card">
				<div class="title">Title: ${book.title}</div>
				<div class="author">Author: ${book.author}</div>
				<div class="pages">Pages: ${book.pages}</div>
				<div class="read">Read: ${book.read}</div>
			</div>`,
		""
	);
}

addBookToLibrary(new Book("Redwine Supernova", "Chapell Roan", 28, true));
addBookToLibrary(new Book("American Teenager", "Ethel Cain", 96, false));
addBookToLibrary(new Book("Mequetrefe", "Arca", 666, false));

updateCards();
