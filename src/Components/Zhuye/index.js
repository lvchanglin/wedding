import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class Zhuye extends Component{
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
				<ul>
					<li>
						<NavLink to="Option">全部分类</NavLink>
					</li>
					<li>
						<NavLink to="Business">商家</NavLink>
					</li>
					<li>
						<NavLink to="shuo">新娘说</NavLink>
					</li>
					<li>
						<NavLink to="Encyclopedias">百科</NavLink>
					</li>
					
					
				</ul>
				
			</div>
		)
	}
}

export default Zhuye;