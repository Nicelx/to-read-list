import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { normalizeBooks, getPagesUrl } from "./../../utils/utils";
import { Spinner } from "./../../UI/Spinner/Spinner";
import { BookItem } from "./../BookItem/BookItem";
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import "./ToReadListLeft.css";

export const ToReadListLeft = observer(({ booksState }) => {
	const {
		books,
		selectedBookId,
		setSelectedBookId,
		updateBooks,
	} = booksState;
	
	const [isLoading, setLoading] = useState(false);
	const [isLoaded, setLoaded] = useState(false);


	const getBooks = () => {
		setLoading(true);
		fetch(getPagesUrl("Remarque", "1"))
			.then((response) => response.json())
			.then((data) => {
				console.log(data.docs)
				updateBooks(normalizeBooks(data.docs));
				setLoaded(true);
				setLoading(false);
			});
	};

	const onBookSelect = idx => () => setSelectedBookId(idx)
	console.log(books);
	useEffect(getBooks, []);
	return (
		<div className="left-container">
			<header className="search">
				<input className="search__input mr-10" type="text" placeholder="any book author" />
				
				{isLoading ? <Spinner /> : <button className="search__button"><SearchIcon/></button>}
			</header>

			<section className = 'book-list'>
				{isLoaded &&
					books.map((book, idx) => (
						<BookItem
							onClick = {onBookSelect(idx)}
							isSelected={idx === selectedBookId}
							book={book}
							key={book.id}
						/>
					))}
			</section>

			<footer className = 'pagination'>
				<div>
					<span className = 'pagination__top'>Found: xxx  Start: xxx  Page size: xxx</span>	
				</div>
				<div className = 'pagination__buttons'>
					<button className = 'pagination__button pagination__button--left'>Prev</button>
					<button className = 'pagination__button pagination__button--right'>Next </button>
				</div>
			</footer>
		</div>
	);
});
