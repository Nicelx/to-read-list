import React from "react";
import './BookItem.css'

export const BookItem = (props) => {
	const { id, title, subtitle} = props.book;
	const language = props.book.language ? `(${props.book.language})` : ''
	const bookItemClass = props.isSelected ? "book-item book-item--selected" : "book-item";
	return (
		<div className={bookItemClass} onClick={props.onClick} id={id}>
			<p className = 'book-item__title'>{`${title} ${language}`}</p>
			<span className = 'book-item__subtitle'>{subtitle}</span>
		</div>
	);
};
