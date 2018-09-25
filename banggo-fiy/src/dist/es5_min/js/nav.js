'use strict';

$(function () {
	$('.mySearch').on('mouseenter', 'input', function () {
		$(this).css({
			'box-shadow': 'none',
			'border-color': 'red'
		});
	});

	// 移到分类按钮
	$('.nav').on('mouseenter', 'a', function () {
		$(this).css('text-decoration', 'none');
	});

	// 生成导航列表
	createList(3, [{
		title: '男生热门',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '女生热门',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '儿童热门',
		content: [1, 2, 3, 4, 5]
	}], 'hotSell');

	createList(3, [{
		title: '上装',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '下装',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '内衣',
		content: [1, 2, 3, 4, 5]
	}], 'man');

	createList(4, [{
		title: '上装',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '下装',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '裙装',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '内衣',
		content: [1, 2, 3, 4, 5]
	}], 'women');

	createList(4, [{
		title: '上装',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '下装',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '连身',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '搭配',
		content: [1, 2, 3, 4, 5]
	}], 'child');

	createList(2, [{
		title: '人气男鞋',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '人气女鞋',
		content: [1, 2, 3, 4, 5]
	}], 'shoe');

	createList(2, [{
		title: '品质男包',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '潮流女包',
		content: [1, 2, 3, 4, 5]
	}], 'bag');

	createList(2, [{
		title: '男配饰',
		content: [1, 2, 3, 4, 5]
	}, {
		title: '女配饰',
		content: [1, 2, 3, 4, 5]
	}], 'decoration');

	function createList(col, obj, classname) {
		var div = document.createElement('div');
		// 数据生成隐藏列表
		for (var i = 0; i < col; i++) {
			var dl = document.createElement('dl');
			var content = obj[i].content.map(function (item) {
				return '\n\t\t\t\t\t<dd>' + item + '</dd>\n\t\t\t\t';
			}).join('');
			dl.innerHTML = '\n\t\t\t\t\t\t\t<dt>' + obj[i].title + '</dt>\n\t\t\t\t\t\t' + content;
			$(dl).css({
				'border-right': '1px solid #ccc',
				'float': 'left',
				'width': '80',
				'text-align': 'center'
			});
			div.appendChild(dl);
		}
		div.className = classname;
		$(div).css({
			'position': 'absolute',
			'display': 'none',
			'z-index': 2,
			'background': '#fff'
		});
		$('.navBottomLeft')[0].appendChild(div);
		$('.navBottomLeft dl').eq(-1).css('border-right', 'none');
	}
	// 标签
	$('.navBottomLeft').on('mouseenter', 'a', function (e) {
		var idx = e.target.getAttribute('data-idx');

		if (idx === '2') {
			hideDiv();
			$('.hotSell').css({
				'display': 'block',
				'left': $(this).outerWidth(true)
			});
		}
		if (idx === '3') {
			hideDiv();
			$('.man').css({
				'display': 'block',
				'left': e.target.offsetLeft - $(this).outerWidth(true)
			});
		}
		if (idx === '4') {
			hideDiv();
			$('.women').css({
				'display': 'block',
				'left': e.target.offsetLeft - $(this).outerWidth(true)
			});
		}
		if (idx === '5') {
			hideDiv();
			$('.child').css({
				'display': 'block',
				'left': e.target.offsetLeft - $(this).outerWidth(true)
			});
		}
		if (idx === '6') {
			hideDiv();
			$('.shoe').css({
				'display': 'block',
				'left': e.target.offsetLeft - $(this).outerWidth(true)
			});
		}
		if (idx === '7') {
			hideDiv();
			$('.bag').css({
				'display': 'block',
				'left': e.target.offsetLeft - $(this).outerWidth(true)
			});
		}
		if (idx === '8') {
			hideDiv();
			$('.decoration').css({
				'display': 'block',
				'left': e.target.offsetLeft - $(this).outerWidth(true)
			});
		}
	});

	$('.navBottomLeft').on('mouseleave', function () {
		hideDiv();
	});

	// 所有div隐藏
	function hideDiv() {
		for (var j = 0; j < $('.navBottomLeft div').length; j++) {
			$('.navBottomLeft div').eq(j).css('display', 'none');
		}
	}
});