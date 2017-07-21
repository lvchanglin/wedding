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
 
	handleClick(){
		// alert("11");
		var username = document.getElementsByClassName("username")[0].value;
		// var password = document.getElementsByClsaaName("password")[0].value;
		let that = this;
			let re = /^\w{6,16}$/g;
				if(!re.test(this.username)){
					alert("请输入6到16位英文数字下划线");
					return;
				}

	}

	render() {
		return (

			<div>

<<<<<<< HEAD
				<div id="log-header">
					<a><img src="http://qnm.hunliji.com/o_1aqo07d2j1bot1t9scq6kql139v7.png"/></a>
					<p>手机号快速登录</p>
					<span><img src="http://qnm.hunliji.com/o_1aqo0ebjv1vf81smm8g91dnu1vc31s.png"/></span>
				</div>
				<div id="log_input">
					<input type="text" placeholder="请登入用户名" className="username"/>
						<span className="one">
							<i className="iconfont icon-phone"></i>
						</span>
					<input type="password" placeholder="请输入密码" className="password"/>
					<input type="password" placeholder="再次输入密码" className="repass"/>
					<button onClick={this.handleClick.bind(this)}>注册</button>


				</div>
					<section>
=======
					登录<section>
>>>>>>> b8df5e9da2a154266e3e5ea9e07a2ddb95ac36c9
					{
						this.props.children
					}
				</section>
			</div>
		)
	}
}

export default Login;