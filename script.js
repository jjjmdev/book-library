const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = Boolean(read);
}

function addBookToLibrary(book) {
	myLibrary.push(book);

	console.log(myLibrary);
	// Update HTML
}

addBookToLibrary(new Book("Redwine Supernova", "Chapell Roan", 28, true));
addBookToLibrary(new Book("American Teenager", "Ethel Cain", 96, false));
addBookToLibrary(new Book("Mequetrefe", "Arca", 666, false));
