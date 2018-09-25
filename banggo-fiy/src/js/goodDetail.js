$(function() {
    var good = Cookie.get('good');
    good = JSON.parse(good);
    var cookImg = JSON.parse(good.imgIntroduction);
    // 获取选择商品的颜色大小
    var currentColor = '';
    var currentSize ='';
    // 生成商品数据
    $('.title').text(good.title + good.production);
    $('.currentPrice').text(good.currentPrice);
    $('.originPrice').text(good.originPrice);
    $('.discount').text(good.discount);
    // 选择码数
    $('.size').on('click','li',function(){
        $(this).parent().children().css('border-color','#ccc');
        $(this).css('border-color','red');
        currentSize = $(this).text();
    });
     // 选择码数
    $('.color').on('click','li',function(){
        $(this).parent().children().css('border-color','#ccc');
        $(this).css('border-color','red');
        currentColor = $(this).text();
    });
    
    
    // 数量增减
    $('.buyNum').on('click','.jian',function(){
    	var num = $(this).next().val();
    	num--;
    	if(num<1){
    		$(this).next().val('1');
    	}else{
    		$(this).next().val(num);
    	}
    })
    $('.buyNum').on('click','.jia',function(){
    	var num = $(this).prev().val();
    	num++;
    	if(num>99){
    		$(this).prev().val('1');
    	}else{
    		$(this).prev().val(num);
    	}
    })
    // 浏览记录
    createGoodHistory(good);
    
   
    // 添加进购物车
    $('.addCart').click(function(){
        var qty = $('.jian').next().val();
        $.ajax({
            type: 'get',
            async: true,
            url: '../api/updateGoodsCar.php',
            data: {
                'goodId':good.goodId,
                'qty':qty,
                'url':good.url,
                'title':good.title+good.production,
                'price':good.currentPrice,
                'size': currentSize,
                'color': currentColor
            },

            success: function(data){
                if(confirm('加入购物车成功！是否选择进入购入车进行结算')){
                    location = '../html/carList.html';
                }else{}
            }
        })
    })

    // 创建浏览记录节点
    function createGoodHistory(obj){
        
        // 浏览记录存进数据库
        $.ajax({
            type: 'get',
            async: true,
            url: '../api/showHistory_store.php',
            data: {
                'goodId': good.goodId,
                'title': good.production,
                'currentPrice': good.currentPrice,
                'url': good.url,
                'originPrice': good.originPrice
            },
            success: function(data){
            }
        })
        // 渲染页面
        $.ajax({
            type: 'get',
            async: true,
            url: '../api/showHistory_render.php',
            success: function(data){
                var goodsHislist = JSON.parse(data);
                goodsHislist.map(function(item){
                    var li = document.createElement('li');
                    var img = document.createElement('img');
                    img.src = '../' + item.url;
                    $(img).css({
                        width: '160px',
                        height:'160px',
                        padding: '10px'
                    });
                    var $p = $(`<p>${item.title}</p><p>￥ ${item.currentPrice}</p>`);
                    li.appendChild(img);
                    $(li).append($p);
                    $('.showGood').append(li);
                })
            }
        })
    }
})