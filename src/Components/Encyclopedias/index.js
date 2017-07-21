import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import img1 from "./img/1.jpg"
import {
	NavLink
} from "react-router-dom";



class Encyclopedias extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>

					<header>
						<div className="left">
							<i className="iconfont icon-back ico1"></i>
							<span className="s1">实用百科</span>
						</div>
						<div className="right">
							<sapn className="s2">公众号文章</sapn>
							<i className="iconfont icon-bags ico2"></i>
						</div>
					</header>
					<div className="banner">
									<div className="li-div">
										<img src="http://qnm.hunliji.com/FqOkZV-yc4u4TDwMVFzyU4zxjuF4?imageView2/1/w/140/h/140/interlace/1" alt=""/>
										<p><a href="">结婚准备</a></p>
										<p><span className="p-s1">3565</span>次浏览</p>
										<span className="iconfont icon-more ico3"></span>
									</div>

									<div className="li-div">
										<img src="http://qnm.hunliji.com/Ft88kzTkfjqaicClg63Wwy6-b0-S?imageView2/1/w/140/h/140/interlace/1" alt=""/>
										<p><a href="">婚纱拍照</a></p>
										<p><span className="p-s1">1151</span>次浏览</p>
										<span className="iconfont icon-more ico3"></span>
									</div>

									<div className="li-div">
										<img src="http://qnm.hunliji.com/Fo2qfP_emU3GSlRLcOHWX9a6meHb?imageView2/1/w/140/h/140/interlace/1" alt=""/>
										<p><a href="">结婚筹备</a></p>
										<p><span className="p-s1">770</span>次浏览</p>
										<span className="iconfont icon-more ico3"></span>
									</div>

									<div className="li-div">
										<img src="http://qnm.hunliji.com/FnEeWRddvpd0mf5vBf6xu9uKSQJc?imageView2/1/w/140/h/140/interlace/1" alt=""/>
										<p><a href="">婚礼现场</a></p>
										<p><span className="p-s1">1100</span>次浏览</p>
										<span className="iconfont icon-more ico3"></span>
									</div>

									<div className="li-div">
										<img src="http://qnm.hunliji.com/FnedKV9xMVHVP66AIDJmnZL6AjsK?imageView2/1/w/140/h/140/interlace/1" alt=""/>
										<p><a href="">新郎新娘</a></p>
										<p><span className="p-s1">703</span>次浏览</p>
										<span className="iconfont icon-more ico3"></span>
									</div>

									<div className="li-div">
										<img src="http://qnm.hunliji.com/Fo2qfP_emU3GSlRLcOHWX9a6meHb?imageView2/1/w/140/h/140/interlace/1" alt=""/>
										<p><a href="">结婚用品</a></p>
										<p><span className="p-s1">961</span>次浏览</p>
										<span className="iconfont icon-more ico3"></span>
									</div>
					</div>
					
					<div className="bottom3">
						<div className="bottom3-div">
							<img src={img1} alt=""/>
							<h3>夏天来啦 十款防蚊产品让你不再被咬</h3>
							<p>夏天来啦 十款防蚊产品让你不再被咬</p>
						</div>
						<div className="bottom3-div">
							<img src={img1} alt=""/>
							<h3>夏天来啦 十款防蚊产品让你不再被咬</h3>
							<p>夏天来啦 十款防蚊产品让你不再被咬</p>
						</div>
						<div className="bottom3-div">
							<img src={img1} alt=""/>
							<h3>夏天来啦 十款防蚊产品让你不再被咬</h3>
							<p>夏天来啦 十款防蚊产品让你不再被咬</p>
						</div>
						<div className="bottom3-div">
							<img src={img1} alt=""/>
							<h3>夏天来啦 十款防蚊产品让你不再被咬</h3>
							<p>夏天来啦 十款防蚊产品让你不再被咬</p>
						</div>
						<div className="bottom3-div">
							<img src={img1} alt=""/>
							<h3>夏天来啦 十款防蚊产品让你不再被咬</h3>
							<p>夏天来啦 十款防蚊产品让你不再被咬</p>
						</div>
						<div className="bottom3-div">
							<img src={img1} alt=""/>
							<h3>夏天来啦 十款防蚊产品让你不再被咬</h3>
							<p>夏天来啦 十款防蚊产品让你不再被咬</p>
						</div>
						<div className="bottom3-div">
							<img src={img1} alt=""/>
							<h3>夏天来啦 十款防蚊产品让你不再被咬</h3>
							<p>夏天来啦 十款防蚊产品让你不再被咬</p>
						</div>
						<div className="bottom3-div">
							<img src={img1} alt=""/>
							<h3>夏天来啦 十款防蚊产品让你不再被咬</h3>
							<p>夏天来啦 十款防蚊产品让你不再被咬</p>
						</div>
						<div className="bottom3-div">
							<img src={img1} alt=""/>
							<h3>夏天来啦 十款防蚊产品让你不再被咬</h3>
							<p>夏天来啦 十款防蚊产品让你不再被咬</p>
						</div>
						<div className="bottom3-div">
							<img src={img1} alt=""/>
							<h3>夏天来啦 十款防蚊产品让你不再被咬</h3>
							<p>夏天来啦 十款防蚊产品让你不再被咬</p>
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

export default Encyclopedias;