import React from "react";
//import { Link } from "react-router-dom";
import BlogCard from "../component/blogcards.jsx";
import data from "../store/store.js";

export class blogConstruct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			properties: data.store.blogInfo,
			blogPost: data.store.blogInfo[0]
		};
		window.onload = console.log(this.state);
	}
	render() {
		const { properties, blogPost } = this.state;
		return (
			<div>
				{properties.map(blogPost => (
					<BlogCard key={blogPost.blogTitle} blogPost={blogPost} />
				))}
			</div>
		);
	}
}

// export class Blog extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<div className="jumbotron jumbotron-fluid text-center">
// 					<div className="container">
// 						<h1 className="display-4">#LearnToCode</h1>
// 						<p className="lead">
// 							This is a modified jumbotron that occupies the
// 							entire horizontal space of its parent.
// 						</p>
// 					</div>
// 				</div>
// 				<div>
// 					<BlogCard />
// 					<BlogCard />
// 					<BlogCard />
// 					<BlogCard />
// 				</div>
// 			</div>
// 		);
// 	}
// }
