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
		(text, book, index) =>
			text +
			`<div class="card">
				<div class="title"><span class="label">Title</span>${book.title}</div>
				<div class="author"><span class="label">Author</span>${book.author}</div>
				<div class="pages"><span class="label">Pages</span>${book.pages}</div>
				<div class="read"><span class="label">Read</span>${book.read}</div>
				<button class="delete" onClick="deleteItem(${index})">Delete</button>
			</div>`,
		""
	);
}

function deleteItem(index) {
	if (!window.confirm("Are you sure you want to delete this item?")) return;

	myLibrary.splice(index, 1);
	updateCards();
}

addBookToLibrary(new Book("Redwine Supernova", "Chapell Roan", 28, true));
addBookToLibrary(new Book("American Teenager", "Ethel Cain", 96, false));
addBookToLibrary(new Book("Mequetrefe", "Arca", 666, false));

updateCards();
