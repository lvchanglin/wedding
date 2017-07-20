import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import img1 from "./img/tp.png";
import img2 from "./img/mian.png";
import img3 from "./img/jp.png";
import img4 from "./img/bao.png";
import img5 from "./img/tui.png";
import img6 from "./img/nuo.png";
import img7 from "./img/quan.png";
import img8 from "./img/star.png";
import img9 from "./img/star2.png";
import img10 from "./img/tpt.jpg";
import axios from "axios";
import {
	NavLink
} from "react-router-dom";

 

class Business_Case extends Component{
	constructor(props) {
		super(props);
		this.state={
			ledOne:[],
			ledTwo:[]
		}

		
	}
	componentDidMount(){
		axios.get("/spider/led").then(res=>{
			console.log(res.data);
			this.setState({
				ledOne:res.data.data.normal_merchant.list,
				ledTwo:res.data.data.popular_merchant.list

			})
		})
	}


	render() {
		return (

			<div id="Bone">
				<section>
					{
						this.props.children
					}
				</section>	

				<div id="nav">
					<ul>
						<li>婚礼策划<i className="iconfont i1">&#xe6a6;</i></li>
						<li>全城<i className="iconfont i2">&#xe6a6;</i></li>
						<li>默认排序<i className="iconfont i3">&#xe6a6;</i></li>
						<li>筛选<i className="iconfont i4">&#xe6a6;</i></li>
					</ul>
				</div>

				{
					this.state.ledTwo.map((item,index)=>
						<div id="one" key={item.id}>
							<div className="cont">
								<img src={item.logo_path}/>
								<div className="text">
									<h3>{item.name}</h3>
									<img src={img2}/>
									<ul>
										<li>套餐{item.active_works_pcount}</li>
										<li>案例{item.active_cases_pcount}</li>
										<li>粉丝{item.fans_count}</li>
									</ul>
								</div>
							</div>
							<p><span>到店礼</span>到店可领取 好来屋净水器</p>
							<p className="tui">推广</p>
						</div>



						)
				}

				

				
				<div className="line1"></div>


				{
					this.state.ledOne.map((item,index)=>


						<div id="next" key={item.id}>
							<div className="cont">
								<img src={item.logo_path}/>
								<div className="text">
									<h3 className="hh3">
										<img src={img3}/>
									{item.name}
									</h3>
									
									<div className="star-fans">
										<ul className="star">
											<li><img src={img8} /></li>
											<li><img src={img8} /></li>
											<li><img src={img8} /></li>
											<li><img src={img8} /></li>
											<li><img src={img9} /></li>
										</ul>
										<div className="count">{item.comments_count}条</div>
										<ul className="u1">
										<li><img src={img2} /></li>
										<li><img src={img4} /></li>
										<li><img src={img5} /></li>
										<li><img src={img6} /></li>
										<li><img src={img7} /></li>
									</ul>
									</div>
									<ul className="fans">
											<li>套餐{item.active_works_pcount}</li>
											<li>案例{item.active_cases_pcount}</li>
											<li>粉丝{item.fans_count}</li>
										</ul>
								</div>
							</div>
							<p><span>到店礼</span>到店可领取 好来屋净水器</p>
						</div>
						)
				}


				





			</div>
		)
	}
}

export default Business_Case;