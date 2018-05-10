var gptadslots = [];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function () {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();

var gptAdSlots = [];

googletag.cmd.push(function () {
    
    var PreloadAd = googletag.sizeMapping().
        addSize([1280, 200], [1300, 650]).
        addSize([768, 200], [720, 360]).
        addSize([0, 0], [300, 450]).
        build();

    var BigBannerLarge = googletag.sizeMapping().
        addSize([1280, 200], [970, 250]).
        addSize([768, 200], [728, 250]).
        addSize([0, 0], [320, 200]).
        build();

    var BigBannerSmall = googletag.sizeMapping().
        addSize([1280, 200], [970, 90]).
        addSize([768, 200], [728, 90]).
        addSize([0, 0], [320, 100]).
        build();

    var MajorboardAd = googletag.sizeMapping().
        addSize([768, 200], [300, 600]).
        addSize([0, 0], [320, 100]).
        build();
    
    var StickyAd = googletag.sizeMapping().
        addSize([1280, 200], [140, 290]).
        addSize([0, 0], [0, 0]).
        build();

    gptAdSlots[0] = googletag.defineSlot('/268136036/background-native', ['fluid'], 'ad-native-background').
        addService(googletag.pubads());

    gptAdSlots[1] = googletag.defineSlot('/268136036/all-site-preload', [[1300, 650], [720, 360], [300, 450]], 'ad-preload').
        defineSizeMapping(PreloadAd).
        addService(googletag.pubads());
    
    gptAdSlots[2] = googletag.defineSlot('/268136036/all-site-big-banner-01-large', [[970, 250], [728, 250], [320, 200]], 'ad-big-banner-01-large').
        defineSizeMapping(BigBannerLarge).
        addService(googletag.pubads());

    gptAdSlots[3] = googletag.defineSlot('/268136036/all-site-big-banner-01-small', [[970, 90], [728, 90], [320, 100]], 'ad-big-banner-01-small').
        defineSizeMapping(BigBannerSmall).
        addService(googletag.pubads());

    gptAdSlots[4] = googletag.defineSlot('/268136036/all-site-big-banner-02-large', [[970, 250], [728, 250], [320, 200]], 'ad-big-banner-02-large').
        defineSizeMapping(BigBannerLarge).
        addService(googletag.pubads());

    gptAdSlots[5] = googletag.defineSlot('/268136036/all-site-big-banner-02-small', [[970, 90], [728, 90], [320, 100]], 'ad-big-banner-02-small').
        defineSizeMapping(BigBannerSmall).
        addService(googletag.pubads());

    gptAdSlots[6] = googletag.defineSlot('/268136036/all-site-big-banner-03-large', [[970, 250], [728, 250], [320, 200]], 'ad-big-banner-03-large').
        defineSizeMapping(BigBannerLarge).
        addService(googletag.pubads());

    gptAdSlots[7] = googletag.defineSlot('/268136036/all-site-big-banner-03-small', [[970, 90], [728, 90], [320, 100]], 'ad-big-banner-03-small').
        defineSizeMapping(BigBannerSmall).
        addService(googletag.pubads());

    gptAdSlots[8] = googletag.defineSlot('/268136036/all-site-big-banner-04-large', [[970, 250], [728, 250], [320, 200]], 'ad-big-banner-04-large').
        defineSizeMapping(BigBannerLarge).
        addService(googletag.pubads());

    gptAdSlots[9] = googletag.defineSlot('/268136036/all-site-big-banner-04-small', [[970, 90], [728, 90], [320, 100]], 'ad-big-banner-04-small').
        defineSizeMapping(BigBannerSmall).
        addService(googletag.pubads());

    gptAdSlots[10] = googletag.defineSlot('/268136036/all-site-big-banner-05-large', [[970, 250], [728, 250], [320, 200]], 'ad-big-banner-05-large').
        defineSizeMapping(BigBannerLarge).
        addService(googletag.pubads());

    gptAdSlots[11] = googletag.defineSlot('/268136036/all-site-big-banner-05-small', [[970, 90], [728, 90], [320, 100]], 'ad-big-banner-05-small').
        defineSizeMapping(BigBannerSmall).
        addService(googletag.pubads());

    gptAdSlots[12] = googletag.defineSlot('/268136036/all-majorboard-01', [[300, 600], [320, 100]], 'ad-majorboard-01').
        defineSizeMapping(MajorboardAd).
        addService(googletag.pubads());

    gptAdSlots[13] = googletag.defineSlot('/268136036/all-majorboard-02', [[300, 600], [320, 100]], 'ad-majorboard-02').
        defineSizeMapping(MajorboardAd).
        addService(googletag.pubads());

    gptAdSlots[14] = googletag.defineSlot('/268136036/all-majorboard-03', [[300, 600], [320, 100]], 'ad-majorboard-03').
        defineSizeMapping(MajorboardAd).
        addService(googletag.pubads());

    gptAdSlots[15] = googletag.defineSlot('/268136036/all-majorboard-04', [[300, 600], [320, 100]], 'ad-majorboard-04').
        defineSizeMapping(MajorboardAd).
        addService(googletag.pubads());

    gptAdSlots[16] = googletag.defineSlot('/268136036/all-majorboard-05', [[300, 600], [320, 100]], 'ad-majorboard-05').
        defineSizeMapping(MajorboardAd).
        addService(googletag.pubads());

    gptAdSlots[17] = googletag.defineSlot('/268136036/pc-highlight-01', [25, 25], 'ad-highlight-pc').
        addService(googletag.pubads());

    gptAdSlots[18] = googletag.defineSlot('/268136036/os-sticky', [140, 290], 'ad-sticky').
        defineSizeMapping(StickyAd).
        addService(googletag.pubads());

    googletag.enableServices();
});