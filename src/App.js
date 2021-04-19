import "./App.css";
import { BookInfo } from "./components/BookInfo/BookInfo";
import { ToReadListLeft } from './components/ToReadListLeft/ToReadListLeft';
import { ToReadListRight } from "./components/ToReadListRight/ToReadListRight";
import {booksState} from './store/books';

function App() {
	const {selectedBookId} = booksState
	return (
		<div className="app-container">
			<ToReadListLeft booksState = {booksState}/>
			<BookInfo booksState = {booksState}/>
			<ToReadListRight/>
		</div>
	);
}

export default App;
