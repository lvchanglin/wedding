import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class List extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>

					列表	
					<section>
					{
						this.props.children
					}
				</section>
			</div>
		)
	}
}

export default List;