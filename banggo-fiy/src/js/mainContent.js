$(function(){
	// 连接后端数据接口
	$.ajax({
		type: "GET",
	   	url: "../api/index_data.json",
	   	async: true,
	   	success: function(data){
	   		for(var i=0;i<data.goodslist.length;i++){
	   			createGoods(data.goodslist[i].goods,data.goodslist[i].content);
	   		}
	   		// 初始a标签
		    $('#main').on('mouseenter','a',function(){
		        $(this).css('text-decoration','none');
		    });
		    //移到商品上的效果
		  	$('img').hover(function(){
		        $('img').stop(true,true);
		        $(this).animate({opacity:'0.5'},500);
		    },function(){
		        $('img').stop(true,true);
		        $(this).animate({opacity:'1'},500);
		    });
	   	}
	});
	
	

	// 数据生成列表
	function createGoods(classname,obj){
		var remen = document.querySelector('.'+ classname +'');
		var ul = document.createElement('ul');
		remen.appendChild(ul);
		var content = '';
		content = obj.map(function(item,idex){
			// 特殊摆放
			if(idex === 0){
				if(classname === 'manWear' || classname === 'shoeBag'){
					return `
						<li class='special_li'>
							<a href="#"><img class="special_img" src="../${item.url}" alt="" /></a> 
						</li>
					`
				}else{
					return `
						<li>
							<a href="#"><img src="../${item.url}" alt="" /></a> 
							<p><a href="#">${item.title}</a><span class="discount fr">${item.discount}</span></p>
							<p><a href="#">${item.production}</a></p>
							<p class="price"><span>${item.currentPrice}</span><del><span>${item.originPrice}</span></del></p>
						</li>
					`
				}
			}else if(idex === 3){
				if(classname === 'womenWear' || classname === 'childWear'){
					return `
						<li class='special_li'>
							<a href="#"><img class="special_img" src="../${item.url}" alt="" /></a> 
						</li>
					`
				}else{
					return `
						<li>
							<a href="#"><img src="../${item.url}" alt="" /></a> 
							<p><a href="#">${item.title}</a><span class="discount fr">${item.discount}</span></p>
							<p><a href="#">${item.production}</a></p>
							<p class="price"><span>${item.currentPrice}</span><del><span>${item.originPrice}</span></del></p>
						</li>
					`
				}
			}else{
				return `
					<li>
						<a href="#"><img src="../${item.url}" alt="" /></a> 
						<p><a href="#">${item.title}</a><span class="discount fr">${item.discount}</span></p>
						<p><a href="#">${item.production}</a></p>
						<p class="price"><span>${item.currentPrice}</span><del><span>${item.originPrice}</span></del></p>
					</li>
				`
			}

		}).join('');

		ul.innerHTML = content;
	}

})