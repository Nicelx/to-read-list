const { REACT_APP_SEARCH_URL } = process.env;

export const getPagesUrl = (query, page) => `${REACT_APP_SEARCH_URL}?q=${query}&page=${page}`;
