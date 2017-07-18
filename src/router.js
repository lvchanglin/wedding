import React from "react";
import App from "./Components/App/index";
import Business from "./Components/Business/index";
import Business_Case from "./Components/Business_Case/index";
import Business_One from "./Components/Business_One/index";
import Business_Package from "./Components/Business_Package/index";
import Encyclopedias from "./Components/Encyclopedias/index";
import Option from "./Components/Option/index";
import Zhuye from "./Components/Zhuye/index";
import shuo from "./Components/shuo/index";
import Login from "./Components/Login/index";
import geren from "./Components/geren/index";


import {
	HashRouter as Router,
	Route,
	Switch,
	Film,
	Redirect //重定向组件
} from "react-router-dom";

const router = (
	<Router>
	<App>
		<Switch>
			<Route path="/zhuye" component={Zhuye}/>
			<Route path="/option" component={Option}/>
			<Route path="/business" render={()=>
					<Business>
						<Switch>
							<Route path="/business/business_Case" component={Business_Case}/>
							<Route path="/business/business_One" component={Business_One}/>
							<Route path="/business/business_Package" component={Business_Package}/>
						
							<Redirect from="/business" to="/business/business_One"/>
						</Switch>
					</Business>
				}/>
			<Route path="/shuo" component={shuo}/>

			<Route path="/encyclopedias" component={Encyclopedias}/>
			<Route path="/login" component={Login}/>
			<Route path="/geren" component={geren}/>
			
		<Redirect from="/" to="/zhuye" />
		</Switch>			

	</App>
	
	</Router>
	)
export default router;