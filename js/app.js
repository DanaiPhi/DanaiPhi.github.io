$(".backtotop").click(function () {
    $("body, html").animate({
        scrollTop: 0
    }, 800);
    return false;
});

// Scroll Up to Show

var lastScrollTop = 0;

$(window).scroll(function () {
    if ($(this).scrollTop() > 480) {
        $('.back2top-box').fadeIn('fast');
    } else {
        $('.back2top-box').fadeOut('fast');
    }
});

$(window).scroll(function () {
    var st = $(this).scrollTop();

    if (st > lastScrollTop) {
        console.log('down');

        if ($('.back2top-box').data('display') === 'show') {
            $('.back2top-box').data('display', 'hide');
            $('.back2top-box').stop().animate({
                bottom: '-100%'
            }, 250);
        }
    } else {

        if ($('.back2top-box').data('display') === 'hide') {
            console.log('up');
            $('.back2top-box').data('display', 'show');
            $('.back2top-box').stop().animate({
                bottom: '15px'
            }, 250);
        }
    }

    lastScrollTop = st;
});

$(document).ready(function () {
    if ($(window).width() <= 1024) {
        $(".back2top-box").removeClass("back2top-box--with-sticky"); 
    }

    $(window).resize(function () {
        if ($(window).width() <= 1024) {
            $(".back2top-box").removeClass("back2top-box--with-sticky");
        }
    });
});
var linkGo = function(item) {
    $(item).on('click', function() {
      var _$this = $(this);
      var _urlBlank = _$this.attr("data-link");
      var _urlTemp = _$this.attr("data-url");

      if (_urlBlank === "_blank") {
        window.open(_urlTemp, '_blank');
      }
      
      else {
        location.href = _urlTemp;
      }
    });
  };

  linkGo(".link_item[data-link]");
window.onload = function() {
  
    var imgHolder = document.querySelector('.imgholder'),
        small = imgHolder.querySelector('.img-small')
  
    // Load small image and show it

    var img = new Image();
        img.src = small.src;
        img.onload = function () {
            small.classList.add('loaded');
        };
  
    // Load large image

    var imgLarge = new Image();
        imgLarge.src = imgHolder.dataset.imglarge; 
        imgLarge.onload = function () {
            imgLarge.classList.add('loaded');
        };
        
        imgHolder.appendChild(imgLarge);
}
$('.scrollto[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 5
        }, 1000);
    }
});
$(window).bind('load', function() {
	$('.topbar__member').removeClass('topbar__member--hidden');
	$('.tag-box').removeClass('tag-box--hidden');
});

$(document).ready(function () {
	(function ($) {
		$('#topbar-nav-btn').click(function (e) {
			e.preventDefault();
			$('body').toggleClass('wt--sidebar');
		});

		$('#topbar-search-btn').click(function (e) {
			e.preventDefault();
			$('body').toggleClass('wt--search');
		});

		$('#overlay-bg').click(function (e) {
			$('body').removeClass('wt--sidebar');
			$('body').removeClass('wt--search');
		});

	})(jQuery);

	// Move Element

	if ($(window).width() >= 1200) {
		$("#tag-box").prependTo("#hot-tag-desktop"); // Hot Tag
		$("#member-box").insertAfter("#topbar-sidemenu"); // Member
		$("#topbar-social").insertAfter("#topbar-search"); // Social
	}

	else {
		$("#tag-box").prependTo("#hot-tag-mobile"); // Hot Tag
		$("#member-box").insertBefore("#topbar-menu"); // Member
		$("#topbar-social").insertAfter("#topbar-menu"); // Social
	}

	$(window).resize(function () {
		if ($(window).width() >= 1200) {
			$("#tag-box").prependTo("#hot-tag-desktop"); // Hot Tag
			$("#member-box").insertAfter("#topbar-sidemenu"); // Member
			$("#topbar-social").insertAfter("#topbar-search"); // Social
		}
	
		else {
			$("#tag-box").prependTo("#hot-tag-mobile"); // Hot Tag
			$("#member-box").insertBefore("#topbar-menu"); // Member
			$("#topbar-social").insertAfter("#topbar-menu"); // Social
		}
	});
});