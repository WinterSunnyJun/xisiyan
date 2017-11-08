$(function () {
    //banner
    $('.banner-list').bxSlider({
        auto:true,
    });
    $('.banner .bx-prev').html('');
    $('.banner .bx-next').html('');
    $('.banner .bx-pager-link').html('');
    $('.banner .bx-pager').css('margin-left',-($('.bx-pager').width())/2 + 'px');

    $('.index-news-title').hover(function () {
        $('.index-news-hide').show();
    })

    $('.index-news-hide').mouseleave(function () {
        $(this).hide();
    })

    $('.news-hide-btn li').click(function () {
        var Now = $(this).index();
        $('.news-hide-btn li').eq(Now).addClass('active').siblings().removeClass('active');
        $('.index-news-hide dd > .news-hide-item').eq(Now).show().siblings().hide();
    })
})
