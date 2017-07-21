 var https = require('https');
 var http = require('http');
 var fs = require('fs');
 var odata = '';
 var Fuwu = '';
 var zxyCaigouData = '';
 var zxyDemoData = '';
 var zxyVideoData = '';
 var zxyBaikeData = '';
 http.createServer(function(req, res) {
 	//物品清单
 	if (req.url == "/api/home/zxyPort") {
 		zxyPort(function(data) {
 			console.log("婚纱数据获取成功!");
 			res.writeHead(200, {
 				"Content-Type": "text/html;charset=utf-8"
 			});
 			res.write(data);
 			console.log(typeof(data))
 			res.end();
 		});

 	}
 	//套餐
 	if (req.url == "/api/home/zxyFuwu") {

 		zxyFuwu(function(data) {
 			console.log("超值套餐数据获取成功!");
 			res.writeHead(200, {
 				"Content-Type": "text/html;charset=utf-8"
 			});
 			res.write(data);
 			console.log(typeof(data))
 			res.end();
 		});

 	}
 	//采购
 	if (req.url == "/api/home/zxyCaigou") {

 		zxyCaigou(function(data) {
 			console.log("婚品采购数据获取成功!");
 			res.writeHead(200, {
 				"Content-Type": "text/html;charset=utf-8"
 			});
 			res.write(data);
 			console.log(typeof(data))
 			res.end();
 		});

 	}
 	//案例
 	if (req.url == "/api/home/zxyDemo") {

 		zxyDemo(function(data) {
 			console.log("婚品案例数据获取成功!");
 			res.writeHead(200, {
 				"Content-Type": "text/html;charset=utf-8"
 			});
 			res.write(data);
 			console.log(typeof(data))
 			res.end();
 		});

 	}
 	//视频
 	if (req.url == "/api/home/zxyVideo") {

 		zxyVideo(function(data) {
 			console.log("婚品视频数据获取成功!");
 			res.writeHead(200, {
 				"Content-Type": "text/html;charset=utf-8"
 			});
 			res.write(data);
 			console.log(typeof(data))
 			res.end();
 		});

 	}
 	//百科
 	if (req.url == "/api/home/zxyBaike") {
 		zxyBaike(function(data) {
 			console.log("婚品百科数据获取成功!");
 			res.writeHead(200, {
 				"Content-Type": "text/html;charset=utf-8"
 			});
 			res.write(data);
 			console.log(typeof(data))
 			res.end();
 		});

 	}



 }).listen(1996, function() {
 	console.log("接口创建成功:1996");
 });

 function zxyPort(callback) {
 	var options = {
 		hostname: 'm.hunliji.com',
 		port: 443,
 		path: '/p/wedding/index.php/home/APISubPageShop/product_list',
 		method: 'GET'
 	};

 	var req = https.request(options, function(res) {
 		res.on('data', function(chunk) {
 			odata += chunk;
 			// console.log(odata)

 		});
 		res.on('end', function() {
 			callback(odata);

 		})
 	});
 	req.end();
 }

 function zxyFuwu(callback) {
 	var options = {
 		hostname: 'm.hunliji.com',
 		port: 443,
 		path: '/p/wedding/index.php/home/APIFrontPageFeed/web_front_list?entity_type=Package&num=3&cid=0',
 		method: 'GET'
 	};

 	var req = https.request(options, function(res) {
 		res.on('data', function(chunk) {
 			Fuwu += chunk;
 			// console.log(odata)

 		});
 		res.on('end', function() {
 			callback(Fuwu);

 		})
 	});
 	req.end();
 }

 function zxyCaigou(callback) {
 	var options = {
 		hostname: 'm.hunliji.com',
 		port: 443,
 		path: '/p/wedding/index.php/shop/APIShopCategory/category_list',
 		method: 'GET'
 	};

 	var req = https.request(options, function(res) {
 		res.on('data', function(chunk) {
 			zxyCaigouData += chunk;
 			// console.log(odata)

 		});
 		res.on('end', function() {
 			callback(zxyCaigouData);

 		})
 	});
 	req.end();
 }

 function zxyDemo(callback) {
 	var options = {
 		hostname: 'm.hunliji.com',
 		port: 443,
 		path: '/p/wedding/index.php/home/APIFrontPageFeed/web_front_list?entity_type=Example&num=5&cid=0',
 		method: 'GET'
 	};

 	var req = https.request(options, function(res) {
 		res.on('data', function(chunk) {
 			zxyDemoData += chunk;
 			// console.log(odata)

 		});
 		res.on('end', function() {
 			callback(zxyDemoData);

 		})
 	});
 	req.end();
 }

 function zxyVideo(callback) {
 	var options = {
 		hostname: 'm.hunliji.com',
 		port: 443,
 		path: '/p/wedding/index.php/Home/APIMediaAlbum/list?limit=2',
 		method: 'GET'
 	};

 	var req = https.request(options, function(res) {
 		res.on('data', function(chunk) {
 			zxyVideoData += chunk;
 			// console.log(odata)

 		});
 		res.on('end', function() {
 			callback(zxyVideoData);

 		})
 	});
 	req.end();
 }

 function zxyBaike(callback) {
 	var options = {
 		hostname: 'm.hunliji.com',
 		port: 443,
 		path: '/p/wedding/index.php/home/APIBaiKeArticle/list?type=0&page=1&per_page=4',
 		method: 'GET'
 	};

 	var req = https.request(options, function(res) {
 		res.on('data', function(chunk) {
 			zxyBaikeData += chunk;
 			// console.log(odata)

 		});
 		res.on('end', function() {
 			callback(zxyBaikeData);

 		})
 	});
 	req.end();
 }