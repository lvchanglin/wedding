import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";
import axios from 'axios';


class Details extends Component{
	constructor(props) {
		super(props);
		this.state={
			loopList:[],
			thisimg:[],
		}
	}


	componentDidMount() {
		axios.get("/spider/xiangqing").then(res=>{
			console.log(res.data.data.cover_image)
			console.log(res.data.data);
			this.setState({
				loopList:res.data.data,
				thisimg:res.data.data.cover_image
			})
		})
	}


	render() {
		return (

		
			<div>
				

						<div id="darui">
							<img id="darui-tupian" src="http://qnm.hunliji.com/o_1bkb0nrm81m7ocijgrhh4e1ndfc8.jpg?imageView2/1/w/640/h/640"/>
						
							<div id="darui-jieshao">
								<p id="darui-mingcheng">{this.state.loopList.title}</p>
								<p id="darui-jiage">
									{this.state.loopList.actual_price}
								</p>
								<p id="darui-yunfei">
									运费：6.00元
								</p>
								<div id="darui-tuihuo">
									<p id="darui-wenzi">支持退货</p>
								</div>
							</div>
							
							<div id="darui-shangjia">
								<img id="darui-tupian2" src="http://qnm.hunliji.com/o_1bl2nj0lcgd2mro1elk1kh11gjoc.jpg?imageView2/1/w/88/h/88"/>
								<p id="darui-shangpindianming">小犀喜品铺</p>
								<p id="darui-110">商品 110</p>
								<p id="darui-guanzhu">关注 83</p>
								<button id="darui-jindian">进店逛逛</button>
							
							</div>

							<div id="darui-gouwuche-anniu">
							<button id="darui-gouwuche-anniu2">我的购物车</button>
							<button id="darui-gouwuche-anniu3">加入购物车</button>
							<button id="darui-gouwuche-anniu4">立即购买</button>

							</div>


							<div id="darui-beijing"></div>

							<div id="darui-tupian3">
								<img id="darui-tupiankuangzi" src="http://qnm.hunliji.com/o_1bkb0o1t193jje1td510kh88pch.jpg?imageView2/2/w/640"/>
								<img id="darui-tupiankuangzi" src="http://qnm.hunliji.com/o_1bkb0ocfr18mf1jprori1vn31j9qdg.jpg?imageView2/2/w/640"/>
								<img id="darui-tupiankuangzi" src="http://qnm.hunliji.com/o_1bkb0ofg71lgs8ib1iv7s2gdi8dq.jpg?imageView2/2/w/640"/>
								<img id="darui-tupiankuangzi" src="http://qnm.hunliji.com/o_1bkb0oj2t10udkqr2ut1d2c10h8e4.jpg?imageView2/2/w/640"/>
								<img id="darui-tupiankuangzi" src="http://qnm.hunliji.com/o_1bkb0oo43tp11q47167o13qf1bcvee.jpg?imageView2/2/w/640"/>
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

export default Details;