import "./App.css";
import { BookInfo } from "./components/BookInfo/BookInfo";
import { ToReadListLeft } from './components/ToReadListLeft/ToReadListLeft';
import { ToReadListRight } from "./components/ToReadListRight/ToReadListRight";
import {booksState} from './store/books';
// import {SnackBar} from './UI/SnackBar/SnackBar';

function App() {
	return (
		<div className="app-container">
			<ToReadListLeft booksState = {booksState}/>
			{/* <SnackBar><BookInfo booksState = {booksState}/></SnackBar> */}
			<BookInfo booksState = {booksState}/>
			<ToReadListRight booksState = {booksState}/>
		</div>
	);
}

export default App;
