/**
 * Created by DELL on 2017/11/7.
 */

$(function () {
    //banner
    $('.banner-list').bxSlider({
        auto:true,
    });
    $('.banner .bx-prev').html('');
    $('.banner .bx-next').html('');
    $('.banner .bx-pager-link').html('');
    $('.banner .bx-pager').css('margin-left',-($('.bx-pager').width())/2 + 'px')
})
