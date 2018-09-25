"use strict";

$(function () {
	// 连接后端数据接口
	$.ajax({
		type: "GET",
		url: "../api/index_data.json",
		async: true,
		success: function success(data) {
			for (var i = 0; i < data.goodslist.length; i++) {
				createGoods(data.goodslist[i].goods, data.goodslist[i].content);
			}
			// 初始a标签
			$('#main').on('mouseenter', 'a', function () {
				$(this).css('text-decoration', 'none');
			});
			//移到商品上的效果
			$('img').hover(function () {
				$('img').stop(true, true);
				$(this).animate({ opacity: '0.5' }, 500);
			}, function () {
				$('img').stop(true, true);
				$(this).animate({ opacity: '1' }, 500);
			});
		}
	});

	// 数据生成列表
	function createGoods(classname, obj) {
		var remen = document.querySelector('.' + classname + '');
		var ul = document.createElement('ul');
		remen.appendChild(ul);
		var content = '';
		content = obj.map(function (item, idex) {
			// 特殊摆放
			if (idex === 0) {
				if (classname === 'manWear' || classname === 'shoeBag') {
					return "\n\t\t\t\t\t\t<li class='special_li'>\n\t\t\t\t\t\t\t<a href=\"#\"><img class=\"special_img\" src=\"../" + item.url + "\" alt=\"\" /></a> \n\t\t\t\t\t\t</li>\n\t\t\t\t\t";
				} else {
					return "\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../" + item.url + "\" alt=\"\" /></a> \n\t\t\t\t\t\t\t<p><a href=\"#\">" + item.title + "</a><span class=\"discount fr\">" + item.discount + "</span></p>\n\t\t\t\t\t\t\t<p><a href=\"#\">" + item.production + "</a></p>\n\t\t\t\t\t\t\t<p class=\"price\"><span>" + item.currentPrice + "</span><del><span>" + item.originPrice + "</span></del></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t";
				}
			} else if (idex === 3) {
				if (classname === 'womenWear' || classname === 'childWear') {
					return "\n\t\t\t\t\t\t<li class='special_li'>\n\t\t\t\t\t\t\t<a href=\"#\"><img class=\"special_img\" src=\"../" + item.url + "\" alt=\"\" /></a> \n\t\t\t\t\t\t</li>\n\t\t\t\t\t";
				} else {
					return "\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../" + item.url + "\" alt=\"\" /></a> \n\t\t\t\t\t\t\t<p><a href=\"#\">" + item.title + "</a><span class=\"discount fr\">" + item.discount + "</span></p>\n\t\t\t\t\t\t\t<p><a href=\"#\">" + item.production + "</a></p>\n\t\t\t\t\t\t\t<p class=\"price\"><span>" + item.currentPrice + "</span><del><span>" + item.originPrice + "</span></del></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t";
				}
			} else {
				return "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><img src=\"../" + item.url + "\" alt=\"\" /></a> \n\t\t\t\t\t\t<p><a href=\"#\">" + item.title + "</a><span class=\"discount fr\">" + item.discount + "</span></p>\n\t\t\t\t\t\t<p><a href=\"#\">" + item.production + "</a></p>\n\t\t\t\t\t\t<p class=\"price\"><span>" + item.currentPrice + "</span><del><span>" + item.originPrice + "</span></del></p>\n\t\t\t\t\t</li>\n\t\t\t\t";
			}
		}).join('');

		ul.innerHTML = content;
	}
});