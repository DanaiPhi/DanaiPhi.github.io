var minutes = 240;
var cookie_name = 'preload_web_welcome';
var width = $(window).width();

function preload_welcome() {
    $('.preload-ad__content').append('<!-- /268136036/ad-sticky -->' +
    '<div id=\'ad-sticky\'></div>' +
    '</div></div>');

    setTimeout(function() {
        $('.preload-ad').fadeIn(300);
    },700);

    setTimeout(function(){
        $('#preload-ad_close').trigger('click');
    }, 16000);
}

function swapAds(width) {
    var currentAds = checkCurrentAds();
    var data_html = currentAds.html();

    if (width <= 1279) { // mobile
        if (currentAds.attr('id') === 'ad-content-aside') {
            $('.carousel').carousel('dispose');
            $('.ad-box--majorboard').remove();
            $('#ad-content-read').html(data_html);
            $('.carousel').carousel();
        }
    } else { // desktop
        if (currentAds.attr('id') === 'ad-content-read') {
            $('.ad-box--majorboard').remove();
            $('#ad-content-aside').html(data_html);
        }
    }
}

function checkCurrentAds() {
    if ($('#ad-content-aside').find('.ad-box--majorboard').length) { // desktop
        return $('#ad-content-aside');
    } else { // mobile
        return $('#ad-content-read');
    }
}

// Replace position Ad content view
swapAds(width);

$(document).ready(function() {
    // Preload Ad
    var  _ck = document.cookie.indexOf(cookie_name);
    if (_ck < 0) {
        expiry = new Date();
        expiry.setTime(expiry.getTime() + (minutes * 60 * 1000));
        document.cookie = cookie_name+"=1; path=/; expires=" + expiry.toUTCString();
        preload_welcome();

        $('.preload-ad')
            .on('click', '#preload-ad_close', function (e) {
                e.preventDefault();
                $('.preload-ad').fadeOut(300);
            })
            .on('click', function(e) {
                if (! $(e.target).closest(".preload-ad__content").length) {
                    $('.preload-ad').fadeOut(300);
                }
            });
    }



    // Sticky Ad
    if (typeof sticky_ads_open != 'undefined' && width > 1024) {
        $.get(SITE_URL + 'ads/sticky/check_session').done(function(res) {
            if (res == 'OK') {
                $('.back2top-box').addClass('back2top-box--with-sticky');
                $('#ads_sticky_show').html(
                    '<div class="sticky-ad__content">' +
                    '<button id="closeStickyAds" class="close-ad" type="button">x</button>' +
                    '<!-- /268136036/os-sticky -->' +
                    '<div id=\'ad-sticky\'></div>' +
                    '</div>');
                googletag.cmd.push(function() {
                    googletag.display('ad-sticky');

                    setTimeout(function() {
                        $('#closeStickyAds').fadeIn(300);
                    },10000);

                    $('#closeStickyAds').on('click', function(e) {
                        e.preventDefault();
                        $.get(SITE_URL + 'ads/sticky/close_ads').done(function(res) {
                            if (res == 'OK') {
                                $('#ads_sticky_show').fadeOut(300, function() {
                                    $(this).remove();
                                });
                                $('.back2top-box').removeClass('back2top-box--with-sticky');
                            }
                        });
                    });
                });
            }
        });
    }
});
