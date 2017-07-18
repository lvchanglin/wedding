import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import img1 from "./img/tp.jpg";
import img2 from "./img/1.png";
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

				<div id="nav">
					<ul>
						<li>婚礼策划<i className="iconfont i1">&#xe6a6;</i></li>
						<li>默认排序<i className="iconfont i3">&#xe6a6;</i></li>
					</ul>
				</div>

				<div className="line"></div>

			<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>IRIS-weddig丨法式福楼丨日式樱花主题</h3>
						
						<div className="price">
							<p className="p1">IRIS独立婚礼策划团队</p>
							<p className="p2">
								<span><img src={img2}/></span>
								<span>7</span>
							</p>
							
						</div>
					</div>
				</div>

				<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>IRIS-weddig丨法式福楼丨日式樱花主题</h3>
						
						<div className="price">
							<p className="p1">IRIS独立婚礼策划团队</p>
							<p className="p2">
								<span><img src={img2}/></span>
								<span>7</span>
							</p>
							
						</div>
					</div>
				</div>

				<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>IRIS-weddig丨法式福楼丨日式樱花主题</h3>
						
						<div className="price">
							<p className="p1">IRIS独立婚礼策划团队</p>
							<p className="p2">
								<span><img src={img2}/></span>
								<span>7</span>
							</p>
							
						</div>
					</div>
				</div>

				<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>IRIS-weddig丨法式福楼丨日式樱花主题</h3>
						
						<div className="price">
							<p className="p1">IRIS独立婚礼策划团队</p>
							<p className="p2">
								<span><img src={img2}/></span>
								<span>7</span>
							</p>
							
						</div>
					</div>
				</div>

				<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>IRIS-weddig丨法式福楼丨日式樱花主题</h3>
						
						<div className="price">
							<p className="p1">IRIS独立婚礼策划团队</p>
							<p className="p2">
								<span><img src={img2}/></span>
								<span>7</span>
							</p>
							
						</div>
					</div>
				</div>

				<div id="con">
					<img src={img1}/>
					<div className="text">
						<h3>IRIS-weddig丨法式福楼丨日式樱花主题</h3>
						
						<div className="price">
							<p className="p1">IRIS独立婚礼策划团队</p>
							<p className="p2">
								<span><img src={img2}/></span>
								<span>7</span>
							</p>
							
						</div>
					</div>
				</div>





			
					
			</div>
		)
	}
}

export default Business_Case;