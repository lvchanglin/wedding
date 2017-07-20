import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import img1 from "./img/tp.jpg";
import img2 from "./img/1.png";
import axios from "axios";
import {
	NavLink
} from "react-router-dom";



class Business_Case extends Component{
	constructor(props) {
		super(props);
		this.state={
			ledOn:[]
		}
		
	}

	componentDidMount() {
		axios.get("/spider/led3").then(res=>{
			console.log(res.data);
			this.setState({
				ledOn:res.data.works
			})
		})
	}


	render() {
		return (

			<div id="case">
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

			{
				this.state.ledOn.map((item,index)=>
					<div id="con" key={item.id}>
						<img src={item.cover_path}/>
						<div className="text">
							<h3>{item.title}</h3>
							
							<div className="price">
								<p className="p1">{item.merchant.name}</p>
								<p className="p2">
									<span><img src={img2}/></span>
									<span>{item.collectors_count}</span>
								</p>
								
							</div>
						</div>
					</div>
					)
			}

				




			
					
			</div>
		)
	}
}

export default Business_Case;