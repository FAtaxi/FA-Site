/* Several small javascript snippets */
+function($) {
var param = {
}

var isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));

if (isMobile) {
  $('body').addClass('mobile');
}

function getScrollBarWidth() { 
  var inner = document.createElement('p'); 
  inner.style.width = "100%"; 
  inner.style.height = "200px"; 

  var outer = document.createElement('div'); 
  outer.style.position = "absolute"; 
  outer.style.top = "0px"; 
  outer.style.left = "0px"; 
  outer.style.visibility = "hidden"; 
  outer.style.width = "200px"; 
  outer.style.height = "150px"; 
  outer.style.overflow = "hidden"; 
  outer.appendChild (inner); 

  document.body.appendChild (outer); 
  var w1 = inner.offsetWidth; 
  outer.style.overflow = 'scroll'; 
  var w2 = inner.offsetWidth; 
  if (w1 == w2) w2 = outer.clientWidth; 

  document.body.removeChild (outer); 

  return (w1 - w2); 
};

$(document).ready(function() {
  var $html = $('html');
  var $body = $('body');
  var scrollbarWidth = getScrollBarWidth();
  var $overlay = $('header .overlay');
  var $overlayContent = $('header .overlay-content');
  var $footer = $('footer');

  var $closeBtn = $overlay.find('.toggle-overlay-close');

  $overlay.on('show.bs.collapse', function(e) {
    const $button = $body.find('.toggle-overlay[data-target="#' + $(e.target).attr('id') + '"]');
    const offset = $button.offset();
    const topWindow = offset.top - $(window).scrollTop();
    const leftWindow = offset.left - $(window).scrollLeft();

    $button.css({
      top: topWindow,
      left: Math.round(leftWindow / ($(window).width() + scrollbarWidth) * 10000) / 100 + '%',
    });
    $button.addClass('overlay-show');

    $('header.sticky').css('padding-right', scrollbarWidth);
    $footer.css('margin-right', scrollbarWidth);
    $overlayContent.css('padding-right', scrollbarWidth);
    $html.css('margin-right', scrollbarWidth);
    $body.addClass('overlay-show');
  });

  $overlay.on('hide.bs.collapse', function(e) {
    const $button = $body.find('.toggle-overlay[data-target="#' + $(e.target).attr('id') + '"]');

    $button.css({
      top: '',
      left: '',
    });
    $button.removeClass('overlay-show');

    $('header.sticky').css('padding-right', '');
    $footer.css('margin-right', '');
    $overlayContent.css('padding-right', '');
    $html.css('margin-right', '');
    $body.removeClass('overlay-show');
  });


  // add the has-input class to all inputs on the contact page that contain an input
  const $inputs = $('.section :input');

  $inputs.on('change', function() {
    if ($(this).val().trim() === '') {
      $(this).removeClass('has-input');
    } else {
      $(this).addClass('has-input');
    }
  });

  const $inputsHeader = $('header #inlog :input');

  $inputsHeader.on('change', function() {
    if ($(this).val().trim() === '') {
      $(this).removeClass('has-input');
    } else {
      $(this).addClass('has-input');
    }
  });


});

//Main nav icon bars wrapper
$('#main-nav.overlay .overlay-content > div:first-of-type').append('<button type="button" class="toggle-overlay-close" data-toggle="collapse" data-target="#main-nav" style="margin-right: 0;" aria-label="toggle">' +
'<span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>  </button>');
                                    
}(jQuery);
/* Animate on scroll library */
+function($) {
var param = {
}

$(function() {
  AOS.init();
});
}(jQuery);
/* Last section home page intro animation */
+function($) {
var param = {
}

const isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));

$(document).ready(function() {
  const $window = $(window);
  const $upperHomeSection5 = $('#page .upper_ons-werk ~ .section_row_3');
  const $h3 = $upperHomeSection5.find('h3');
  const percentage = 0.3;

  if (!isMobile && $upperHomeSection5.length !== 0) {
    $window.on('scroll.introAni', function() {
      requestAnimationFrame(function() {
        const topWindow = $window.scrollTop();
        const windowHeight = $window.height();
        const offset = $upperHomeSection5.offset();

        if (topWindow + windowHeight > offset.top + $window.height() * percentage) {
          if (!$upperHomeSection5.hasClass('funni-animation-on')) {
            $upperHomeSection5.addClass('funni-animation-on');

            const $words = $h3.find('.word');

            timedAddClass($words);
          }

          if (!$upperHomeSection5.hasClass('funni-animation')) letFunnyAnimationAppear();
        } else {
          if ($upperHomeSection5.hasClass('funni-animation-on')) {
            const $words = $h3.find('.word');

            $upperHomeSection5.removeClass('done');
            $upperHomeSection5.removeClass('funni-animation-on');

            $words.removeClass('bottom');
          }
        }

      });
    });
  } else {
    $upperHomeSection5.addClass('done');
    $h3.addClass('down');
  }

  function letFunnyAnimationAppear() {
    $upperHomeSection5.addClass('funni-animation');
    $upperHomeSection5.addClass('funni-animation-on');

    const text = $h3.text().split(' ');
    const newText = [];
	
    let word;
    
    for (var i = 0; i < text.length; i++) {
      word = text[i];
      newText.push('<span class="word">' + word + '</span>');
    }

    $h3.html(newText.join(' '));
    $h3.addClass('down');

    const $words = $h3.find('.word');

    timedAddClass($words);
  }

  function timedAddClass($words) {
    $words.each(function(index) {
      const $this = $(this);

      $this.addClass('top');

      setTimeout(function() {
        $this.addClass('bottom');

        if (index === $words.length - 1) $upperHomeSection5.addClass('done');
      }, index * 70 + 50);

    });
  }

});
}(jQuery);
/* Fixed nav banner that is not boring */
+function($) {
var param = {
}

const isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));

$(document).ready(function() {
  const $sequence = $('#sequence-theme');
  const $firstSection = $('#page > .section_row_main');
  const $header = $('header');
  const headerHeight = $header.height();
  const height = headerHeight + ($sequence.length < 1 ?  $firstSection.outerHeight() : $sequence.height());
  const $logo = $header.find('#logo img');
  const $window = $(window);
  const $dummy = $('<div />').css('height', headerHeight).hide().insertAfter($header);

  function fixedNavBanner() {
    if ($window.scrollTop() > height - 350){
      if (!$header.hasClass('sticky')) {
        $dummy.show();
        
        $header.stop();
        $header.addClass("in");
        $header.addClass("sticky");

        $header.css('top', -$header.height());
        $header.animate({
          top: 0
        }, 200, function() {
          $header.css('top', '');
        });
      }
    } else if ($header.hasClass('in')) {      
      $header.removeClass("in");
      $header.stop();
      $header.css('top', 0);
      $header.animate({
        top: -$header.height()
      }, 200, function() {
        $dummy.hide();
        
        $header.css('top', '');
        $header.removeClass("sticky");
      });
    }
  }

  if (!isMobile) {
    $window.scroll(function() {
      requestAnimationFrame(fixedNavBanner);
    });
  }
});
}(jQuery);
/* Add a scroll class to .section elements */
+function($) {
var param = {
}

const isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));


$(document).ready(function() {
  const $window = $(window);

  // this is stupid, but I don't bother making it better.
  // check if the 3rd section row has 3 or more thumbnails
  // if so, assume we need to apply scroll classes to every induvidual
  const $customDefaults = $('.section_row_1 .ccon > div, .section_row_2 .thumbnail');
  const $last = $customDefaults.filter(':last');

  if ($customDefaults.length > 0 && !isMobile) {
    $customDefaults.addClass('scroll-candidate');
    
    $window.on('scroll.addclasscustomdefault', function() {
      requestAnimationFrame(function() {
        const topWindow = $window.scrollTop();
        const windowHeight = $window.height();

        $customDefaults.each(function() {
          const $this = $(this);
          const offset = $this.offset();

          if (topWindow + windowHeight > offset.top + $window.height() * 0.2) {
            $this.addClass('scroll');

            // if $this is the last element, remove the scroll event
            // we don't need that anymore
            if ($this.is($last)) {
              $window.off('scroll.addclasscustomdefault');
            }
          }
        });
      });
    });
  }
});
}(jQuery);
/* themeColor */
+function($) {
var param = {
}

$('head').append('<meta name="theme-color" content="#43b9b0">');
}(jQuery);
/* trustpilot */
+function($) {
var param = {
}

$("head").append("<script type='text/javascript' src='//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js' async></script>")
}(jQuery);
