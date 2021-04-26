import React, { useEffect, useState, useRef, useCallback } from "react";
import { observer } from "mobx-react-lite";

import { Button } from "./../../UI/Button/Button";
import { BookItem } from "./../BookItem/BookItem";
import { Spinner } from "./../../UI/Spinner/Spinner";
import { useFetchBooks } from "./../../hooks/useFetchBooks";

import { debounce } from "./../../utils/utils";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import "./BookList.css";

export const BookList = observer(({ booksState }) => {
	const { books, selectedBookId, setSelectedBookId } = booksState;

	const [page, setPage] = useState(1);
	const [inputValue, setInputValue] = useState("");

	const { isLoading, isError, isLoaded, fetchBooks, found} = useFetchBooks(inputValue, page);

	const onBookSelect = (idx) => () => setSelectedBookId(idx);

	const onInputChangeHandler = (e) => {
		setInputValue(e.target.value);
		if (page !== 1) setPage(1);
		
	};

	const onFetchBookHandler = () => fetchBooks(inputValue, page);

	const intersectionObserver = useRef();


	const lastBookElementRef = useCallback(
		(node) => {
			if (isLoading) return;
			if (intersectionObserver.current) intersectionObserver.current.disconnect();

			intersectionObserver.current = new IntersectionObserver(async(entries) => {
				if (entries[0].isIntersecting && page * 100 < found) {
					await fetchBooks(inputValue, page+1);
					setPage((prev) => prev + 1);
				}
			});
			if (node) intersectionObserver.current.observe(node);
		},
		[isLoading, page]
	);

	console.log(page)
	useEffect(() => debounce(() => fetchBooks(inputValue, page)), [inputValue]);

	return (
		<div className="left-container">
			<header className="search">
				<input
					onKeyUp={onInputChangeHandler}
					className="search__input"
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
				{!isLoaded && <BookItem book={{ title: "find them!" }} />}
				{isError && <BookItem book={{ title: "something wrong with request" }} />}
			</section>

			<footer className="pagination">
				<div>
					<span className="pagination__top">Found: {found}</span>
				</div>
				{/* <div className="pagination__buttons">
					<Button className="pagination__button--left">Prev</Button>
					<Button className="pagination__button--right">Next </Button>
				</div> */}
			</footer>
		</div>
	);
});
