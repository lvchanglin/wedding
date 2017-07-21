import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class App extends Component{
	constructor(props) {
		super(props);

	}


	render() {
		return (
			<div id="app">

				<section>
					{
						this.props.children
					}
				</section>
			</div>
		)
	}
}

export default App;
