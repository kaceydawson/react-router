import React from "react";
import { Link } from "react-router-dom";
import "../../styles/blogstyle.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
import PropTypes from "prop-types";

export const BlogCard = ({ props }) => {
	const { index, title, summary, author, date } = props;
	return (
		<div id={index}>
			<div
				className="jumbotron jumbotron-fluid"
				style={{ backgroundColor: "white" }}>
				<div className="container">
					<div className="img-container float-right" />
					<p className="font-weight-bold">{title}</p>
					<p className="text-muted">{summary}</p>

					<p className="font-weight-normal">{author}</p>
					<p className="text-muted">
						${date}
						star button to fav{" "}
						<Link to="/">
							<FontAwesomeIcon icon="star" />
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

BlogCard.propTypes = {
	props: PropTypes.object.isRequired,
	index: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired
};
