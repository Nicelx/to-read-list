import { makeObservable, observable, action,computed } from "mobx";
import { loadFromLocalStorage } from './../utils/utils';

class BooksState {
	selectedBookId = 0;
	constructor() {
		makeObservable(this, {
			books: observable,
			selectedBookId: observable,
			storageBooks: observable,
			updateBooks: action,
			setSelectedBookId: action,
			updateStorageBooks : action,
			numBooks : computed,
			numIsReadBooks : computed
		});
	}
	books = [];
	
	storageBooks = loadFromLocalStorage()
	
	updateStorageBooks = () => {
		this.storageBooks = loadFromLocalStorage();
	} 

	updateBooks = (data) => this.books = data;

	setSelectedBookId = (id) => (this.selectedBookId = id);

	get numBooks() {
		return this.storageBooks.length;
	} 
	get numIsReadBooks() {
		return this.storageBooks.filter(item => item.isRead).length;
	}


}

export const booksState = new BooksState();
