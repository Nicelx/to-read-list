import React from 'react';
import './Button.css';

export const Button = props => {
	let cn = 'button'
	if (props.className) cn = `${cn} ${props.className}`

	return (
		<button className = {cn}onClick = {props.onClick}>
			{props.children}
		</button>
	);
};
