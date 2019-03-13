import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Cart extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card shopping-cart">
					<div className="card-header bg-dark text-light float-right ">
						<i
							className="fa fa-shopping-cart"
							aria-hidden="true"
							margin-
						/>

						<a
							id="bttnCtxt"
							href="http://google.com"
							className="btn btn-outline-info btn-sm pull-right">
							Continue shopping
						</a>
						<div /*className="clearfix"*/ />
					</div>
					<div className="cart-body">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.cartStore.map((item, index) => {
									return (
										<div key={item.toString()}>
											<div className="row">
												<div className="col-12 col-sm-12 col-md-2 text-center">
													<img
														className="img-responsive"
														src={item.productImage}
														alt="prewiew"
														width="120"
														height="80"
													/>
												</div>
												<div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
													<h4 className="product-name">
														<strong>
															<Link to="/product">
																{
																	item.productName
																}
															</Link>
														</strong>
													</h4>
													<h4>
														<small>
															{
																item.productDescription
															}
														</small>
													</h4>
												</div>
												<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
													<div
														className="col-3 col-sm-3 col-md-6 text-md-right"
														style={{
															paddingTop: "5px"
														}}>
														<h6>
															<strong>
																{
																	item.productPrice
																}{" "}
																<span className="text-muted">
																	x
																</span>
															</strong>
														</h6>
													</div>
													<div className="col-4 col-sm-4 col-md-4">
														<div className="quantity">
															<input
																type="button"
																value="+"
																className="plus"
															/>
															<input
																type="number"
																step="1"
																max="99"
																min="1"
																value="1"
																title="Qty"
																className="qty"
																size="4"
															/>
															<input
																type="button"
																value="-"
																className="minus"
															/>
														</div>
													</div>
													<div className="col-2 col-sm-2 col-md-2 text-right">
														<button
															type="button"
															className="btn btn-outline-danger btn-xs">
															<i
																className="fa fa-trash"
																aria-hidden="true"
															/>
														</button>
													</div>
												</div>
											</div>
											<hr />
										</div>
									);
								});
							}}
						</Context.Consumer>
						<div className="pull-right">
							<a
								id="updateCart"
								href=""
								className="btn btn-outline-secondary pull-right">
								Update shopping cart
							</a>
						</div>
					</div>
					<div className="card-footer">
						<div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
							<div className="row">
								<div className="col-6">
									<input
										type="text"
										className="form-control"
										placeholder="cupon code"
									/>
								</div>
								<div className="col-6">
									<input
										type="submit"
										className="btn btn-default"
										value="Use cupon"
									/>
								</div>
							</div>
						</div>

						<div className="pull-right" style={{ margin: "10px" }}>
							<a href="" className="btn btn-success pull-right">
								Checkout
							</a>
							<div
								className="pull-right"
								style={{ margin: "5px" }}>
								Total price: <b>50.00€</b>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
