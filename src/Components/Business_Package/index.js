import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class Business_Package extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>

				<section>
					{
						this.props.children
					}
				</section>	
			</div>
		)
	}
}

export default Business_Package;