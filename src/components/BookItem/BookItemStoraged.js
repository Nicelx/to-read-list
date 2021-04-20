import React from 'react';
import './BookItem.css'
import { Button } from './../../UI/Button/Button';



export const BookItemStoraged = props => {
	const {book, isRead} = props
	const { id, title, subtitle, author} = book;
	const language = book.language ? `(${book.language})` : ''
	let bookItemClass = "book-item book-item--storaged"
	
	if (isRead) bookItemClass += ' book-item--read';

	const markAsRead = () => {
		const book = localStorage.getItem(id)
		console.log(book)
	}

	return (
		<div className={bookItemClass} id={id}>
			<p className = 'book-item__title'>{`${title} ${language}`}</p>
			<p className = 'book-item__subtitle'>{subtitle}</p>
			<p className = 'book-item__author'>{author}</p>
			<div>
				<Button onClick = {markAsRead}className = 'book-item__button book-item__left-button'>Mark as Read</Button>
				<Button className = 'book-item__button book-item__right-button'>Remove from List</Button>
			</div>
			<span className = 'book-item__badge'>Read</span>
			{isRead && <span className = 'book-item__badge'>Read</span>}
		</div>
	);
};
