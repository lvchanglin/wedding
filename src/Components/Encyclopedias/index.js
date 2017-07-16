import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class Encyclopedias extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>

					Encyclopedias
					<section>
					{
						this.props.children
					}
				</section>
			</div>
		)
	}
}

export default Encyclopedias;