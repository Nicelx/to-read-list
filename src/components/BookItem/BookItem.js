import React from "react";
import './BookItem.css'

export const BookItem = (props) => {
	const {book, isSelected} = props
	const { id, title, subtitle} = book;
	const language = book.language ? `(${book.language})` : ''
	const bookItemClass = isSelected ? "book-item book-item--selected" : "book-item";


	return (
		<div className={bookItemClass} onClick={props.onClick} id={id}>
			<p className = 'book-item__title'>{`${title} ${language}`}</p>
			<span className = 'book-item__subtitle'>{subtitle}</span>
			{isSelected && <span className = 'book-item__badge'>Pick</span>}
		</div>
	);
};
