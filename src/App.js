import React from "react";
import Main from "./Screens/Main";
import Header from "./Component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Login from "./Login";
import Profile from "./Screens/Profile";
import Jewelery from "./Screens/Showproduct/Jewelery";
import WomenClothing from "./Screens/Showproduct/WomenClothing";
import MenClothing from "./Screens/Showproduct/MenClothing";
import MainGames from "./Component/MainGames";
import Electronics from "./Screens/Showproduct/Electronics";
import "./style.css";
import Checkout from "./Screens/Component/Checkout";
class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							{this.props.auth0.isAuthenticated ? <Main /> : <Login />}
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/game">
							<MainGames />
						</Route>
						<Route exact path="/clothing1">
							<WomenClothing />
						</Route>
						<Route exact path="/jewelery">
							<Jewelery />
						</Route>
						<Route exact path="/electronics">
							<Electronics />
						</Route>
						<Route exact path="/clothing2">
							<MenClothing />
						</Route>
                        <Route exact path="/Checkout">
                               <Checkout/>
						</Route>
					</Switch>
					<Footer />
				</Router>
			</>
		);
	}
}
export default withAuth0(App);
