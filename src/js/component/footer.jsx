import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../styles/footer.scss";

/**
 *  Here I declare my component as an arrow function
 */

export const Footer = () => {
	//I have to loop all the items and convert them into LIs
	const items = menu.map((item, index) => (
		<li className="nav-item" key={index}>
			<a className="nav-link" href={item.url}>
				{item.label}
			</a>
		</li>
	));

	//this methods says how the NavBar should look like in HTML
	return (
		<footer className="footer">
			<div className="container">
				{/* here I pass the array of LIs into the UL */}
				<ul className="nav justify-content-end">{items}</ul>
			</div>
		</footer>
	);
};

// declare a JS array with the menu items that you want

let menu = [
	{ label: "Home", url: "/landing" },
	{ label: "Cart", url: "/cart" },
	{ label: "Product", url: "/product" },
	{ label: "Blog", url: "/blog" }
];
