import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import img1 from "./img/img1.jpg";
import {
	NavLink
} from "react-router-dom";



class Business_Case extends Component{
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

				<div className="line"></div>

				<div id="nav">
					<ul>
						<li>婚礼策划<i className="iconfont i1">&#xe6a6;</i></li>
						<li>默认排序<i className="iconfont i3">&#xe6a6;</i></li>
					</ul>
				</div>

				<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>斑马婚礼记《缘》</h3>
						
						<div className="price">
							<p className="p1">斑马婚礼记</p>
							<p className="p2">
								<span className="sale">￥23888.00</span>
								<span className="real">￥32000.00</span>
							</p>
							
						</div>
					</div>
				</div>

				<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>斑马婚礼记《缘》</h3>
						
						<div className="price">
							<p className="p1">斑马婚礼记</p>
							<p className="p2">
								<span className="sale">￥23888.00</span>
								<span className="real">￥32000.00</span>
							</p>
							
						</div>
					</div>
				</div>

				<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>斑马婚礼记《缘》</h3>
						
						<div className="price">
							<p className="p1">斑马婚礼记</p>
							<p className="p2">
								<span className="sale">￥23888.00</span>
								<span className="real">￥32000.00</span>
							</p>
							
						</div>
					</div>
				</div>

				<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>斑马婚礼记《缘》</h3>
						
						<div className="price">
							<p className="p1">斑马婚礼记</p>
							<p className="p2">
								<span className="sale">￥23888.00</span>
								<span className="real">￥32000.00</span>
							</p>
							
						</div>
					</div>
				</div>

				<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>斑马婚礼记《缘》</h3>
						
						<div className="price">
							<p className="p1">斑马婚礼记</p>
							<p className="p2">
								<span className="sale">￥23888.00</span>
								<span className="real">￥32000.00</span>
							</p>
							
						</div>
					</div>
				</div>

				
					
			</div>
		)
	}
}

export default Business_Case;