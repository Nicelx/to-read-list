import "./App.css";
import { ToReadListLeft } from './components/ToReadListLeft/ToReadListLeft';
import {BooksState} from './store/books';

const store = new BooksState();

function App() {
	return (
		<div className="app-container">
			<ToReadListLeft store = {store}/>
		</div>
	);
}

export default App;
