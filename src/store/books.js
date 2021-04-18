import { makeObservable, observable, action } from "mobx";

class BooksState {
	selectedBookId = 0;
	isLoading = false;
	isLoaded = false;
	constructor() {
		makeObservable(this, {
			isLoading: observable,
			isLoaded: observable,
			books: observable,
			selectedBookId: observable,
			updateBooks: action,
			setLoading: action,
		});
	}
	books = [];
	updateBooks = (data) => {
		this.books = data;
	};
	setLoading = (v) => (this.isLoading = v);
	setLoaded = (v) => (this.isLoaded = v);
}

export const booksState = new BooksState();
