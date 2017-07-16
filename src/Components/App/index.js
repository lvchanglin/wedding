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
				<div id="header">
					<span>全国</span>
					<input placeholder="搜索商家.套餐.精品"/>
					<span>
						<i className="iconfont icon-cart"></i>
					</span>
					<span>
						<i className="iconfont icon-account"></i>
					</span>
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

export default App;