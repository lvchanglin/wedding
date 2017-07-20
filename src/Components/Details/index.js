import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class Details extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>

					详情	
					<section>
					{
						this.props.children
					}
				</section>
			</div>
		)
	}
}

export default Details;