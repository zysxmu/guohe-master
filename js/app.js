// 路由规则
var routes = [
	{	
		path:'/',
		component:{
			template:'<div><h1>果核</h1></div>',	
		},
		children:[
			{
				path:'more',
				component:{
					template:'<div><h1>果核1{{$route.params.name}}的详情a;lkdfjad dfadf adf daf</h1></div>',	
				},
			}
		]
	},
	{
		path:'/guo_user',
		component:{
			template:'<div><h1>我</h1></div>',	
			//$route.query.age获取？后的内容
		},
	},
	
];

var router = new VueRouter({
	routes:routes,
});

new Vue({
	el:'#tab',
	router:router,
});

