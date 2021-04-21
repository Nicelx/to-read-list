const { REACT_APP_SEARCH_URL } = process.env;

export const getPagesUrl = (query, page) => `${REACT_APP_SEARCH_URL}?q=${query}&page=${page}`;

export const getCoversUrl = (isbn) => `http://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`;

export const fetchBooks = async (query, page = "1") => {
	try {
		const response = await fetch(getPagesUrl(query, page));
		if (!response.ok) {
			throw new Error(response.status);
		}
		return await response.json();
	} catch (err) {
		throw new Error(err);
	}
};

export const debounce =  () => {
	let timeout;
	return (f) => {
		clearTimeout(timeout);
		const run = () => {
			timeout = null;
			alert('in run')
			f();
		}
		timeout = setTimeout(run, 1500)

	};
}