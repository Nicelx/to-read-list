import React, { useEffect, useState } from 'react';
import './ToReadListLeft.css';
import {observer} from 'mobx-react-lite';

export const ToReadListLeft = observer(({store}) => {
	const [bookList, setBookList] = useState([]);
	
	const getCoversUrl = (isbn) => `http://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`
	const getPagesUrl = (query, page = '1') => `https://openlibrary.org/search.json?q=${query}&page=${page}`

	// const getBooks = () => {
	// 	fetch(getPagesUrl('king', '1')).then(response => response.json()).then(data => store.updateBooks(data))
	// }

	store.updateBooks([123,32423,2342,2,34234])
	// useEffect(getBooks, [])
	return (
		<div className = 'left-container'>
			<header className = 'search'>
				<input className = 'search__input'type="text" placeholder = 'any book author'/>
				<button className = 'search__button'>Go</button>
				<img src={getCoversUrl('0451526538')} />
			</header>
			<section>
				{store.books && store.books.map(item => (
					<div>
						{item}
						{/* {item.author_name[0]} */}
					</div>
				))}
			</section>
			<footer>

			</footer>
		</div>
	);
});
