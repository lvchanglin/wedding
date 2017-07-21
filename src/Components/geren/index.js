import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import img7 from './img/7.png';
import img8 from './img/8.png';
import img9 from './img/9.png';
import {
	NavLink
} from "react-router-dom";



class geren extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>

					<header>
						<div className="banner">
							<li className="iconfont icon-back icon1"></li>
							<span className="s1">个人中心</span>
							<li className="iconfont icon-bags icon2"></li>
						</div>
					</header>
					<div className="inner">
						<dl className="inner-dl">
								<dt className="inner-dt">
									<img src="http://qnm.hunliji.com/o_1a1j0dkfv1lngmapeue7opgphi.png?imageView2/1/w/80/h/80" alt="" />
								</dt>
								<dd className="inner-dd">
									<h4>手机用户4279</h4>
									<p>婚期</p>
								</dd>
						</dl>
					</div>	
						
					<div className="nav">
						<div className="nav-left">
							<img src={img1}/>
							<p>预约</p>
						</div>
						<div className="nav-left">
							<img src={img2}/>
							<p>订单</p>
						</div>
						<div className="nav-left nav-right">
							<img src={img3}/>
							<p>购物车</p>
						</div>
					</div>

					<div className="bottom">
						<div className="bottom-shang">
							<h1><img src={img4}/><span className="h1-s1">钱包</span></h1>
							<p>红包、金币、兑换码<span className="iconfont icon-more icon3"></span></p>
						</div>

						<div className="bottom-shang bottom-xia">
							<h1><img src={img5}/><span className="h1-s1">金融</span></h1>
							<p>分期、贷款、办卡<span className="iconfont icon-more icon3"></span></p>
						</div>
	
					</div>

					<div className="bottom">
						<div className="bottom-shang bottom-shoucang">
							<h1><img src={img6}/><span className="h1-s1">收藏</span></h1>
							<p>收藏的套餐、案例和商品<span className="iconfont icon-more icon3"></span></p>
						</div>

						<div className="bottom-shang bottom-xia">
							<h1><img src={img7}/><span className="h1-s1">关注</span></h1>
							<p>关注的商家和用户<span className="iconfont icon-more icon3"></span></p>
						</div>
	
					</div>

					<div className="bottom">
						<div className="bottom-shang bottom-xiaoxi">
							<h1><img src={img8}/><span className="h1-s1">消息</span></h1>
							<p><span className="iconfont icon-more icon3"></span></p>
						</div>

						<div className="bottom-shang bottom-xia bottom-xiaoxi1">
							<h1><img src={img9}/><span className="h1-s1">收货地址</span></h1>
							<p><span className="iconfont icon-more icon3"></span></p>
						</div>
	
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

export default geren;