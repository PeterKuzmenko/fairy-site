var swiper = new Swiper('.swiper-container', {
    speed: 1200,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
});

$(".buttonDrop").click(function(){
  $("."+$(this).attr("data-class")).toggleClass("active");
  $(this).toggleClass("active");
});

var res = $(".dropDown-menu");
$('[data-class^="m"]').on("click", funk);

$(document).click(function(e) {
  if ($(e.target).closest(res).length || $(e.target).closest('.menu-a').length) return;
  res.fadeOut(100);
});
function funk(){
  $(this).toggleClass("show");
  var link = $(this).attr('data-class'),
      el = $('.dropDown-menu.'+link);
  if(el.css("display") == "none"){
    res.hide();
    el.slideToggle(400);
  }
  else{
    el.slideToggle(400);
  }
}

$(function() {
  function ScrolClass() {
    if($(this).scrollTop() != 0) {
            $('.top-panel-menu').addClass('active');
            $('.top-panel-menu .right').addClass('active');
            $('.right-info').addClass('unactive');
          } else {
            $('.top-panel-menu').removeClass('active');
            $('.top-panel-menu .right').removeClass('active');
            $('.right-info').removeClass('unactive');
          }
    }
    $(window).scroll(function() {
      ScrolClass();
    });
    $(document).ready(function() {
      ScrolClass();
    });
});

// $(document).ready(function() { 
//   var overlay = $('#overlay'); 
//   var open_modal = $('.open_modal'); 
//   var close = $('.modal_close, #overlay'); 
//   var modal = $('.modal_div'); 
//    open_modal.click( function(event){ 
//        event.preventDefault(); 
//        var div = $(this).attr('href'); 
//        overlay.fadeIn(400, 
//            function(){ 
//                $(div) 
//                    .css('display', 'flex') 
//                    .animate({opacity: 1, top: '0px'}, 200); 
//        });
//    });

//    close.click( function(){
//           modal 
//            .animate({opacity: 0, top: '0px'}, 200, 
//                function(){ 
//                    $(this).css('display', 'none');
//                    overlay.fadeOut(400); 
//                }
//            );
//    });
// });
