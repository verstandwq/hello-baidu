// 百度首页交互
var baidu = {
        init: function() {
            this.baiduSetting();
        },
        baiduSetting: function() {
            $("#navMore,#moreProduct").mouseover(function() {
                $("#moreProduct").show();
            }).mouseout(function() {
                $("#moreProduct").hide();
            })
        }
    }
    // 加载执行
$(function() {
        baidu.init();
    })
    //滚动条事件
$(document).ready(function() {
    var top1 = $(window).scrollTop();
    $(window).scroll(function() {
        var top2 = $(window).scrollTop();
        if (top2 > top1) {
            $(".top-search").show();
        } else {
            $(".top-search").hide();
        }
    });
    //显示隐藏换肤菜单
    $(".skin").click(function() {
        $(".head_skin").toggle();
    });
    $(".bg_title").click(function() {
        $(".head_skin").hide();
    });


    // 标签切换
    $(".menu_item").click(function() {
        var tab = $(this).attr("data-id");
        $(this).addClass("current").siblings().removeClass("current");
        $(this).parent().parent().siblings().removeClass("current");
        $(this).siblings().children().children().removeClass("current");
        $("#" + tab).show().siblings().hide();

    });
    // 猜你喜欢导航标签鼠标划过显示隐藏
    $(".nav_block").mouseenter(function() {
        $(this).siblings(".fanli_inner").show();
    });
    $(".nav_block").mouseleave(function() {
        $(this).siblings(".fanli_inner").hide();
    });

    // 滚动加载更多内容
    $("#container").mousewheel(function(event, delta) {

        if (delta < 0) {

            var $dataid = $(".current").attr("data-id");

            $("#" + $dataid).removeClass("content_inner");
        }
    });

    // 返回顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#top_feed").fadeIn(1500);
        } else {
            $("#top_feed").fadeOut(1500);
        }
        $("#top_feed").click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 100);
            return false;
        });
        // 结束动画
        if ($('body,html').is(':animated')) {
            $('body,html').stop(true, true);
        }
    });

    //点击页面空白处隐藏换肤下拉

    // 换肤
    var i = 2;
    $(".skin_bgcon img").hover(function() {
        i = $(this).attr("data-skin");
        $(".skin_content img").attr("src", '../img/skin'  + i + '.jpg');
    })
    $(".skin_bgcon img").click(function() {
        i = $(this).attr("data-skin");
        $(".skin_container img").attr("src", '../img/skin' + i + 's.jpg');
        $.cookie("MyCssSkin", i, {
            path: '/',
            expires: 10
        }); //存储当前皮肤cookie
    });
    var cookie_skin = $.cookie("MyCssSkin"); //读取cookie
    //通过cookie加载上一次保存的皮肤
    if (cookie_skin) {
        $(".skin_container img").attr("src", '../img/skin' + cookie_skin + 's.jpg');
    }
    
});
