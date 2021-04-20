import React from "react";
import { observer } from "mobx-react-lite";
import { BookItemStoraged } from "../BookItem/BookItemStoraged";
import './ToReadListRight.css'

export const ToReadListRight = observer(({ booksState }) => {
	const {storageBooks} = booksState

	return (
		<div className="right-container">
			<header className = 'to-read'>
				<h1 className = 'to-read__title'>To read list</h1>
				<h2 className = 'to-read__counts'>xx books, xx read</h2>
			</header>
			<section className = 'storaged-books'>
				{storageBooks.map((item) => (
					<BookItemStoraged book={item} key={item.id} />
				))}
			</section>
		</div>
	);
});
