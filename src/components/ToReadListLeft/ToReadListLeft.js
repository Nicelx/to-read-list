import React, { useEffect, useState } from "react";
import "./ToReadListLeft.css";
import { observer } from "mobx-react-lite";
import { normalizeKey } from "./../../utils/utils";
import { Spinner } from "./../../UI/Spinner/Spinner";
import { BookItem } from "./../BookItem/BookItem";

export const ToReadListLeft = observer(({ booksState }) => {
	const {
		isLoaded,
		isLoading,
		books,
		selectedBookId,
		updateBooks,
		setLoading,
		setLoaded,
	} = booksState;
	const [test, setTest] = useState([]);

	const getCoversUrl = (isbn) => `http://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`;
	const getPagesUrl = (query, page = "1") =>
		`https://openlibrary.org/search.json?q=${query}&page=${page}`;

	const getBooks = () => {
		setLoading(true);
		fetch(getPagesUrl("Remarque", "1"))
			.then((response) => response.json())
			.then((data) => {
				updateBooks(data.docs);
				setTest(data.docs);
				setLoaded(true);
				setLoading(false);
			});
	};

	console.log(test);
	useEffect(getBooks, []);
	return (
		<div className="left-container">
			<header className="search">
				<input className="search__input" type="text" placeholder="any book author" />
				{isLoading ? <Spinner /> : <button className="search__button">Go</button>}
				{/* <img src={getCoversUrl('0451526538')} /> */}
			</header>
			<section>
				{isLoaded &&
					books.map((book) => <BookItem book={book} key={normalizeKey(book.key)} />)}
			</section>
			<footer></footer>
		</div>
	);
});
