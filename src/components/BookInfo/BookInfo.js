import React from "react";
import { observer } from "mobx-react-lite";
import { Button } from './../../UI/Button/Button';
import {setLocalStorage} from '../../utils/utils'
import "./BookInfo.css";

export const BookInfo = observer(({ booksState }) => {
	const {books,updateStorageBooks, selectedBookId} = booksState
	const selectedBook = books[selectedBookId]
	if (!selectedBook) return <section className="book-info">
		<h1 className="book-info__title">Book doesn't selected</h1>
	</section>
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
		if (localStorage[id]) return
		setLocalStorage(id, selectedBook);
		updateStorageBooks();
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
				<Button onClick = {addBookHandler}>
					add book
				</Button>
			</section>
		);
});
