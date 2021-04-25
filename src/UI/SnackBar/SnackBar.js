import React, { createContext, useState } from "react";
import "./SnackBar.css";

export const SnackbarContext = createContext(null);

export const SnackBar = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState("");
	

	const triggerSnackbar = (text) => {
		setText(text);
		setOpen(true);
	};

	const openSnackbar = (text) => {
		triggerSnackbar(text)
	};

	const closeSnackbar = () => {
		setOpen(false);
	};

	return (
		<SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
			<>
				{children}
				{open && <div className="snack-bar">
						<h1 className = 'snack-bar__text'>{text}</h1>
					</div>}
			</>
		</SnackbarContext.Provider>
	);
};
