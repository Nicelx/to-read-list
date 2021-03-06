import { BookInfo } from "./components/BookInfo/BookInfo";
import { BookList } from "./components/BookList/BookList";
import { ToReadList } from "./components/ToReadList/ToReadList";
import { booksState } from "./store/books";
import { SnackBar } from "./UI/SnackBar/SnackBar";

import "./App.css";

function App() {
	return (
		<div className="app-container">
			<BookList booksState={booksState} />
			<SnackBar>
				<BookInfo booksState={booksState} />
			</SnackBar>
			<ToReadList booksState={booksState} />
		</div>
	);
}

export default App;
