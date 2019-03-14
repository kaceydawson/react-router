import React from "react";
import { Link } from "react-router-dom";
import "../../styles/blogstyle.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
import PropTypes from "prop-types";

export default function BlogCard(title, summary, author, date) {
	return (
		<div>
			<div
				className="jumbotron jumbotron-fluid"
				style={{ backgroundColor: "white" }}>
				<div className="container">
					<div className="img-container float-right" />
					<p className="font-weight-bold">#LearnToCode</p>
					<p className="text-muted">
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent.
					</p>

					<p className="font-weight-normal">Author name</p>
					<p className="text-muted">
						Publish Date star button to fav{" "}
						<Link to="/">
							<FontAwesomeIcon icon="star" />
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

BlogCard.proptypes = {
	title: PropTypes.string,
	summary: PropTypes.string,
	author: PropTypes.string,
	date: PropTypes.string
};
