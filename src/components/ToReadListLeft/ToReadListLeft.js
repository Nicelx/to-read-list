import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { normalizeBooks  } from "./../../utils/utils";
import {  fetchBooks,debounce } from "./../../utils/api";
import { Spinner } from "./../../UI/Spinner/Spinner";
import { BookItem } from "./../BookItem/BookItem";
import { Button } from './../../UI/Button/Button';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import "./ToReadListLeft.css";

export const ToReadListLeft = observer(({ booksState }) => {
	const {
		books,
		selectedBookId,
		setSelectedBookId,
		updateBooks,
	} = booksState;
	
	const [page, setPage] = useState(1);
	const [inputValue, setInputValue] = useState('')
	const [isLoading, setLoading] = useState(false);
	const [isLoaded, setLoaded] = useState(false);


	const getBooks = () => {
		if (inputValue === '') return
		setLoading(true);
		fetchBooks(inputValue, page).then(data => {
			updateBooks(normalizeBooks(data.docs));
			setLoaded(true);
			setLoading(false);
		})
	};
	
	const onBookSelect = idx => () => setSelectedBookId(idx)

	const onInputChangeHandler = (e) => setInputValue(e.target.value)

	const onFetchBookHandler = () => getBooks()

	useEffect(() => debounce(getBooks), [inputValue])
	

	return (
		<div className="left-container">
			<header className="search">
				<input onKeyDown = {onInputChangeHandler}className="search__input mr-10" type="text" placeholder="any book author" />
				
				{isLoading ? <Spinner /> : <Button onClick = {onFetchBookHandler}className = 'search__button'><SearchIcon/></Button>}
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
					<Button className = 'pagination__button--left'>Prev</Button>
					<Button className = 'pagination__button--right'>Next </Button>
				</div>
			</footer>
		</div>
	);
});
