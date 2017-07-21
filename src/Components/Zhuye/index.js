import React, {
	Component
} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";
import ReactSwipe from 'react-swipe';
import axios from 'axios';



class Zhuye extends Component {
	constructor(props) {
		super(props);
		this.state = {
			zxyPort: [],
			zxyFuwu: [],
			zxyCaigou: [],
			zxyDemo: [],
			zxyVideo: [],
			zxyBaike: []
		}

	}
	componentDidMount() {
		axios.get("/api/home/zxyPort").then(res => {
			console.log(res)
			this.setState({
				zxyPort: res.data.data.list
			})

		})
		axios.get("/api/home/zxyFuwu").then(res => {
			console.log(res)
			this.setState({
				zxyFuwu: res.data.data
			})

		})
		axios.get("/api/home/zxyCaigou").then(res => {
			console.log(res)
			this.setState({
				zxyCaigou: res.data.data.list
			})

		})
		axios.get("/api/home/zxyDemo").then(res => {
			console.log(res)
			this.setState({
				zxyDemo: res.data.data
			})

		})
		axios.get("/api/home/zxyVideo").then(res => {
			console.log(res)
			this.setState({
				zxyVideo: res.data.data.list
			})

		})
		axios.get("/api/home/zxyBaike").then(res => {
			console.log(res)
			this.setState({
				zxyBaike: res.data.data.list
			})

		})


	}

	render() {
		return (

			<div>
			<div id="bingBody">
				
				<header>
					<div id="header_body">
						<div id="header_left">全国
							<i className="iconfont icon-moreunfold"></i>
						</div>
						<div id="header_search">搜索商家、套餐、婚品
							<img src="http://qnm.hunliji.com/o_1adujps5n1k67e941pal7lbt807.png" className="search"/>
						</div>
							<NavLink to="" activeClassName="bgcolor">

							<div id="header_self">
								<img src="http://qnm.hunliji.com/o_1ad87kvsc5itf12a631pikgdsh.png" className="self"/>
							</div>
							</NavLink>




							<NavLink to="/register" activeClassName="bgcolor">

							<div id="header_shop">
								<img src="http://qnm.hunliji.com/o_1ad87koeiml078q1dgq1acqt5ic.png" className="shop"/>
							</div>
							</NavLink>


					</div>
				</header>
					{/*幻灯片*/}
					<ReactSwipe className="header_nav carousel" swipeOptions={{continuous: true,auto:1000}}>
		                <div><img src="http://qnm.hunliji.com/Fu7PR2Nve8cyAuBsuPDb0SxNP4_D?imageView2/1/w/640/h/320" /></div>
		                <div><img src="http://qnm.hunliji.com/Fvzft0U9h2ooGCZIBoO9TV_3vCXy?imageView2/1/w/640/h/320"/></div>
		                <div><img src="http://qnm.hunliji.com/FuPkmZ0dcjviG-vVPu80BfnpHSi2?imageView2/1/w/640/h/320" /></div>
					</ReactSwipe>

					



				<div id="background_color">
						<ul id="header_btn">
							<NavLink to="/option" activeClassName="bgcolor">
								<li className="type">
								<img src="http://qnm.hunliji.com/o_1ad8epbnuu8412tf3t12h3csqm.png" className="type_img"/>
								<h5>全部分类</h5>
							</li>
							</NavLink>

							<NavLink to="/business" activeClassName="bgcolor">
								
							<li className="merchant">
								<img src="http://qnm.hunliji.com/o_1ad8epi0f12uh16a11hj41se1407r.png" alt=""/>
								<h5>找商家</h5>
							</li>
							</NavLink>

							<NavLink to="/shuo" activeClassName="bgcolor">
								<li className="bridesay">
								<img src="http://qnm.hunliji.com/o_1ad8eprme1em61mbggc21rdd1hm810.png" alt=""/>
								<h5>新娘说</h5>
							</li>
							</NavLink>

							<NavLink to="/encyclopedias" activeClassName="bgcolor">
								<li className="baike">
								<img src="http://qnm.hunliji.com/o_1ad8eq1os1k4u4qd14jq16181fv915.png" alt=""/>
								<h5>结婚百科</h5>
							</li>
							</NavLink>

							
							
							
						</ul>
						<div id="header_banner">
							<div className="banner_left">
								<img src="http://qnm.hunliji.com/o_1ad9vj41g1b5d1npfdh111clcna7.png" alt=""/>
							</div>
							<div className="banner_ringht">
								<img src="http://qnm.hunliji.com/o_1ad9vjed99c517e0169v1175a7sc.png" alt=""/>
							</div>
						</div>
						<div id="header_sale">
							<div className="sale_title"><span>超值套餐</span><a>更多&gt;</a></div>
										{
											this.state.zxyFuwu.map((item,index)=>

											<div>

												<dl className="sale_nav">
													<dt  className="sale_nav_item">
														
															<span className="sale_nav_span">婚纱摄影</span>
															<img src={item.entity.cover_path} key = {item.entity.id} />
														
													</dt>
													<dd className="sale_nav_text">
														<span className="sale_nav_title">{item.entity.title}</span>
														<span className="sale_nav_price"><i>￥</i>{item.entity.sale_price}</span>
														<span className="sale_nav_old_price"><i>￥</i>{item.entity.market_price}</span>
														<span className="sale_nav_star">
															<div className="sale_nav_star_div1 iconfont icon-favorite " >&nbsp;</div>
															<div className="sale_nav_star_div">{item.entity.collectors_count}</div>
														</span>
													</dd>
												</dl>

											</div>


												)
										}

						</div>
						<div id="header_demo">
							<div className="demo_title"><span>精彩案例</span><a>更多&gt;</a></div>






		<div id="zzzzzzzzzzzzz">
						<div id="demo_border">

							{
								this.state.zxyDemo.map((item,index)=>
							<div>
								
									
									<div className="demo_body">
																	
										<dl className="demo_nav">
											<dt  className="demo_nav_item">
													<img src={item.entity.cover_path} key = {item.entity.id} className="demo_nav_img" />
											</dt>
											<dd className="demo_nav_text">
												<span className="demo_nav_title">{item.entity.title}</span>
											</dd>
										</dl>
									</div>

								</div>
								)
							}
						</div>
					</div>






						
							



							



















						</div>
						<div id="header_wedding">
							<div className="wedding_title"><span>婚品采购</span></div>

							{

							this.state.zxyCaigou.map((item,index)=>
								<div>
											<div className="wedding_nav">
											<a href="#"><img src={item.cover_image} key = {item.id}/>
											<h4>{item.name}</h4></a>
									
									</div>

								</div>
								)
							}
						</div>
						<div id="header_wedding_item">
								{
									this.state.zxyPort.map((item,index)=>
										<div>
										<div>
											<a href="#" className="header_wedding_a">
											<img src={item.entity_object.cover_image.img}/>
											<h4>{item.entity_object.title}</h4>
											<div id="wedding_text">
												<span className="iconfont icon-jifen"></span>
												<span className="wedding_item_mn">{item.entity_object.show_price}</span>
												<div className="wedding_right">
												<span className="iconfont icon-favorite"></span>
												<spqn className="wedding_item_num">{item.entity_object.collectors_count}</spqn>	
												</div>
											</div>
											</a>
										</div>	
										</div>
										)
								}
						
						</div>
						<div id="wedding_more">
							<a href="">查看更多精选婚品<span className="iconfont icon-more"></span></a>
						</div>
						<div id="beautiful_image">
							<div className="beautiful_image_title"><span>婚礼美图</span><a>更多&gt;</a></div>
							<div className="beautiful_image_but">
								<div className="beautiful_image_left">
									<img src="http://qnm.hunliji.com/o_1bl5qsfpanl1l7273gljc17q01d.jpg?imageView2/1/w/400/h/400" />
								</div>
								<div className="beautiful_image_right"><img src="http://qnm.hunliji.com/o_1bl5qsfpa1gqghit13ud1g8870g1e.jpg?imageView2/1/w/200/h/200"/></div>
								
								<div className="beautiful_image_right2"><img src="http://qnm.hunliji.com/o_1bl5qsfpa8d81fdmf1f10mc1n9a1f.jpg?imageView2/1/w/200/h/200"/></div>

								
							</div>
								<div id="beautiful_image_btnn">
								<div id="beautiful_image_btn" className="swiper-wrapper">
									<a href="">韩式</a>
									<a href="">小清新</a>
									<a href="">海景</a>
									<a href="">森系</a>
									<a href="">中式</a>
									<a href="">迎宾纱</a>
								</div>
								
							</div>









					<div id="header_video_new">
					{		

							this.state.zxyVideo.map((item,index)=>
							<div>
								<div className="header_video">
								<ul>
									<li className="header_video1">
									<a href={item.item[0].media_path} className="header_video1">
										<img src="http://qnm.hunliji.com/bLRuhXGuv29K4zOuKdjdlZJ_9WE=/lh5B36MyVY61V_Iqwvp7I_jpLE6g?vframe/jpg/offset/3|imageView2/1/w/284/h/160"/>
										<p><i className="iconfont icon-iconfontplay2"></i>{item.title}</p>
									</a>
									</li>
									
								</ul>
								</div>
							</div>



							)


					}
					</div>




					<div id="header_baike">
						<div id="baike_title">
							<span>婚礼百科</span><a>更多&gt;</a>
						</div>

							{
								this.state.zxyBaike.map((item,index)=>

								<div>
									<div className="baike_connet">
										<dl>
											
											<dt><img src={item.cover_path}/></dt>
											<dd>
												<h3>{item.title}</h3>
												<p>{item.description}</p>
											</dd>
										</dl>

									</div>

								</div>
								)
						

							}




					</div>	
					






							




						

						</div>
					</div> 
				</div>
		</div>



		)
	}
}

export default Zhuye;