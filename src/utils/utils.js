const boolIntoYesOrNo = (bool) => (bool ? "yes" : "no");

const normalizeKey = (key) => `ToReadList-${key.split("/").pop()}`;

export const checkPrefix = (key) => /ToReadList-/.test(key)

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
		normalizeBooks.publishYear = publish_year ? publish_year.join(", ") : "unknown";
		normalizeBooks.firstPublishYear = first_publish_year ? first_publish_year : publish_year ? publish_year[0] : 'unknown'

		return normalizeBooks;
	});

export const getPagesUrl = (query, page = "1") =>
	`https://openlibrary.org/search.json?q=${query}&page=${page}`;

export const getCoversUrl = (isbn) => `http://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`;

