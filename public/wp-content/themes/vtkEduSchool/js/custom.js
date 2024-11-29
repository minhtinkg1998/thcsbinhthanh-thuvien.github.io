jQuery(document).ready(function($) {
  //GoTop
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#backToTop').fadeIn('slow');
    } else {
      $('#backToTop').fadeOut('slow');
    }
  });
  $('#backToTop').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
  $('.post-state').each(function(){
      $(this).text('Câu hỏi mới và chờ trả lời');
      $(this).addClass('changeText');
  });
});

$(document).ready(function(){
  $('#newsevent-slider').on('slid.bs.carousel', function () {
    $holder = $( "ul.newsevent-slider-more li.active" );
    $holder.removeClass('active');
    var idx = $('.newsevent-slider div.active').index('.newsevent-slider div.item');
    $('ul.newsevent-slider-more li[data-slide-to="'+ idx+'"]').addClass('active');
  });

  $('ul.newsevent-slider-more li').on("click",function(){ 
    $('ul.newsevent-slider-more li.active').removeClass("active");
    $(this).addClass("active");
  });

  
});


(function($){
  $(window).load(function(){
    $(".w-notification-content").mCustomScrollbar({
      setHeight: '250',
      theme: 'dark-3',
      scrollbarPosition: 'outside',
    });

    $(".tab-pane-news").mCustomScrollbar({
      setHeight: '400',
      theme: 'dark-3',
      scrollbarPosition: 'outside',
    });

    $(".rss-news-content").mCustomScrollbar({
      setHeight: '280',
      theme: 'dark-3',
      scrollbarPosition: 'outside',
    });

    $(".rss-content").mCustomScrollbar({
      setHeight: '300',
      theme: 'dark-3',
      scrollbarPosition: 'outside',
    });
    $(".news-block-content-cus").mCustomScrollbar({
      setHeight: '300',
      theme: 'dark-3',
      scrollbarPosition: 'outside',
    });
  });
})(jQuery);


$(document).ready(function(){
  $("a[rel^='prettyPhoto']").prettyPhoto();
});

function readArticle(id){
  var audio = $("#"+id+" audio")[0];
  audio.src = 'https://support.lsdsoftware.com/read-aloud/speak/vi/Whisper?q='+encodeURIComponent($("#"+id+" #title-post").text()); 
  audio.play(); 
  var text = unescape($('#'+id+' #content-post').text()), i = 0; 
  var f = function(){ 
    if(i < text.length) { 
      var p = text.indexOf(',', i + 50); 
      for(var j in { '.':1, ':':1, '(':1, ')':1, '"':1, ' ':1})
        { 
          if((p > i + 100) || (p == -1)) 
            p = text.indexOf(j, i + 50); 
          else 
            break; 
        }
        if(p == -1) { 
          p = Math.min(i+100, text.length); 
        }
        audio.src = 'https://support.lsdsoftware.com/read-aloud/speak/vi/Whisper?q='+encodeURIComponent(text.substr(i, p - i)); 
        i = p + 1; 
        audio.play(); 
      }
  };
  audio.addEventListener('ended', f); audio.addEventListener('error', f);
}