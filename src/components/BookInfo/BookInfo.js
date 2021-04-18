import React from 'react';
import './BookInfo.css'

export const BookInfo = () => {
	const mock = {
		title : 'title',
		subtitle: 'subtitle',
		langs : 'ger,rus,eng',
		firstYearPublished: '1930',
		fullText: 'yes',
	}
	const {title, subtitle,langs,firstYearPublished,fullText, yearsPublished} = mock

	return (
		<section>
			<div>
				<h1>{title}</h1>
				<h2>{subtitle}</h2>
			</div>

			<p>
				Languages available: {langs}
				Full text available: {fullText}
				First publish year: {firstYearPublished} 
				Years published: {yearsPublished}
			</p>
			<button>add book to Read List</button>
		</section>
	);
};
