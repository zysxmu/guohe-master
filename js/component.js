//背景音乐播放
var audioVue = new Vue({
		el:'#backgroundSound',
		data:{
			playFlag:false	//判断当前是否正在播放
		},
		methods:{
			playPause:function(){
				var audio = document.getElementById('music')	//获取要控制的元素
				if(audio != null){
					if(this.playFlag){	//如果正在波播放，点击暂停
						audio.pause()
						this.playFlag = false  //设置播放状态为false
					}
					else{
						//audio.currentTime = 0	//设置当前的播放时间是0
						audio.play()
						this.playFlag = true
					}
				}
			}
		}
	})
//组件公用属性 mixins:[base],
var base = {
	methods:{
		show: function(){
			this.visible = true;
		},
		hide: function(){
			this.visible = false;
		},
		toggle: function(){
			this.visible = !this.visible;
		}
	},
	data: function(){
		return{
			visible: false,
		}
	}
}

//点赞组件
Vue.component('like',{
	template:'<button :class="{liked:liked}" @click="toggle_like()">赞{{like_count}}</button>',

	data:function(){
		return{
			like_count:10,
			liked:false,
		}
	},
	methods:{
		toggle_like:function(){
			if(!this.liked)
				this.like_count++;
			else
				this.like_count--;
		
			this.liked = !this.liked;
		}
	}
});
new Vue({
	el:'#like'
})

//@用户，跳转用户主页
Vue.component('user',{
	template:'<a :href="\'/user/\' + username">@{{username}}</a>',
	props:['username'],
	methods:{}
});

//显示余额
//点击子组件“显示余额”，父组件执行显示余额
//父组件
Vue.component('balance',{
	template:'<div>'+
				'<show @show-balance="show_balance"></show>'+   //收到事件show-balance,把show-balance改为true
				'<div v-if="show">'+
					'您的余额：￥66'+
				'</div>'+
			'</div>', //监听事件
	methods:{
		show_balance:function(data){  		// 传递参数
			this.show = true;
			console.log('data:',data);
		}
	},
	data:function(){
		return {
			show:false,
		}
	}
});
//子组件
Vue.component('show',{
	template:'<button @click="on_click">显示余额</button>',
	methods:{
		on_click:function(){
			this.$emit('show-balance',{a:1,b:2});	//快捷emit()触发show-balances事件，传递{}参数
		}
	}
});

//平行组件间通信
//定义中心调度器
var Event = new Vue();
//数据发送组件component1
Vue.component('component1',{
	template:'<div>'+
			'我说:<input @keyup="on_change" v-model="i_said"/>{{i_said}}'+
		'</div>',
	methods:{
		on_change:function(){
			Event.$emit('component1-said-something',this.i_said)//触发一个自定义的事件component1-said-something
		}
	},
	data:function(){
		return{
			i_said:'',
		}
	}
});
//数据接收组件Component2
Vue.component('component2',{
	template:'<div>'+
		'Component1说:{{component1_said}}'+
		'</div>',
	data:function(){
		return{
			component1_said:'',
		};
	},
	//component2在初始化完成的瞬间开始监听事件component2-said-something
	//var生命周期，钩子mounted表示挂载完毕，初始化好了
	mounted:function(){
		var me = this;
		Event.$on('component1-said-something',function(data){
			me.component1_said = data;
		});
	}
});
new Vue({
	el:'#app'
})