import React, {
	Component
} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class Zhuye extends Component {
	constructor(props) {
		super(props);

	}


	render() {
			return (

					<div>
				<header>
					<div id="header_body">
						<div id="header_left">全国
							<div>

							</div>
						</div>
						<div id="header_search">搜索商家、套餐、婚品
							<img src="http://qnm.hunliji.com/o_1adujps5n1k67e941pal7lbt807.png" className="search"/>
						</div>
							<div id="header_self">
								<img src="http://qnm.hunliji.com/o_1ad87kvsc5itf12a631pikgdsh.png" className="self"/>
							</div>
							<div id="header_shop">
								<img src="http://qnm.hunliji.com/o_1ad87koeiml078q1dgq1acqt5ic.png" className="shop"/>
							</div>
					</div>
				</header>
					<div id="header_nav">
						<img src="http://qnm.hunliji.com/Fu7PR2Nve8cyAuBsuPDb0SxNP4_D?imageView2/1/w/640/h/320" className="nav"/>
					</div>
				<div id="background_color">
						<ul id="header_btn">
							<li className="type">
								<img src="http://qnm.hunliji.com/o_1ad8epbnuu8412tf3t12h3csqm.png" className="type_img"/>
								<h5>全部分类</h5>
							</li>
							<li className="merchant">
								<img src="http://qnm.hunliji.com/o_1ad8epi0f12uh16a11hj41se1407r.png" alt=""/>
								<h5>找商家</h5>
							</li>
							<li className="bridesay">
								<img src="http://qnm.hunliji.com/o_1ad8eprme1em61mbggc21rdd1hm810.png" alt=""/>
								<h5>新娘说</h5>
							</li>
							<li className="baike">
								<img src="http://qnm.hunliji.com/o_1ad8eq1os1k4u4qd14jq16181fv915.png" alt=""/>
								<h5>结婚百科</h5>
							</li>
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
							<dl className="sale_nav">
								<dt  className="sale_nav_item">
									
										<span className="sale_nav_span">婚纱摄影</span>
										<img src="http://qnm.hunliji.com/o_1b16emnvvcpq58hc0ef8l1dc619.jpg?imageView2/1/w/232/h/148" className="sale_nav_img" />
									
								</dt>
								<dd className="sale_nav_text">
									<span className="sale_nav_title">【厦门国色佳人】浪漫旅拍 定格属于你的美好</span>
									<span className="sale_nav_price">￥4999</span>
									<span className="sale_nav_old_price">￥14888</span>
									<span className="sale_nav_star">
										<div className="sale_nav_star_div1 iconfont icon-favorite " >&nbsp;</div>
										<div className="sale_nav_star_div">487</div>
									</span>
								</dd>
							</dl>
						</div>
						<div id="header_demo">
							<div className="demo_title"><span>精彩案例</span><a>更多&gt;</a></div>
							<dl className="demo_nav">
								<dt  className="demo_nav_item">
										<img src="http://qnm.hunliji.com/B47D7C3D84A817F7AF49628D7A3F12F6?imageView2/1/w/266/h/170" className="demo_nav_img" />
									
								</dt>
								<dd className="demo_nav_text">
									<span className="demo_nav_title">【厦门国色佳人】浪漫旅拍 定格属于你的美好</span>
								</dd>
							</dl>
						</div>
						<div id="header_wedding">
							<div className="wedding_title"><span>婚品采购</span></div>
							<div className="wedding_nav">
								<a href="#"><img src="http://qnm.hunliji.com/o_1bgfo2eeabt01mmrrnmadg1kvsl.png" alt=""/>
								<h4>婚宴用品</h4></a>
								<a href="#"><img src="http://qnm.hunliji.com/o_1b3f25ectftp5dq1sg81e0slre7.png" alt=""/>
								<h4>钻石珠宝</h4></a>
								<a href="#"><img src="http://qnm.hunliji.com/o_1bgfubmla1u3r1n431ihn18cf1s9f9.png" alt=""/>
								<h4>婚礼百货</h4></a>
								
								<a href="#"><img src="http://qnm.hunliji.com/o_1b8tjuel71agb1t971upi1nh1dpde.png" alt=""/>
								<h4>喜糖喜酒</h4></a>
								<a href="#"><img src="http://qnm.hunliji.com/o_1b3f250qcq941hsn1qfmsbh170t7.png" alt=""/>
								<h4>内衣胸贴</h4></a>
								<a href="#"><img src="http://qnm.hunliji.com/o_1b8tjuel71ala1e9u166s89915m4f.png" alt=""/>
								<h4>饰品配饰</h4></a>
								<a href="#"><img src="http://qnm.hunliji.com/o_1b8tjuel71gg1mth1lbf1dur1m9ig.png" alt=""/>
								<h4>婚鞋箱包</h4></a>
								<a href="#"><img src="http://qnm.hunliji.com/o_1b721dqu01hudvif1dtt18151rdc7.png" alt=""/>
								<h4>婚房布置</h4></a>
								<a href="#"><img src="http://qnm.hunliji.com/o_1bggcq9sp7cj8h4l0f8ih12pd6r.png" alt=""/>
								<h4></h4></a>
								<a href="#"><img src="http://qnm.hunliji.com/o_1b3f22phrhg16dbq351navgmpc.png" alt=""/>
								<h4>婚纱礼服</h4></a>
							</div>
						</div>
						<div id="header_wedding_item">
								<a href="#" className="header_wedding_a">
									<img src="http://qnm.hunliji.com/o_1bca4d63p471cgf1n23140shdkh.jpg?imageView2/1/w/300/h/300" />
									<h4>2017结婚新款酒红色短款修身显瘦韩式中袖晚礼服女</h4>
									<div id="wedding_text">
									<span className="iconfont icon-jifen"></span>
									<span className="wedding_item_mn">268.00</span>
									<div className="wedding_right">
									<span className="iconfont icon-favorite"></span>
									<spqn className="wedding_item_num">487</spqn>	
									</div>
									
									</div>
								</a>
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
								<div className="beautiful_image_right"><img src="http://qnm.hunliji.com/o_1bl5qsfpanl1l7273gljc17q01d.jpg?imageView2/1/w/400/h/400"/></div>
								
								<div className="beautiful_image_right2"><img src="http://qnm.hunliji.com/o_1bl5qsfpanl1l7273gljc17q01d.jpg?imageView2/1/w/400/h/400"/></div>

								
							</div>
								<div id="beautiful_image_btnn">
								<div id="beautiful_image_btn">
									<a href="">韩式</a>
									<a href="">小清新</a>
									<a href="">海景</a>
									<a href="">森系</a>
									<a href="">中式</a>
									<a href="">迎宾纱</a>
								</div>
								
							</div>
							<div id="header_video">
								<ul>
									<li className="k">
									<a href="" className="header_video1">
										<img src="http://qnm.hunliji.com/bLRuhXGuv29K4zOuKdjdlZJ_9WE=/lqlkGiHppwT5ikkYZfVr-tGhhR33?vframe/jpg/offset/3|imageView2/1/w/284/h/160" alt=""/>
										<p>［喜鲤婚礼求婚策划］满悦</p>
									</a>
									</li>
									<li className="header_video_li2">
									<a href="" className="header_video2">
										<img src="http://qnm.hunliji.com/bLRuhXGuv29K4zOuKdjdlZJ_9WE=/lh5B36MyVY61V_Iqwvp7I_jpLE6g?vframe/jpg/offset/3|imageView2/1/w/284/h/160"/>
										<p>［喜鲤婚礼求婚策划］满悦</p>
									</a>
									</li>
								</ul>
							</div>
						</div>








					</div> < /div>



		)
	}
}

export default Zhuye;