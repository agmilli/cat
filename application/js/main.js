//-------------顶部菜单--------------// 
$('.i_click').click(function(e) {
	$(this).parent().find('ul').stop();
	$(this).parent().find('ul').toggle(400);
	e.stopPropagation();
});
// 瀑布流
$(function () {
	fun_l(); 
})
$(window).on("resize", function(){
	fun_l();w();
})
$(window).on('scroll',function(){
	var flag=$(document).height()-($(window).scrollTop()+$(window).height());
	if(flag==0){
		fun_l();
	}
})
function fun_l(){
    var arr=[];
    $('.img-list-hover li').each(function(index){
    	var deviceWidth=document.documentElement.clientWidth;
        var pinh=$(this).height();//获取遍历出所有图片的高度
        var minh=Math.min.apply(null,arr);
        //var i=$.inArray(minh, arr); //获取数组最小值的下标 方法一
        var i=minIndex(arr,minh);//获取数组最小值的下标 方法二
        if(index<2){
            arr[index]=pinh;
        }else{
            $(this).css({
                'position':'absolute',
                'top':minh,
                'left':$('.img-list-hover li').eq(i).position().left
            })
            arr[i]+=pinh;//*让最小的高度加上叠加图片的高度
            console.log(1)
        } 
        if(deviceWidth>750){
			$('.img-list-hover').height(minh+$(this).height());
		}else if(deviceWidth<320){
			$('.img-list-hover').height(minh+$(this).height());
		}else {
			$('.img-list-hover').height(((minh+$(this).height())/50)+"rem");
		}
        
    })
}
//pc端 获取数组最小值得下标 可用$.inArray(value,arr)代替
function minIndex(arr,minh){
    for(var i in arr){
        if(arr[i]==minh){
            return i;
        }
    }
} 



