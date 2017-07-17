

















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
			<div>
				<div id="buse">
						<a href="#"><i className="iconfont icon-back"></i></a>
						<ul >
							<li>
							<NavLink to="/business/business_One" activeClassName="bgcolor"><a>商家</a></NavLink>
							</li>
							<li>
							<NavLink to="/business/business_Package" activeClassName="bgcolor"><a>套餐</a></NavLink>
							</li>
							<li>
							<NavLink to="/business/business_Case" activeClassName="bgcolor"><a>案例</a></NavLink>
							</li>
						</ul>
						<a href="#"><img src="src/img/house.png"/></a>
					</div>
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