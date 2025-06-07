$(function(){
    
///////menu///////////
      $('.menu_btn').on('click', function(e) {
      e.preventDefault;
      $('.menu_ul').toggleClass('active');
    });
    
      $('.overlay').on('click', function(e) {
      e.preventDefault;
      $('.menu_ul').toggleClass('active');
    });
     
    
    $(window).resize(function() {
        if($(window).width() < 992){
            $('.menu_ul').removeClass('active');
        }
    })
    
    
       //////////////////////////////////////////для изменения menu
    
       function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = $(".menu");
            if (distanceY > shrinkOn) {
                header.addClass("sma");
            } else {
                if ( header.hasClass("sma")) {
                    header.removeClass("sma");
                }
            }
        });
    }
    window.onload = init();
    
    
    
///////menu end ///////////

/////////menu плавный скрул///////////////



var link = $('.menu_ul a');             
    
link.on('click', function (e) {
    e.preventDefault();          //вырубает сылк
    
    link.removeClass('active'); //заменяет клаcс актив
    var selector = $(this).addClass('active').attr('href');
    var target = $(selector);
    
    $('html, body').animate({ scrollTop: target.offset().top - 70
    }, 900 )
})
  

//-------------  передает цвета link ---------------
$(window).scroll(function () {
        
  
  var scroll = $(window).scrollTop();
  link.each(function (){
     var selector = $(this).attr('href');
     var target = $(selector);
     if(scroll >= target.offset().top - 200 ){
         link.removeClass('active');
         $(this).addClass('active');
     }
  })
})

/////////menu плавный скрул конец///////////////
  
////////////// slider //////////////////


$('.slider_info').slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  draggable: false,
  
  responsive: [
    {
      breakpoint: 930,
      settings: {
        arrows: false, 
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 747,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        draggable: true
      }
    }
  ]
});



////////////// slider end //////////////


/////////загрузка////////////////////////




/////////загрузка конец/////////////////


/////////////////// табы //////////////////////



class tabs {
  constructor(argument){  

      $(argument).find('.content-teg').not('.active').hide();
      $(argument).find('.tab-item').click(function () {
          $(argument).find('.tab-item').removeClass('active').eq($(this).index()).addClass('active')
          $(argument).find('.content-teg').hide().eq($(this).index()).slideDown(200)
   }) ;
  
}
} 

var wrap = $('.portfolio');
for(let i of wrap){
 i = new tabs(i);
}



/////////////////// табы конец/////////////////


  })