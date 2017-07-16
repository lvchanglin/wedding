import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class Option extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>

					Option
					<section>
					{
						this.props.children
					}
				</section>
			</div>
		)
	}
}

export default Option;