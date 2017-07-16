import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class Business extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (
				<div id="buse">
					<ul >
						<li>
							<NavLink to="/business/business_One" activeClassName="bgcolor">商家</NavLink>
						</li>
						<li>
							<NavLink to="/business/business_Package" activeClassName="bgcolor">套餐</NavLink>
						</li>
						<li>
							<NavLink to="/business/business_Case" activeClassName="bgcolor">案例</NavLink>
						</li>
					</ul>
				<section>
					{
						this.props.children
					}
				</section>
				</div>	

		)
	}
}

export default Business;