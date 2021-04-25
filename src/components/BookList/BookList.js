import React, { useEffect, useState, useRef, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { normalizeBooks } from "./../../utils/utils";
import { fetchBooks, debounce } from "./../../utils/api";
import { Spinner } from "./../../UI/Spinner/Spinner";
import { BookItem } from "./../BookItem/BookItem";
import { Button } from "./../../UI/Button/Button";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import "./BookList.css";

export const BookList = observer(({ booksState }) => {
	const { books, selectedBookId, setSelectedBookId, updateBooks } = booksState;

	const [page, setPage] = useState(1);
	const [inputValue, setInputValue] = useState("");
	const [found, setFound] = useState(101);
	const [isLoading, setLoading] = useState(false);
	const [isLoaded, setLoaded] = useState(false);

	const getBooks = () => {
		if (inputValue === "") return;
		setLoading(true);
		fetchBooks(inputValue, page).then((data) => {
			if (page === 1) {
				setFound(data.numFound);
				updateBooks(normalizeBooks(data.docs));
			} else updateBooks([...books, ...normalizeBooks(data.docs)]);
			setLoaded(true);
			setLoading(false);
		});
	};

	const onBookSelect = (idx) => () => setSelectedBookId(idx);

	const onInputChangeHandler = (e) => {
		setInputValue(e.target.value);
		if (page !== 1) setPage(1);
	};

	const onFetchBookHandler = () => getBooks();

	const intersectionObserver = useRef();

	const lastBookElementRef = useCallback(
		(node) => {
			if (isLoading) return;
			if (intersectionObserver.current) intersectionObserver.current.disconnect();

			intersectionObserver.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && page * 100 < found) {
					setPage((prev) => prev + 1);
					getBooks();
				}
			});
			if (node) intersectionObserver.current.observe(node);
		},
		[page,isLoading]
	);

	useEffect(() => debounce(getBooks), [inputValue]);

	return (
		<div className="left-container">
			<header className="search">
				<input
					onKeyDown={onInputChangeHandler}
					className="search__input mr-10"
					type="text"
					placeholder="any book author"
				/>

				{isLoading ? (
					<Spinner />
				) : (
					<Button onClick={onFetchBookHandler} className="search__button">
						<SearchIcon />
					</Button>
				)}
			</header>

			<section className="book-list">
				{isLoaded &&
					books.map((book, idx) => {
						if (books.length === idx + 1)
							return (
								<BookItem
									onClick={onBookSelect(idx)}
									isSelected={idx === selectedBookId}
									book={book}
									key={book.id}
									ref={lastBookElementRef}
								/>
							);
						return (
							<BookItem
								onClick={onBookSelect(idx)}
								isSelected={idx === selectedBookId}
								book={book}
								key={book.id}
							/>
						);
					})}
					{!isLoaded && <BookItem book = {{title : 'find them!'}}/>}
			</section>

			{/* <footer className="pagination">
				<div>
					<span className="pagination__top">Found: xxx Start: xxx Page size: xxx</span>
				</div>
				<div className="pagination__buttons">
					<Button className="pagination__button--left">Prev</Button>
					<Button className="pagination__button--right">Next </Button>
				</div>
			</footer> */}
		</div>
	);
});
