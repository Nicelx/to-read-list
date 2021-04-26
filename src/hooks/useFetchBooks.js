import { useState } from "react";
import { getPagesUrl } from "../utils/api";
import { normalizeBooks } from "../utils/utils";
import { booksState } from "./../store/books";

export const useFetchBooks = () => {
	const { updateBooks, books } = booksState;

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [found, setFound] = useState(0);
	const [cacheUrl, setCacheUrl] = useState("");

	const handleJson = (json, page) => {
		if (page === 1) {
			setFound(json.numFound);
			updateBooks(normalizeBooks(json.docs));
		} else updateBooks([...books, ...normalizeBooks(json.docs)]);
	};

	const fetchBooks = async (query, page = 1) => {
		const URL = getPagesUrl(query, page);

		if (query === "" || cacheUrl === URL) return;

		setIsLoading(true);
		try {
			const response = await fetch(URL);
			if (response.ok) {
				const json = await response.json();
				handleJson(json, page);
				setCacheUrl(URL);
			} else {
				setIsError(true);
			}
		} catch (error) {
			console.error(`Request failed with error`, error);
			setIsError(true);
		} finally {
			setIsLoading(false);
			!isLoaded && setIsLoaded(true);
		}
	};

	return { isLoading, isLoaded, isError, found, fetchBooks, setFound };
};
