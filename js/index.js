(function($){

    // 메인구역 네비게이션
    $('#main-nav .nav-btn').on('click', function(e){
        e.preventDefault();
        $('#main-nav .main-nav-content > ul').slideToggle();
        $('#main-nav .nav-btn').toggleClass('on')
    })

    // 메인구역 배너
    $('#main-banner .banner-inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });

    // col3 > 레이어 팝업
    $('.popup .layer').on('click', function(e){
        e.preventDefault();
        $("#layer").show();
    });
    $('#layer .close').on('click', function(e){
        e.preventDefault();
        $('#layer').hide();
    });

    // col3 > 윈도우 팝업
    $('.popup .window').on('click', function(e){
        e.preventDefault();
        window.open(
            'windowPopup.html', 'window popup', 'width=800, height=560, top=50, left=50, scrollbars=0, toolbar=0, menubar=no'
        );
    });

    // col3 > 라이트박스 팝업
    
    // col5 > 탭 메뉴
    let $tab_menu = $('.col5 .tab-menu');
    $tab_menu.find('.tab-content').hide();
    $tab_menu.find('li.on .tab-content').show();
    $('.tab-menu > ul > li > a').on('click', function(e){
        e.preventDefault();
        $(this).parent('li').addClass('on').children('.tab-content').show();
        $(this).parent('li.on').siblings().removeClass('on').children('.tab-content').hide();
    })

    // col6 > 갤러리
    $('.gallery-img').slick({
        dots: true,
        fade: true,
        pauseOnHover: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1
    });
        
    $('.pause').on('click', function(){
        $('.gallery-img').slick('slickPause');
    });
    $('.play').on('click', function(){
        $('.gallery-img').slick('slickPlay');
    });
    
    $('.prev').on('click', function(){
        $('.gallery-img').slick('slickPrev');
    });
    
    $('.next').on('click', function(){
        $('.gallery-img').slick('slickNext');
    });
    
})(jQuery)