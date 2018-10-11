import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		//you can't use this whithout super(); cf advanced objects
		this.state = {
			robots: [],
			searchfield: ""
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({ robots: users });
			});
	}

	//old syntax

	//the this does not refer to the App but to the input, thanks to the event in parameter
	//onsearchChange(event){
	//	const filteredRobots = this.state.robots.filter(robots => {
	/*		return robots.name
				.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());*/

	onSearchChange = event => {
		//to change the state always use setState, not state
		this.setState({ searchfield: event.target.value });
	};

	render() {
		//rule of thumbs: Use The Arrow Function
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name
				.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className="tc">
				<h1 className="f2">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;