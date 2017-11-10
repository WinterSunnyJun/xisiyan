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
    //招商加盟
    $('#jms-show').bxSlider({
        auto:true,
        slideMargin:30,
        minSlides:5,
        maxSlides:5,
        moveSlides:5,
        slideWidth:216,
        autoHover:true

    });
    $('.jms-show-wrapper .bx-pager-link').html('');
    $('.jms-show-wrapper .bx-pager').css('margin-left',-$('.bx-pager').width()/2);

//    产品详情
    $('.cpxq-pic-btn ol li').hover(function () {
        var Now = $(this).index();
        $('.cpxq-pic-btn ol li').eq(Now).addClass('active').siblings().removeClass('active');
        $('.cpxq-pic-list li').eq(Now).show().siblings().hide();
    })

    // var moveRange = $('.cpxq-pic-btn ol li').outerWidth(true)+ 'px';
    // var liSum = $('.cpxq-pic-btn ol li').length;
    // var cpCount = 0;
    // function getPost() {
    //     var l = 0;
    //     var t = 0;
    //
    // }
    // $('#cpL').click(function () {
        // cpCount++;
        // if(cpCount > liSum){
        //     cpCount = 0;
        // }

        // $('.cpxq-pic-btn ol').animate({left: - moveRange + 'px'});
    // })
    // $('#cpR').click(function () {
        // cpCount++;
        // if(cpCount > liSum){
        //     cpCount = 0;
        // }

        // $('.cpxq-pic-btn ol').animate({left:  moveRange + 'px'});
    // })

    $('.cpxq-pic-btnbox ol').bxSlider({
        slideMargin:36,
        minSlides:4,
        maxSlides:4,
        moveSlides:1,
        slideWidth:108
    })
    $('.cpxq-pic-btnbox .bx-prev').html('');
    $('.cpxq-pic-btnbox .bx-next').html('');

})
