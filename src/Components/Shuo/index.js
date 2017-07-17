import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import ReactSwipe from "react-swipe";

import {
	NavLink
} from "react-router-dom";



class Shuo extends Component{
	constructor(props) {
		super(props);
		
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
					<ul>
						<li className="ruipindao">精选频道</li>
						<li className="ruichakan">查看全部</li>
						<li className="iconfont icon-more"  id="ruiyoujian"></li>
					</ul>

					<div className="ruilunbo">
						<div className="ruidiyige">
							<img className="ruidiyizhang" src="http://qnm.hunliji.com/FmIKrMXS-mghvDvNUmqUhGLraVTd?imageView2/1/w/172/h/172"/>
							<ul>
							<li className="ruiwenzi1">婚纱礼服</li>
							<li className="ruiwenzi2">今日1360</li>
							</ul>
						</div>

						<div className="ruidiyige">
							<img className="ruidiyizhang" src="http://qnm.hunliji.com/FvhhF0opvc9TqE-rZH0yF-zG9pAv?imageView2/1/w/172/h/172"/>
							<ul>
							<li className="ruiwenzi1">婚庆筹备</li>
							<li className="ruiwenzi2">今日2619</li>
							</ul>
						</div>

						<div className="ruidiyige">
							<img className="ruidiyizhang" src="http://qnm.hunliji.com/FqSljGUyRDkoth_8vlbKLQNgeXW4?imageView2/1/w/172/h/172"/>
							<ul>
							<li className="ruiwenzi1">淘婚品攻略</li>
							<li className="ruiwenzi2">今日1529</li>
							</ul>
						</div>


					</div>
				</div>	


				<div className="ruimokuai2">
					<ul>
						<li className="ruipindao">小编精选</li>
						<li className="ruichakan">查看全部</li>
						<li className="iconfont icon-more"  id="ruiyoujian"></li>
					</ul>

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


				<div className="ruimokuai3">
						<p className="ruiwenzi6">#最美跟拍#作死策划师的最美婚礼 我很满意</p>
						<span className="ruiwenzi7">
						我是一个对婚礼要求蛮高的新娘啦~就是侧滑门口中，难搞的那种
						哎~
						但是想想，大部分都跟我一样吧~这辈子就一次婚礼了！
						所以说万事都马虎不得
						正好拿到照片来晒一下啦！
						婚礼布置图先上~
						要看人的等下咯~
						</span>
						<img className="ruitupian1" src="http://qnm.hunliji.com/FpNjdKp9YlwfYgCRN-mCaNviOOUt?imageView2/1/w/184/h/184"/>
						<img className="ruitupian2" src="http://qnm.hunliji.com/Fi8Niph6RhvIa9LMwGMGpceyC2a-?imageView2/1/w/184/h/184"/>
						<img className="ruitupian3" src="http://qnm.hunliji.com/FsTjwENseaoGFI0mwR0_ijDZlv2T?imageView2/1/w/184/h/184"/>
						
						<div className="ruidianzan1"> 
						 <img className="ruitupian4" src="http://qnm.hunliji.com/FvhhF0opvc9TqE-rZH0yF-zG9pAv?imageView2/1/w/48/h/48"/>
						 <span className="ruiwenzi8">婚庆筹备</span>
						 <span className="ruiwenzi9 iconfont icon-comments"> 28</span>
						 <span className="ruiwenzi10 iconfont icon-good"> undefined</span>
						</div>
				</div>


				<div className="ruimokuai3">
						<p className="ruiwenzi6">终于在年前搞定了我的婚纱和化妆 美美哒</p>
						<span className="ruiwenzi7">
						对婚纱和跟妆的要求言简意赅就是
						小清新
						希望是简单点的，但是要精致点
						所以其实也是试过妆了，试过礼服了好几次了
						都没有特别满意，想着过完年，是不是又要涨价了，就亏了
						所以顶着寒风还是在寻觅合适的~
						终于订下来了！
						迫不及待的给大家看看
						</span>
						<img className="ruitupian1" src="http://qnm.hunliji.com/FjKL3lshXSeip2ZpugfBkC7-x_3B?imageView2/1/w/184/h/184"/>
						<img className="ruitupian2" src="http://qnm.hunliji.com/FoFsMeWAo9U4wigtQ4xfvBYspmET?imageView2/1/w/184/h/184"/>
						
						<div className="ruidianzan1">
						 <img className="ruitupian4" src="http://qnm.hunliji.com/FvhhF0opvc9TqE-rZH0yF-zG9pAv?imageView2/1/w/48/h/48"/>
						 <span className="ruiwenzi8">婚庆筹备</span>
						 <span className="ruiwenzi9 iconfont icon-comments"> 21</span>
						 <span className="ruiwenzi10 iconfont icon-good"> undefined</span>
						</div>
				</div>
				

				<div className="ruimokuai3">
						<p className="ruiwenzi6">皮肤稍黑买了金色拖尾纱 感觉发型不太对</p>
						<span className="ruiwenzi7">
						去试了下妆感觉婚纱发型不太好……过几天再去试试吧……黑黑的我不好看
						</span>
						<img className="ruitupian1" src="http://qnm.hunliji.com/Fv3mZrVfqZTHEGJOn4dhdybANA2_?imageView2/1/w/184/h/184"/>
						<img className="ruitupian2" src="http://qnm.hunliji.com/FgGiBK1gMJiQkr8mnyWOgNYNrQGy?imageView2/1/w/184/h/184"/>
						<img className="ruitupian3" src="http://qnm.hunliji.com/FkvIhZHMujwnHilLR4ArD40J4KnJ?imageView2/1/w/184/h/184"/>
						
						<div className="ruidianzan1">
						 <img className="ruitupian4" src="http://qnm.hunliji.com/Fihf72jsNdlJZaL5uldDjrRQNsWJ?imageView2/1/w/48/h/48"/>
						 <span className="ruiwenzi8">我的备婚流程</span>
						 <span className="ruiwenzi9 iconfont icon-comments"> 59</span>
						 <span className="ruiwenzi10 iconfont icon-good"> undefined</span>
						</div>
				</div>



				<div className="ruimokuai3">
						<p className="ruiwenzi6">婚礼纪录 我们的游轮婚礼正在筹备中</p>
						<span className="ruiwenzi7">
						特别喜欢夜景的样子，正好我们也是晚上的宴席
						一合计就定了一个游轮婚礼~
						效果图是这样的~
						不知道我们会办出什么效果来
						</span>
						<img className="ruitupian1" src="http://qnm.hunliji.com/Fh2YDyL9dRTsWJeAzXOYThM4Xvk9?imageView2/1/w/184/h/184"/>
						<img className="ruitupian2" src="http://qnm.hunliji.com/FvkOjgAsWD4wqDqNB8pm4eNroICn?imageView2/1/w/184/h/184"/>
						
						<div className="ruidianzan1">
						 <img className="ruitupian4" src="http://qnm.hunliji.com/Fihf72jsNdlJZaL5uldDjrRQNsWJ?imageView2/1/w/48/h/48"/>
						 <span className="ruiwenzi8">我的备婚流程</span>
						 <span className="ruiwenzi9 iconfont icon-comments"> 15</span>
						 <span className="ruiwenzi10 iconfont icon-good"> undefined</span>
						</div>
				</div>


				<div className="ruimokuai3">
						<p className="ruiwenzi6">200元搞定婚鞋 舒适又亮眼</p>
						<span className="ruiwenzi7">
						配婚纱的婚鞋，七厘米，闪闪的，但是非常软，跟脚，那一天我健步如飞，连伴娘都大声的吼跟不上我了，问我穿的到底是不是高跟
						</span>
						<img className="ruitupian1" src="http://qnm.hunliji.com/o_1b11dfcfn1urcre1tiabb91pg38.jpg?imageView2/1/w/184/h/184"/>
						<img className="ruitupian2" src="http://qnm.hunliji.com/o_1b11dff8dvshvg9k3f1gif1vfdd.jpg?imageView2/1/w/184/h/184"/>
						<img className="ruitupian3" src="http://qnm.hunliji.com/o_1b11dfhlh75n1o1tcdekel1radi.jpg?imageView2/1/w/184/h/184"/>
						
						<div className="ruidianzan1">
						 <img className="ruitupian4" src="http://qnm.hunliji.com/FqSljGUyRDkoth_8vlbKLQNgeXW4?imageView2/1/w/48/h/48"/>
						 <span className="ruiwenzi8">淘婚品攻略</span>
						 <span className="ruiwenzi9 iconfont icon-comments"> 54</span>
						 <span className="ruiwenzi10 iconfont icon-good"> undefined</span>
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

export default Shuo;