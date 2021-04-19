import React from "react";
import { observer } from "mobx-react-lite";
import "./BookInfo.css";

export const BookInfo = observer(({ booksState }) => {
	const selectedBook = booksState.books[booksState.selectedBookId]
	if (!selectedBook) return <></>
	const {
		id,
		title ,
		subtitle,
		language,
		firstPublishYear,
		isFullTextAvailable,
		publishYear,
	} = selectedBook;
	
	const addBookHandler = () => {
		localStorage.setItem(`${id}`, JSON.stringify(selectedBook));
	}
	if (title)
		return (
			<section className="book-info">
				<div className="book-info__header">
					<h1 className="book-info__title">{title}</h1>
					<h2 className="book-info__subtitle">{subtitle}</h2>
				</div>
				<p className="book-info__content">
					Languages available: {language || 'unknown'}<br/>
					Full text available: {isFullTextAvailable} <br/>
					First publish year: {firstPublishYear} <br/>
					Years published: {publishYear}
				</p>
				<button className="book-info__add-button" onClick = {addBookHandler}>add book</button>
			</section>
		);
});
