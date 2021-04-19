import { makeObservable, observable, action } from "mobx";

class BooksState {
	selectedBookId = 0;
	constructor() {
		makeObservable(this, {
			books: observable,
			selectedBookId: observable,
			updateBooks: action,
		});
	}
	books = [];
	updateBooks = (data) => {
		this.books = data;
	};
	setSelectedBookId = id => this.selectedBookId = id
}

export const booksState = new BooksState();
