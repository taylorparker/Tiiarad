$(document).ready(function () {
  // initally hide your drop down menus
  // this is a good fallback, because if
  // jQuery doesn't load, they should be
  // open by default.
  $('.parent').children('ul').hide();
  $('#mobile-nav').children('ul').hide();
  // append plus symbol to every list item that has children
    $('#mobile-nav .parent').append('<span class="open-menu fa fa-angle-down"></span>');
    // fix non-scrolling overflow issue on mobile devices
    $('#mobile-nav > ul').wrap('<div class="overflow"></div>');
    $(window).on('load resize', function () {
        var vph = $(window).height(); // 57px - height of #mobile-nav
        $('.overflow').css('max-height', vph);
    });

    // global variables
    var menu = $('.overflow > ul');
    var bg = $('html, body');

    // toggle background scrolling
    function bgScrolling() {
        // if menu has toggled class... *
        if (menu.hasClass('open')) {
            // * disable background scrolling
            bg.css({
                'overflow-y': 'hidden',
                'height': 'auto'
            });
        // if menu does not have toggled class... *
        } else {
            // * enable background scrolling
            bg.css({
                'overflow-y': 'visible',
                'height': '100%'
            });
        }
    }
    // menu button click events
    $('.menu-button').on('click', function (e) {
        e.preventDefault();
        // activate toggles
        menu.slideToggle(250);
        menu.toggleClass('open');
        bgScrolling();
    });
  $('.parent').on('click', function(e){
      e.preventDefault();
      // added e.stopPropagation(); to prevent
      // child triggering parents event
      e.stopPropagation();
      $(this).children('ul').slideToggle(250);
  });
  $('.parent a').on('click', function(e) {
      e.preventDefault();
      // added e.stopPropagation(); to prevent
      // child triggering parents event
      e.stopPropagation();
      window.location = $(this).attr('href');
  });
});
