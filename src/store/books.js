import { makeObservable, observable,action } from "mobx";

export class BooksState {
	constructor (){
		makeObservable(this, {
			loading: observable,
			books: observable,
			updateBooks : action,
		})
	}
	loading = false;
	books = [];
	updateBooks = (data)=> {
		this.books = data;
	}
}