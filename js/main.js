$(function(){
//      $('body *').hide();
//        $('body').html('<span class="loading">loading...</span"')
    //All Varaibls
    var theHeader = $('.header'), //selector
        winHeight=$(window).height() , //window Height
        winWidth= $(window).width() ,   //window widht
        theListMenu=$('.navbar .right')   //selector


    //navbar============================================================
    
    $('.Links li a').on('click',function(){
        $(this).parent('li').addClass('active')
               .siblings().removeClass('active');
        
    });


    $('.Links li').on('click',function(){
        var theID ='#'+ $(this).children("a").data("scrolling")
        console.log(theID)
        $('html,body').animate({
            scrollTop:$(theID).offset().top
            },1000);
        
    });
    
    //the menu Icon
    $('.menu-anim-btn').on('click',function(){
        $(this).toggleClass('active');
        if ($(this).hasClass('active')){
            theListMenu.fadeIn(800);
        }else{
            theListMenu.fadeOut(800);
        }
    })
    //header============================================================
    //the header Full Screen
    var theHeader = $('.header')
    theHeader.css({
        'height': winHeight
    });
    //the postion of The Sliders
    // $('.slider-continer').offset({
    //     top:(winHeight-$(this).height())/2,
    //     left:(winWidth-$(this).width())/2
    // })

    
    //Resize
    $(window).resize(function(){
       //Change the Size Of The Header With the Size Of Window
        theHeader.css({
            height:$(window).height(),
            width:$(window).width()
        });

        $('.slider li .slider-continer').css({
            height:'100%',
            width:$('.bx-wrapper').width
        });
        
        // if($(this).width()<1200){
        //     $('.continer').width($(this).width())
        // }
    });

    
        

//List-img-name active

$('.list-img-name ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
});

//All The Plugins I add
//BxSlider.js{

 
        $('.Testmoials .slider').bxSlider({
            auto:true,
            pager:false,
            controls:false
        })
        
    $('.slider').bxSlider();
//}
//MixItUp.js{
    var mixer = mixitup('.container');




//}

//     $('*').on('load',function(){
//         $('body *').show();
//        $('.loading').fide();
//     });
});
