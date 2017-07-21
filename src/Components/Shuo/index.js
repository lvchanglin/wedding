import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import ReactSwipe from "react-swipe";
import axios from "axios";
import {
	NavLink
} from "react-router-dom";



class Shuo extends Component{
	constructor(props) {
		super(props);
		this.state={
			loopList:[]
		}
		
	}

	componentDidMount() {
		axios.get("/spider/zhanghongruidashazi").then(res=>{
			console.log(res.data);
			this.setState({
				loopList:res.data.data.list
			})
		})
	}


	render() {
		return (

			<div id="ruiapp">

				<div >
				<ul className="ruiheader">
					<li className="iconfont icon-back"  id="ruijiantou"></li>
						<li className="ruihuati">话题</li>
						<li className="ruiwenda">问答</li>
				</ul>
				</div>
					
				<div className="ruibaitiao">

				</div>	


				<div className="ruimokuai1">
					<span>
						<p className="ruipindao">精选频道</p>
						<p className="ruichakan">查看全部</p>
						<p className="iconfont icon-more"  id="ruiyoujian"></p>
					</span>

					<div className="ruilunbo">
						<div className="ruidiyige">
							<img className="ruidiyizhang" src="http://qnm.hunliji.com/FmIKrMXS-mghvDvNUmqUhGLraVTd?imageView2/1/w/172/h/172"/>
							<span>
							<p className="ruiwenzi1">婚纱礼服</p>
							<p className="ruiwenzi2">今日1360</p>
							</span>
						</div>

						<div className="ruidiyige">
							<img className="ruidiyizhang" src="http://qnm.hunliji.com/FvhhF0opvc9TqE-rZH0yF-zG9pAv?imageView2/1/w/172/h/172"/>
							<span>
							<p className="ruiwenzi1">婚庆筹备</p>
							<p className="ruiwenzi2">今日2619</p>
							</span>
						</div>

						<div className="ruidiyige">
							<img className="ruidiyizhang" src="http://qnm.hunliji.com/FqSljGUyRDkoth_8vlbKLQNgeXW4?imageView2/1/w/172/h/172"/>
							<span>
							<p className="ruiwenzi1">淘婚品攻略</p>
							<p className="ruiwenzi2">今日1529</p>
							</span>
						</div>


					</div>
				</div>	


				<div className="ruimokuai2">
					<span>
						<p className="ruipindao">小编精选</p>
						<p className="ruichakan">查看全部</p>
						<p className="iconfont icon-more"  id="ruiyoujian"></p>
					</span>

					<div className="ruilunbo">
						<div className="ruidierge">
							<img className="ruidierzhang" src="http://qnm.hunliji.com/o_1bktmj9q81pj6spnj4619pb12dv8.jpg?imageView2/1/w/288/h/162"/>
							<ul>
							<li className="ruiwenzi3">婚纱买or租？万年难题不妨看看她们是怎么解决的</li>
							<li className="ruiwenzi4">#婚纱礼服 <p className="ruiwenzi5">4519</p></li>
							</ul>
						</div>

						<div className="ruidierge">
							<img className="ruidierzhang" src="http://qnm.hunliji.com/o_1bkog7hu31bem14tk1f81orn73j8.jpg?imageView2/1/w/288/h/162"/>
							<ul>
							<li className="ruiwenzi3">网购婚纱丑还质感差？一定是你错过了这些购物车</li>
							<li className="ruiwenzi4">#婚纱礼服 <p className="ruiwenzi5">4880</p></li>
							</ul>
						</div>



					</div>
				</div>	

				{

					this.state.loopList.map((item,index)=>
						<div>
						<div className="ruimokuai3">
								<p className="ruiwenzi6">{item.entity.title}</p>
								<span className="ruiwenzi7">
								{item.entity.post.message}
								</span>
								<img className="ruitupian1" src={item.entity.author.img}/>
								<img className="ruitupian2" src={item.entity.community_channel.cover_path}/>
								
								<div className="ruidianzan1"> 
								 <img className="ruitupian4" src="http://qnm.hunliji.com/FvhhF0opvc9TqE-rZH0yF-zG9pAv?imageView2/1/w/48/h/48"/>
								 <span className="ruiwenzi8">{item.entity.community_channel.title}</span>
								 <span className="ruiwenzi9 iconfont icon-comments"> {item.entity.post.praised_count}</span>
								 <span className="ruiwenzi10 iconfont icon-good"> undefined</span>
								</div>
						</div>
						</div>



						)
				}






				<section>
					{
						this.props.children
					}
				</section>
				
			</div>
		)
	}
}

export default Shuo;