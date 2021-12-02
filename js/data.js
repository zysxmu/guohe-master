// 问题list
var questiones = new Vue({
	el:'#card',
	data:{
		questionList:[{
			question:'如果你可以选择和世界上的任何人共进晚餐，你会选择谁？',
		},{
			question:'你想要成名吗？以什么样的方式成名？',
		},{
			question:'你是否曾经在打电话之前排练要说什么？为什么？',
		},{
			question:'对你而言“完美的一天”是怎样的？',
		},{
			question:'你上次独自唱歌是什么时候？当着别人唱歌又是什么时候？',
		},{
			question:'假如你能够活到90岁，同时你能选择在你生命的最后60年中，让身体或心智两者中的其一保持在30岁的状态，你会选择让哪一部分保持年轻呢？',
		},{
			question:'对于自己会怎样死去，你是否有神秘的预感？',
		},{
			question:'说出你和你的搭档的三处共同点。',
		},{
			question:'你人生中最感激的是什么？',
		},{
			question:'如果你能改变你成长过程中的任意一件事，你会改变什么？',
		},{
			question:'请用四分钟的时间，尽可能详细地向你的搭档讲述你一生的故事。',
		},{
			question:'如果明早醒来时你可以获得任何技能或品质，你希望获得什么？',
		},{
			question:'如果有一个水晶球可以解答任何关于你自己、你的人生、你的未来的或其他的任何问题，你想知道什么？',
		},{
			question:'有没有什么事是你一直渴望做却又迟迟未做的？你为什么没做?',
		},{
			question:'你生命中最大的成就是什么？ ',
		},{
			question:'在一段友情中你最重视的是什么？',
		},{
			question:'你最珍贵的记忆是什么？',
		},{
			question:'你最恐怖的记忆是什么？',
		},{
			question:'如果你知道自己会在一年后死去，你会改变你现在的生活方式吗？为什么?',
		},{
			question:'友情对于你意味着什么？',
		},{
			question:'在你的生命中，爱和感情扮演着什么样的角色？',
		},{
			question:'和你的搭档轮流说出对方的五个优点',
		},{
			question:'你的家庭有多亲密温暖？你是否觉得你的童年比大多数人的更快乐？',
		},{
			question:'你认为你和母亲之间的关系怎么样？',
		},{
			question:'轮流造三个以“我们……”开头的句子，比如，“我们都在这个房间里，感到……',
		},{
			question:'完成下面这个句子：“我希望有一个人让我可以跟他/她分享……',
		},{
			question:'如果你要和搭档变成亲密的朋友，请分享他/她需要知道的重要事情',
		},{
			question:'告诉你的搭档你喜欢他/她什么，说出你可能不会对普通朋友说的事情。',
		},{
			question:'你上次在另一个人面前哭是什么时候？自己一个人哭呢？',
		},{
			question:'告诉搭档，你已经喜欢上了他/她的某个特质。',	
		},{
			question:'如果你今晚就要离世，而且没有机会跟任何人交流，你会最遗憾没有把什么事情告诉别人？为什么你还没有告诉他们？',
		},{
			question:'在你的全家人里，谁的死会最让你不安？为什么？',
		},{
			question:'分享一个个人问题，问你的搭档他/她会怎么处理。然后，让你的搭档告诉你，他/她认为你为什么会问这个问题。',
		},{
			question:'请你们互相对视四分钟',
		}],
	
	}
})

//new Vue({
//	el:'#question_card',
//	
//})
var app = new Vue({
	el:'#app',
	data:{
		questionList:[{
			question:'Given the choice of anyone ... as a dinner guest? ',
			
		},{
			question:'Would you like to be famous? In what way?',
			
		},{
			question:'Before making a telephone call, ... Why?',
			}
		]
	}
})