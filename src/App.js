import "./App.css";
import { BookInfo } from "./components/BookInfo/BookInfo";
import { ToReadListLeft } from './components/ToReadListLeft/ToReadListLeft';
import {booksState} from './store/books';

function App() {
	const {selectedBookId} = booksState
	return (
		<div className="app-container">
			<ToReadListLeft booksState = {booksState}/>
			<BookInfo selectedBook = {booksState.books[selectedBookId]}/>
		</div>
	);
}

export default App;
