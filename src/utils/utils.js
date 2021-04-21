const boolIntoYesOrNo = (bool) => (bool ? "yes" : "no");

const normalizeKey = (key) => `ToReadList-${key.split("/").pop()}`;

export const checkPrefix = (key) => /ToReadList-/.test(key);

export const normalizeBooks = (docs) =>
	docs.map((book) => {
		const {
			title,
			subtitle,
			language,
			has_fulltext,
			author_name,
			key,
			first_publish_year,
			publish_year,
		} = book;
		const normalizeBooks = {};

		normalizeBooks.title = title || "no title";
		normalizeBooks.subtitle = subtitle || "";
		normalizeBooks.language = language ? language.join(", ") : "";
		normalizeBooks.isFullTextAvailable = boolIntoYesOrNo(has_fulltext);
		normalizeBooks.author = author_name || "no Author";
		normalizeBooks.id = normalizeKey(key);
		normalizeBooks.isRead = false;
		normalizeBooks.publishYear = publish_year ? publish_year.join(", ") : "unknown";
		normalizeBooks.firstPublishYear = first_publish_year
			? first_publish_year
			: publish_year
			? publish_year[0]
			: "unknown";

		return normalizeBooks;
	});

export const readLocalStorage = (key) => {
	if (typeof key === 'string') return JSON.parse(localStorage.getItem(key)) 
	else console.error('key not found')
}

export const setLocalStorage = (key, value) => {
	if (typeof key !== 'string') return
	if (typeof value === 'object') localStorage.setItem(key, JSON.stringify(value)) 
	if (typeof value === 'string') localStorage.setItem(key, value);
}

const noReadFirsSorting = (a,b) => {
	if (a.isRead < b.isRead) return -1
	if (a.isRead > b.isRead) return 1
	return 0 
}
export const loadFromLocalStorage = () =>
	Object.keys(localStorage)
		.filter(checkPrefix)
		.map(readLocalStorage)
		.sort(noReadFirsSorting)


export const markAsRead = (id) => {
	const book = readLocalStorage(id) 
	book.isRead = true
	setLocalStorage(id, book)
}
