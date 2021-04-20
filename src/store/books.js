import { makeObservable, observable, action } from "mobx";
import { checkPrefix } from "../utils/utils";

class BooksState {
	selectedBookId = 0;
	constructor() {
		makeObservable(this, {
			books: observable,
			storageBooks: observable,
			selectedBookId: observable,
			updateBooks: action,
		});
	}
	books = [];
	storageBooks = Object.keys(localStorage)
		.filter((item) => checkPrefix(item))
		.map((item) => JSON.parse(localStorage.getItem(item)));

	pushBookToStorage = (book) => this.storageBooks.push(book);
	updateBooks = (data) => {
		this.books = data;
	};
	setSelectedBookId = (id) => (this.selectedBookId = id);
}

export const booksState = new BooksState();
