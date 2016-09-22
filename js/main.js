/*
 *--------------------
 *made by miller 2016/09/10 ^ω^
 *dialogue javascript
 *version 1.0:design Interactive animation;
 *--------------------
 */
var userInfo = {
	pc:{name:"小乔",avatar:'./img/pc.jpg'},
	user:{name:'你',avatar:'./img/user.jpg'}
};
var data = [
	{
		pc:[{order:1,txt:"你知道吗？IPhone7发布了，新增了亮黑色，特别酷！"},{order:2,txt:"而且！IOS10更新后，iMessage简直逆天"},{order:3,txt:"不仅支持手画表情包还可以互动玩游戏！"},{order:4,img:"./img/img1.png"},{order:5,txt:"网友表示：iMessage这次瞄准了微信呀~"}],
		answer:[{order:6,type:1,txt:"哦。（冷漠）"}]
	},
	{
		pc:[{order:2,img:"./img/img2.png"},{order:3,txt:"2016年全年法定节假日只剩7天！就在这个国庆！你是选择出去玩“穿越人山人海”还是宅在家“坐拥西瓜与电脑”?"},{order:4,img:"./img/img3.png"},{order:5,img:"./img/img4.png"}],
		user:[{order:1,type:1,txt:"哦。（我把玩着iPhone7Plus 256G亮黑色漫不经心地说道）"}],
		answer:[{order:6,type:1,txt:"地球人太恐怖，我只想回火星…"}]
	},
	{
		pc:[{order:2,txt:"哈哈，你的心愿很快就能实现了。"},{order:3,txt:"9.15日，“天宫二号”上天啦！"},{order:4,txt:"“天宫二号”是一个空间实验室，可供航天员在其中驻留，可谓名副其实的“天宫”。"},{order:5,img:"./img/img5.png"}],
		user:[{order:1,type:1,txt:"地球人太恐怖，我只想回火星…"}],
		answer:[{order:6,type:1,txt:"挑着中秋节去给嫦娥送月饼？"}]
	},
	{
		pc:[{order:2,txt:"哈哈哈，吃个月饼也是不容易，且吃且珍惜！"},{order:3,txt:"前不久，阿里五个员工抢月饼，把工作抢没了，全程只用了两小时，真是史上最快的一次离职！"},{order:4,txt:"网友众说纷纭，有说作弊抢月饼可耻的，有说阿里因为这点小事就开除老员工太寒心的。我反正是晕了，你觉得呢？"}],
		user:[{order:1,type:1,txt:"挑着中秋节去给嫦娥送月饼？"}],
		answer:[{order:5,type:1,txt:"阿里做得好！"},{order:5,type:2,txt:"阿里太过分了！"}]
	},
	{
		pc:[{order:2,txt:"就知道你会这么说"},{order:3,txt:"资本市场就是这样，不知道什么时候就翻脸了。"},{order:4,txt:"你看之前微信开始收费时对外宣称决不收费的支付宝，还不是开始收费了吗？"},{order:5,txt:"你看之前一直对着烧钱，不烧垮对方不开心的滴滴和UBER，还不是合并了吗？"},{order:6,img:"./img/img6.png"},{order:7,txt:"这就叫：与其互相烧钱，不如一起挣钱啊~"},{order:8,txt:"你说合并就算了吧，价格越来越贵…都要赶上出租车了",emoticon:['./emoticon/36.gif']}],
		user:[{order:1,type:1,txt:"阿里做得好！"},{order:1,type:2,txt:"阿里太过分了！"}],
		answer:[{order:9,type:1,txt:"是啊 T T"},{order:8,type:2,txt:"不在乎这点小钱"}]
	},
	{
		pc:[{order:2,txt:"说时迟那时快，乘着网约车涨价的薄弱期，摩拜单车迅速攻占帝都出行市场。"},{order:3,txt:"这款智能共享自行车被戏称为“自行车界的uber”，它没有固定的车桩，你仅需使用车身的二维码扫描，完成注册、找到单车、扫码支付、解开车锁，便可以开始使用，解决了“最后一公里”的问题。"}],
		user:[{order:1,type:1,txt:"是啊 T T"},{order:1,type:2,txt:"不在乎这点小钱"}],
		answer:[{order:4,type:1,txt:"就是路边上随处可见的小橙车?"},{order:4,type:2,txt:"它比UBER可差远了"}]
	},
	{
		pc:[{order:2,txt:"58同城的员工应该挺喜欢它的。"},{order:3,txt:"近日，58全面实行996工作制，最重要的是全程通过口头通知，没有留下任何书面“把柄”，这做事手段不得不让人叹服！据说58老板姚劲波直播的时候被骂声刷屏，都看不到脸了！"}],
		user:[{order:1,type:1,txt:"就是路边上随处可见的小橙车?"},{order:1,type:2,txt:"它比UBER可差远了"}],
		answer:[{order:4,type:1,txt:"怜爱58员工30秒"},{order:4,type:2,txt:"求别说，我们公司也是996",emoticon:['./emoticon/9.gif','./emoticon/9.gif']}]
	},
	{
		pc:[{order:2,txt:"所以说我这辈子因为穷做过最委屈的事情就是上班啊",emoticon:['./emoticon/9.gif']},{order:3,txt:"老天一次又一次把机会摆在我面前，而我却选择无视…最近有个投资品很火，连马云都被它吓到了"}],
		user:[{order:1,type:1,txt:"怜爱58员工30秒"},{order:1,type:2,txt:"求别说，我们公司也是996",emoticon:['./emoticon/9.gif','./emoticon/9.gif']}],
		answer:[{order:4,type:1,txt:"这么狂？"},{order:4,type:2,txt:"是什么？"}]
	},
	{
		pc:[{order:2,txt:"就是比特币呀！"},{order:3,img:'./img/img7.png'},{order:4,txt:"继黄金之后，中国大妈为之倾倒的又一神器。"},{order:5,txt:"曾创下一个月暴涨500%的逆天记录。"}],
		user:[{order:1,type:1,txt:"这么狂？"},{order:1,type:2,txt:"是什么？"}],
		answer:[{order:6,type:1,txt:"500%？！"},{order:6,type:2,txt:"诈骗的吧？"}]
	},
	{
		pc:[{order:2,txt:"你可别小看它，各大银行纷纷研究它的底层技术区块链，想与银行自身业务结合。银行看中的东西能不靠谱吗？"},{order:3,txt:"机智的人一般会先充分了解一个新兴事物然后评判它。你可以先去比特币交易平台火币网看看比特币视频，火币网的视频质量还不错，而且从小白到高手的各个阶段都能找到适合自己的视频。"}],
		user:[{order:1,type:1,txt:"500%？！"},{order:1,type:2,txt:"诈骗的吧？"}],
		answer:[{order:4,type:1,txt:"用视频学习棒棒哒！"}]
	},
	{
		pc:[{order:2,txt:"同时，火币网本身也是国内最大的比特币交易平台，看完视频就可以直接在上面愉快地挣钱啦！"}],
		user:[{order:1,type:1,txt:"用视频学习棒棒哒！"}],
		answer:[{order:3,type:1,txt:"赞！挣钱了请你吃饭",emoticon:['./emoticon/happy.png']}]
	},
	{
		user:[{order:1,type:1,txt:"赞！挣钱了请你吃饭",emoticon:['./emoticon/happy.png']}],
		answer:[{order:2,type:1,txt:"^ω^"}]
	},
	{
		finish:true,
		final:'./img/final.jpg'
	}
];
	var time = new Date(),
		movable = true,
		btn_created = false,
		set_time = true,
		answer_order = 0,
		user_order = 0,
		open_img = true,
		data_index = 0,
		scroll,
		w_h,
		ap,
		type = null;

	var ele_dialogue_pc = '<div class="dialogue clearfix"><div class="d-l"><div class="avatar ui-animate ui-animate-moveL"><a href="javascript:;" class="img-box"><img class="img-circle" src="' + userInfo.pc.avatar + '" alt=""></a><span class="">' + userInfo.pc.name + '</span></div><div class="bubble ui-animate ui-animate-bounce"></div></div></div>',
		ele_dialogue_user = '<div class="dialogue clearfix"><div class="d-r"><div class="bubble ui-animate ui-animate-bounce"></div><div class="avatar ui-animate ui-animate-moveR"><a href="javascript:;" class="img-box"><img class="img-circle" src="' + userInfo.user.avatar + '" alt=""></a><span class="">' + userInfo.user.name + '</span></div></div></div>',
		ele_full_img = '<div class="full-box"><div class="img-full "><img src="" alt=""></div></div>',
		ele_footer = '<footer class="ui-animate-delay ui-animate-moveT js-footer"></footer>',
		ele_txt = '',
		ele_thumbnail = '',
		emo_content = '',
		container = $('.container'),
		d_box = $('.dialogue-box'),
		wrap = $('.wrap');



	$(function() {
		analyse();
	})
	//页面加载初始执行该方法，每次点击底部按钮也会执行该方法。
	function analyse() {
		if (data[data_index] && data[data_index].finish) {
			ele_full_img = '<div class="full-box"><div class="img-full "><img src="' + data[data_index].final + '" alt=""></div><div class="close"></div></div>';
			scroll = $(window).scrollTop();
			w_h = $(window).height();
			ap = setTimeout(function () {
				if ($('.wrap .full-box').length == 0) {
					wrap.append(ele_full_img);
					$('.full-box').css({height:w_h,top:scroll});
				} else {
					console.log('has a mask');
				}
				$('body').addClass('unmovable');
			},0);
			// img_full.show();
			$('body').on('DOMMouseScroll mousescroll touchmove',function (e) {
				e.preventDefault();
			});
		} else {
			var ele_time = '<div class="time js-time"><span>'+ getTime() + '</span></div>';// 获取当前时间
			//如果有时间标签就不添加
			if (set_time) {
				container.prepend(ele_time);
				set_time = false;
			}
			var pc_content = [],
				user_content = [],
				answer_content = '<footer class="ui-animate-delay ui-animate-moveT js-footer">';

			//判断用户是否讲话
			if (data[data_index].user) {
				data[data_index].user.forEach(function(ele) {
					emo_content = '';
					if (ele.emoticon) {
						for (var i in ele.emoticon) {
							emo_content += '<img class="emoticon" src="' + ele.emoticon[i] + '" alt="">';
						}
					}
					if (ele.type == type) {
						user_content/*[data[data_index].user.indexOf(ele)]*/ = '<span class="js-txt">' + ele.txt + '</span>' + emo_content;
					}
					user_order = ele.order;
				});
				var put_user = setTimeout(function () {add('user',user_content);},user_order * 800);
			}

			//判断pc是否讲话
			if (data[data_index].pc) {
				data[data_index].pc.forEach(function(ele) {
					(function (e) {
						console.log(e);
						emo_content = '';
						if (ele.txt) {
							if (ele.emoticon) {
								for (var i in ele.emoticon) {
									emo_content += '<img class="emoticon" src="' + ele.emoticon[i] + '" alt="">';
								}
							}
							pc_content.push('<span class="js-txt">' + ele.txt + '</span>' + emo_content);
						} else if (ele.img) {
							pc_content.push('<img class="js-img" src="' + ele.img + '" alt="">');
						}
						user_order = ele.order;
						var put_pc = setTimeout(function () {add('pc',pc_content[data[data_index].pc.indexOf(ele)]);},user_order * 800);
					})(ele);
				});
			}
			
			
			
			//判断是否有回复
			if (data[data_index].answer) {
				data[data_index].answer.forEach(function(ele) {
					if (ele) {
						answer_content += ('<a class="more" href="javascript:;" data-type=' + ele.type + '>' + ele.txt + '</a>');
						answer_order = Math.max(answer_order,ele.order);
					}
				});
				answer_content += '</footer>';
				var put_answer = setTimeout(function () {add('answer',answer_content);},answer_order * 800);
			}	
	 	}
	 	if (data_index < (data.length - 1)) {
	 		var del = setTimeout(function () {data_index++},answer_order * 800);
	 		$('.more').bind('click touchend');
	 	}
 	}

 	touch.on('.dialogue-box','tap','.js-img',function (e) {
		// showImg();
		ele_full_img = '<div class="full-box"><div class="img-full "><img src="' + $(this).attr('src') + '" alt=""></div><div class="close"></div></div>';
		scroll = $(window).scrollTop();
		w_h = $(window).height();
		ap = setTimeout(function () {
			if ($('.wrap .full-box').length == 0) {
				wrap.append(ele_full_img);
				$('.full-box').css({height:w_h,top:scroll});
			} else {
				console.log('has a mask');
			}
			$('body').addClass('unmovable');
		},0);
		// img_full.show();
		$('body').on('DOMMouseScroll mousescroll touchmove',function (e) {
			e.preventDefault();
		});
		// $('body').addClass('unmovable');
 	});


	touch.on('body','tap','.full-box',function (e) {
		if (e.target != $('.img-full img').get(0)) {
			$('.full-box').remove();
			$('body').removeClass('unmovable');
			$('body').off('DOMMouseScroll mousewheel touchmove');
			// $('body').removeClass('unmovable');
		}
	});

	//获取当前时间
	function getTime () {
		time = new Date();
		var mytime=time.toLocaleTimeString(); 
		return mytime;
	}


	function add (sender,content) {
		if (sender == 'pc') {
			d_box.append(ele_dialogue_pc);
			$('.dialogue').last().find('.bubble').append(content);
		} else if (sender == 'user') {
			d_box.append(ele_dialogue_user);
			$('.dialogue').last().find('.bubble').append(content);
		} else if (sender == 'answer') {
			$('.js-container').append(content);
			touch.on('.dialogue-box','tap','.js-img',function (e) {
				// showImg();
				ele_full_img = '<div class="full-box"><div class="img-full "><img src="' + $(this).attr('src') + '" alt=""></div><div class="close"></div></div>';
				scroll = $(window).scrollTop();
				w_h = $(window).height();
				ap = setTimeout(function () {
					if ($('.wrap .full-box').length == 0) {
						wrap.append(ele_full_img);
						$('.full-box').css({height:w_h,top:scroll});
					} else {
						console.log('has a mask');
					}
					$('body').addClass('unmovable');
				},0);
				// img_full.show();
				$('body').on('DOMMouseScroll mousescroll touchmove',function (e) {
					e.preventDefault();
				});
				// $('body').addClass('unmovable');
	 		});
		} else {
			console.error('wrong parameter!');
		}
		//清空数据
		emo_content = '';
		//自动滚动到底部
		scroll_btm();
		//给按钮赋予点击事件
		touch.on('.more','touchend',function (e) {
			touch.off('.dialogue-box','tap','.js-img');
			answer_order = 0;
			type = $(this).attr('data-type');
			$('.js-footer').remove();
			answer_content = '<footer class="ui-animate-delay ui-animate-moveT js-footer">';
	 		analyse();
	 		e.stopPropagation();
	 	});
	}

	function scroll_btm() {
		var container_h = $('.js-container').height();
		$('body').animate({scrollTop:container_h},800);
	}