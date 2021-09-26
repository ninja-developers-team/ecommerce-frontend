import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import ShopingCard from "./Component/ShopingCard";

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL
export class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardList: [],
		};
	}
	componentDidMount = async () => {
		axios.get(`http://localhost:8181/getCart?email=sajamalkawi95@gmail.com`)
			.then((res) => {
				this.setState({ cardList: res.data });
				console.log(res.data)
			}, () => { console.log(this.state.cardList) })
	};
	render() {
		const { user, isAuthenticated } = this.props.auth0;
		return (
			<>
				{isAuthenticated && (
					<div className="row profileCOntainer">
						<div class="col container d-flex justify-content-lift align-items-center">
							<div class="card">
								<div class="upper">
									{" "}
									<img
										src="https://i.imgur.com/Qtrsrk5.jpg"
										className="img-fluid"
										alt="..."
									/>{" "}
								</div>
								<div class="user text-center">
									<div class="profile">
										{" "}
										<img
											src={user.picture}
											alt={user.name}
											className="rounded-circle"
											width="100"
										/>{" "}
									</div>
								</div>
								<div class="mt-5 text-center">
									<h4 class="mb-0">{user.name}</h4>
									<div className="row ">
										<b class="col"> Email</b>{" "}
										<span class="col text-muted d-block mb-2">
											{user.email}
										</span>
									</div>
									<div className="row">
										<b class="col"> username</b>{" "}
										<span class="col text-muted d-block mb-2">
											@{user.nickname}
										</span>
									</div>
								</div>
							</div>
						</div>
						<div class="shopping-cart">
							<div class="title">
								Shopping Bag
							</div>
							{this.state.cardList.map(
								item => <ShopingCard item={item} />
							)
							}
						</div>
					</div>
				)}
			</>
		);
	}
}
export default withAuth0(Profile);
