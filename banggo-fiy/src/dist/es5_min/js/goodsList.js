'use strict';

$(function () {

	// 菜单隐藏显示
	$('#occasion').hover(function () {
		$('.occasion').css('display', 'block');
	}, function () {
		$('.occasion').css('display', 'none');
	});
	$('button li').hover(function () {
		$(this).css('background', '#ccc');
	}, function () {
		$(this).css('background', '#fff');
	});
	// 折扣开关
	var discountSwitch = true;
	// 价格开关
	var priceSwitch = true;
	// 暂存原来的照片路径
	var imgSrc = '';
	// 商品列表显示
	var ul = document.createElement('ul');
	$.ajax({
		type: 'get',
		async: true,
		url: '../api/goodsList_data.json',
		success: function success(data) {
			createGoods(data.goodslist[0].content);
			// 显示商品总数量
			$('.totalGoodNum').text('' + data.goodslist[0].content.length);
		}
	});

	// 折扣排序
	$('.discountSort').click(function () {
		$.ajax({
			type: 'get',
			async: true,
			url: '../api/goodsList_data.json',
			success: function success(data) {
				var sortVal = data.goodslist[0].content.sort(function (a, b) {
					if (discountSwitch) {
						return parseFloat(a.discount) - parseFloat(b.discount);
					} else {
						return parseFloat(b.discount) - parseFloat(a.discount);
					}
				});
				createGoods(sortVal);
			}
		});
		discountSwitch = !discountSwitch;
	});

	// 默认排序
	$('.defaultSort').click(function () {
		$.ajax({
			type: 'get',
			async: true,
			url: '../api/goodsList_data.json',
			success: function success(data) {
				createGoods(data.goodslist[0].content);
				// 显示商品总数量
				$('.totalGoodNum').text('' + data.goodslist[0].content.length);
			}
		});
	});
	// 价格排序
	$('.priceSort').click(function () {
		$.ajax({
			type: 'get',
			async: true,
			url: '../api/goodsList_data.json',
			success: function success(data) {
				var sortVal = data.goodslist[0].content.sort(function (a, b) {
					if (priceSwitch) {
						return a.currentPrice - b.currentPrice;
					} else {
						return b.currentPrice - a.currentPrice;
					}
				});
				createGoods(sortVal);
			}
		});
		priceSwitch = !priceSwitch;
	});
	// 点击排序按钮效果
	$('.sort span').click(function () {
		$('.sort span').css({
			'background': '#f0f0f0',
			'color': '#333'
		});
		$(this).css({
			'background': 'red',
			'color': '#fff'
		});
	});
	// 放大镜效果
	$('.goodslist').on('mouseenter', '.smallImg', function () {
		// 替换新照并暂存原照
		$oldImg = $(this).parent().parent().children().eq(0).children().eq(0);
		$newImg = $(this)[0].src;
		imgSrc = $oldImg[0].src;
		$oldImg[0].src = $newImg;

		$(this).css('border', '1px solid red');
	});
	$('.goodslist').on('mouseout', '.smallImg', function () {
		$oldImg = $(this).parent().parent().children().eq(0).children().eq(0);
		$oldImg[0].src = imgSrc;

		$(this).css('border', '1px solid #ccc');
	});

	// 点击商品传送参数
	$(".goodslist").on('click', 'a', function (event) {
		event.preventDefault();
		// 获取商品id名
		var goodId = $(this).closest('li')[0].className;
		$.ajax({
			type: 'get',
			url: '../api/connectGoodsListDB.php',
			data: 'goodId=' + goodId,
			success: function success(data) {
				var good = JSON.parse(data);
				Cookie.set('good', JSON.stringify(good[0]));
				location = '../html/goodDetail.html';
			}
		});
	});

	// 数据生成列表
	function createGoods(obj) {
		$('.page').remove();
		var sp = '';
		// var li = document.createElement('li');

		var content = '';

		content = obj.map(function (item) {
			return '\n\t\t\t\t\t\t<li class="' + item.goodId + '">\n\t\t\t\t\t\t\t<a href="#"><img src="../' + item.url + '" alt="" /></a> \n\t\t\t\t\t\t\t<p><a href="#">' + item.title + '</a><span class="discount fr">' + item.discount + '</span></p>\n\t\t\t\t\t\t\t<p><a href="#">' + item.production + '</a></p>\n\t\t\t\t\t\t\t<p class="price"><span>' + item.currentPrice + '</span><del><span>' + item.originPrice + '</span></del></p>\n\t\t\t\t\t\t\t<p>' + item.imgIntroduction.map(function (item2) {
				return '\n\t\t\t\t\t\t\t\t\t\t\t<img src="../' + item2 + '" alt="" class="smallImg"/>\n\t\t\t\t\t\t\t\t\t\t';
			}).join('') + '</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t';
		}).join('');

		ul.innerHTML = content;
		$('.goodslist').append(ul);

		var $page = $('<p style="text-align:center;" class="page"><span style="display:inline-block;width:70px;"><a href="javascript:void(0)">\u4E0A\u4E00\u9875</a></span></p>');
		$page[0].innerHTML += createPage();
		$page[0].innerHTML += '<span style="display:inline-block;width:70px;"><a href="javascript:void(0)">\u4E0B\u4E00\u9875</a></span>';
		$('.goodslist').append($page);
		function createPage() {
			for (var i = 0; i < Math.ceil(obj.length / 5); i++) {
				sp += '<span style="display:inline-block;width:70px;"><a href="javascript:void(0)">' + (i + 1) + '</a></span>';
			}
			return sp;
		}
	}
});