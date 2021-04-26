import React from "react";
import "./BookItem.css";
import { Button } from "./../../UI/Button/Button";
import { booksState } from "./../../store/books";
import { markAsRead } from "./../../utils/utils";

export const BookItemStoraged = ({ book }) => {
	const { id, title, subtitle, author, isRead } = book;
	const language = book.language ? `(${book.language})` : "";
	let bookItemClass = "book-item book-item--storaged";

	if (isRead) bookItemClass += " book-item--read";

	const markAsReadHandler = () => {
		markAsRead(id, true);
		booksState.updateStorageBooks();
	};

	const unmarkRead = () => {
		markAsRead(id, false);
		booksState.updateStorageBooks();
	};

	const removeBookHandler = () => {
		localStorage.removeItem(id);
		booksState.updateStorageBooks();
	};

	return (
		<div className={bookItemClass} id={id}>
			<p className="book-item__title">{`${title} ${language}`}</p>
			<p className="book-item__subtitle">{subtitle}</p>
			<p className="book-item__author">{author}</p>
			<div>
				<Button
					onClick={isRead ? unmarkRead : markAsReadHandler}
					className="book-item__button book-item__left-button"
				>
					{isRead ? "Unmark" : "Mark as Read"}
				</Button>

				<Button
					onClick={removeBookHandler}
					className="book-item__button book-item__right-button"
				>
					Remove from List
				</Button>
			</div>
			{isRead && <span className="book-item__badge">Read</span>}
		</div>
	);
};
