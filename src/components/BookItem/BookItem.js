import React from "react";
import { normalizeKey } from './../../utils/utils';

export const BookItem = (props) => {
	const { key, title, language, subtitle } = props.book;
	return (
		<div id={normalizeKey(key)}>
			<span>{`${title} ${language && '(' + language + ')'}`}</span>
			<span>{subtitle && subtitle}</span>
		</div>
	);
};
