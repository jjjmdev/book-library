const myLibrary = [];
const cardContainer = document.querySelector(".card-container");
const addButton = document.querySelector(".add");

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
	cardContainer.innerHTML = myLibrary.reduce(
		(text, book, index) =>
			text +
			`<div class="card">
				<div class="title"><span class="label">Title</span>${book.title}</div>
				<div class="author"><span class="label">Author</span>${book.author}</div>
				<div class="pages"><span class="label">Pages</span>${book.pages}</div>
				<div class="read"><span class="label">Read</span>
					<div class="checkbox">
						<input type="checkbox" class="checkbox" onClick="toggleRead(${index})"
						${book.read ? "checked" : ""}/></div>
					</div>
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

addButton.addEventListener("click", () => addItem());

function addItem() {
	const title = prompt("Please enter the title of the book.");
	const author = prompt("Please enter the name of the author.");
	const pages = prompt("How many pages are there?");
	const read = Boolean(prompt("Have you read it yet? Y/N", "Y"));

	addBookToLibrary(new Book(title, author, pages, read));
	updateCards();
}

function toggleRead(index) {
	myLibrary[index].read = !myLibrary[index].read;
	updateCards();

	console.log(myLibrary);
}

addBookToLibrary(new Book("Redwine Supernova", "Chapell Roan", 28, true));
addBookToLibrary(new Book("American Teenager", "Ethel Cain", 96, false));
addBookToLibrary(new Book("Mequetrefe", "Arca", 666, false));

updateCards();
