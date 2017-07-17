import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";



class Login extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>

				<div id="log-header">
					<a><img src="http://qnm.hunliji.com/o_1aqo07d2j1bot1t9scq6kql139v7.png"/></a>
					<p>手机号快速登录</p>
					<span><img src="http://qnm.hunliji.com/o_1aqo0ebjv1vf81smm8g91dnu1vc31s.png"/></span>
				</div>
				<div id="log_input">
					<input type="text" placeholder="请输入手机号"/>
						<span className="one">
							<i className="iconfont icon-phone"></i>
						</span>
					<input type="text" placeholder="请输入字符验证码"/>
						<div id="zifu-yz"></div>
					<input type="text" placeholder="请输入验证码"/>
					<button>注册</button>
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

export default Login;