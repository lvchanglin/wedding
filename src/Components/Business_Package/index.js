import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import img1 from "./img/img1.jpg";
import axios from "axios";
import {
	NavLink
} from "react-router-dom";



class Business_Case extends Component{
	constructor(props) {
		super(props);
		this.state={
			ledOne:[]
		}
		
	}

	componentDidMount(){
		axios.get("/spider/led2").then(res=>{
			console.log(res.data.works);
			this.setState({
				ledOne:res.data.works
			})
		})
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

				{
					this.state.ledOne.map((item,index)=>
						<div id="con" key={item.id}>
							<img src={item.cover_path}/>
							<div className="text">
								<h3>{item.title}</h3>
								
								<div className="price">
									<p className="p1">{item.merchant.name}</p>
									<p className="p2">
										<span className="sale">￥{item.actual_price}</span>
										<span className="real">￥{item.market_price}</span>
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