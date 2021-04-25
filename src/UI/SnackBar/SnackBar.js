// import React, { createContext, useState } from "react";
// import "./SnackBar.css";

// export const SnackbarContext = createContext(null);

// export const SnackBar = ({ children }) => {
// 	// Current open state
// 	const [open, setOpen] = useState(false);
// 	// Current timeout ID
// 	const [timeoutId, setTimeoutId] = useState(null);
// 	// Snackbar's text
// 	const [text, setText] = useState("");
// 	// Snackbar's duration
// 	const [duration, setDuration] = useState(defaultDuration);
// 	// Snackbar's position
// 	const [position, setPosition] = useState(defaultPosition);
// 	// Custom styles for the snackbar itself
// 	const [customStyles, setCustomStyles] = useState({});
// 	// Custom styles for the close button
// 	const [closeCustomStyles, setCloseCustomStyles] = useState({});

// 	const triggerSnackbar = (text, duration, position, style, closeStyle) => {
// 		setText(text);
// 		setDuration(duration);
// 		setPosition(position);
// 		setCustomStyles(style);
// 		setCloseCustomStyles(closeStyle);
// 		setOpen(true);
// 	};

// 	// Manages all the snackbar's opening process
// 	const openSnackbar = (text, duration, position, style, closeStyle) => {
// 		// Closes the snackbar if it is already open
// 		if (open === true) {
// 			setOpen(false);
// 			setTimeout(() => {
// 				triggerSnackbar(text, duration, position, style, closeStyle);
// 			}, defaultInterval);
// 		} else {
// 			triggerSnackbar(text, duration, position, style, closeStyle);
// 		}
// 	};

// 	// Closes the snackbar just by setting the "open" state to false
// 	const closeSnackbar = () => {
// 		setOpen(false);
// 	};

// 	// Returns the Provider that must wrap the application
// 	return (
// 		<SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
// 			<>
// 				{children}
// 				<div className="snack-bar">wow</div>
// 			</>
// 		</SnackbarContext.Provider>
// 	);
// };
